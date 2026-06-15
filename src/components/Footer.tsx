const FOOTER_NAV = [
  "Top",
  "About",
  "Shop",
  "Seasonal",
  "Journal",
  "Contact",
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-black/5 bg-white py-16">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-display text-4xl uppercase tracking-wide text-ink sm:text-6xl">
          Moor &amp; Milk
        </p>
        <p className="mt-2 text-sm text-ink/60">
          焼きたてスコーンと、ほっとするミルクティーのお店。
        </p>

        <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {FOOTER_NAV.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-sm text-ink/70 hover:text-accent"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="mt-8 flex gap-4 text-sm text-ink/70">
          <a href="#footer" className="hover:text-accent">
            Instagram
          </a>
          <a href="#footer" className="hover:text-accent">
            X
          </a>
        </div>

        <p className="mt-10 text-xs text-ink/40">
          © 2026 Moor &amp; Milk — これは研修デモ用の架空ストアです。
        </p>
      </div>
    </footer>
  );
}
