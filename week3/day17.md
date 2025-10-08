# Day 17: フォーム処理 - 制御コンポーネント、バリデーション、カスタムフック

## 📚 学習目標 (1〜2時間)

- 制御コンポーネントと非制御コンポーネントの違いを理解する
- 基本的な入力バリデーションの実装方法
- フォーム状態を整理するカスタムフックの作り方
- パフォーマンスとアクセシビリティの考慮点

## 📖 理論解説

### 制御コンポーネント（Controlled）
- 入力値を React の state で管理する方式。バリデーションや即時フィードバックが容易。
- フォーム全体の状態管理がしやすく、テストや初期値設定も明確。

```javascript
function NameForm() {
  const [name, setName] = useState("");
  return (
    <form onSubmit={e => { e.preventDefault(); /* submit */ }}>
      <input value={name} onChange={e => setName(e.target.value)} />
    </form>
  );
}
```

### 非制御コンポーネント（Uncontrolled）
- DOM の値を ref 経由で直接参照する方式。簡易フォームやパフォーマンス重視で有効。
- 初期値や即時バリデーションには不向き。

```javascript
const ref = useRef();
function submit() {
  console.log(ref.current.value);
}
<input ref={ref} defaultValue="初期" />
```

### バリデーション
- 同期バリデーション（必須、長さ、正規表現）と非同期バリデーション（サーバー重複チェック）を使い分ける。
- エラーメッセージはアクセシブルに表示（aria-live など）する。

### カスタムフックで再利用性確保
- フォームロジック（値、onChange、エラー、submit）を useForm などのカスタムフックに抽出するとコンポーネントがスリムになる。

```javascript
function useForm(initial) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const onChange = e => setValues(v => ({ ...v, [e.target.name]: e.target.value }));
  return { values, errors, onChange, setErrors, setValues };
}
```

### パフォーマンスとアクセシビリティ
- 大きなフォームでは入力ごとの再レンダー抑制（分割 state、useCallback）を検討。
- ラベル、aria 属性、キーボード操作、フォーカス管理を適切に行う。

## 💻 コード例 (20-30分)

### 例1: 簡単な制御フォームとバリデーション
```javascript
function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  function onChange(e) { setValues(v => ({ ...v, [e.target.name]: e.target.value })); }
  function validate() {
    const err = {};
    if (!values.name) err.name = "必須です";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) err.email = "正しいメールを入力してください";
    setErrors(err);
    return Object.keys(err).length === 0;
  }
  function onSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    // submit
  }
  return (
    <form onSubmit={onSubmit} noValidate>
      <label>
        名前
        <input name="name" value={values.name} onChange={onChange} />
        {errors.name && <div role="alert">{errors.name}</div>}
      </label>
      <label>
        Email
        <input name="email" value={values.email} onChange={onChange} />
        {errors.email && <div role="alert">{errors.email}</div>}
      </label>
      <button type="submit">送信</button>
    </form>
  );
}
```

### 例2: useForm カスタムフック（概念）
```javascript
function useForm(initial, validateFn) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setValues(v => ({ ...v, [name]: value }));
  }, []);
  const validate = useCallback(() => {
    const err = validateFn(values);
    setErrors(err);
    return Object.keys(err).length === 0;
  }, [values, validateFn]);
  return { values, errors, onChange, validate, setValues };
}
```

## ✏️ 演習問題 (30-45分)

1. ContactForm を実装し、必須チェックとメール形式チェックを行う。  
2. useForm を実装し、ContactForm をリファクタリングして再利用性を確認する。  
3. 非制御コンポーネントを使った簡易フォームを作り、制御版との実装差をまとめる。

## 🎯 ミニチャレンジ

- フロント側バリデーションに加えて、サーバーでの重複チェック（非同期）を実装し、UI に反映させる。

## 📝 今日のまとめ

- フォームは UI とロジックを分離すると保守性が上がる  
- カスタムフックで共通ロジックを抽出することで再利用性向上  
- アクセシビリティとパフォーマンスを常に意識する

## 🔜 次回予告

**Day 18: カスタム Hooks と再利用ロジック** — フォーム以外の共通ロジック抽出、テスト方法

[← Day 16](day16.md) | [README に戻る](../README.md)
