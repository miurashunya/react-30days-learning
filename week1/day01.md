# Day 1: JavaScript 基礎 - 変数、データ型、演算子

## 📚 学習目標 (10-15分)

今日は JavaScript の基礎を学びます。Flutter の Dart 言語と似ている部分も多いので、比較しながら理解を深めましょう。

### 今日学ぶこと


- 変数の宣言方法 (`let`, `const`, `var`)

- 基本的なデータ型

- 演算子の使い方

- コンソールでの出力

## 📖 理論解説

### 1. 変数の宣言


JavaScript には3つの変数宣言方法があります：

```javascrip
// const: 再代入不可（最も推奨）
const name = "太郎";
// name = "花子"; // エラー！

// let: 再代入可能（ブロックスコープ）
let age = 25;
age = 26; // OK

// var: 古い書き方（使用非推奨）
var city = "Tokyo";
```

**Flutter (Dart) との比較:**
```dar
// Dar
final name = "太郎";  // const に相当
const pi = 3.14;      // コンパイル時定数
String city = "Tokyo"; // let に相当
```

**ポイント:**

- 基本的に `const` を使う

- 値を変更する必要がある場合のみ `let` を使う

- `var` は使わない（レガシーコード）

### 2. データ型


JavaScript の主要なデータ型：

```javascrip
// 数値 (Number)
const integer = 42;
const float = 3.14;

// 文字列 (String)
const text = "Hello";
const text2 = 'World';
const text3 = `Hello ${text2}`; // テンプレートリテラル

// 真偽値 (Boolean)
const isActive = true;
const isCompleted = false;

// null と undefined
const emptyValue = null;      // 意図的に空
let notDefined;               // undefined（未定義）

// 配列 (Array)
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "text", true];

// オブジェクト (Object)
const user = {
  name: "太郎",
  age: 25,
  isStudent: true
};
```

**Flutter (Dart) との比較:**
```dar
// Dart は型を明示できる
int integer = 42;
double float = 3.14;
String text = "Hello";
bool isActive = true;

List<int> numbers = [1, 2, 3, 4, 5];
Map<String, dynamic> user = {
  "name": "太郎",
  "age": 25,
};
```

**重要な違い:**

- JavaScript は動的型付け（型が自動で決まる）

- Dart は静的型付け（型を明示する）

### 3. 演算子


```javascrip
// 算術演算子
const sum = 10 + 5;      // 15
const diff = 10 - 5;     // 5

const product = 10 * 5;  // 50

const quotient = 10 / 5; // 2
const remainder = 10 % 3; // 1
const power = 2 ** 3;    // 8

// 比較演算子
console.log(5 == "5");   // true (型変換あり)
console.log(5 === "5");  // false (型も比較)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(10 > 5);     // true
console.log(10 >= 10);   // true

// 論理演算子
console.log(true && false);  // false (AND)
console.log(true || false);  // true (OR)
console.log(!true);          // false (NOT)

// 代入演算子
let count = 0;
count += 5;  // count = count + 5
count -= 2;  // count = count - 2

count *= 2;  // count = count * 2

count++;     // count = count + 1
count--;     // count = count - 1
```

**重要:** `===` と `!==` を使う（型も厳密に比較）

### 4. コンソール出力


```javascrip
// 基本的な出力
console.log("Hello, World!");

// 変数の出力
const name = "太郎";
console.log(name);

// 複数の値を出力
console.log("Name:", name, "Age:", 25);

// テンプレートリテラル
console.log(`私の名前は${name}です`);

// オブジェクトの出力
const user = { name: "太郎", age: 25 };
console.log(user);
```

## 💻 コード例 (20-30分)

### 例1: 基本的な変数と演算


```javascrip
// 変数の宣言
const firstName = "山田";
const lastName = "太郎";
const age = 25;
const birthYear = 2024 - age;

// 文字列の結合
const fullName = firstName + " " + lastName;
console.log("名前:", fullName);

// テンプレートリテラル（推奨）
console.log(`${fullName}さんは${age}歳で、${birthYear}年生まれです`);
```

### 例2: 簡単な計算プログラム


```javascrip
// 消費税計算
const price = 1000;
const taxRate = 0.1;
const totalPrice = price + (price * taxRate);

console.log(`商品価格: ${price}円`);
console.log(`消費税: ${price * taxRate}円`);

console.log(`合計: ${totalPrice}円`);
```

### 例3: オブジェクトの使用


```javascrip
// ユーザー情報
const user = {
  name: "田中花子",
  age: 30,
  city: "東京",
  isStudent: false
};

console.log(`名前: ${user.name}`);
console.log(`年齢: ${user.age}歳`);
console.log(`居住地: ${user.city}`);
console.log(`学生: ${user.isStudent ? "はい" : "いいえ"}`);
```

