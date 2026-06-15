import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function ProductGrid() {
  return (
    <section id="items" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading en="Items" ja="商品ラインナップ" />

        {/* TODO(phase4): 検索・カテゴリ絞り込みUIをここに追加する余地（Agentモードの見せ場） */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
