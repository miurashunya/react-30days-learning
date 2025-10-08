# Day 30: デプロイと振り返り - 公開手順と振り返りテンプレート

## 📚 学習目標 (1〜2時間)

- アプリをビルドして Netlify / Vercel に公開する手順を理解する  
- CI（GitHub Actions）で自動ビルド・テスト・デプロイを設定する基本  
- プロジェクトの振り返り（レトロスペクティブ）を行い、次の改善項目を整理する

## ⚙️ ビルド（Vite / React）

```bash
# 開発モード
npm run dev

# 本番ビルド
npm run build

# build 出力は通常 dist/（Vite のデフォルト）
```

- build 成功後、dist/（または build/）を静的ホスティングに配置します。
- 環境変数（API エンドポイントなど）が必要な場合はビルド環境に設定してください。

## 📦 Netlify にデプロイする（簡単手順）

1. GitHub にリポジトリを push。  
2. Netlify にログイン → New site from Git → GitHub を選択。  
3. ビルドコマンド: `npm run build`、公開ディレクトリ: `dist` を設定してデプロイ。  
4. 必要なら環境変数は Site settings → Build & deploy → Environment で設定。  
5. ドメイン設定、HTTPS（自動）を確認。

## 🚀 Vercel にデプロイする（簡単手順）

1. GitHub にリポジトリを push。  
2. Vercel にログイン → Import Project → GitHub を選択。  
3. Framework の自動検出で Vite を選び、ビルドコマンド `npm run build`、Output Directory `dist` を確認。  
4. 環境変数は Project Settings → Environment Variables で設定。  
5. デプロイが成功するとプレビュー URL / 本番 URL が発行される。

## 🔁 CI の簡易例（GitHub Actions）

- 目的: Push/PR 時にテスト + build を実行し、成功したら本番にデプロイ（Netlify/Vercel へは専用 Action を利用）

```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  test-and-build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "18"
      - run: npm ci
      - run: npm test
      - run: npm run build
```

- Netlify/Vercel は GitHub 連携で自動デプロイすることが一般的です（専用の Action を使ってより細かく制御可能）。

## 🔐 環境変数とシークレット

- API キーや外部サービスのトークンはソース管理に置かない。ホスティングサービスの環境変数機能を使う。  
- ローカル開発では `.env` ファイル（.gitignore に登録）を使う（例: VITE_API_URL）。

## 📣 モニタリングとパフォーマンス

- Lighthouse でパフォーマンス／アクセシビリティ／ベストプラクティスを測定する。  
- Sentry や LogRocket 等でランタイムエラーを収集するのが推奨。

## 📝 振り返りテンプレート（Retrospective）

- 期間: Week4（Day22-30）／プロジェクト期間
- 参加者: チームメンバー名

1. 何がうまくいったか（Keep）
   - 例: カスタム Hook の抽出でコンポーネントがシンプルになった。
2. 何がうまくいかなかったか（Problem）
   - 例: 初期のリンティングルールで手戻りが多かった。
3. 次に試すこと（Try）
   - 例: CI に a11y テストを追加、PR テンプレートを導入する。
4. アクションアイテム（担当者・期限付き）
   - 例: デプロイ用のドメイン設定 -> @alice -> 3日以内

## ✅ リリースチェックリスト（短縮版）

- [ ] 全テストが CI でパスしている  
- [ ] a11y 自動チェックがパスしている（jest-axe / axe）  
- [ ] 環境変数が正しく設定されている  
- [ ] 本番ビルドをローカルで確認した（`npm run build` → `serve`）  
- [ ] デプロイ後に主要フローを手動で確認（追加・編集・削除）

## おわりに

これで 30 日分の教材が揃いました。必要なら以下を追加で作成します:

- 各日付の練習問題の解答ファイル（answers/）  
- CI / GitHub Actions のテンプレートファイル自動生成  
- デプロイ後の README に公開 URL を追記する自動手順

[← Day 29](day29.md) | [README に戻る](../README.md)
