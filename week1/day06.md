# Day 6: 非同期処理 - Promise と async/awai

## 📚 学習目標 (10-15分)

- Promise の基本とチェーン処理
- async/await による可読性向上
- 非同期エラー処理とタイムアウト・キャンセルの基礎
- ブラウザでの fetch による API 呼び出し

## 📖 理論解説

### Promise の基本
```javascrip
const p = new Promise((resolve, reject) => {
  // 非同期処理
  setTimeout(() => resolve("完了"), 500);
});

p.then(value => console.log(value)).catch(err => console.error(err));
```

- resolve は成功、reject は失敗を表す
- then/catch/finally で後続処理をつなぐ

### async / awai
```javascrip
async function doSomething() {
  try {
    const result = await p; // Promise が解決されるのを待つ
    console.log(result);
  } catch (err) {
    console.error("エラー:", err);
  }
}
```

- await は Promise の結果を待機する（同期風の記述）
- async 関数は常に Promise を返す

### 並列実行と直列実行
```javascrip
// 並列（同時に開始してまとめて待つ）
const [a, b] = await Promise.all([fetchA(), fetchB()]);

// 直列（順番に待つ）
const a2 = await fetchA();
const b2 = await fetchB();
```

### fetch とエラーハンドリング
```javascrip
async function getJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

getJson("/api/data")
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### タイムアウトの実装例（AbortController）
```javascrip
async function fetchWithTimeout(url, ms = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);

  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(id);
    if (!res.ok) throw new Error("通信エラー");
    return await res.json();
  } finally {
    clearTimeout(id);
  }
}
```

## 💻 コード例 (20-30分)

### 例1: シンプルな Promise チェーン
```javascrip
new Promise(resolve => resolve(1))
  .then(v => v + 1)
  .then(v => console.log(v)); // 2
```

### 例2: async/await で API を呼ぶ
```javascrip
async function load() {
  try {
    const data = await getJson("https://jsonplaceholder.typicode.com/todos/1");
    console.log(data);
  } catch (e) {
    console.error("ロード失敗:", e);
  }
}
```

### 例3: 並列で複数 API を取得
```javascrip
async function loadAll() {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2"
  ];
  const results = await Promise.all(urls.map(u => fetch(u).then(r => r.json())));
  console.log(results);
}
```

## ✏️ 演習問題 (30-45分)

1. setTimeout を Promise 化して await できる `sleep(ms)` を実装する。
2. fetch で取得した JSON のプロパティを加工して表示する関数を作る（エラーハンドリングを含む）。
3. 3つの非同期処理を並列実行し、それぞれの結果の合計を表示する（Promise.all を使用）。
4. AbortController を使ったタイムアウト付き fetch を実装し、タイムアウト時に適切にメッセージを表示する。

<details>
<summary>演習1 解答例</summary>

```javascrip
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  console.log("start");
  await sleep(500);
  console.log("after 500ms");
})();
```
</details>

## 🎯 ミニチャレンジ

- 小さなデータ取得モジュールを作成する：ローディング状態、成功時データ、エラー時メッセージを返す関数を実装し、簡単な UI（コンソール出力で可）で動作を確認する。

## 📝 今日のまとめ

- Promise と async/await の使い分け
- 並列処理は Promise.all、個別エラーハンドリングは Promise.allSettled を検討
- fetch のエラー判定は HTTP ステータスを確認すること
- タイムアウトやキャンセルは AbortController を使う

## 🔜 次回予告

**Day 7: 開発環境構築（Node.js, npm, Vite）**
- 環境構築手順と簡単な React プロジェクトの立ち上げ
