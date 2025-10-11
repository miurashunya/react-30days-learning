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