# Day 20: useReducer と状態管理パターン

## 📚 学習目標 (1〜2時間)

- useReducer の用途と基本的な使い方
- 複雑な state 更新ロジックの分離
- Redux / Zustand 等との比較（設計判断）
- テスト可能で予測しやすい更新パターン

## 📖 理論解説

### useReducer の基本
- useReducer は複雑な state 更新や複数フィールドの更新を扱うのに有効。
- reducer は現在の state と action を受け取り、新しい state を返す純関数であるべき。

```javascript
// javascript
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "inc": return { ...state, count: state.count + 1 };
    case "dec": return { ...state, count: state.count - 1 };
    default: return state;
  }
}
const [state, dispatch] = useReducer(reducer, initialState);
```

### useReducer を使う理由
- 複雑な state 更新（複数フィールドや条件分岐）がある場合、setState より可読性が高い。
- ロジックを reducer に切り出すことでテストが容易になる。
- Context と組み合わせるとアプリ全体の状態管理がシンプルにできる。

### アクション設計
- アクションはタイプと必要なペイロードを持つ。命名は明確に（例: "todos/add", "todos/toggle"）。
- 複雑な処理（非同期）は reducer 内で行わず、エフェクト側で行い結果を dispatch する。

### useReducer と外部状態管理ライブラリ
- 小〜中規模: useReducer + Context で十分なことが多い
- 大規模: Redux/Zustand/Recoils などを検討（用途やチームの慣習に依存）

## 💻 コード例 (20-30分)

### 例1: Todo の簡単な reducer
```javascript
function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: action.id, text: action.text, done: false }];
    case "toggle":
      return state.map(t => t.id === action.id ? { ...t, done: !t.done } : t);
    case "remove":
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
}
const [todos, dispatch] = useReducer(todoReducer, []);
```

### 例2: 非同期処理のパターン
- 非同期処理は effect 内で実行し、完了後に dispatch で結果を反映する。

```javascript
useEffect(() => {
  let cancelled = false;
  async function load() {
    const data = await fetch("/api/items").then(r => r.json());
    if (!cancelled) dispatch({ type: "set", payload: data });
  }
  load();
  return () => { cancelled = true; };
}, []);
```

## ✏️ 演習問題 (30-45分)

1. useReducer を使ってシンプルな Todo アプリを実装する。  
2. reducer のユニットテストを作り、各アクションが期待通り state を返すことを確認する。  
3. useReducer + Context で「認証ステート」をアプリ全体で共有する簡易実装を作る。

## 📝 今日のまとめ

- useReducer は「状態遷移が明確に定義できる」場面で有効  
- 非同期処理は reducer の外で行い、結果は dispatch で反映する  
- reducer は純関数に保ちテストしやすくする

## 🔜 次回予告

**Day 21: テストとデバッグ** — コンポーネント・フックのテスト、レンダリング問題の診断

[← Day 19](day19.md) | [README に戻る](../README.md)
