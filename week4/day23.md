# Day 23: タスク一覧表示コンポーネント - 表示とスタイリング

## 📚 学習目標 (1〜2時間)

- タスク一覧を React で表示する基本
- コンポーネント分割（List / ListItem）と props 設計
- 最小限のスタイリング（CSS モジュール / クラス）
- ダミーデータを用いた表示確認

## 理論（短く）

- 1つの責務に絞ったプレゼンテーションコンポーネントを作成する。データ取得や状態は親が担当する。
- key にはユニークな id を使う。

## コード例（実践）

```javascript
// src/components/TodoList.jsx
export function TodoList({ items, onToggle }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => onToggle(item.id)}
            />
            <span className={item.done ? "done" : ""}>{item.text}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}
```

```javascript
// src/pages/Home.jsx (ダミーデータで確認)
import { useState } from "react";
import { TodoList } from "../components/TodoList";

export default function Home() {
  const [items, setItems] = useState([
    { id: "1", text: "買い物", done: false },
    { id: "2", text: "掃除", done: true },
  ]);
  const toggle = (id) =>
    setItems(prev => prev.map(i => i.id === id ? { ...i, done: !i.done } : i));

  return <TodoList items={items} onToggle={toggle} />;
}
```

## スタイル例（簡易）
```css
/* src/styles/todo.css */
.done { text-decoration: line-through; color: #888; }
ul { list-style: none; padding: 0; }
li { padding: 8px 0; border-bottom: 1px solid #eee; }
```

## 演習

1. TodoList を props で `onDelete` を受け取るよう拡張する。  
2. 長いテキストは省略して表示する（CSS で ellipsis）。  
3. ダミーデータを増やしてスクロール挙動を確認する。

## 次へ

Day24: タスク追加フォームとローカル永続化を作成します（続けて進めますか？）
