import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import EditorialCard from "@/components/EditorialCard";
import { articles } from "@/data/articles";
import { columns } from "@/data/columns";

export const metadata: Metadata = {
  title: "The Issue № | Independent Fashion and Editorial Magazine",
  description:
    "The Issue № is an independent fashion and editorial magazine exploring contemporary culture through visual storytelling, photography, design, creative practice, and modern identity.",
  alternates: {
    canonical: "https://theissue.xyz",
  },
  openGraph: {
    title: "The Issue № | Independent Fashion and Editorial Magazine",
    description:
      "An independent editorial platform exploring fashion, photography, design, creative practice, and modern identity through visual storytelling.",
    url: "https://theissue.xyz",
    siteName: "The Issue №",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://theissue.xyz/images/editorial-2.jpg",
        width: 1200,
        height: 630,
        alt: "The Issue № editorial magazine homepage cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Issue № | Independent Fashion and Editorial Magazine",
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
    .slice(0, 5);

  const [featuredLatest, ...secondaryLatest] = latestArticles;

  return (
    <main className="bg-[#FFFBEB] text-neutral-900">
      {/* HERO */}
      <section
        id="home"
        className="relative w-full overflow-hidden scroll-mt-24"
      >
        <div className="grid md:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="relative h-[56vh] min-h-[390px] md:h-[78vh] md:min-h-[620px] bg-black overflow-hidden">
            <Image
              src="/images/editorial-2.jpg"
              alt="Editorial cover"
              fill
              priority
              className="object-contain"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/25" />

            <div className="absolute inset-0 z-10 flex items-center justify-start px-8 md:px-20 text-left">
              <p className="font-serif text-white text-[28px] md:text-[54px] leading-[1.05] tracking-[0.07em] max-w-[660px] drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)]">
                Individual stories
                <br />
                and fashion identity
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative h-[56vh] min-h-[390px] md:h-[78vh] md:min-h-[620px] bg-[#E1D5D5] overflow-hidden">
            <div className="flex h-full items-center justify-center px-6 py-8 md:px-12 md:py-12">
              <div className="relative aspect-[3/4] w-full max-w-[290px] md:max-w-[620px]">
                <Image
                  src="/images/logo_main.jpg"
                  alt="The Issue № logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO / LATEST DIVIDER */}
      <div className="max-w-7xl mx-auto px-6 mt-24 md:mt-32 mb-10">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
          New
        </p>
        <div className="h-px bg-neutral-300/60" />
      </div>

      {/* LATEST */}
      <section
        id="latest"
        className="max-w-7xl mx-auto px-6 pt-4 pb-24 md:pb-32 scroll-mt-24"
      >
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
              Latest
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-serif leading-tight">
              New pieces and fresh visuals
            </h2>
          </div>
        </div>

        {featuredLatest ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16">
            <Link
              href={`/article/${featuredLatest.slug}`}
              className="block lg:col-span-7 group"
            >
              <article className="space-y-5">
                <div className="relative aspect-[4/3] overflow-hidden bg-white/30">
                  <Image
                    src={featuredLatest.image}
                    alt={featuredLatest.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.025]"
                  />
                </div>

                <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
                  {featuredLatest.category}
                </p>

                <h3 className="font-serif text-3xl md:text-5xl leading-tight">
                  {featuredLatest.title}
                </h3>

                <p className="max-w-2xl text-neutral-700 leading-relaxed">
                  {featuredLatest.excerpt}
                </p>

                <p className="text-sm underline underline-offset-4">
                  Read article →
                </p>
              </article>
            </Link>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">
              {secondaryLatest.slice(0, 3).map((article) => (
                <Link
                  key={article.slug}
                  href={`/article/${article.slug}`}
                  className="block group"
                >
                  <article className="grid grid-cols-[0.9fr_1.1fr] gap-5 items-start">
                    <div className="relative aspect-[3/4] overflow-hidden bg-white/30">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                        {article.category}
                      </p>

                      <h3 className="mt-3 text-xl md:text-2xl font-serif leading-tight">
                        {article.title}
                      </h3>

                      <p className="mt-4 text-sm text-neutral-700 leading-relaxed line-clamp-4">
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-neutral-200/70" />
      </div>

      {/* EDITOR NOTE */}
      <section
        id="editors-note"
        className="max-w-7xl mx-auto px-6 py-24 md:py-32 scroll-mt-24"
      >
        <div className="grid md:grid-cols-12 gap-14 items-center">
          <div className="md:col-span-7 max-w-3xl md:ml-8">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
              Editor’s Note
            </p>

            <h2 className="mt-6 text-5xl md:text-7xl font-serif leading-[1.02]">
              This is not a journal.
              <br />
              It is a continuation of the journey.
            </h2>

            <div className="mt-8 space-y-6 text-neutral-700 leading-[1.85] text-lg max-w-2xl">
              <p>
                The Issue № began as a collection of separate ideas — about work,
                presence and the way people shape their environment.
              </p>

              <p>
                Over time, it became something more connected. Not a finished
                statement, but a process.
              </p>

              <p>
                There is no single narrative here. Only moments, observations
                and people — each carrying their own direction.
              </p>
            </div>

            <p className="mt-6 italic text-neutral-500 text-sm">
              by Sofia Solas
            </p>

            <Link
              href="/article/starting-again-in-another-country"
              className="inline-block mt-6 text-sm underline underline-offset-4 hover:text-black transition"
            >
              read more →
            </Link>
          </div>

          <div className="md:col-span-5">
            <div className="relative ml-auto w-full max-w-sm aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="/images/sonja1.jpeg"
                alt="Editor portrait"
                fill
                className="object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-neutral-200/70" />
      </div>

      {/* COLUMNS */}
<section
  id="columns"
  className="max-w-7xl mx-auto px-6 py-24 md:py-28 scroll-mt-24"
>
  <div className="flex items-end justify-between gap-6 mb-12">
    <div>
      <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
        Columns
      </p>
      <h2 className="mt-3 text-3xl md:text-5xl font-serif leading-tight">
        Editorial structure
      </h2>
    </div>

    <Link
      href="/columns"
      className="text-sm underline underline-offset-4 hover:text-black transition"
    >
      All columns →
    </Link>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-14">
    {columns.slice(0, 5).map((column, index) => (
      <Link
        key={column.slug}
        href={`/columns/${column.slug}`}
        className="block group"
      >
        <article
          className={`space-y-4 ${
            index === 1 || index === 3 ? "lg:pt-10" : ""
          }`}
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-white/30">
            <Image
              src={column.image}
              alt={column.label}
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </div>

          <p className="text-[10px] uppercase tracking-[0.32em] text-neutral-600">
            {column.label}
          </p>

          <h3 className="font-serif text-2xl leading-tight">
            {column.title}
          </h3>

          <p className="text-sm text-neutral-700 leading-relaxed">
            {column.descriptionShort}
          </p>
        </article>
      </Link>
    ))}
  </div>
</section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 pb-24 md:pb-32 scroll-mt-24"
      >
        <div className="h-px bg-neutral-200/70 mb-20" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              About
            </p>

            <h2 className="mt-5 font-serif text-5xl md:text-6xl leading-[1.02] text-neutral-900">
              The Issue №
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-[26px] md:text-[38px] leading-[1.28] text-neutral-900 max-w-none font-serif">
              The Issue № is an independent fashion and editorial magazine
              exploring contemporary culture through visual storytelling,
              photography, and design.
            </p>

            <div className="mt-12 space-y-12 text-neutral-800">
              <div>
                <p className="text-[18px] leading-relaxed">
                  The Issue № is an independent editorial platform exploring
                  people, work and contemporary life.
                </p>

                <p className="mt-5 text-[18px] leading-relaxed">
                  It is built around observation — of how individuals shape
                  themselves, how work evolves over time, and how environment
                  influences both.
                </p>
              </div>

              <div className="border-l border-neutral-300 pl-6 space-y-3 text-[17px] leading-relaxed">
                <p>about people who build themselves</p>
                <p>about those who change, grow, lose illusions and gain clarity</p>
                <p>about transformation without spectacle</p>
                <p>about work without a cold mask</p>
                <p>about fashion as a language, not a trend</p>
                <p>about cities and spaces that shape us</p>
                <p>about people who remain real</p>
              </div>

              <div>
                <p className="text-[18px] leading-relaxed">
                  We approach stories through process rather than outcome.
                </p>

                <p className="mt-5 text-[18px] leading-relaxed">
                  Each piece is developed with attention to detail, image and
                  narrative — not to explain, but to reveal.
                </p>

                <p className="mt-5 text-[18px] leading-relaxed">
                  Visuals are not decoration. They are part of the language.
                </p>
              </div>

              {/* TEAM */}
              <div className="mt-16">
                <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-8">
                  Team
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                  <div className="space-y-4">
                    <div className="relative w-full aspect-[3/4] overflow-hidden">
                      <Image
                        src="/images/team/sofia1.jpeg"
                        alt="Sofia Solas"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="font-medium">Sofia Solas</p>
                    <p className="text-sm text-neutral-500">
                      Founder & Editor
                    </p>
                  </div>

                  <div className="space-y-4 md:mt-12">
                    <div className="relative w-full aspect-[3/4] overflow-hidden">
                      <Image
                        src="/images/team/maria.jpeg"
                        alt="Maria"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="font-medium">Maria</p>
                    <p className="text-sm text-neutral-500">
                      Co-Founder & Editorial Director
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-[18px] md:text-[21px] leading-[1.75] text-neutral-700 max-w-[900px]">
                Based in Northern Europe, the magazine features designers,
                photographers, and creative entrepreneurs working at the
                intersection of aesthetics, sustainability, and identity.
              </p>
            </div>
          </div>
        </div>

        <div className="h-px bg-neutral-200/70 mt-20" />
      </section>
    </main>
  );
}