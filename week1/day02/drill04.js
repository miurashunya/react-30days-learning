const numbers = [23, 45, 12, 67, 34, 89, 15];

// TODO: 最大値と最小値を見つける
let max = numbers[0];
let min = numbers[0];

// TODO: ループで比較
for (const num of numbers) {
    if (num > max) max = num;
    if (num < min) min = num;
}

console.log(`最大値: ${max}`);
console.log(`最小値: ${min}`);