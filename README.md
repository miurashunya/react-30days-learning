# Flutter と Windows アプリ開発経験者のための React 学習教材

## 📚 学習の進め方

- **1日の学習時間**: 1〜2時間
- **期間**: 30日間
- **前提知識**: プログラミング経験あり (Flutter/Windows アプリ開発)
- **JavaScript 経験**: 不要（基礎から学習します）

## 🗓️ カリキュラム

### Week 1: JavaScript 基礎 (Day 1-7)

| Day | トピック | 内容 |
|-----|---------|------|
| 1 | [JavaScript 基礎](week1/day01.md) | 変数、データ型、演算子 |
| 2 | [制御構文](week1/day02.md) | if, switch, ループ |
| 3 | [関数](week1/day03.md) | 関数宣言、アロー関数、スコープ |
| 4 | [配列とオブジェクト](week1/day04.md) | 基本操作とメソッド |
| 5 | [ES6+ 機能](week1/day05.md) | 分割代入、スプレッド構文など |
| 6 | [非同期処理](week1/day06.md) | Promise、async/await |
| 7 | [開発環境構築](week1/day07.md) | Node.js、npm、Vite |

### Week 2: React 基礎 (Day 8-14)

| Day | トピック | 内容 |
|-----|---------|------|
| 8 | [React 入門](week2/day08.md) | JSX、最初のコンポーネント |
| 9 | [コンポーネント](week2/day09.md) | コンポーネント分割・再利用 |
| 10 | [Props](week2/day10.md) | データの受け渡し |
| 11 | [State](week2/day11.md) | useState フック |
| 12 | [イベントハンドリング](week2/day12.md) | onClick、onChange など |
| 13 | [条件付きレンダリング](week2/day13.md) | 表示/非表示の制御 |
| 14 | [リスト表示](week2/day14.md) | map、key の重要性 |

### Week 3: React 中級 (Day 15-21)

| Day | トピック | 内容 |
|-----|---------|------|
| 15 | [useEffect 基礎](week3/day15.md) | 副作用とライフサイクル |
| 16 | [useEffect 応用](week3/day16.md) | クリーンアップ、依存配列 |
| 17 | [フォーム処理](week3/day17.md) | 制御コンポーネント、バリデーション |
| 18 | [カスタム Hooks](week3/day18.md) | 再利用ロジックの抽出 |
| 19 | [コンテキストと状態共有](week3/day19.md) | Context API、useContext |
| 20 | [useReducer と状態管理](week3/day20.md) | 複雑な state の扱い方 |
| 21 | [テストとデバッグ](week3/day21.md) | コンポーネント・Hook のテスト |

### Week 4: 実践プロジェクト (Day 22-30)

| Day | トピック | 内容 |
|-----|---------|------|
| 22 | [プロジェクトキックオフ](week4/day22.md) | プロジェクト設計、MVP 定義 |
| 23 | [タスク一覧表示](week4/day23.md) | List / ListItem の実装 |
| 24 | [タスク追加フォーム](week4/day24.md) | 制御コンポーネント、localStorage 永続化 |
| 25 | [編集・削除・完了トグル](week4/day25.md) | 編集フロー、削除確認、完了切替 |
| 26 | [フィルタ・検索・並べ替え](week4/day26.md) | 検索（debounce）、フィルタ、ソート |
| 27 | [カスタム Hooks](week4/day27.md) | useLocalStorage / useTodos の実装 |
| 28 | [Context / useReducer リファクタ](week4/day28.md) | Provider による状態共有 |
| 29 | [テストとアクセシビリティチェック](week4/day29.md) | ユニット・統合・E2E と a11y |
| 30 | [デプロイと振り返り](week4/day30.md) | ビルド・公開・振り返りテンプレート |

## 🎯 各日の構成

- 📚 理論解説 (10-15分)
- 💻 コード例 (20-30分)
- ✏️ 演習問題 (30-45分)
- 🎯 ミニチャレンジ（理解度チェック）

## 🛠️ 必要な環境

1. Node.js (v18 以上 推奨)  
2. VS Code（推奨）  
3. Git  
4. ブラウザ（Chrome / Firefox 推奨）

## 📖 学習のヒント

### Flutter 開発者向けの対比（例）

- React のコンポーネント = Flutter の Widget  
- Props = Widget のコンストラクタパラメータ  
- State (useState) = StatefulWidget の state  
- useEffect = initState / dispose に相当  
- Context = Provider パターン

### 効果的な学習法

1. 毎日コードを書く（手を動かす）  
2. 小さく始める（まずは動くものを作る）  
3. エラーから学ぶ（エラーメッセージを読む）  
4. 前日の復習を行う（5分）  
5. コミュニティや Issues を活用する

## 🚀 開始方法

1. このリポジトリをクローン:

```bash
git clone https://github.com/yourusername/react-30days-learning.git
cd react-30days-learning
```

2. Day 1 から開始:

```bash
# エディタで week1/day01.md を開いて学習を始めてください
code week1/day01.md
```

3. 各日の指示に従って進める（ファイル内の演習を実行してみてください）

## 📝 進捗管理

- progress.md を使って学習の進捗を記録できます

## 🤝 貢献

- 質問・改善提案は Issues でお願いします

## 📄 ライセンス

MIT License

---

**Let's start your React journey! 🎉**

Day 1 から始めましょう → [week1/day01.md](week1/day01.md)
