import SectionHeading from "./SectionHeading";

export default function News() {
  return (
    <section id="news" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading en="News" ja="注目のニュース" />

        <a
          href="#items"
          className="block overflow-hidden rounded-xl bg-accent text-white"
        >
          <div className="flex flex-col items-start gap-3 px-8 py-12 sm:px-14">
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs">
              GIFT
            </span>
            <h3 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
              Seasonal Gift Box
            </h3>
            <p className="max-w-xl text-sm text-white/90">
              大切な人へ。スコーンと茶葉を詰め合わせた季節限定のギフトボックスが
              登場しました。ラッピング・メッセージカードも承ります。
            </p>
            <span className="mt-2 text-sm underline underline-offset-4">
              ギフトを見る →
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