## ✏️ 演習問題 (30-45分)

### 演習 1: 自己紹介プログラム


以下の情報を持つオブジェクトを作成し、テンプレートリテラルで自己紹介文を出力してください。

```javascrip
// TODO: ここにコードを書く
const profile = {
  // あなたの情報を入れてください
  name: "",
  age: 0,
  hobby: "",
  favoriteLanguage: ""
};

// TODO: 以下のような文を出力
// 「はじめまして、〇〇です。〇歳です。趣味は〇〇で、好きな言語は〇〇です。」
```

<details>
<summary>解答例を見る</summary>

```javascrip
const profile = {
  name: "山田太郎",
  age: 28,
  hobby: "読書",
  favoriteLanguage: "Dart"
};

console.log(`はじめまして、${profile.name}です。${profile.age}歳です。趣味は${profile.hobby}で、好きな言語は${profile.favoriteLanguage}です。`);
```
</details>

### 演習 2: BMI 計算機


体重と身長から BMI を計算するプログラムを作成してください。

```javascrip
// TODO: 変数を定義
const weight = 70; // kg
const height = 1.75; // m

// TODO: BMI を計算（体重 ÷ 身長の2乗）
const bmi = 0; // ここを完成させる

// TODO: 結果を出力
console.log(`BMI: ${bmi}`);

// ヒント: 身長の2乗は height * height または height ** 2
```

<details>
<summary>解答例を見る</summary>

```javascrip
const weight = 70;
const height = 1.75;
const bmi = weight / (height ** 2);

console.log(`身長: ${height}m`);
console.log(`体重: ${weight}kg`);
console.log(`BMI: ${bmi.toFixed(2)}`);

// .toFixed(2) は小数点以下2桁に丸める
```
</details>

### 演習 3: 買い物カート


複数の商品の合計金額と消費税込みの金額を計算してください。

```javascrip
// TODO: 商品の価格を定義
const item1 = 1200;
const item2 = 800;
const item3 = 1500;

// TODO: 合計金額を計算

// TODO: 消費税（10%）込みの金額を計算

// TODO: 結果を出力
```

<details>
<summary>解答例を見る</summary>

```javascrip
const item1 = 1200;
const item2 = 800;
const item3 = 1500;

const subtotal = item1 + item2 + item3;
const tax = subtotal * 0.1;

const total = subtotal + tax;

console.log(`小計: ${subtotal}円`);
console.log(`消費税: ${tax}円`);
console.log(`合計: ${total}円`);
```
</details>

## 🎯 ミニチャレンジ

以下の要件を満たすプログラムを作成してください：


1. 2つの商品情報をオブジェクトで作成（名前、価格、数量）

2. 各商品の小計を計算

3. 全体の合計金額を計算

4. 10,000円以上なら送料無料、そうでなければ送料500円を追加

5. 最終的な支払い金額を表示

**実行例:**
```
商品1: りんご 150円 x 5個 = 750円
商品2: バナナ 200円 x 10個 = 2000円
小計: 2750円
送料: 500円
合計: 3250円
```

<details>
<summary>解答例を見る</summary>

```javascrip
const product1 = {
  name: "りんご",
  price: 150,
  quantity: 5
};

const product2 = {
  name: "バナナ",
  price: 200,
  quantity: 10
};

const subtotal1 = product1.price * product1.quantity;

const subtotal2 = product2.price * product2.quantity;

const subtotal = subtotal1 + subtotal2;

const shippingFee = subtotal >= 10000 ? 0 : 500;
const total = subtotal + shippingFee;

console.log(`商品1: ${product1.name} ${product1.price}円 x ${product1.quantity}個 = ${subtotal1}円`);
console.log(`商品2: ${product2.name} ${product2.price}円 x ${product2.quantity}個 = ${subtotal2}円`);
console.log(`小計: ${subtotal}円`);
console.log(`送料: ${shippingFee}円`);
console.log(`合計: ${total}円`);
```
</details>

## 📝 今日のまとめ

### 学んだこと


- ✅ `const` と `let` の使い方

- ✅ JavaScript の基本的なデータ型

- ✅ 演算子の種類と使い方

- ✅ テンプレートリテラル

- ✅ `console.log()` での出力

### Flutter との主な違い

| JavaScript | Dart (Flutter) |
|-----------|---------------|
| `const` | `final` |
| 動的型付け | 静的型付け |
| `===` で厳密比較 | `==` で比較 |
| テンプレートリテラル \`${}\` | 文字列補間 `${}` |

## 🔜 次回予告

**Day 2: 制御構文**

- if/else 文

- switch 文

- for/while ループ

- Flutter の制御構文との比較

---

お疲れ様でした！明日も頑張りましょう 🎉

[← README に戻る](../README.md) | [Day 2 へ進む →](day02.md)
