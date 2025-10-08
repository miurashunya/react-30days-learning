# Day 19: コンテキストと状態共有 - Context API と設計

## 📚 学習目標 (1〜2時間)

- Context API の役割と使い方
- useContext による値の取得方法
- Context を使うべき場面と避けるべき場面（prop drilling の回避）
- パフォーマンス配慮（分割、memo、セレクタパターン）

## 📖 理論解説

### Context の基本
- Context はツリー深くに渡す必要があるデータ（テーマ、認証情報、ロケールなど）を共有する仕組み。
- Provider を上位に置き、下位で useContext を使って値を取り出す。

```javascript
// javascript
const MyContext = React.createContext(defaultValue);

function App() {
  return (
    <MyContext.Provider value={{ user: { name: "太郎" } }}>
      <Child />
    </MyContext.Provider>
  );
}
```

### useContext の使い方
- useContext は必ずコンポーネントのトップレベルで呼ぶ（Hook ルール）。
- コンテキストの値が変わると、それを参照する全てのコンポーネントが再レンダーされる点に注意。

```javascript
// javascript
function Child() {
  const ctx = useContext(MyContext);
  return <div>{ctx.user.name}</div>;
}
```

### 使うべき場面と代替手段
- 使うべき: グローバルに近い設定、認証情報、テーマ、言語、UI 状態の一部
- 避けるべき: 細かく頻繁に変わる個別データ（大量の再レンダーを招く）
- 代替: prop drilling を短縮する程度なら prop のまま、複雑な状態は状態管理ライブラリへ

### パフォーマンスの工夫
- Context 値を細かく分割する（テーマ用、ユーザ用など）ことで不要再レンダーを減らす
- 値を memoize してプロバイダの value が毎回新しいオブジェクトにならないようにする

```javascript
// javascript
function Provider({ children, user }) {
  const value = useMemo(() => ({ user }), [user]);
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
```

### セレクタ / 分離パターン
- 大きなコンテキストを直接参照する代わりに、必要な部分だけ渡す関数やカスタム Hook を作ると効率化できる。

## 💻 コード例 (20-30分)

### 例1: テーマ Context
```javascript
// javascript
const ThemeContext = React.createContext("light");

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>ボタン</button>;
}
```

### 例2: 認証情報を扱うカスタム Hook
```javascript
// javascript
function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
}
```

## ✏️ 演習問題 (30-45分)

1. UserContext を作り、子コンポーネントでユーザー名を表示する。  
2. ThemeContext と UserContext を分けて実装し、片方の更新で他方が再レンダーしないことを確認する。  
3. 認証情報を含むカスタム Hook `useAuth` を実装してエラー時の扱いを考える。

## 📝 今日のまとめ

- Context はツリー共有に便利だが濫用はパフォーマンス低下を招く  
- 値を分割・memoize して不要な再レンダーを防ぐことが重要  
- カスタム Hook やセレクタパターンで効率的に扱う

## 🔜 次回予告

**Day 20: useReducer と状態管理パターン** — 複雑な state を扱うための設計と実践

[← Day 18](day18.md) | [README に戻る](../README.md)
