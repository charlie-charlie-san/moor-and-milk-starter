# 画像生成プロンプト & 差し替え管理 — Moor & Milk（全20枚）

ChatGPT イメージ2.0 用。各ブロックを **そのままコピペ → 1枚生成** できる。
生成した画像は下記の「保存先パス」のファイル名で `public/images/...` に置く。
全部そろったら一括でコード側を picsum → ローカルパスに差し替える（手順は末尾）。

---

## 使い方
1. 各画像の「プロンプト」コードブロックをコピーして ChatGPT に貼る（「イメージ2.0で作って」）。
2. 出てきた画像を、その項目の **保存先** のファイル名で保存。
3. 20枚そろったら末尾「差し替え手順」を実行（私に任せてもOK）。

## 共通スタイル（全画像で統一 — 既に各プロンプトに埋め込み済み）
> ナチュラルな自然光 / クリーム〜オフホワイトの背景 / 生成りリネンと無垢材のテーブル / 柔らかい影 / 素朴で温かい雰囲気 / ミニマルで余白の多い構図 / 実写風の高解像度フード写真 / **文字・ロゴ・透かしは入れない**

サイズ目安（イメージ2.0の対応比率）:
- 横長（ヒーロー・About・ブログ）→ **1536×1024**
- 正方形（商品）→ **1024×1024**
- 表示はCSSの`object-cover`で自動トリミングされるので、厳密な縦横比は不要。

---

## グループ1: 背景・店舗・雰囲気（2枚）

### 01. ヒーロー — `public/images/hero.png`
- 差し替え先: `src/components/Hero.tsx`（現状 picsum `moormilk-hero`） / サイズ 1536×1024（横長）
```
イギリスの片田舎にある小さなベーカリーの朝の食卓。無垢材のテーブルに、焼きたての丸いスコーンが数個と、湯気の立つミルクティーのカップ。生成りのリネン、淡いドライフラワー、バターのナイフ。自然光がやわらかく差し込み、暖色寄りでクリーム〜オフホワイトの落ち着いたトーン。余白の多いワイドな構図、実写風の高解像度フード写真。文字・ロゴ・透かしは入れない。
```

### 02. About（工房） — `public/images/about.png`
- 差し替え先: `src/components/About.tsx`（現状 picsum `moormilk-about`） / サイズ 1536×1024（横長）
```
素朴なベーカリー工房で、焼き上がったばかりのスコーンが天板に並んでいる様子。粉のついた木の作業台、リネンのクロス、手仕事の温かさが伝わるライフスタイル写真。自然光、クリーム色基調、柔らかい影、ミニマルで余白の多い構図。実写風の高解像度。文字・ロゴ・透かしは入れない。
```

---

## グループ2: 商品（15枚）すべて 1024×1024・正方形
差し替え先はすべて `src/data/products.ts` の各 `image`（現状 picsum シード）。
保存先: `public/images/products/<id>.png`

### 03. バターミルクスコーン — `public/images/products/buttermilk-scone.png`
- 現状シード: `mm-buttermilk`
```
素朴なイギリス風バターミルクスコーンを2〜3個、白い陶器の皿に盛った正方形のフード写真。表面はこんがり、ほろりと割れた断面が見える。生成りのリネンと無垢材のテーブル、自然光、クリーム色の背景、柔らかい影、余白多めのミニマルな俯瞰寄り構図。実写風・高解像度。文字・ロゴ・透かしは入れない。
```

### 04. 紅茶とオレンジピールのスコーン — `public/images/products/tea-orange-scone.png`
- 現状シード: `mm-teaorange`
```
オレンジピールが点々と練り込まれたスコーンを白い皿に盛った正方形のフード写真。脇に少量の紅茶葉と乾燥オレンジを添える。自然光、クリーム色の背景、生成りリネン、柔らかい影、ミニマルで余白の多い構図。実写風・高解像度。文字・ロゴ・透かしは入れない。
```

### 05. チョコ＆アーモンドのスコーン — `public/images/products/choco-almond-scone.png`
- 現状シード: `mm-chocoalmond`
```
チョコチャンクとローストアーモンドがごろっと見えるスコーンを白い皿に盛った正方形のフード写真。割れた断面からチョコが覗く。自然光、クリーム色の背景、無垢材のテーブル、柔らかい影、余白多めのミニマル構図。実写風・高解像度。文字・ロゴ・透かしは入れない。
```

### 06. 全粒粉のスコーン — `public/images/products/wholegrain-scone.png`
- 現状シード: `mm-wholegrain`
```
全粒粉の素朴な茶色いスコーンを2個、白い皿に盛った正方形のフード写真。ふすまの粒感、ざっくりした表面。自然光、クリーム色の背景、生成りリネン、柔らかい影、ミニマルで余白の多い構図。実写風・高解像度。文字・ロゴ・透かしは入れない。
```

