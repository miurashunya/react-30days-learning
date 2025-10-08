// Auto-fix Markdown spacing rules (MD012, MD022, MD031, MD032) heuristically.
// Run: node fix-md-auto.js
const fs = require('fs');
const path = require('path');

function fixContent(raw) {
  let s = raw.replace(/\\r\\n/g, '\\n');
  // Remove leading/trailing blank lines
  s = s.replace(/^\\s+/, '');
  s = s.replace(/\\s+$/, '\\n');

  // Ensure opening fences have a language (default to javascript) if empty
  s = s.replace(/(^```)(\\n)/gm, '```javascript\\n');

  // Ensure blank line before headings (except file start)
  s = s.replace(/([^\\n])\\n(#{1,6}[^\\n]+)/g, '$1\\n\\n$2');

  // Ensure blank line after headings
  s = s.replace(/(#{1,6}[^\\n]*\\n)(?!\\n)/g, '$1\\n');

  // Ensure blank lines around fenced code blocks (opening and closing)
  s = s.replace(/\\n```/g, '\\n\\n```');
  s = s.replace(/```\\n(?!\\n)/g, '```\\n\\n');

  // Ensure blank line before lists (dash, star, or numbered)
  s = s.replace(/([^\\n])\\n(\\s*[-*+]\\s+[^\\n]+)/g, '$1\\n\\n$2');
  s = s.replace(/([^\\n])\\n(\\s*\\d+\\.\\s+[^\\n]+)/g, '$1\\n\\n$2');

  // Ensure blank line after lists: if a list item is followed by non-list, non-blank, add blank
  s = s.replace(/(\\n\\s*[-*+]\\s+[^\\n]+)(\\n(?!\\s*[-*+\\d`\\n]))/g, '$1\\n\\n$2');
  s = s.replace(/(\\n\\s*\\d+\\.\\s+[^\\n]+)(\\n(?!\\s*[-*+\\d`\\n]))/g, '$1\\n\\n$2');

  // Ensure blank line before fenced code if previous line is not blank
  s = s.replace(/([^\\n])\\n(```[\\s\\S]*?```)/g, '$1\\n\\n$2');

  // Collapse 3+ consecutive newlines to exactly 2 (one blank line)
  s = s.replace(/\\n{3,}/g, '\\n\\n');

  // Ensure code fence closing has newline after (already handled) and no trailing extra blanks
  // Trim trailing spaces at line ends
  s = s.replace(/[ \\t]+$/gm, '');

  return s;
}

function findMarkdownFiles(dir) {
  const out = [];
  const entries = fs.readdirSync(dir);
  for (const e of entries) {
    if (e.startsWith('.')) continue;
    const full = path.join(dir, e);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      out.push(...findMarkdownFiles(full));
    } else if (e.endsWith('.md')) {
      out.push(full);
    }
  }
  return out;
}

const files = findMarkdownFiles('.');
let fixed = 0;
for (const f of files) {
  try {
    const raw = fs.readFileSync(f, 'utf8');
    const updated = fixContent(raw);
    if (updated !== raw) {
      fs.writeFileSync(f, updated, 'utf8');
      console.log('Fixed:', f);
      fixed++;
    } else {
      console.log('No change:', f);
    }
  } catch (err) {
    console.error('Error processing', f, err.message);
  }
}
console.log(`Done. Fixed ${fixed}/${files.length} files.`);
