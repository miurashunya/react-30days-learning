# Day 27: カスタム Hooks - useLocalStorage と useTodos

## 📚 学習目標 (1〜2時間)

- カスタム Hook を設計・実装してロジックを抽出する  
- `useLocalStorage` でローカル永続化を共通化する  
- `useTodos` で Todo ロジック（追加・編集・削除・toggle・フィルタ）をまとめる

## 理論（短く）

- カスタム Hook は UI とロジックを切り離し、再利用性とテスト容易性を高める。  
- 副作用（localStorage 同期、タイマー等）は Hook 内で扱い、コンポーネント側は副作用を意識しない。

## 実装例

### useLocalStorage
```javascript
// src/hooks/useLocalStorage.js
import { useState, useEffect } from "react";

export function useLocalStorage(key, initial) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {}
  }, [key, state]);

  return [state, setState];
}
```

### useTodos
```javascript
// src/hooks/useTodos.js
import { useCallback, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useTodos(storageKey = "taskflow:todos") {
  const [todos, setTodos] = useLocalStorage(storageKey, []);

  const add = useCallback(task => {
    setTodos(prev => [{ ...task, id: task.id ?? Date.now().toString(), createdAt: Date.now() }, ...prev]);
  }, [setTodos]);

  const remove = useCallback(id => setTodos(prev => prev.filter(t => t.id !== id)), [setTodos]);

  const toggle = useCallback(id => setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t)), [setTodos]);

  const edit = useCallback(updated => setTodos(prev => prev.map(t => t.id === updated.id ? { ...t, ...updated } : t)), [setTodos]);

  const count = useMemo(() => todos.length, [todos]);
  const activeCount = useMemo(() => todos.filter(t => !t.done).length, [todos]);

  return { todos, add, remove, toggle, edit, count, activeCount, setTodos };
}
```

## 演習

1. `useLocalStorage` のユニットテストを書き、初期化・保存の挙動を確認する。  
2. `useTodos` を使って Home コンポーネントをリファクタリングする（既存の state/効果を置き換える）。  
3. `useTodos` に簡易の undo 機能（最後の削除を復元）を追加する。

## 次へ

Day28: Context / useReducer による状態管理へリファクタを作成します（続けて進めますか？）
