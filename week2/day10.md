# Day 10: Props 深堀り - 型、構造、関数を渡すパターン

## 📚 学習目標 (1〜2時間)

- Props の基本と設計方針
- 関数を props として渡すパターン（イベントコールバック）
- children の扱い方と拡張パターン
- Prop の型付け（PropTypes / TypeScript）の紹介
- パフォーマンス考慮（memo, callback の扱い）

## 📖 理論解説

### Props の基本
- 親から子へデータを渡す不変の値。子は受け取った props を変更しない。
- Props はオブジェクトなので分割代入で取り出すのが一般的。

```javascrip
function Greeting({ name }) {
  return <p>こんにちは、{name}さん</p>;
}
```

### 関数を渡す（コールバック）
- 子が親の状態を変更する必要があるときは、親の関数を props として渡す（lifting state up）。

```javascrip
function TodoItem({ todo, onToggle }) {
  return <li onClick={() => onToggle(todo.id)}>{todo.text}</li>;
}
```

- 注意: new 関数を毎回生成すると再レンダーが増える。必要に応じて useCallback を使う。

### children と render prop
- children: 柔軟に構造を入れ替えられる。UI ラッパーに便利。

```javascrip
function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}
```

- Render props / function-as-child: 表示ロジックを親に委ねられる。

```javascrip
<DataLoader url="/api" children={(data) => <List items={data} />} />
```

### Prop の型付け（短い紹介）
- PropTypes（ランタイムチェック） or TypeScript（静的型付け）を推奨。
- PropTypes 例:

```javascrip
import PropTypes from 'prop-types';
Greeting.propTypes = { name: PropTypes.string.isRequired };
```

### パフォーマンス
- React.memo でプレゼンテーションコンポーネントをメモ化。
- 親が渡す関数を useCallback で安定化すると子の再レンダーを抑制できる。

```javascrip
const add = useCallback((v) => setList(l => [...l, v]), [setList]);
const MemoButton = React.memo(Button);
```

### Prop 設計のベストプラクティス
- 小さく分割して単一責任にする
- オブジェクトで渡す場合は必要最小限のプロパティにする
- 深いネストを避け、必要なら Context へ移す（prop drilling を回避）

## 💻 コード例 (20-30分)

### 例1: 親から子へコールバック渡し
```javascrip
function Parent() {
  const [count, setCount] = useState(0);
  const inc = useCallback(() => setCount(c => c + 1), []);
  return <Child onInc={inc} count={count} />;
}
```

### 例2: children を使った汎用コンポーネント
```javascrip
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="modal">
      <button onClick={onClose}>close</button>
      <div>{children}</div>
    </div>
  );
}
```

## ✏️ 演習問題 (30-45分)

1. 親コンポーネントで配列 state を持ち、子コンポーネントに追加用の関数を渡して要素を追加する。
2. `React.memo` を使ってボタンコンポーネントをメモ化し、親の再描画で子が再レンダーしないことを確認する。
3. `children` に関数を渡す render-prop スタイルのコンポーネントを作成して利用する。
4. PropTypes を導入してコンポーネントの props をチェックする（あるいは TypeScript の型定義を試す）。

<details>
<summary>演習2 ヒント</summary>

- 親でカウンター state を持ち、子は count を表示するだけにする。親側で別の state を更新しても子が再レンダーしないか確認する。
</details>

## 🎯 ミニチャレンジ

- 小さな Todo アプリで「項目追加」「完了トグル」を parent/container と presentational に分けて実装し、関数の受け渡し・children の使い方・memo の効果を検証する。

## 📝 今日のまとめ

- Props は親→子の不変データ伝達手段
- 関数を渡す際は useCallback を検討し、必要なら memo 化する
- children/render-prop は UI の柔軟性を高める
- PropTypes/TypeScript で型の安全性を確保する

## 🔜 次回予告

**Day 11: State と useState** — state の基本、State の分割、初期化方法、パフォーマンス注意点

[← Day 9](day09.md) | [README に戻る](../README.md)
