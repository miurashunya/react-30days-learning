# Day 13: 条件付きレンダリング - 表示制御と効率的なレンダリング

## 📚 学習目標 (1〜2時間)

- 条件付きレンダリングの基本パターン（if, &&, ternary）
- コンポーネントの表示/非表示設計（早期リターン vs 要素の切替）
- レンダリングのコストと最適化の基本
- Flutter との対比

## 📖 理論解説

### 条件付きレンダリングの基本
```javascrip
// 三項演算子
{isLoggedIn ? <Welcome /> : <Login />}

// && を使った表示
{items.length === 0 && <EmptyState />}

// 早期リターン（コンポーネント内）
function Panel({ isOpen }) {
  if (!isOpen) return null;
  return <div>中身</div>;
}
```

### 要素の切替 vs マウント/アンマウント
- 表示切替のみ（CSS で非表示）と完全にアンマウントする場合の違いを理解する。
- アンマウントすると子の state は破棄され、再マウントで再初期化される。

### レンダリングコストと最適化
- 大量の要素を描画する場合は virtualization（react-window 等）を検討。
- 不要な再レンダーを防ぐために memo / useMemo / useCallback を適切に使う。

### Flutter との比較
- Flutter でも Widget の表示/非表示で同様の概念（Visibility, conditional widget）。
- React の早期リターンは Flutter の build 内での条件分岐に相当。

## 💻 コード例 (20-30分)

### 例1: ログイン状態に応じた表示
```javascrip
function App({ user }) {
  return (
    <div>
      {user ? <Dashboard user={user} /> : <SignInForm />}
    </div>
  );
}
```

### 例2: 複雑な条件分岐は関数に切り出す
```javascrip
function renderContent(status) {
  switch(status) {
    case "loading": return <Spinner />;
    case "error": return <ErrorView />;
    default: return <List />;
  }
}
```

### 例3: virtualization の注意点（概念）
- react-window で数千行のリストを効率的に表示する。

## ✏️ 演習問題 (30-45分)

1. トグルボタンで表示/非表示を切り替えるコンポーネントを作る（state を使用）。
2. ローディング・エラー・空配列の 3 状態を扱うコンポーネントを作る（早期リターン or switch を利用）。
3. 要素を CSS で非表示にした場合と `null` を返す場合の挙動差を観察してメモする。

## 🎯 ミニチャレンジ

- 大量のダミーデータ（1000アイテム）を作り、表示切替でのパフォーマンスを計測。react-window を導入して差を確認する。

## 📝 今日のまとめ

- 条件付きレンダリングは三項演算子、&&、早期リターンで実装できる。
- 描画コストを意識し、大量データは virtualization を検討する。
- 表示/非表示の設計は UX に影響する（アンマウントで state がリセットされる点に注意）。

## 🔜 次回予告

**Day 14: リスト表示の詳細** — map、key の重要性、パフォーマンス最適化

[← Day 12](day12.md) | [README に戻る](../README.md)
