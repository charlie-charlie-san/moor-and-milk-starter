import Link from "next/link";

const NAV = [
  { label: "Top", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Shop", href: "#items" },
  { label: "Seasonal", href: "#seasonal" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#footer" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="#top"
          className="font-display text-2xl uppercase tracking-wide text-ink"
        >
          Moor &amp; Milk
        </Link>

        <nav className="hidden gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-ink/70 transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="カートを開く"
          className="text-ink/70 transition-colors hover:text-accent"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </button>
      </div>
    </header>
  );
}
