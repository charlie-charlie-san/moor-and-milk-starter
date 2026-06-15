// 署名モチーフ: 英語の大きな League Gothic ラベル + 直下の日本語サブタイトル
// design-spec.md「署名的モチーフ」に対応。全セクションで再利用する。
export default function SectionHeading({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="font-display text-4xl uppercase tracking-wide text-ink sm:text-5xl">
        {en}
      </h2>
      <p className="mt-1 text-sm text-ink/60">{ja}</p>
    </div>
  );
}
