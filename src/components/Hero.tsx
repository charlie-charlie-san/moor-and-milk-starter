import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
      <Image
        src="/images/hero.webp"
        alt="焼きたてのスコーンとミルクティー"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute bottom-10 left-0 w-full">
        <div className="mx-auto max-w-6xl px-5 text-white">
          <p className="font-display text-3xl uppercase tracking-wide sm:text-5xl">
            Bake &amp; Brew
          </p>
          <p className="mt-2 max-w-md text-sm sm:text-base">
            焼きたてスコーンと、ほっとするミルクティーのお店。
          </p>
        </div>
      </div>
    </section>
  );
}
