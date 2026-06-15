import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moor & Milk | 焼きたてスコーンとミルクティーのお店",
  description:
    "イギリスの片田舎の素朴な焼き菓子と、ほっとするミルクティー。Moor & Milk のオンラインショップ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white font-jp text-ink">
        {/* React 19 が <link> を自動で <head> にホイストする（ビルド時取得ではないので compile を止めない） */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Gothic&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {children}
      </body>
    </html>
  );
}
