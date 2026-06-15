import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading en="About Us" ja="ムーア アンド ミルクのこと" />

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-4 text-sm leading-7 text-ink/80">
            <p>
              イギリスの片田舎、霧のかかる荒野（ムーア）の小さな台所。
              Moor &amp; Milk
              は、そんな素朴であたたかな焼き菓子の風景から生まれたお店です。
            </p>
            <p>
              発酵バターをたっぷり折り込んだスコーンと、茶葉から丁寧に淹れる
              ミルクティー。気どらないけれど、ひとつひとつ手をかけた味わいを
              お届けします。
            </p>
            <p>
              午後のひととき、お気に入りのカップとともに。
              あなたの暮らしに、ほっとする時間が増えますように。
            </p>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            <Image
              src="/images/about.webp"
              alt="工房で焼き上げるスコーン"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
