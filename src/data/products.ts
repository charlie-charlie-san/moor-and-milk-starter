// 架空ブランド Moor & Milk のダミー商品データ。
// category / tags / 数値 price を持たせ、後続の「検索・絞り込み」機能(Phase 4)に
// そのまま使えるようにしている。すべて創作で、実在商品とは無関係。

export type ProductCategory = "scone" | "sandwich" | "baked" | "drink" | "goods";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  tags: string[];
  image: string;
  soldOut?: boolean;
  seasonal?: boolean;
  seasonalCopy?: string;
};

const img = (id: string) => `/images/products/${id}.webp`;

export const products: Product[] = [
  {
    id: "buttermilk-scone",
    name: "バターミルクスコーン",
    price: 380,
    category: "scone",
    tags: ["定番", "プレーン"],
    image: img("buttermilk-scone"),
  },
  {
    id: "tea-orange-scone",
    name: "紅茶とオレンジピールのスコーン",
    price: 420,
    category: "scone",
    tags: ["紅茶", "柑橘"],
    image: img("tea-orange-scone"),
  },
  {
    id: "choco-almond-scone",
    name: "チョコ＆アーモンドのスコーン",
    price: 440,
    category: "scone",
    tags: ["チョコ", "ナッツ"],
    image: img("choco-almond-scone"),
  },
  {
    id: "wholegrain-scone",
    name: "全粒粉のスコーン",
    price: 400,
    category: "scone",
    tags: ["全粒粉", "素朴"],
    image: img("wholegrain-scone"),
    soldOut: true,
  },
  {
    id: "matcha-white-scone",
    name: "抹茶とホワイトチョコのスコーン",
    price: 480,
    category: "scone",
    tags: ["抹茶", "季節限定"],
    image: img("matcha-white-scone"),
    seasonal: true,
    seasonalCopy: "石臼挽きの宇治抹茶に、まろやかなホワイトチョコを合わせた一品。",
  },
  {
    id: "anbutter-sand",
    name: "あんバターのスコーンサンド",
    price: 560,
    category: "sandwich",
    tags: ["あんこ", "発酵バター", "季節限定"],
    image: img("anbutter-sand"),
    seasonal: true,
    seasonalCopy: "発酵バターと粒あんを、焼きたてスコーンでサンドしました。",
  },
  {
    id: "strawberry-sand",
    name: "いちごジャムのクロテッドサンド",
    price: 540,
    category: "sandwich",
    tags: ["いちご", "クロテッド"],
    image: img("strawberry-sand"),
  },
  {
    id: "pistachio-choco-scone",
    name: "ピスタチオチョコのスコーン",
    price: 520,
    category: "scone",
    tags: ["ピスタチオ", "チョコ", "季節限定"],
    image: img("pistachio-choco-scone"),
    seasonal: true,
    seasonalCopy: "香ばしいピスタチオとカリッと砕いたチョコを贅沢に。",
  },
  {
    id: "financier",
    name: "焦がしバターのフィナンシェ",
    price: 320,
    category: "baked",
    tags: ["焼き菓子", "バター"],
    image: img("financier"),
  },
  {
    id: "madeleine",
    name: "レモンのマドレーヌ",
    price: 300,
    category: "baked",
    tags: ["焼き菓子", "レモン"],
    image: img("madeleine"),
    soldOut: true,
  },
  {
    id: "cookie-assort",
    name: "Moor クッキーアソート",
    price: 1280,
    category: "baked",
    tags: ["ギフト", "詰め合わせ"],
    image: img("cookie-assort"),
  },
  {
    id: "baked-choco-cake",
    name: "ベイクドチョコレートケーキ",
    price: 1680,
    category: "baked",
    tags: ["チョコ", "ホール"],
    image: img("baked-choco-cake"),
  },
  {
    id: "royal-milktea",
    name: "ロイヤルミルクティー（茶葉）",
    price: 980,
    category: "drink",
    tags: ["紅茶", "ミルクティー"],
    image: img("royal-milktea"),
  },
  {
    id: "houji-milktea",
    name: "ほうじ茶ミルクティー（茶葉）",
    price: 920,
    category: "drink",
    tags: ["ほうじ茶", "ミルクティー"],
    image: img("houji-milktea"),
  },
  {
    id: "tote-bag",
    name: "オリジナルトートバッグ",
    price: 1500,
    category: "goods",
    tags: ["グッズ", "雑貨"],
    image: img("tote-bag"),
    soldOut: true,
  },
];

export const seasonalProducts = products.filter((p) => p.seasonal);
