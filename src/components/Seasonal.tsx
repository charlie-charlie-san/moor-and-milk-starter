import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { seasonalProducts } from "@/data/products";

export default function Seasonal() {
  return (
    <section id="seasonal" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading en="Seasonal" ja="今だけ出会える季節限定商品" />

        <div className="grid gap-8 md:grid-cols-3">
          {seasonalProducts.map((p) => (
            <article
              key={p.id}
              className="overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs text-white">
                  季節限定
                </span>
              </div>
              <div className="space-y-2 p-5">
                <h3 className="text-base font-bold text-ink">{p.name}</h3>
                <p className="text-sm leading-6 text-ink/70">
                  {p.seasonalCopy}
                </p>
                <p className="pt-1 text-sm text-ink">
                  ¥{p.price.toLocaleString()}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
