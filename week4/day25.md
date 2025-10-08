# Day 25: タスク編集・削除・完了トグル

## 📚 学習目標 (1〜2時間)

- タスクの編集 UI とロジックを実装する  
- タスクの削除処理を実装する（確認ダイアログを検討）  
- 完了トグルの振る舞いを安定させる（楽観 UI / 同期更新）  
- 親コンポーネントとの責務分離

## 理論（短く）

- 編集はフォームを再利用する（TodoForm を改良して編集モードを追加）。  
- 削除は UX に配慮して確認ダイアログを出すことを推奨。ブラウザ confirm で簡易実装可。  
- 完了トグルはローカル更新→永続化（localStorage / API）で二段階に分けて扱うと堅牢。

## 実装例（実践）

```javascript
// src/components/TodoItem.jsx
export function TodoItem({ item, onToggle, onDelete, onEdit }) {
  return (
    <div className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => onToggle(item.id)}
          aria-label={`完了: ${item.text}`}
        />
        <span className={item.done ? "done" : ""}>{item.text}</span>
      </label>
      <div className="actions">
        <button onClick={() => onEdit(item)}>編集</button>
        <button onClick={() => {
          if (confirm("本当に削除しますか？")) onDelete(item.id);
        }}>削除</button>
      </div>
    </div>
  );
}
```

```javascript
// src/components/TodoList.jsx (変更点)
import { TodoItem } from "./TodoItem";
export function TodoList({ items, onToggle, onDelete, onEdit }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <TodoItem item={item} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
        </li>
      ))}
    </ul>
  );
}
```

```javascript
// src/pages/Home.jsx (編集フロー例)
import { useState } from "react";
import { TodoList } from "../components/TodoList";
import { TodoForm } from "../components/TodoForm";

export default function Home() {
  const [items, setItems] = useState(() => loadInitial());
  const [editing, setEditing] = useState(null);

  const add = (task) => setItems(prev => [task, ...prev]);
  const toggle = (id) => setItems(prev => prev.map(i => i.id === id ? { ...i, done: !i.done } : i));
  const remove = (id) => setItems(prev => prev.filter(i => i.id !== id));
  const startEdit = (item) => setEditing(item);
  const applyEdit = (updated) => {
    setItems(prev => prev.map(i => i.id === updated.id ? updated : i));
    setEditing(null);
  };

  return (
    <div>
      <TodoForm onAdd={add} editing={editing} onApplyEdit={applyEdit} onCancel={() => setEditing(null)} />
      <TodoList items={items} onToggle={toggle} onDelete={remove} onEdit={startEdit} />
    </div>
  );
}
```

### TodoForm の編集対応（ヒント）
- props に `editing` を受け取り、編集中は入力に編集テキストを設定する。  
- `onApplyEdit(updatedTask)` を呼んで親で置換する。編集キャンセル時は `onCancel()` を呼ぶ。

## UX / アクセシビリティの注意

- 編集フォーカスは入力要素に移す（ref を利用）。  
- 削除確認はスクリーンリーダーでも分かるように適切なテキストを表示する（role="alert" 等検討）。

## 演習

1. 編集モードで Escape キーを押すと編集キャンセルする実装を追加する。  
2. 削除時に撤回（Undo）機能を短時間提供する（Snackbar とトグルで実装）。  
3. 完了トグルでの楽観更新と、仮に保存失敗した場合のロールバック処理を実装する。

## 次へ

Day26: フィルタ・検索・並べ替え を作成します（続けて進めますか？）
