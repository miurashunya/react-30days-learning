# Day 2: 制御構文 - if, switch, ループ

## 📚 学習目標 (10-15分)

今日は JavaScript の制御構文を学びます。プログラムの流れを制御する重要な概念です。

### 今日学ぶこと


- if/else 文による条件分岐

- switch 文

- for ループ

- while ループ

- break と continue

## 📖 理論解説

### 1. if/else 文


```javascrip
// 基本的な if 文
const age = 20;

if (age >= 20) {
  console.log("成人です");
}

// if-else
if (age >= 20) {
  console.log("成人です");
} else {
  console.log("未成年です");
}

// if-else if-else
const score = 85;

if (score >= 90) {
  console.log("優秀");
} else if (score >= 70) {
  console.log("良好");
} else if (score >= 60) {
  console.log("合格");
} else {
  console.log("不合格");
}
```

**Flutter (Dart) との比較:**
```dar
// Dart も同じ構文
if (age >= 20) {
  print("成人です");
} else {
  print("未成年です");
}
```

### 2. 三項演算子


```javascrip
// シンプルな条件式
const age = 20;
const status = age >= 20 ? "成人" : "未成年";
console.log(status); // "成人"

// ネストも可能（ただし読みにくくなるので注意）
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
```

### 3. switch 文


```javascrip
const day = "月曜日";

switch (day) {
  case "月曜日":
    console.log("週の始まり");
    break;
  case "金曜日":
    console.log("もうすぐ週末");
    break;
  case "土曜日":
  case "日曜日":
    console.log("週末です");
    break;
  default:
    console.log("平日です");
}
```

**ポイント:**

- `break` を忘れると次のケースも実行される（フォールスルー）

- 複数のケースで同じ処理をする場合は連続して書ける

### 4. for ループ


```javascrip
// 基本的な for ループ
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// 配列のループ
const fruits = ["りんご", "バナナ", "オレンジ"];

// 従来の方法
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for...of（推奨）
for (const fruit of fruits) {
  console.log(fruit);
}

// for...in（オブジェクトのキーをループ）
const user = { name: "太郎", age: 25 };
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
```

**Flutter (Dart) との比較:**
```dar
// Dar
for (var i = 0; i < 5; i++) {
  print(i);
}

// Dart の for-in
List<String> fruits = ["りんご", "バナナ", "オレンジ"];
for (var fruit in fruits) {
  print(fruit);
}

// forEach メソッド
fruits.forEach((fruit) => print(fruit));
```

### 5. while と do-while ループ


```javascrip
// while ループ
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// do-while ループ（最低1回は実行される）
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 3);
```

### 6. break と continue


```javascrip
// break: ループを抜ける
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // ループを終了
  }
  console.log(i); // 0, 1, 2, 3, 4
}

// continue: 次の繰り返しへ
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // i=2 の時はスキップ
  }
  console.log(i); // 0, 1, 3, 4
}
```

## 💻 コード例 (20-30分)

### 例1: 成績判定プログラム


```javascrip
const score = 75;
let grade;
let message;

if (score >= 90) {
  grade = "A";
  message = "優秀です！";
} else if (score >= 80) {
  grade = "B";
  message = "良好です";
} else if (score >= 70) {
  grade = "C";
  message = "合格です";
} else if (score >= 60) {
  grade = "D";
  message = "ギリギリ合格";
} else {
  grade = "F";
  message = "不合格です";
}

console.log(`点数: ${score}点`);
console.log(`評価: ${grade}`);
console.log(message);
```

### 例2: 曜日による処理


```javascrip
const today = new Date().getDay(); // 0(日)〜6(土)
let dayName;
let schedule;

switch (today) {
  case 0:
    dayName = "日曜日";
    schedule = "休日";
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    dayName = "平日";
    schedule = "仕事";
    break;
  case 6:
    dayName = "土曜日";
    schedule = "休日";
    break;
  default:
    dayName = "不明";
    schedule = "エラー";
}

console.log(`今日は${dayName}です`);
console.log(`予定: ${schedule}`);
```

### 例3: 九九の表


```javascrip
console.log("=== 九九の表 ===");

for (let i = 1; i <= 9; i++) {
  let row = "";
  for (let j = 1; j <= 9; j++) {
    const result = i * j;
    row += `${result}`.padStart(4, " ");
  }
  console.log(row);
}
```

### 例4: 配列の要素をフィルタリング


```javascrip
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

for (const num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

console.log("偶数:", evenNumbers); // [2, 4, 6, 8, 10]
```

## ✏️ 演習問題 (30-45分)

### 演習 1: じゃんけんゲーム


ユーザーの手とコンピュータの手を比較して勝敗を判定してください。

```javascrip
// 0: グー, 1: チョキ, 2: パー
const user = 0;
const computer = 1;

// TODO: 勝敗を判定して結果を出力
// ヒント: if 文または switch 文を使用
```

<details>
<summary>解答例を見る</summary>