### 07. 抹茶とホワイトチョコのスコーン（季節限定）— `public/images/products/matcha-white-scone.png`
- 現状シード: `mm-matcha`
```
鮮やかな抹茶色のスコーンに、白いホワイトチョコのかけらが覗く正方形のフード写真。上から抹茶パウダーを軽くふる。白い皿、自然光、クリーム色の背景、生成りリネン、柔らかい影、余白多めのミニマル構図。実写風・高解像度。文字・ロゴ・透かしは入れない。
```

### 08. あんバターのスコーンサンド（季節限定）— `public/images/products/anbutter-sand.png`
- 現状シード: `mm-anbutter`
```
横半分に切ったスコーンに、粒あんと厚切りの発酵バターを挟んだスコーンサンドの正方形フード写真。断面のあんことバターがしっかり見える。白い皿、自然光、クリーム色の背景、無垢材、柔らかい影、ミニマル構図。実写風・高解像度。文字・ロゴ・透かしは入れない。
```

### 09. いちごジャムのクロテッドサンド — `public/images/products/strawberry-sand.png`
- 現状シード: `mm-strawberry`
```
スコーンに自家製いちごジャムとたっぷりのクロテッドクリームを挟んだサンドの正方形フード写真。断面から赤いジャムと白いクリームが覗く。白い皿、自然光、クリーム色の背景、生成りリネン、柔らかい影、ミニマルで余白の多い構図。実写風・高解像度。文字・ロゴ・透かしは入れない。
```

### 10. ピスタチオチョコのスコーン（季節限定）— `public/images/products/pistachio-choco-scone.png`
- 現状シード: `mm-pistachio`
```
砕いたピスタチオとチョコレートがちりばめられたスコーンの正方形フード写真。緑のピスタチオが鮮やかに見える。白い皿、自然光、クリーム色の背景、無垢材のテーブル、柔らかい影、余白多めのミニマル構図。実写風・高解像度。文字・ロゴ・透かしは入れない。
```

### 11. 焦がしバターのフィナンシェ — `public/images/products/financier.png`
- 現状シード: `mm-financier`
```
金色に焼けた長方形のフィナンシェを数個、白い皿に並べた正方形のフード写真。表面のつやと香ばしい焼き色。自然光、クリーム色の背景、生成りリネン、柔らかい影、ミニマルで余白の多い構図。実写風・高解像度。文字・ロゴ・透かしは入れない。
```

### 12. レモンのマドレーヌ — `public/images/products/madeleine.png`
- 現状シード: `mm-madeleine`
```
貝殻型のレモンマドレーヌを数個、白い皿に盛った正方形のフード写真。こんがりした焼き色、脇にレモンの皮を少量。自然光、クリーム色の背景、無垢材、柔らかい影、ミニマル構図。実写風・高解像度。文字・ロゴ・透かしは入れない。
```

### 13. Moor クッキーアソート — `public/images/products/cookie-assort.png`
- 現状シード: `mm-cookie`
```
無地のクラフト紙のギフトボックスに、数種類の焼き菓子クッキーを詰め合わせた正方形の俯瞰フード写真。素朴で上品なギフトの雰囲気。生成りリネン、自然光、クリーム色の背景、柔らかい影、余白多めのミニマル構図。実写風・高解像度。文字・ロゴ・透かしは入れない。
```

### 14. ベイクドチョコレートケーキ — `public/images/products/baked-choco-cake.png`
- 現状シード: `mm-chococake`
```
濃厚なベイクドチョコレートケーキを、ホールとカット一切れで見せる正方形のフード写真。しっとりした断面。白い皿、自然光、クリーム色の背景、無垢材のテーブル、柔らかい影、ミニマル構図。実写風・高解像度。文字・ロゴ・透かしは入れない。
```

### 15. ロイヤルミルクティー（茶葉）— `public/images/products/royal-milktea.png`
- 現状シード: `mm-royaltea`
```
紅茶葉が入った無地のクラフト袋と、淹れたてのロイヤルミルクティーのカップを並べた正方形のフード写真。茶葉が少しこぼれている。自然光、クリーム色の背景、生成りリネン、柔らかい影、余白多めのミニマル構図。実写風・高解像度。文字・ロゴ・透かしは入れない。
```

### 16. ほうじ茶ミルクティー（茶葉）— `public/images/products/houji-milktea.png`
- 現状シード: `mm-houjitea`
```
香ばしいほうじ茶の茶葉と、ほうじ茶ミルクティーのカップを並べた正方形のフード写真。やや琥珀色のミルクティー。自然光、クリーム色の背景、無垢材のテーブル、柔らかい影、ミニマルで余白の多い構図。実写風・高解像度。文字・ロゴ・透かしは入れない。
```

### 17. オリジナルトートバッグ — `public/images/products/tote-bag.png`
- 現状シード: `mm-tote`
```
無地の生成りキャンバストートバッグを、白い壁の木製フックに掛けた正方形の物撮り写真。ロゴやプリントは入れない無地。自然光、クリーム色の背景、柔らかい影、ミニマルで余白の多い構図。実写風・高解像度。文字・透かしは入れない。
```

---

