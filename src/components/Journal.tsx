import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { posts } from "@/data/posts";

export default function Journal() {
  return (
    <section id="journal" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading en="Journal" ja="暮らしを楽しむ読みもの" />

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <a key={post.id} href="#journal" className="block">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 space-y-1">
                <p className="text-xs text-ink/50">{post.date}</p>
                <h3 className="text-sm font-bold text-ink">{post.title}</h3>
                <p className="text-sm leading-6 text-ink/70">{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
