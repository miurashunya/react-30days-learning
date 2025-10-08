# Day 18: カスタム Hooks と再利用ロジック - 作り方と設計

## 📚 学習目標 (1〜2時間)

- カスタム Hook の作り方と設計方針
- 副作用や状態をフックに抽出して再利用する方法
- テスト可能で型安全な Hook の作り方（TypeScript を使う場合の注意点）
- パフォーマンスと副作用の分離

## 📖 理論解説

### カスタム Hook とは
- 複数コンポーネントで共通するロジック（状態、副作用、イベントハンドラ）を Hook に抽出して再利用可能にする関数。
- 命名規則は `useXxx`（React の Hook ルールに従う）。

```javascript
// 例: useToggle
import { useState, useCallback } from "react";
export function useToggle(initial = false) {
  const [on, setOn] = useState(initial);
  const toggle = useCallback(() => setOn(v => !v), []);
  return [on, toggle];
}
```

### 抽出のタイミング
- 同じ状態管理や副作用を複数コンポーネントで使っているとき
- 複雑な副作用（フェッチ、購読、ローカルストレージ同期など）を整理したいとき

### 副作用を含む Hook の設計
- 内部で useEffect を使って副作用を実装する
- クリーンアップを忘れずに実装する（購読解除・タイマー解除など）

```javascript
import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch(url)
      .then(r => r.json())
      .then(d => { if (!cancelled) setData(d); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [url]);
  return { data, loading };
}
```

### 型とテスト
- TypeScript を使う場合は戻り値の型を明示し、再利用時の誤用を防ぐ。
- Hook のユニットテストは react-testing-library の `renderHook` を使うと簡単。

### ベストプラクティス
- API はシンプルに：状態と操作を返す（例: { value, set, reset } または [value, actions]）。
- 副作用は内部で完結させ、外部からはキャンセルや再取得の API を提供する。
- 依存配列を適切に設定し、必要なら useCallback/useMemo で安定化する。

## 💻 コード例 (20-30分)

### 例1: useLocalStorage（状態をローカルストレージと同期）
```javascript
import { useState, useEffect } from "react";

function useLocalStorage(key, initial) {
  const [state, setState] = useState(() => {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : initial;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}
```

### 例2: useInterval（クリーンなタイマー Hook）
```javascript
import { useEffect, useRef } from "react";
function useInterval(callback, delay) {
  const saved = useRef();
  useEffect(() => { saved.current = callback; }, [callback]);
  useEffect(() => {
    if (delay == null) return;
    const id = setInterval(() => saved.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}
```

## ✏️ 演習問題 (30-45分)

1. `useToggle` を実装して複数コンポーネントで使ってみる。  
2. `useFetch` を実装して、ネットワーク呼び出しのキャンセル（フラグ）を含める。  
3. `useLocalStorage` を実装してフォームの一時保存に使ってみる。  
4. `useInterval` を実装し、コンポーネントのマウント・アンマウントで正しくクリアされることを確認する。

## 🎯 ミニチャレンジ

- カスタム Hook を npm パッケージ風に分離して小さなユニットテスト（renderHook）を書く。

## 📝 今日のまとめ

- カスタム Hook はロジックの再利用と分離に有効  
- 副作用のクリーンアップ、依存配列、安定化がポイント  
- 型とテストを加えると品質が上がる

## 🔜 次回予告

**Day 19: コンテキストと状態共有** — Context API、useContext、状態共有設計

[← Day 17](day17.md) | [README に戻る](../README.md)
