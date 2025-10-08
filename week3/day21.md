# Day 21: テストとデバッグ - コンポーネント・フックのテスト

## 📚 学習目標 (1〜2時間)

- React コンポーネントのユニットテストと統合テストの基礎
- Hooks のテスト（renderHook）
- レンダリング・再レンダリングの問題のデバッグ手法
- テスト対象の設計（純粋関数化と副作用の分離）

## 📖 理論解説

### ツールチェイン
- 主に React Testing Library + Jest（または Vitest）を想定
- Hooks のテストには @testing-library/react-hooks（または @testing-library/react の renderHook）を利用

### コンポーネントテストの基本
- ユーザー視点で検証（画面に何が表示されるか、ユーザー操作で期待通り変化するか）
- モックを必要最小限に留める（外部 API 等は fetch のモックなど）

```javascript
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("increments", () => {
  render(<App />);
  fireEvent.click(screen.getByText("increment"));
  expect(screen.getByText(/count:/)).toHaveTextContent("1");
});
```

### Hooks のテスト
- renderHook を使うと Hooks 単体を簡単にテストできる
```javascript
import { renderHook, act } from "@testing-library/react-hooks";
import { useToggle } from "./useToggle";

test("toggle", () => {
  const { result } = renderHook(() => useToggle(false));
  act(() => result.current[1]());
  expect(result.current[0]).toBe(true);
});
```

### 非同期テストとタイムアウト
- async/await と waitFor を組み合わせる
- タイマーを使うテストは fake timers を使うと安定

### デバッグ技法
- コンポーネントの再レンダリング回数を確認（why-did-you-render や console.log）
- React DevTools の Profiler を使ってレンダリングのボトルネックを特定
- テストで失敗する場合はテスト対象の副作用（useEffect 等）をモックして隔離する

## 💻 コード例 (20-30分)

### 例1: コンポーネントの簡単なレンダリングテスト
```javascript
test("renders list", () => {
  render(<List items={["a","b"]} />);
  expect(screen.getByText("a")).toBeInTheDocument();
});
```

### 例2: 非同期のデータ取得をテスト
```javascript
test("fetches data", async () => {
  global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve([1,2]) }));
  render(<DataLoader />);
  expect(await screen.findByText("1")).toBeInTheDocument();
});
```

## ✏️ 演習問題 (30-45分)

1. useToggle のユニットテストを書く（renderHook 使用）。  
2. ContactForm のバリデーションのユニットテストを書く（入力エラーが検出されるか確認）。  
3. 非同期のデータ取得コンポーネントをテストし、モックした fetch を使って成功/失敗パターンを検証する。

## 📝 今日のまとめ

- テストは副作用を分離して純粋なロジックを増やすことで容易になる  
- Hooks は renderHook で単体テスト可能  
- レンダリングの問題は Profiler やログで原因を特定する

## 🔜 次週予告

Week 4（Day 22-30）では実践プロジェクトを作りながら学んだ内容を統合します。

[← Day 20](day20.md) | [README に戻る](../README.md)
