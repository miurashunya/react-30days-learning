# Day 28: Context と useReducer による状態管理へのリファクタ

## 📚 学習目標 (1〜2時間)

- useReducer と Context を組み合わせた状態管理の設計
- グローバルに近い状態（todos, auth, theme 等）を安全に共有する
- reducer のテスト可能性と純関数設計の重要性
- 小〜中規模アプリでの実践的なリファクタ手順

## 理論（短く）

- useReducer は複雑な更新ロジックを一箇所にまとめ、テストしやすくする。  
- Context はツリー全体に state と dispatch を渡すのに使うが、値の分割と memoize が重要（不要な再レンダーを防ぐため）。

## 実装手順（推奨の段階的リファクタ）

1. 現状の `useTodos` をそのまま残しつつ、`todosReducer` を作成する（ロジックを reducer 化）。  
2. `TodosContext` と `TodosProvider` を作り、内部で useReducer を使って state と dispatch を提供する。  
3. 既存コンポーネントを徐々に `useTodos` → `useContext(TodosContext)` に切り替えるか、Provider のカスタム Hook `useTodosContext()` を作る。  
4. Provider の value は `useMemo(() => ({ state, dispatch }), [state, dispatch])` のように安定化する。  
5. テスト：reducer を単体でユニットテストし、期待通り state が返ることを確認する。

## コード例（実践）

### todosReducer（src/state/todosReducer.js）
```javascript
export function todosReducer(state, action) {
  switch (action.type) {
    case "add":
      return [{ ...action.payload, id: action.payload.id ?? Date.now().toString(), createdAt: Date.now() }, ...state];
    case "toggle":
      return state.map(t => t.id === action.payload.id ? { ...t, done: !t.done } : t);
    case "edit":
      return state.map(t => t.id === action.payload.id ? { ...t, ...action.payload } : t);
    case "remove":
      return state.filter(t => t.id !== action.payload.id);
    case "set":
      return action.payload;
    default:
      return state;
  }
}
```

### TodosContext/Provider（src/context/TodosContext.jsx）
```javascript
import React, { createContext, useReducer, useMemo } from "react";
import { todosReducer } from "../state/todosReducer";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TodosContext = createContext(null);

export function TodosProvider({ children }) {
  const [persisted, setPersisted] = useLocalStorage("taskflow:todos", []);
  const [state, dispatch] = useReducer(todosReducer, persisted);

  // sync to localStorage when state changes
  React.useEffect(() => {
    setPersisted(state);
  }, [state, setPersisted]);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>;
}
```

### カスタム Hook（src/context/useTodosContext.js）
```javascript
import { useContext } from "react";
import { TodosContext } from "./TodosContext";
export function useTodosContext() {
  const ctx = useContext(TodosContext);
  if (!ctx) throw new Error("useTodosContext must be used within TodosProvider");
  return ctx;
}
```

### コンポーネント例（Home.jsx の一部）
```javascript
const { state: todos, dispatch } = useTodosContext();
dispatch({ type: "add", payload: { text: "新しいタスク" } });
```

## テスト（短く）
- `todosReducer` をユニットテストして add/toggle/edit/remove/set の振る舞いを確認する（pure function）。

## 演習

1. `useTodos` を `TodosProvider` + `useTodosContext` に置き換えて Home をリファクタリングする。  
2. reducer のユニットテストを作成する。  
3. Provider を分割（todos/auth/theme）して不要再レンダーを測定・改善する。

## 次へ

Day29: テストとアクセシビリティチェック（週の統合テスト・E2E の案内）を作成します。
