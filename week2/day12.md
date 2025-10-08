# Day 12: イベントハンドリング - SyntheticEvent とフォーム制御

## 📚 学習目標 (1〜2時間)

- React の SyntheticEvent の仕組み
- イベントハンドラの書き方とパフォーマンス留意点
- フォーム（制御コンポーネント／非制御コンポーネント）
- preventDefault, stopPropagation の使いどころ

## 📖 理論解説

### SyntheticEven
- React はブラウザごとの差異を吸収する SyntheticEvent を提供する。
- イベントハンドラは一般に JSX で `onClick={handle}` などとして渡す。

```javascrip
function Button() {
  function handleClick(e) {
    console.log(e.type); // "click"
  }
  return <button onClick={handleClick}>Click</button>;
}
```

### preventDefault / stopPropagation
- フォーム送信の既定動作を止める：`e.preventDefault()`
- バブルを止める：`e.stopPropagation()`

### フォーム制御: 制御コンポーネント
- 入力値を state で管理する方式（推奨）

```javascrip
function NameForm() {
  const [name, setName] = useState("");
  function submit(e) {
    e.preventDefault();
    alert(`Hello ${name}`);
  }
  return (
    <form onSubmit={submit}>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">送信</button>
    </form>
  );
}
```

### 非制御コンポーネント（ref）
- DOM に直接アクセスして値を読む場合に利用

```javascrip
const inputRef = useRef();
function handle() {
  console.log(inputRef.current.value);
}
<input ref={inputRef} />
```

### キーボード・フォーカス・アクセシビリティ
- `onKeyDown`, `onKeyUp` を使い Enter/Esc 処理を追加
- ボタンやリンクは適切に `role`/`tabIndex` を設定してアクセシビリティ対応

## 💻 コード例 (20-30分)

### 例1: チェックボックス制御
```javascrip
const [checked, setChecked] = useState(false);
<input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />
```

### 例2: ファイル入力（非制御）
```javascrip
const ref = useRef();
function onPick() {
  const file = ref.current.files[0];
  console.log(file.name);
}
<input type="file" ref={ref} onChange={onPick} />
```

## ✏️ 演習問題 (30-45分)

1. フォームを作り、複数の入力（name, email, message）を制御コンポーネントで管理して送信時にコンソールに出す。
2. Enter キーで送信、Esc キーでフォームをリセットする処理を追加する。
3. 子要素のクリックで親の onClick が発火しないように stopPropagation を使って制御する。
4. 非制御コンポーネントでファイルを選択してファイル名を表示する。

<details>
<summary>演習1 ヒント</summary>

- `onSubmit` の中で `e.preventDefault()` を呼び、state の値で処理する。
</details>

## 🎯 ミニチャレンジ

- 簡単な検索バーを作る：インクリメンタル検索（入力中に API を叩く際は debounce を利用）と Enter で確定検索を実装する。

## 📝 今日のまとめ

- React のイベントは SyntheticEvent を通じて扱う
- フォームは制御コンポーネントが扱いやすい（バリデーション等）
- preventDefault / stopPropagation を適切に使う
- キーボード操作とアクセシビリティに注意する

## 🔜 次回予告

**Day 13: 条件付きレンダリングとリスト表示の詳細** — 効率的なレンダリング、key の重要性

[← Day 11](day11.md) | [README に戻る](../README.md)
