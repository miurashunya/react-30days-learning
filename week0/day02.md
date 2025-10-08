# Day 0-2: DOM vs BOM・HTML/CSS 実践（タグ・Flexbox・Grid）と Flutter 風 UI の再現

## 📚 学習目標 (20-30分)

- DOM と BOM の違いを具体的なコード例で理解する
- よく使う HTML タグと属性の実例を確認する
- Flexbox と CSS Grid の実践例でレイアウトを作る
- 簡単な Flutter 風 UI を HTML + CSS で再現する演習を行う

## DOM と BOM の違い（実例）

- DOM（Document Object Model）
  - document を通して HTML 要素を操作する。例: 要素取得・内容更新・イベント登録
  - 例:
    ```javascript
    // DOM の例
    const el = document.querySelector('.title');
    el.textContent = '新しいタイトル';
    el.classList.add('is-active');
    el.addEventListener('click', () => console.log('clicked'));
    ```

- BOM（Browser Object Model）
  - window や navigator、location、history といったブラウザ環境に関するオブジェクト群
  - 例:
    ```javascript
    // BOM の例
    console.log(window.location.href); // 現在の URL
    history.pushState({page:2}, 'title', '/page2'); // 履歴操作
    alert('これは BOM のメソッドによるダイアログです');
    ```

ポイント: DOM は「文書（HTML）を表す模型」、BOM は「ブラウザ外郭（環境）へのアクセス手段」と覚える。

## HTML の代表的なタグとミニ例

- 見出し・段落・リンク:
  ```html
  <h1>見出し</h1>
  <p>文章の段落。<a href="https://example.com">リンク</a></p>
  ```
- リスト:
  ```html
  <ul>
    <li>項目 A</li>
    <li>項目 B</li>
  </ul>
  ```
- フォーム:
  ```html
  <form>
    <label for="name">名前</label>
    <input id="name" name="name" type="text" />
    <button type="submit">送信</button>
  </form>
  ```
- 画像:
  ```html
  <img src="avatar.png" alt="ユーザーの写真" width="120" />
  ```

アクセシビリティの基本: img の alt、label と input の関連、role / aria-* 属性の活用を忘れない。

## Flexbox 実践例

- 横並びのカード群を中央揃えで表示する例:
  ```html
  <div class="cards">
    <div class="card">A</div>
    <div class="card">B</div>
    <div class="card">C</div>
  </div>
  ```

  ```css
  .cards {
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: stretch;
  }
  .card {
    background: white;
    padding: 16px;
    border-radius: 8px;
    width: 200px;
  }
  ```

Flexbox は一方向（行または列）のレイアウトに強い。要素の伸縮や揃え方を柔軟に指定できる。

## CSS Grid 実践例

- 3列レイアウト（ヘッダー・サイド・メイン）:
  ```html
  <div class="layout">
    <header>Header</header>
    <aside>Sidebar</aside>
    <main>Main</main>
  </div>
  ```

  ```css
  .layout {
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "header header"
      "aside main";
    gap: 16px;
    height: 100vh;
  }
  header { grid-area: header; }
  aside { grid-area: aside; }
  main { grid-area: main; }
  ```

Grid は二次元レイアウト（行と列）に適しており、複雑なレイアウトを宣言的に定義できる。

## Flutter 風 UI を HTML + CSS で再現する（ハンズオン）

- 目標: AppBar + カード + アクションボタンの基本レイアウトを再現する。

HTML 構造例:
```html
<header class="appbar">My Flutter-like App</header>
<main class="stage">
  <div class="card">
    <h2>カードタイトル</h2>
    <p>内容</p>
    <div class="actions">
      <button class="primary">主要アクション</button>
      <button class="secondary">副アクション</button>
    </div>
  </div>
</main>
```

CSS（基本）:
```css
.appbar {
  height: 56px;
  background: linear-gradient(90deg,#6a11cb,#2575fc);
  color: white;
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-weight: 600;
  font-size: 18px;
}
.stage {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  background: #f0f2f7;
}
.card {
  width: 360px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(32,33,36,0.08);
}
.actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 12px;
}
button.primary {
  background: #2575fc;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
}
button.secondary {
  background: transparent;
  border: 1px solid #d0d7e6;
  padding: 8px 12px;
  border-radius: 6px;
}
```

演習タスク:
- この HTML/CSS を別ファイル（例: week0/flutter_ui.html）に保存してブラウザで比較する
- レスポンシブ対応: 幅が狭い場合は .card を 100% にして余白を作る

## まとめとチェックリスト

- [ ] DOM と BOM の違いを実際にコードで確認した
- [ ] 代表的な HTML タグと属性を使えるようになった
- [ ] Flexbox で横並びレイアウトを作れた
- [ ] CSS Grid で二次元レイアウトを作れた
- [ ] Flutter 風 UI を HTML + CSS で再現できた
