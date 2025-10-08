# Day 9: コンポーネントの詳細 - 分割・再利用・ファイル構成

## 📚 学習目標 (1〜2時間)

- コンポーネント分割の考え方（単一責任）
- プレゼンテーション/コンテナパターン
- 再利用可能なコンポーネント設計
- ファイル・フォルダ構成の例

## 📖 理論解説

### 単一責任の原則
- 1つのコンポーネントは1つの責務に集中する。
- 小さな部品（Button, Input, ListItem）を組み合わせて画面を作る。

### プレゼンテーション / コンテナパターン
- プレゼンテーション（UI）コンポーネント: props を受け取り表示のみ行う。
- コンテナ（ロジック）コンポーネント: データ取得や state 管理を行い、プレゼンテーションに渡す。

### Props とデフォルト値 / PropTypes（概念）
- Props は読み取り専用。必要なら親が渡し直す。
- デフォルト値は ES6 のデフォルト引数で代替可能。
- PropTypes や TypeScript で型を明示すると安全性が上がる。

### 再利用性を高めるコツ
- プレゼンテーションとロジックを分離する
- 汎用性のある props 設計（制約は最小限）
- スタイルは外から渡す（className / style / children）

### ファイル構成例
```
src/
  components/
    ui/
      Button.jsx
      Input.jsx
    layout/
      Header.jsx
      Footer.jsx
  pages/
    Home.jsx
    TodoPage.jsx
  App.jsx
  main.jsx
```

## 💻 コード例 (20-30分)

### 例1: プレゼンテーションコンポーネント
```javascrip
// components/ui/Button.jsx
export default function Button({ children, onClick, className = "" }) {
  return <button className={className} onClick={onClick}>{children}</button>;
}
```

### 例2: コンテナコンポーネント
```javascrip
// containers/TodoContainer.jsx
import { useState, useEffect } from "react";
import TodoList from "../components/TodoList";

export default function TodoContainer() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("/api/todos").then(r => r.json()).then(setTodos);
  }, []);
  return <TodoList items={todos} />;
}
```

### 例3: children を使った柔軟な設計
```javascrip
function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}
```

## ✏️ 演習問題 (30-45分)

1. `Button` コンポーネントを作り、複数の場所で再利用する。
2. `TodoList`（表示のみ）と `TodoContainer`（データ取得）に分割して実装する。
3. `Card` コンポーネントを作り、任意の子要素を渡して表示する。

<details>
<summary>ヒント（演習2）</summary>

- TodoList は `items` と `onToggle` を props に受け取り純表示を行う。
- TodoContainer は fetch/状態管理を行い、TodoList に渡す。
</details>

## 🎯 ミニチャレンジ

- 小さな UI ライブラリ風に `ui/Button`, `ui/Badge`, `ui/Input` を作って Story 的に利用例を書いてみる。

## 📝 今日のまとめ

- コンポーネントは小さく、責務を1つに
- ロジックと表示の分離でテスト・再利用が容易になる
- children と props 設計で柔軟性を確保する

## 🔜 次回予告

**Day 10: Props 深堀り** — 型、構造、関数を props として渡すパターン

[← Day 8](day08.md) | [README に戻る](../README.md)
