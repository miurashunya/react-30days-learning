# Day 11: State と useState - 基本、分割、初期化、注意点

## 📚 学習目標 (1〜2時間)

- React の state の概念と useState の使い方
- State を分割する判断基準
- 初期値と遅延初期化（初期化関数）
- state 更新の注意点（不変性、関数型更新）

## 📖 理論解説

### useState の基本
```javascrip
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

### 初期化と遅延初期化
- 初期値計算が重い場合は関数を渡す（遅延初期化）。
```javascrip
const [value, setValue] = useState(() => expensiveInit());
```

### State の分割
- 関連性が薄い値は別々の state にする（再レンダーの最小化）。
- 一覧やフォームはオブジェクトにまとめる場合もある（update 時はスプレッドで不変性を保つ）。

### 更新時の注意点
- 直接ミューテートしない（配列やオブジェクトはコピーして更新）。
- 直前の state を使う場合は関数型更新を使う：
```javascrip
setList(prev => [...prev, newItem]);
```

### パフォーマンス考慮
- state を下位コンポーネントに渡すと prop drilling になりやすい。Context を検討。
- 大きなオブジェクトを頻繁に更新するなら useReducer や分割を検討。

## 💻 コード例 (20-30分)

### 例1: フォームの state（制御コンポーネント）
```javascrip
const [form, setForm] = useState({ name: "", email: "" });
setForm(prev => ({ ...prev, name: "太郎" }));
```

### 例2: 配列 state の追加・削除
```javascrip
const [items, setItems] = useState([]);
setItems(prev => [...prev, newItem]);
setItems(prev => prev.filter(i => i.id !== idToRemove));
```

## ✏️ 演習問題 (30-45分)

1. カウンターを作成し、増加・減少・リセット機能を実装する（関数型更新を使用）。
2. 簡単なフォームを作り、入力内容を state で管理する。
3. リストに項目を追加する UI を作り、不変性を保って更新する。

## 🎯 ミニチャレンジ

- 複数の related state を一つのオブジェクトにまとめた時と分割した時でパフォーマンスや実装の違いを比較する。

## 📝 今日のまとめ

- useState はシンプルだが、設計次第でレンダリングコストや可読性に影響する
- 不変性を守り、関数型更新を活用することでバグを減らす

## 🔜 次回予告

**Day 12: イベントハンドリング** — SyntheticEvent、フォーム、カスタムイベント、デフォルト動作の制御

[← Day 10](day10.md) | [README に戻る](../README.md)
