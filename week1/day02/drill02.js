
// for ループで1から30まで処理
for (let i = 1; i <= 30; i++) {
    // ここに条件を書く
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    if (output.length > 0) console.log(`${i}: ${output}`);
}