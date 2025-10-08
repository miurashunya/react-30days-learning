# Day 22: プロジェクトキックオフ - 実践プロジェクトの計画と初期セットアップ

## 📚 学習目標 (1〜2時間)

- Week4 の実践プロジェクトの目的とスコープを決める  
- プロジェクトの主要機能を定義する（MVP）  
- 開発環境を素早く立ち上げる手順を理解する（Vite / React）  
- リポジトリ構成、フォルダ構成、タスク分割の方針を決める

## 🎯 プロジェクト提案（例）
- プロジェクト名: "TaskFlow"（シンプルなタスク管理アプリ）  
- MVP 機能:
  - タスク一覧 / タスク追加 / 編集 / 削除
  - 完了トグルとフィルタ（全件・未完了・完了）
  - 永続化（localStorage）または簡易 API（fetch モック）
  - 簡単な認証（ローカルの擬似ユーザ）
  - レスポンシブな UI とアクセシビリティ基準の基礎

## 🗂️ 推奨フォルダ構成
```
src/
  components/
  pages/
  hooks/
  context/
  services/
  styles/
  App.jsx
  main.jsx
public/
tests/
```

## ⚙️ 初期セットアップ（Vite + React）
1. プロジェクト作成:
```bash
npm create vite@latest taskflow -- --template react
cd taskflow
npm install
```
2. 開発サーバー起動:
```bash
npm run dev
```
3. 推奨パッケージ:
- 状態管理: まずは React の useReducer/useContext で十分
- テスト: vitest / @testing-library/react
- Lint/Format: eslint, prettier
- 可能なら: react-router, react-query（オプション）

## 🛠 最初のタスク（MVP を短期で出すための順序）
- Day22: プロジェクト作成・README 更新・基本ルーティング作成
- Day23: タスク一覧表示コンポーネント実装（ローカルダミーデータ）
- Day24: タスク追加フォーム（制御コンポーネント）とローカル永続化
- Day25: タスク編集・削除・完了トグル
- Day26: フィルタ・検索・並べ替え
- Day27: カスタム Hooks（useLocalStorage, useTodos）
- Day28: Context / useReducer による状態管理へリファクタ
- Day29: テスト（ユニット・統合）とアクセシビリティチェック
- Day30: デプロイ手順と振り返り（Netlify/Vercel）

## ✅ 初期ドキュメント（作業メモ）
- README にプロジェクト目標と作業手順を追加
- ISSUE / TODO リストを作る（例: GitHub Projects）

## 🔜 次のアクション
- すぐに Day23–Day30 の教材（実装手順 + コードスニペット）を順次作成しますか？  
- あるいはこの Day22 の仕様を調整しますか？

[← Week3 に戻る](../week3/day21.md) | [README に戻る](../README.md)
