# Day 7: 開発環境構築 - Node.js, npm, Vite で React 開発を始める

## 📚 学習目標 (10-15分)

- Node.js と npm の確認・インストール
- Vite を使った軽量な React プロジェクトの作成
- 開発サーバー起動と基本的なファイル構成の理解

## 📖 理論解説

- Node.js はローカルで JavaScript を実行するランタイム。npm はパッケージマネージャ。
- Vite は軽量で高速な開発サーバーとバンドラー。React の学習用に手早く環境を作れる。
- 本日は Windows (cmd / PowerShell) を想定した手順を示す。既に Node.js がインストール済みであればバージョン確認のみ。

## 💻 手順（Windows のコマンド例）

1. Node.js と npm のバージョン確認
```bash
node -v
npm -v
```

2. グローバルインストールは不要。Vite でアプリを作る（プロジェクト名は例: my-app）
```bash
# npm からテンプレート作成（推奨）
npm create vite@latest my-app -- --template reac

# もしくは yarn を使う場合
# yarn create vite my-app --template reac
```

3. プロジェクトへ移動して依存をインストール
```bash
cd my-app
npm install
```

4. 開発サーバーを起動
```bash
npm run dev
# ブラウザで http://localhost:5173 を開く
```

5. エディタで主要ファイルを確認
- src/main.jsx（エントリポイント）
- src/App.jsx（ルートコンポーネント）
- index.html（Vite のテンプレート）

## ✏️ 最低限のファイル編集例

src/App.jsx を編集して動作確認：
```javascrip
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello React</h1>
      <p>count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
    </div>
  );
}
```

## 🎯 ミニチャレンジ

- Vite で作成したプロジェクトを起動し、ブラウザで動作を確認する
- src/App.jsx に簡単なカウンターを実装して動作確認する

## 📝 今日のまとめ

- Node.js / npm があれば Vite ですぐに React 開発を始められる
- 開発サーバーで素早くフィードバックを得られる（ホットリロード）
- 次週は React の基礎（コンポーネント、JSX、State）へ移行

[← Day 6](day06.md) | [README に戻る](../README.md)
