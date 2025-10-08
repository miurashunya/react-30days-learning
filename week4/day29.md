# Day 29: テストとアクセシビリティチェック - ユニット・統合・E2E とアクセシビリティ

## 📚 学習目標 (1〜2時間)

- コンポーネント単体テストと Hooks のテストの書き方  
- 統合テスト・E2E テストの役割と簡単な実装例  
- アクセシビリティ（a11y）チェックの基礎と自動化ツールの使い方  
- テスト戦略（どれをいつ書くか）の立て方

## 理論（短く）

- ユニットテスト: ロジックや小さなコンポーネントの振る舞いを素早く検証  
- 統合テスト: コンポーネントの組み合わせやフローを検証（例: フォーム送信→リスト更新）  
- E2E: 実際のブラウザで主要なユーザーフローを検証（例: タスク追加→編集→削除）  
- アクセシビリティ: キーボード操作・スクリーンリーダー対応・適切なランドマークや aria 属性

## 推奨ツール

- ユニット/統合: Vitest + @testing-library/react（Jest とほぼ同等）  
- Hooks テスト: @testing-library/react-hooks / renderHook（または RTL の renderHook）  
- E2E: Playwright または Cypress  
- アクセシビリティ自動チェック: axe-core（@axe-core/react / jest-axe）や Playwright + axe  
- ライティング: MSW (Mock Service Worker) で外部 API をモック

## 実践例（短いコード）

### ユニットテスト（TodoForm）
```javascript
import { render, screen, fireEvent } from "@testing-library/react";
import { TodoForm } from "../components/TodoForm";

test("submits non-empty input", () => {
  const onAdd = vi.fn();
  render(<TodoForm onAdd={onAdd} />);
  fireEvent.change(screen.getByRole("textbox"), { target: { value: "task" } });
  fireEvent.click(screen.getByRole("button", { name: /追加/ }));
  expect(onAdd).toHaveBeenCalled();
});
```

### Hooks テスト（useTodos）
```javascript
import { renderHook, act } from "@testing-library/react-hooks";
import { useTodos } from "../hooks/useTodos";

test("add todo", () => {
  const { result } = renderHook(() => useTodos("testkey"));
  act(() => result.current.add({ text: "t" }));
  expect(result.current.todos.length).toBe(1);
});
```

### E2E（Playwright の概念）
- シナリオ: 起動 -> 入力欄に "task" を入力 -> 追加ボタン -> リストに表示確認
- Playwright でブラウザを起動し、セレクタで操作・アサートする

### アクセシビリティ自動チェック（jest-axe）
```javascript
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
test("a11y", async () => {
  const { container } = render(<App />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## テスト戦略（例）

1. まずは core ロジック（reducer, hooks）をユニットテスト  
2. 次に重要なコンポーネント（TodoForm, TodoList, TodoItem）を統合テストで検証  
3. 最後に E2E で主要フロー（追加→編集→削除）を確認  
4. CI にテストと a11y チェックを組み込む（PR 時の自動実行）

## アクセシビリティチェック項目（手動 & 自動）

- キーボード操作のみで全機能にアクセス可能か  
- ラベルや aria 属性が適切に設定されているか  
- コントラスト比が最低基準を満たしているか（Lighthouse）  
- スクリーンリーダーで意味が通るか（簡易チェック）

## 演習

1. TodoForm と TodoList のユニット/統合テストを追加する。  
2. Playwright で E2E テストを 1 本作成する（タスク追加→確認）。  
3. jest-axe を導入して a11y テストを追加し、CI で失敗させる設定を試す。

## 次へ

Day30: デプロイと振り返り（Netlify/Vercel を使った公開手順、振り返りテンプレート）を作成します。
