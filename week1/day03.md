# Day 3: 関数 - 宣言、アロー関数、スコープ、クロージャ

## 📚 学習目標 (10-15分)

- JavaScript の関数の書き方（宣言・式・アロー関数）
- スコープとクロージャの概念
- 高階関数の基礎（関数を引数/戻り値に使う）

## 📖 理論解説

### 関数宣言と関数式
```javascrip
// 関数宣言
function greet(name) {
  return `こんにちは、${name}さん`;
}

// 関数式（無名関数を代入）
const greet2 = function(name) {
  return `やあ、${name}`;
};
```

### アロー関数
```javascrip
// 基本形
const add = (a, b) => a + b;

// 複数行と明示的な return
const square = (n) => {
  return n * n;
};
```

### スコープ（関数スコープ、ブロックスコープ）
- var は関数スコープ、let/const はブロックスコープ
```javascrip
if (true) {
  let x = 1;
}
// console.log(x); // ReferenceError
```

### クロージャ
- 関数が定義された環境（変数）を覚えている性質
```javascrip
function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const c = counter();
console.log(c()); // 1
console.log(c()); // 2
```

### 高階関数
- 関数を引数に取る／関数を返す関数
```javascrip
const map = (arr, fn) => {
  const res = [];
  for (const v of arr) res.push(fn(v));
  return res;
};

console.log(map([1,2,3], x => x * 2)); // [2,4,6]
```

## 💻 コード例 (20-30分)

### 例1: コールバック
```javascrip
function fetchData(callback) {
  setTimeout(() => {
    callback("data");
  }, 500);
}

fetchData((d) => console.log("受信:", d));
```

### 例2: カリー化の簡単な例
```javascrip
const add = (a) => (b) => a + b;
const add5 = add(5);
console.log(add5(2)); // 7
```

### 例3: クロージャによるプライベート変数
```javascrip
const makeSecret = (secret) => {
  return {
    get: () => secret,
    set: (v) => secret = v,
  };
};

const s = makeSecret("初期");
console.log(s.get()); // 初期
s.set("更新");
console.log(s.get()); // 更新
```

## ✏️ 演習問題 (30-45分)

1. 関数宣言とアロー関数で同じ処理を実装する（例: 配列の合計を計算）
2. クロージャを使って単純なキャッシュ関数を作る（計算結果を保存して再利用）
3. 高階関数 `filter` を自作して偶数だけ抽出する
4. カリー化された関数を使ってテンプレート文字列を生成する関数を作る

<details>
<summary>演習1 解答例</summary>

```javascrip
// 関数宣言
function sum(arr) {
  let s = 0;
  for (const v of arr) s += v;
  return s;
}

// アロー関数
const sum2 = (arr) => {
  let s = 0;
  for (const v of arr) s += v;
  return s;
};
```
</details>

## 🎯 ミニチャレンジ

- クロージャを使って、指定した回数だけ実行される関数（例: 3回だけ実行可能な関数）を作成し、動作を確認する。

## 📝 今日のまとめ

- 関数の宣言方法とアロー関数の違い
- let/const によるスコープ制御
- クロージャは状態を保持する強力なツール
- 高階関数でコードを抽象化できる

## 🔜 次回予告

**Day 4: 配列とオブジェクト**
- 配列メソッド（map, filter, reduce）
- オブジェクトの操作と分割代入

[← Day 2](day02.md) | [README に戻る](../README.md)
