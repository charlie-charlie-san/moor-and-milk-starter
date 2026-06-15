import Image from "next/image";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article>
      <div className="relative aspect-square w-full overflow-hidden rounded-md bg-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className={`object-cover ${product.soldOut ? "opacity-60" : ""}`}
        />
        {product.soldOut && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full bg-soldout/90 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
              Sold Out
            </span>
          </span>
        )}
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="text-sm text-ink">{product.name}</h3>
        <p className="text-sm text-ink/70">¥{product.price.toLocaleString()}</p>
      </div>
    </article>
  );
}
