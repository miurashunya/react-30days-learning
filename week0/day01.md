# Day 0-1: Web基礎 — HTML / CSS / JavaScript と DOM

## 📚 学習目標 (10-15分)

- HTML / CSS / JavaScript の役割を理解する
- DOM の概念と基本的な操作（要素取得・変更・イベント登録）を体験する
- 手書きで「Hello World」ページを作成してブラウザで確認する

## HTML / CSS / JavaScript の役割

- HTML: ページの構造（要素・意味付け）を定義するマークアップ
- CSS: 見た目（レイアウト・色・タイポグラフィ）を定義するスタイル
- JavaScript: 動的な振る舞い（イベント・DOM 操作・非同期処理）を追加するスクリプト言語

簡潔に言うと、HTML が骨格、CSS が見た目、JavaScript が動きです。

## DOM（Document Object Model）

- HTML 文書をツリー構造のオブジェクトとして表現したもの
- JavaScript から document.querySelector / getElementById などで要素を取得し、textContent や classList、appendChild で操作する
- 例: ボタンを押してテキストを変更する、動的に要素を追加する

## 実習: 手書きで「Hello World」ページを作る

1. 新しいファイルを作成して以下を貼り付け、保存（例: week0/hello.html）。
2. ブラウザでファイルを開き、表示とボタンの挙動（クリックで挨拶が変わる）を確認する。

以下は最小の例（week0/hello.html に保存済み）:

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>Hello World</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <style>
      body {
        font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif;
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
        margin: 0;
        background: #f7f7fb;
      }
      .card {
        background: white;
        padding: 24px;
        border-radius: 8px;
        box-shadow: 0 6px 18px rgba(0,0,0,0.08);
        text-align: center;
      }
      button { margin-top: 12px; padding: 8px 12px; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1 id="greeting">Hello World</h1>
      <p>手書きで作ったシンプルなページです。</p>
      <button id="change">挨拶を変更</button>
    </div>

    <script>
      // DOM 操作の簡単な例
      const btn = document.getElementById('change');
      const greeting = document.getElementById('greeting');
      btn.addEventListener('click', () => {
        greeting.textContent = 'こんにちは、世界！';
      });
    </script>
  </body>
</html>
```

## 実習の確認項目

- [ ] ブラウザでファイルが正しく表示される
- [ ] ボタンをクリックするとテキストが変更される
- [ ] ブラウザ開発者ツールで Elements タブから DOM を観察できる
