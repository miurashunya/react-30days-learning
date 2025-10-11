const scores = [85, 92, 78, 90, 88];

// TODO: 合計を計算
let sum = 0;

// TODO: 平均を計算
for (const score of scores) sum += score;
const average = sum / scores.length;

// TODO: 結果を出力
console.log(`合計: ${sum}`);
console.log(`平均: ${average}`);