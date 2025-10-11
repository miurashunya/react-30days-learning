// 0: グー, 1: チョキ, 2: パー
const user = 0;
const computer = 1;

// TODO: 勝敗を判定して結果を出力
// ヒント: if 文または switch 文を使用
if (user === computer) {
    console.log("引き分け");
} else if ((user === 0 && computer === 1) || (user === 1 && computer === 2) || (user === 2 && computer === 0)) {
    console.log("勝ち");
} else {
    console.log("負け");
}
