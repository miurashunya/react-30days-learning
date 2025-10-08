# Day 8: React 入門 - JSX と最初のコンポーネント

## 📚 学習目標 (1〜2時間)

- JSX の基本と注意点
- 関数コンポーネントの作成方法
- React アプリの最小構成（index.html / main.jsx / App.jsx）
- Flutter との比較ポイント

## 📖 理論解説

### JSX とは
JSX は JavaScript 内で HTML 風の構文を使う拡張構文です。ブラウザで動く前にトランスパイルされます。

```javascrip
// JSX の例
const element = <h1>Hello, JSX!</h1>;
```

- JSX 内では class -> className、for -> htmlFor を使う
- JSX は式を埋め込める：`{expression}`

### 関数コンポーネント
React では主に関数コンポーネントを使います。副作用や state は Hooks で扱います。

```javascrip
// src/App.jsx
export default function App() {
  return <div>Hello React</div>;
}
```

### 最小構成（Vite で生成される構成）
- index.html: ルート DOM を定義
- src/main.jsx: React をマウント
- src/App.jsx: ルートコンポーネント

```javascrip
// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);
```

### Flutter との比較
- React のコンポーネント = Flutter の Widge
- JSX は Flutter の Widget ツリーをコード的に書くイメージ
- State は useState、ライフサイクルは useEffect で扱う

## 💻 コード例 (実践 20-30 分)

### 例1: 最小の React アプリ
```javascrip
// index.html に <div id="root"></div> を用意
// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);

// src/App.jsx
export default function App() {
  return <h1>Welcome to React</h1>;
}
```

### 例2: Props の受け渡し（簡単な紹介）
```javascrip
function Hello({ name }) {
  return <p>こんにちは、{name}さん</p>;
}

export default function App() {
  return <Hello name="太郎" />;
}
```

## ✏️ 演習問題 (30-45 分)

1. Vite で React プロジェクトを作成して、上記の最小構成で動かす。
2. `Hello` コンポーネントを作って、複数の名前を props で渡して表示する。
3. JSX 内で JavaScript 式（配列 map を使ったリスト表示）を試す。

<details>
<summary>ヒント（演習3）</summary>

```javascrip
const items = ["りんご", "バナナ", "オレンジ"];
return (
  <ul>
    {items.map((it, i) => <li key={i}>{it}</li>)}
  </ul>
);
```
</details>

## 🎯 ミニチャレンジ

- Flutter の簡単な Widget（Text や Column）を React で表現して比較メモを書く。

## 📝 今日のまとめ

- JSX の基本と注意点（className 等）
- 関数コンポーネントの作り方
- 最小の React アプリを立ち上げる手順

## 🔜 次回予告

**Day 9: コンポーネントの詳細** — コンポーネント分割、再利用、ファイル構成

[← Week1 に戻る](../week1/day07.md) | [README に戻る](../README.md)