## グループ3: ブログ Journal（3枚）すべて 1536×1024・横長
差し替え先はすべて `src/data/posts.ts` の各 `image`。
保存先: `public/images/journal/<id>.png`

### 18. スコーンを温め直す — `public/images/journal/scone-warmup.png`
- 現状シード: `mm-journal1`
```
オーブントースターから出したばかりの温かいスコーンの横長ライフスタイル写真。ほのかに湯気が立ち、家庭的で温かい雰囲気。木のテーブル、リネン、自然光、クリーム色基調、柔らかい影、余白の多い構図。実写風・高解像度。文字・ロゴ・透かしは入れない。
```

### 19. ミルクティーとのペアリング — `public/images/journal/milktea-pairing.png`
- 現状シード: `mm-journal2`
```
スコーンと2種類のミルクティーのカップを並べた横長の俯瞰ライフスタイル写真。ティーポットと茶葉も少し。自然光、クリーム色基調、無垢材のテーブル、生成りリネン、柔らかい影、ミニマルで余白の多い構図。実写風・高解像度。文字・ロゴ・透かしは入れない。
```

### 20. ラッピングの工夫 — `public/images/journal/gift-wrapping.png`
- 現状シード: `mm-journal3`
```
季節の包装紙と麻ひも、ドライフラワーで包んだ素朴なギフトボックスの横長ライフスタイル写真。手仕事の温かさ。自然光、クリーム色基調、木のテーブル、柔らかい影、余白の多いミニマル構図。実写風・高解像度。文字・ロゴ・透かしは入れない。
```

---

## 差し替え対応表（管理用サマリ）

| No | 保存先ファイル | 差し替えるコード | 現状の picsum シード |
|----|----------------|------------------|----------------------|
| 01 | `public/images/hero.png` | `src/components/Hero.tsx` の `src` | `moormilk-hero` |
| 02 | `public/images/about.png` | `src/components/About.tsx` の `src` | `moormilk-about` |
| 03 | `public/images/products/buttermilk-scone.png` | `products.ts` `buttermilk-scone` | `mm-buttermilk` |
| 04 | `public/images/products/tea-orange-scone.png` | `products.ts` `tea-orange-scone` | `mm-teaorange` |
| 05 | `public/images/products/choco-almond-scone.png` | `products.ts` `choco-almond-scone` | `mm-chocoalmond` |
| 06 | `public/images/products/wholegrain-scone.png` | `products.ts` `wholegrain-scone` | `mm-wholegrain` |
| 07 | `public/images/products/matcha-white-scone.png` | `products.ts` `matcha-white-scone` | `mm-matcha` |
| 08 | `public/images/products/anbutter-sand.png` | `products.ts` `anbutter-sand` | `mm-anbutter` |
| 09 | `public/images/products/strawberry-sand.png` | `products.ts` `strawberry-sand` | `mm-strawberry` |
| 10 | `public/images/products/pistachio-choco-scone.png` | `products.ts` `pistachio-choco-scone` | `mm-pistachio` |
| 11 | `public/images/products/financier.png` | `products.ts` `financier` | `mm-financier` |
| 12 | `public/images/products/madeleine.png` | `products.ts` `madeleine` | `mm-madeleine` |
| 13 | `public/images/products/cookie-assort.png` | `products.ts` `cookie-assort` | `mm-cookie` |
| 14 | `public/images/products/baked-choco-cake.png` | `products.ts` `baked-choco-cake` | `mm-chococake` |
| 15 | `public/images/products/royal-milktea.png` | `products.ts` `royal-milktea` | `mm-royaltea` |
| 16 | `public/images/products/houji-milktea.png` | `products.ts` `houji-milktea` | `mm-houjitea` |
| 17 | `public/images/products/tote-bag.png` | `products.ts` `tote-bag` | `mm-tote` |
| 18 | `public/images/journal/scone-warmup.png` | `posts.ts` `scone-warmup` | `mm-journal1` |
| 19 | `public/images/journal/milktea-pairing.png` | `posts.ts` `milktea-pairing` | `mm-journal2` |
| 20 | `public/images/journal/gift-wrapping.png` | `posts.ts` `gift-wrapping` | `mm-journal3` |

---

## 画像が揃ったあとの差し替え手順
1. 生成画像を上表の「保存先ファイル」名どおりに `public/images/` 配下へ配置。
2. コードを picsum → ローカルパスに変更:
   - `products.ts`: `image` を `/images/products/<id>.png` に（`img()`ヘルパーを使わず直接パス、または `img`をローカル用に変更）。
   - `Hero.tsx` / `About.tsx`: `src` を `/images/hero.png` `/images/about.png` に。
   - `posts.ts`: `image` を `/images/journal/<id>.png` に。
3. `next.config.ts` の picsum `remotePatterns` は不要になれば削除可（残してもOK）。
4. ローカル画像はビルド時にサイズが必要なので、`<Image fill>` を使っている箇所はそのままでOK（fillは寸法指定不要）。
5. `npm run dev` で表示確認。

> この差し替え作業（コード側の一括書き換え）は、画像がそろえば私の方で1コミットで実行できます。
