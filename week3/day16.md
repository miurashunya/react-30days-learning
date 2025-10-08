# Day 16: useEffect 応用 - クリーンアップ、依存配列、パフォーマンス対策

## 📚 学習目標 (1〜2時間)

- useEffect のクリーンアップの正しい設計
- 依存配列の最小化と eslint-plugin-react-hooks の活用
- debounce/Throttle による副作用の最適化
- サブスクリプション（WebSocket 等）の扱い方

## 📖 理論解説

### クリーンアップの役割
- イベントリスナ、タイマー、外部サブスクリプションなどはクリーンアップで必ず解除する。
- クリーンアップ関数は「次回の effect 実行前」と「アンマウント時」に呼ばれる。

```javascript
useEffect(() => {
  const id = setInterval(() => setNow(Date.now()), 1000);
  return () => clearInterval(id);
}, []);
```

### 依存配列の設計
- effect 内で参照する外部変数（props/state/関数）は全て依存配列に入れる。
- ただし、頻繁に変わるオブジェクトや関数は useCallback/useMemo で安定化して依存を減らす。
- eslint-plugin-react-hooks のルールを有効にして自動修正に従うのが安全。

### 非同期処理のパターン
- effect 内で async を直接指定しない。内部で async 関数を定義して呼び出す。

```javascript
useEffect(() => {
  let cancelled = false;
  async function fetchData() {
    const res = await fetch(url);
    const data = await res.json();
    if (!cancelled) setData(data);
  }
  fetchData();
  return () => { cancelled = true; };
}, [url]);
```

### debounce / throttle（入力に対する副作用の最適化）
- 入力に応じて API を叩く場合は debounce（遅延）を使い不要なリクエストを抑制する。

```javascript
useEffect(() => {
  const id = setTimeout(() => doSearch(q), 300);
  return () => clearTimeout(id);
}, [q]);
```

### サブスクリプション（WebSocket 等）
- 接続は effect 内で行い、クリーンアップで確実に閉じる。

```javascript
useEffect(() => {
  const ws = new WebSocket(url);
  ws.onmessage = e => setMsg(e.data);
  return () => ws.close();
}, [url]);
```

## 💻 コード例 (20-30分)

### 例1: フォーカスイベントの登録解除
```javascript
useEffect(() => {
  function onFocus() { console.log('focus'); }
  window.addEventListener('focus', onFocus);
  return () => window.removeEventListener('focus', onFocus);
}, []);
```

### 例2: 入力デバウンス（useEffect + timeout）
```javascript
useEffect(() => {
  const id = setTimeout(() => fetchSuggestions(query), 400);
  return () => clearTimeout(id);
}, [query]);
```

## ✏️ 演習問題 (30-45分)

1. テキスト入力を監視し、入力が止まってから 500ms 後に API を呼ぶデバウンス実装を行う。  
2. WebSocket に接続して受信メッセージを表示するコンポーネントを作り、アンマウントで接続を閉じることを確認する。  
3. useEffect の依存配列を意図的に省略して挙動を確認し、何が起きるか記録する（注意して実験する）。

## 📝 今日のまとめ

- useEffect の正しいクリーンアップは重要（メモリリーク防止）  
- 依存配列は慎重に設計し、必要なら useMemo/useCallback で安定化する  
- 入力に対する API 呼び出しは debounce で最適化する

## 🔜 次回予告

**Day 17: フォーム処理（制御コンポーネント、バリデーション、カスタムフック）**

[← Day 15](day15.md) | [README に戻る](../README.md)
