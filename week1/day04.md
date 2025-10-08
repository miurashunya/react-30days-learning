# Day 4: 配列とオブジェクト - map, filter, reduce と分割代入

## 📚 学習目標 (10-15分)

- 配列メソッド `map`, `filter`, `reduce` の使い方と用途
- オブジェクトの操作、分割代入（destructuring）
- ミューテーションを避ける慣習（不変性）

## 📖 理論解説

### 配列メソッドの概要
- map: 各要素を変換して新しい配列を返す
- filter: 条件を満たす要素だけを抽出する
- reduce: 配列を単一の値に畳み込む（合計や集計）

```javascrip
// map
const arr = [1, 2, 3];
const doubles = arr.map(x => x * 2); // [2,4,6]

// filter
const evens = arr.filter(x => x % 2 === 0); // [2]

// reduce
const sum = arr.reduce((acc, x) => acc + x, 0); // 6
```

### オブジェクトと分割代入
```javascrip
const user = { name: "太郎", age: 25, city: "Tokyo" };

// 分割代入
const { name, age } = user;

// ネストした分割代入
const obj = { a: { b: 1 } };
const { a: { b } } = obj;
```

### 不変性の考え方
- 配列やオブジェクトは直接変更せず、新しいオブジェクトを作る（`...` スプレッド）
```javascrip
const a = [1,2];
const b = [...a, 3]; // a は変わらない

const u2 = { ...user, age: 26 }; // 元の user は変更されない
```

## 💻 コード例 (20-30分)

### 例1: 商品一覧を表示（map）
```javascrip
const products = [{name:"A",price:100},{name:"B",price:200}];
const names = products.map(p => p.name); // ["A","B"]
```

### 例2: 価格が100以上の商品を抽出（filter）
```javascrip
const expensive = products.filter(p => p.price >= 100);
```

### 例3: 合計金額を計算（reduce）
```javascrip
const total = products.reduce((s, p) => s + p.price, 0);
```

## ✏️ 演習問題 (30-45分)

1. 配列 `[3,6,9,12]` から 3 の倍数でない要素を除き、残りを 2 倍にする（`filter` + `map`）。
2. ユーザー配列から年齢の平均を求める（`reduce` を利用）。
3. オブジェクト `{x:1,y:2,z:3}` から `x` と残りを分割代入で取得する。
4. 商品配列を受け取り、税込価格（消費税 10%）の配列を返す関数を実装する（不変性を保つ）。

<details>
<summary>演習1 解答例</summary>

```javascrip
const arr = [3,6,9,12];
const result = arr.filter(n => n % 3 === 0).map(n => n * 2);
```
</details>

## 🎯 ミニチャレンジ

- 商品レビューの配列（score: 1-5）から、平均スコアと各スコアの出現回数を `reduce` で同時に計算する関数を作る。

## 📝 今日のまとめ

- `map`, `filter`, `reduce` の典型的な使い方
- 分割代入でコードが読みやすくなる
- 不変性（immutable）を意識して状態管理を楽にする

## 🔜 次回予告

**Day 5: ES6+ の便利機能**
- 分割代入の応用、スプレッド/レスト、テンプレートリテラル、デフォルト引数、オプショナルチェイニング

[← Day 3](day03.md) | [README に戻る](../README.md)