```javascrip
const user = 0; // グー
const computer = 1; // チョキ

const hands = ["グー", "チョキ", "パー"];

console.log(`あなた: ${hands[user]}`);
console.log(`コンピュータ: ${hands[computer]}`);

if (user === computer) {
  console.log("引き分け");
} else if (
  (user === 0 && computer === 1) ||
  (user === 1 && computer === 2) ||
  (user === 2 && computer === 0)
) {
  console.log("あなたの勝ち！");
} else {
  console.log("コンピュータの勝ち");
}
```
</details>

### 演習 2: FizzBuzz


1から30までの数字を出力し、以下のルールを適用してください：

- 3の倍数なら "Fizz"

- 5の倍数なら "Buzz"

- 両方の倍数なら "FizzBuzz"

- それ以外は数字そのまま

```javascrip
// TODO: for ループで1から30まで処理
for (let i = 1; i <= 30; i++) {
  // ここに条件を書く
}
```

<details>
<summary>解答例を見る</summary>

```javascrip
for (let i = 1; i <= 30; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```
</details>

### 演習 3: 配列の合計と平均


配列の数値の合計と平均を計算してください。

```javascrip
const scores = [85, 92, 78, 90, 88];

// TODO: 合計を計算
let sum = 0;

// TODO: 平均を計算

// TODO: 結果を出力
```

<details>
<summary>解答例を見る</summary>

```javascrip
const scores = [85, 92, 78, 90, 88];

let sum = 0;
for (const score of scores) {
  sum += score;
}

const average = sum / scores.length;

console.log(`点数: ${scores.join(", ")}`);
console.log(`合計: ${sum}点`);
console.log(`平均: ${average.toFixed(1)}点`);
```
</details>

### 演習 4: 最大値と最小値を見つける


配列から最大値と最小値を見つけてください（Math.max/min を使わずに）。

```javascrip
const numbers = [23, 45, 12, 67, 34, 89, 15];

// TODO: 最大値と最小値を見つける
let max = numbers[0];
let min = numbers[0];

// TODO: ループで比較

console.log(`最大値: ${max}`);
console.log(`最小値: ${min}`);
```

<details>
<summary>解答例を見る</summary>

```javascrip
const numbers = [23, 45, 12, 67, 34, 89, 15];

let max = numbers[0];
let min = numbers[0];

for (const num of numbers) {
  if (num > max) {
    max = num;
  }
  if (num < min) {
    min = num;
  }
}

console.log(`配列: ${numbers.join(", ")}`);
console.log(`最大値: ${max}`);
console.log(`最小値: ${min}`);
```
</details>

## 🎯 ミニチャレンジ

**学生成績管理システム**

以下の要件を満たすプログラムを作成してください：


1. 複数の学生の成績を配列で管理（オブジェクトの配列）

2. 各学生の平均点を計算

3. 平均点に基づいて評価（A/B/C/D/F）を付与

4. 全学生の情報を表形式で出力

5. クラス全体の平均点を計算

```javascrip
const students = [
  { name: "太郎", scores: [85, 90, 78] },
  { name: "花子", scores: [92, 88, 95] },
  { name: "次郎", scores: [70, 75, 68] }
];

// TODO: 実装
```

<details>
<summary>解答例を見る</summary>

```javascrip
const students = [
  { name: "太郎", scores: [85, 90, 78] },
  { name: "花子", scores: [92, 88, 95] },
  { name: "次郎", scores: [70, 75, 68] }
];

console.log("=== 成績一覧 ===");
let classTotal = 0;

for (const student of students) {
  // 各学生の平均点を計算
  let sum = 0;
  for (const score of student.scores) {
    sum += score;
  }
  const average = sum / student.scores.length;
  classTotal += average;

  // 評価を決定
  let grade;
  if (average >= 90) grade = "A";
  else if (average >= 80) grade = "B";
  else if (average >= 70) grade = "C";
  else if (average >= 60) grade = "D";
  else grade = "F";

  // 結果を出力
  console.log(`${student.name}: ${student.scores.join(", ")} → 平均 ${average.toFixed(1)}点 (${grade})`);
}

const classAverage = classTotal / students.length;
console.log(`\nクラス平均: ${classAverage.toFixed(1)}点`);
```
</details>

## 📝 今日のまとめ

### 学んだこと


- ✅ if/else 文と三項演算子

- ✅ switch 文の使い方

- ✅ for ループ（従来型、for...of、for...in）

- ✅ while と do-while ループ

- ✅ break と continue

### ベストプラクティス


- 配列のループには `for...of` を使う

- 比較には `===` を使う（厳密比較）

- switch 文には `break` を忘れずに

- 複雑な条件は関数に分割する

## 🔜 次回予告

**Day 3: 関数**

- 関数の宣言方法

- アロー関数

- スコープとクロージャ

- 高階関数の基礎

---

お疲れ様でした！明日も頑張りましょう 🎉

[← Day 1](day01.md) | [README に戻る](../README.md) | [Day 3 へ進む →](day03.md)
