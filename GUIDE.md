# 教材作成ガイド

このファイルは、残りの教材を作成する際のガイドラインです。

## 作成済みのファイル

✅ README.md - メインの学習ガイド

✅ progress.md - 学習進捗管理

✅ week1/day01.md - JavaScript 基礎（変数、データ型、演算子）

✅ week1/day02.md - 制御構文（if, switch, ループ）

## 未作成のファイル（作成が必要）

### Week 1: JavaScript 基礎

- [ ] week1/day03.md - 関数（関数宣言、アロー関数、スコープ）

- [ ] week1/day04.md - 配列とオブジェクト（メソッド、操作）

- [ ] week1/day05.md - ES6+ 機能（分割代入、スプレッド構文、テンプレートリテラル）

- [ ] week1/day06.md - 非同期処理（Promise、async/await）

- [ ] week1/day07.md - 開発環境構築（Node.js、npm、Vite）

### Week 2: React 基礎

- [ ] week2/day08.md - React 入門（JSX、最初のコンポーネント）

- [ ] week2/day09.md - コンポーネント（関数コンポーネントの詳細）

- [ ] week2/day10.md - Props（データの受け渡し）

- [ ] week2/day11.md - State（useState フック）

- [ ] week2/day12.md - イベントハンドリング（onClick、onChange）

- [ ] week2/day13.md - 条件付きレンダリング（表示/非表示の制御）

- [ ] week2/day14.md - リスト表示（map、key の重要性）

### Week 3: React 中級

- [ ] week3/day15.md - useEffect 基礎（副作用とライフサイクル）

- [ ] week3/day16.md - useEffect 応用（クリーンアップ、依存配列）

- [ ] week3/day17.md - フォーム処理（制御されたコンポーネント）

- [ ] week3/day18.md - フォーム検証（カスタムフック）

- [ ] week3/day19.md - useContext（グローバル状態管理）

- [ ] week3/day20.md - useReducer（複雑な状態管理）

- [ ] week3/day21.md - カスタムフック（コードの再利用）

### Week 4: 実践プロジェクト

- [ ] week4/day22.md - React Router（ページ遷移の実装）

- [ ] week4/day23.md - API 連携（fetch/axios）

- [ ] week4/day24.md - エラーハンドリング（ローディング、エラー処理）

- [ ] week4/day25.md - スタイリング（CSS Modules / Styled Components）

- [ ] week4/day26.md - パフォーマンス最適化（useMemo、useCallback）

- [ ] week4/day27-28.md - 最終プロジェクト Part 1-2（Todo アプリ作成）

- [ ] week4/day29.md - 最終プロジェクト Part 3（機能追加と改善）

- [ ] week4/day30.md - まとめ（ベストプラクティス）

## 各教材ファイルの構成

各日の教材ファイルは以下の構成で作成してください：

```markdown
# Day X: タイトル

## 📚 学習目標 (10-15分)

- その日に学ぶ内容の概要

## 📖 理論解説

- 概念の説明

- Flutter (Dart) との比較

- コード例

## 💻 コード例 (20-30分)

- 実践的な例を3-4個

## ✏️ 演習問題 (30-45分)

- 4つ程度の演習問題

- 解答例は <details> タグで隠す

## 🎯 ミニチャレンジ

- その日の総合的な課題

## 📝 今日のまとめ

- 学んだことのリスト

- ベストプラクティス

## 🔜 次回予告

- 次の日の内容の簡単な紹介
```

## React 教材の重要ポイント

### Week 2-4 で重視すること


1. **Flutter との比較を明確に**
   - React のコンポーネント = Flutter の Widge
   - Props = Widget のコンストラクタパラメータ
   - State = StatefulWidget の state
   - useEffect = initState/dispose


2. **実践的なコード例**
   - 動作するコードを提供
   - コメントで説明を追加
   - よくあるエラーとその対処法


3. **段階的な学習**
   - 簡単な例から始める
   - 徐々に複雑な例へ
   - 前の日の知識を活用


4. **演習問題の工夫**
   - 実際のアプリ開発に近い課題
   - 段階的な難易度
   - 解答例は複数のアプローチを示す

## プロジェクトファイルの構成

### exercises/ ディレクトリ
各週の演習用のサンプルコードを配置

### projects/ ディレクトリ
Week 4 の最終プロジェクト用のテンプレートを配置

## 次のステップ

残りの教材を作成する際は、このガイドを参考にしながら：


1. Day 3-7（Week 1の残り）を作成

2. Day 8-14（Week 2）を作成

3. Day 15-21（Week 3）を作成

4. Day 22-30（Week 4）を作成

5. 各週の演習用サンプルコードを作成

6. 最終プロジェクトのテンプレートを作成

## 品質チェックリスト

各教材ファイルを作成したら、以下を確認：


- [ ] Flutter との比較がある

- [ ] 実践的なコード例が3つ以上

- [ ] 演習問題が4つ程度

- [ ] 解答例がある

- [ ] ミニチャレンジがある

- [ ] ナビゲーションリンクが正しい

- [ ] コードが動作する（実際にテスト）

- [ ] 誤字脱字がない

- [ ] 学習時間の目安が適切

---

このガイドに従って、質の高い教材を作成しましょう！
