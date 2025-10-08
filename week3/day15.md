# Day 15: useEffect 基礎 - 副作用とライフサイクル

## 📚 学習目標 (1〜2時間)

- useEffect の基本的な使い方を理解する
- マウント・アンマウントでの処理（初期化とクリーンアップ）
- 依存配列の意味と誤用の注意点
- Flutter のライフサイクル（initState/dispose）との比較

## 📖 理論解説

- useEffect は「副作用」を扱うための Hook。レンダリング後に実行される。
- 第一引数に副作用関数、第二引数に依存配列を渡す。
  - 依存配列を [] にするとマウント時のみ実行（componentDidMount 相当）。
  - 依存配列を省略すると毎回実行（レンダリングごと）。
  - 依存配列に値を入れると、その値が変化したときに実行。

```javascript
import { useEffect } from "react";

useEffect(() => {
  console.log("mounted or deps changed");
  return () => {
    console.log("cleanup on unmount or before next effect");
  };
}, [deps]);
```

- クリーンアップ関数はアンマウント時や次回の effect 実行前に呼ばれる（イベントリスナの解除やタイマーのクリアに使う）。
- 非同期処理は effect 内で直接 async を使わず、内部で async 関数を呼ぶ。

```javascript
useEffect(() => {
  let mounted = true;
  async function fetchData() {
    const res = await fetch(url);
    const data = await res.json();
    if (mounted) setData(data);
  }
  fetchData();
  return () => { mounted = false; };
}, [url]);
```

## 💻 コード例 (20-30分)

### 例1: マウント時にイベントリスナを追加し、クリーンアップで解除
```javascript
useEffect(() => {
  function onResize() { console.log(window.innerWidth); }
  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}, []);
```

### 例2: データ取得（依存配列あり）
```javascript
useEffect(() => {
  let cancelled = false;
  fetch(`/api/items?q=${q}`)
    .then(r => r.json())
    .then(data => { if (!cancelled) setItems(data); });
  return () => { cancelled = true; };
}, [q]);
```

## ✏️ 演習問題 (30-45分)

1. マウント時にタイマーをセットして 1 秒ごとにカウントを増やし、アンマウント時にクリアする。  
2. 検索入力（q）を依存にして API を呼ぶが、古いリクエストを破棄する実装にする（キャンセルフラグ）。  
3. コンソールや UI に effect の実行タイミングを可視化して、依存配列を変更したときの挙動を観察する。

## 📝 今日のまとめ

- useEffect は副作用を扱うための重要な Hook。依存配列の扱いを誤ると無限ループや古いデータ表示の原因になる。  
- クリーンアップを必ず考慮する（メモリリーク防止）。

## 🔜 次回予告

**Day 16: useEffect 応用** — クリーンアップの詳細、依存配列の設計、パフォーマンス対応

[← Week2 に戻る](../week2/day14.md) | [README に戻る](../README.md)
