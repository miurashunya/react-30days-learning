# Day 26: フィルタ・検索・並べ替え - UX と実装パターン

## 📚 学習目標 (1〜2時間)

- リストに対するフィルタ（全件 / 未完了 / 完了）を実装する  
- テキスト検索（インクリメンタル検索）を実装する（debounce を利用）  
- 並べ替え（作成日 / 重要度）を実装する  
- UI/UX の観点（状態のURL反映 / アクセシビリティ）を考慮する

## 理論（短く）

- フィルタ・検索・並べ替えは純表示ロジックに留め、データ変更は別責務にする。  
- 検索は入力頻度が高いため debounce で不要な再計算やリクエストを抑える。  
- フィルタ/ソート/検索の組み合わせは「パイプライン処理」で順に適用する（filter → search → sort）。

## 実装例（実践）

```javascript
// src/pages/Home.jsx (表示用 selector の例)
function applyPipeline(items, query, filter, sortKey) {
  return items
    .filter(it => {
      if (filter === 'all') return true;
      if (filter === 'done') return it.done;
      if (filter === 'active') return !it.done;
    })
    .filter(it => it.text.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => {
      if (sortKey === 'created') return b.createdAt - a.createdAt;
      if (sortKey === 'priority') return (b.priority||0) - (a.priority||0);
      return 0;
    });
}
```

```javascript
// debounce hook 簡易版 (src/hooks/useDebounce.js)
import { useState, useEffect } from 'react';
export function useDebounce(value, delay = 300) {
  const [v, setV] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setV(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return v;
}
```

```javascript
// Home の一部（検索とフィルタUI）
const [query, setQuery] = useState('');
const debouncedQuery = useDebounce(query, 300);
const [filter, setFilter] = useState('all');
const [sortKey, setSortKey] = useState('created');

const visible = useMemo(() => applyPipeline(items, debouncedQuery, filter, sortKey), [items, debouncedQuery, filter, sortKey]);
```

## UI の提案

- フィルタは「All / Active / Done」のトグルボタンにする（aria-pressed を利用）。  
- 検索入力は placeholder と aria-label を設定。  
- 並べ替えは select 要素で提供し、キーボード操作で切替可能にする。  
- 現在のフィルタ/検索は URL クエリに反映すると共有可能で便利（例: ?q=foo&filter=active）。

## 演習

1. useDebounce を使って検索入力の API 呼び出しを最適化する。  
2. フィルタ・検索・ソートを UI から組み合わせて使い、結果が期待通りか確認する。  
3. フィルタ状態を URL に同期（history.pushState）してページ更新後も復元できるようにする。

## 次へ

Day27: カスタム Hooks（useLocalStorage, useTodos）と抽出を作成します（続けて進めますか？）
