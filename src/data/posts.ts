// 架空ブログ「Journal」のダミー記事。すべて創作。
export type Post = {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
};

export const posts: Post[] = [
  {
    id: "scone-warmup",
    title: "スコーンを一番おいしく温め直す方法",
    date: "2026.06.02",
    image: "/images/journal/scone-warmup.webp",
    excerpt:
      "焼きたての食感を取り戻すちょっとしたコツ。オーブントースターと霧吹きがあれば大丈夫。",
  },
  {
    id: "milktea-pairing",
    title: "ミルクティーとスコーンのペアリング帖",
    date: "2026.05.21",
    image: "/images/journal/milktea-pairing.webp",
    excerpt:
      "プレーンには濃いめのアッサム、抹茶にはほうじ茶。相性を知るともっと楽しい。",
  },
  {
    id: "gift-wrapping",
    title: "贈りものに添える、小さなラッピングの工夫",
    date: "2026.05.09",
    image: "/images/journal/gift-wrapping.webp",
    excerpt:
      "季節の包装紙とドライフラワーで、いつものギフトをちょっと特別に。",
  },
];
