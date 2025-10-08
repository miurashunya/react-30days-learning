# Day 24: タスク追加フォームとローカル永続化

## 📚 学習目標 (1〜2時間)

- 制御コンポーネントでタスク追加フォームを実装する  
- 入力検証（必須チェック）を行う  
- localStorage を使った簡易永続化を実装する  
- UI を更新して即時反映させる（親コンポーネントとの連携）

## 理論（短く）

- 制御コンポーネントでフォーム値を state で管理する。  
- submit 時に validation を行い、成功なら親にタスク追加のコールバックを呼ぶ。  
- localStorage は JSON 化して保存・復元する。初期化は lazy initialization で行うと効率的。

## 実装例（実践）

```javascript
// src/components/TodoForm.jsx
import { useState } from "react";

export function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  function submit(e) {
    e.preventDefault();
    const t = text.trim();
    if (!t) return; // 必須チェック
    onAdd({ id: Date.now().toString(), text: t, done: false });
    setText("");
  }

  return (
    <form onSubmit={submit}>
      <input
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="タスクを入力"
        aria-label="新しいタスク"
      />
      <button type="submit">追加</button>
    </form>
  );
}
```

```javascript
// src/pages/Home.jsx (localStorage を使った簡易実装)
import { useState, useEffect } from "react";
import { TodoList } from "../components/TodoList";
import { TodoForm } from "../components/TodoForm";

const STORAGE_KEY = "taskflow:todos";

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export default function Home() {
  const [items, setItems] = useState(() => loadInitial());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const add = (task) => setItems(prev => [task, ...prev]);
  const toggle = (id) => setItems(prev => prev.map(i => i.id === id ? { ...i, done: !i.done } : i));
  const remove = (id) => setItems(prev => prev.filter(i => i.id !== id));

  return (
    <div>
      <TodoForm onAdd={add} />
      <TodoList items={items} onToggle={toggle} onDelete={remove} />
    </div>
  );
}
```

## スタイル／アクセシビリティの注意

- フォーム要素には適切な aria-label / label を付与する。  
- ボタンは type を明示（type="submit" / type="button"）。  
- localStorage へのアクセスは try/catch で保護する（プライベートモードなど）。

## 演習

1. タスク追加時に重複チェック（同じテキストのタスクが既に存在する場合は警告）を追加する。  
2. 追加時に短いアニメーション（フェードイン）を入れて UX を向上させる。  
3. localStorage を使用せずに簡易バックエンド（fetch のモック）で永続化を切り替える仕組みを作る。

## 次へ

Day25: タスク編集・削除・完了トグル を作成しますか？（はいで続けます）
