# Day 5: ES6+ の便利機能 - 分割代入、スプレッド/レスト、テンプレートリテラル、デフォルト引数、オプショナルチェイニング

## 📚 学習目標 (10-15分)

- ES6+ の主要機能を理解して短く読みやすいコードを書く
- Flutter (Dart) との対比で違いを把握する

## 📖 理論解説

### 分割代入 (Destructuring)
```javascrip
const user = { name: "太郎", age: 25, city: "Tokyo" };
const { name, age } = user; // name, age を直接取得

const arr = [1, 2, 3];
const [first, second] = arr; // first=1, second=2
```

### スプレッド / レスト
```javascrip
// スプレッド（配列の展開 / オブジェクトのコピー）
const a = [1,2];
const b = [...a, 3]; // [1,2,3]

const u2 = { ...user, age: 26 }; // user を変更せずに新しいオブジェクトを作成

// レスト（残りの要素をまとめる）
const [head, ...tail] = [1,2,3,4]; // head=1, tail=[2,3,4]
function fn(...args) { console.log(args); } // 可変長引数
```

### テンプレートリテラル
```javascrip
const name = "太郎";
console.log(`こんにちは、${name}さん`); // 改行や式埋め込み可
```

### デフォルト引数
```javascrip
function greet(name = "ゲスト") {
  return `こんにちは、${name}さん`;
}
```

### オプショナルチェイニング & Null 合体演算子
```javascrip
const obj = { a: { b: 1 } };
console.log(obj?.a?.b); // 1
console.log(obj?.c?.d); // undefined（例外にならない）

const x = null ?? "デフォルト"; // "デフォルト"
```

## Flutter (Dart) との比較
- 分割代入は Dart に直接対応する構文はないが、Dart のタプル/マップ操作と概念的に類似
- スプレッド (`...`) は Dart のコレクション if/for と似た表現で使える
- テンプレート文字列は Dart の文字列補間と同等

## 💻 コード例 (20-30分)

### 例1: オブジェクトのマージ
```javascrip
const base = { a: 1 };
const extra = { b: 2 };
const merged = { ...base, ...extra }; // {a:1,b:2}
```

### 例2: 可変長引数の合計
```javascrip
const sum = (...nums) => nums.reduce((s,n) => s + n, 0);
console.log(sum(1,2,3)); // 6
```

### 例3: 安全にネスト値を参照
```javascrip
const user = { profile: { name: "花子" } };
console.log(user?.profile?.name ?? "匿名"); // 花子
```

## ✏️ 演習問題 (30-45分)

1. オブジェクト `{x:1,y:2,z:3}` から `y` を取り出し残りを別オブジェクトにする（分割代入 + スプレッド）。
2. 関数 `multiply(...nums)` を作り、任意個の引数の積を返す（レスト + reduce）。
3. テンプレートリテラルで複数行のテンプレートを作成し、式埋め込みを使う。
4. ネストオブジェクトを安全に参照するユーティリティ関数を optional chaining を使って作る。

<details>
<summary>演習1 解答例</summary>

```javascrip
const { y, ...rest } = { x:1, y:2, z:3 };
console.log(y); // 2
console.log(rest); // { x:1, z:3 }
```
</details>

## 🎯 ミニチャレンジ

- 小さなコンポーネント風関数を実装する：設定オブジェクトを受け取り、デフォルト値とマージして結果を返す関数を作る（デフォルト引数 + スプレッド）。

## 📝 今日のまとめ

- ES6+ 機能でコードが短く読みやすくなる
- 不変性を保ちながらデータを扱う習慣をつける
- Optional chaining と Null 合体演算子で安全に値を扱う

## 🔜 次回予告

**Day 6: 非同期処理**
- Promise, async/await の基礎と注意点

[← Day 4](day04.md) | [README に戻る](../README.md)
