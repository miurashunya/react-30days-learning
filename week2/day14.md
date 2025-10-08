# Day 14: リスト表示の詳細 - map と key、レンダリング最適化

## 📚 学習目標 (1〜2時間)

- 配列を React で表示する基本（map）
- key の重要性と付け方
- パフォーマンス最適化（memo, virtualization）
- Flutter との比較

## 📖 理論解説

### map でのリストレンダリング
```javascrip
const items = ["りんご", "バナナ", "オレンジ"];
return (
  <ul>
    {items.map((it, i) => <li key={i}>{it}</li>)}
  </ul>
);
```

### key の重要性
- key は React が各要素を識別するための識別子（再レンダー/差分計算に必須）。
- インデックスを key に使うと要素の順序が変わる操作でバグの原因になる。可能ならユニークID を使う。
- key は要素のアイデンティティに基づく値を使う（例: database id）。

### 再レンダーの最小化
- 子コンポーネントを React.memo でラップしてプロップが変化しない限り再レンダーを防ぐ。
- 大きな計算結果は useMemo でメモ化する。
- 親が新しいオブジェクト/配列を毎回渡すと子が再レンダーするので注意（useCallback / useMemo で安定化）。

### 大量リストの対処
- virtualization（react-window, react-virtualized）で画面に見えている分だけレンダリングする。
- それでも key は正しく設定する。

### Flutter との比較
- Flutter では ListView.builder やキー（Key）を使い、同様の最適化を行う。概念は近い。

## 💻 コード例 (20-30分)

### 例1: 正しい key を使う
```javascrip
const todos = [{id: "a1", text: "買い物"}, {id: "b2", text: "掃除"}];
return (
  <ul>
    {todos.map(t => <li key={t.id}>{t.text}</li>)}
  </ul>
);
```

### 例2: 子コンポーネントを memo 化
```javascrip
const Item = React.memo(function Item({ text }) {
  return <li>{text}</li>;
});
```

### 例3: virtualization の概念（react-window）
```javascrip
// 概念コード
import { FixedSizeList as List } from 'react-window';
<List height={500} itemCount={items.length} itemSize={35}>
  {({ index, style }) => <div style={style}>{items[index]}</div>}
</List>
```

## ✏️ 演習問題 (30-45分)

1. ユニークな id を持つ配列を用意して map で表示し、key に id を使う。
2. 親で state を更新しても再レンダーしないように子を memo 化して挙動を確認する。
3. 大量データ（10000 要素）を用意し、通常レンダリングと react-window の差を体感する。

## 🎯 ミニチャレンジ

- Todo アプリでアイテム順を入れ替える操作を実装し、key の付け方による表示崩れを観察してレポートする。

## 📝 今日のまとめ

- list 表示は map と適切な key が基本
- key は要素の恒久的な識別子を使う（インデックスは注意）
- memo / useMemo / useCallback / virtualization でパフォーマンス改善が可能

## 🔜 次週予告

Week 3（Day 15-21）では Hooks と副作用、フォームの高度な扱い、状態管理の基礎を扱います。

[← Day 13](day13.md) | [README に戻る](../README.md)
