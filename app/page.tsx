import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import EditorialCard from "@/components/EditorialCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "The Issue N | Independent Fashion and Editorial Magazine",
  description:
    "The Issue N is an independent fashion and editorial magazine exploring contemporary culture through visual storytelling, photography, design, creative practice, and modern identity.",
  alternates: {
    canonical: "https://theissue.xyz",
  },
  openGraph: {
    title: "The Issue N | Independent Fashion and Editorial Magazine",
    description:
      "An independent editorial platform exploring fashion, photography, design, creative practice, and modern identity through visual storytelling.",
    url: "https://theissue.xyz",
    siteName: "The Issue N",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://theissue.xyz/images/editorial-2.jpg",
        width: 1200,
        height: 630,
        alt: "The Issue N editorial magazine homepage cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Issue N | Independent Fashion and Editorial Magazine",
    description:
      "An independent editorial platform exploring fashion, photography, design, creative practice, and modern identity through visual storytelling.",
    images: ["https://theissue.xyz/images/editorial-2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  const latestArticles = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <main className="bg-[#FFFBEB] text-neutral-900">
      {/* HERO FIXED */}
      <section
        id="home"
        className="relative w-full scroll-mt-24 md:h-[100svh] md:min-h-[720px]"
      >
        <div className="grid md:grid-cols-2">
          {/* LEFT */}
          <div className="relative h-[38vh] min-h-[260px] md:h-full">
            <Image
              src="/images/editorial-2.jpg"
              alt="Editorial cover"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center px-6 md:px-10">
              <p className="font-didot text-[14px] md:text-[22px] text-white text-center">
                An Independent Editorial Platform
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative bg-[#E1D5D5] py-10 md:h-full md:py-0">
            <div className="flex h-full items-center justify-center px-6 md:px-12 md:pt-24 md:pb-10">
              <div className="relative w-[72vw] max-w-[320px] aspect-[3/4] md:w-full md:max-w-[760px]">
                <Image
                  src="/images/logo_main.jpg"
                  alt="The Issue N logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-neutral-200/70" />
      </div>

      {/* COLUMNS */}
      <section
        id="columns"
        className="max-w-7xl mx-auto px-6 py-24 md:py-28 scroll-mt-24"
      >
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
              Columns
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-serif">
              Essays, voices and personal angles.
            </h2>
          </div>

          <Link
            href="/columns"
            className="text-sm underline underline-offset-4 hover:text-black transition"
          >
            More →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-24">
          <Link href="/columns/becoming">
            <EditorialCard
              category="BECOMING"
              title="Trinity"
              image="/images/card-2.jpg"
            />
          </Link>

          <Link href="/columns/work">
            <EditorialCard
              category="WORK"
              title="Work & Path"
              image="/images/card-1.jpg"
            />
          </Link>

          <Link href="/columns/practice">
            <EditorialCard
              category="PRACTICE"
              title="Creative Practice"
              image="/images/card-3.jpg"
            />
          </Link>
        </div>
      </section>

      {/* LATEST */}
      <section
        id="latest"
        className="max-w-7xl mx-auto px-6 pb-28 md:pb-32 scroll-mt-24"
      >
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
              Latest
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-serif">
              New pieces and fresh visuals.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-24">
          {latestArticles.map((article) => (
            <Link key={article.slug} href={`/article/${article.slug}`}>
              <EditorialCard
                category={article.category}
                title={article.title}
                image={article.image}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}