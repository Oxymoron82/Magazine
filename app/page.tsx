import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";
import { columns } from "@/data/columns";
import SearchArticles from "@/components/SearchArticles";

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

function formatArticleDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function HomePage() {
  const latestArticles = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  const activeColumns = columns.filter((column) => column.active);

  const [featuredLatest, ...secondaryLatest] = latestArticles;

  const isQueenSapphireFeatured =
    featuredLatest?.slug === "when-women-stop-waiting-queen-sapphire-world";

  return (
    <main className="bg-editorial-bg text-neutral-900">
      {/* HERO */}
      <section
        id="home"
        className="relative h-[86vh] min-h-[620px] md:h-screen overflow-hidden scroll-mt-24 bg-black"
      >
        <Image
          src="/images/editorial-2.jpg"
          alt="The Issue № editorial magazine homepage cover"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-8 md:px-16 lg:px-24">
            <div className="max-w-[720px]">
              <h1 className="font-inria text-white text-[42px] sm:text-[56px] md:text-[78px] lg:text-[86px] leading-[0.95] tracking-[-0.04em]">
                Individual stories.
                <br />
                Fashion identity.
              </h1>

              <div className="mt-8 h-px w-20 bg-white/70" />

              <p className="mt-7 max-w-[420px] text-[16px] md:text-[19px] leading-[1.75] text-white/90">
                A visual magazine about people, work, transformation and
                contemporary culture.
              </p>

              <div className="mt-10 md:mt-12">
                <Image
                  src="/images/logo_new.jpg"
                  alt="The Issue № editorial magazine logo"
                  width={96}
                  height={96}
                  priority
                  className="h-auto w-[76px] md:w-[96px] rounded-xl md:rounded-2xl opacity-95"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEMPORARY ANNOUNCEMENT */}
      <section className="bg-editorial-bg border-b border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <Link
            href="/article/when-women-stop-waiting-queen-sapphire-world"
            className="group grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center"
          >
            <div className="md:col-span-7">
              <p className="text-[18px] md:text-[20px] font-medium uppercase tracking-[0.22em] text-[#A32020]">
                Special Announcement
              </p>

              <p className="mt-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
                11 July 2026 • Helsinki
              </p>

              <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-tight text-editorial-text">
                Queen Sapphire World
                <br />
                in Helsinki
              </h2>

              <p className="mt-6 max-w-xl text-neutral-700 leading-[1.75]">
                On July 11, the international selection final of Queen Sapphire
                World will take place at Oodi Library, bringing together women
                from across Europe for a story about courage, visibility and new
                beginnings.
              </p>

              <p className="mt-7 text-sm underline underline-offset-4 group-hover:text-black transition">
                Read the story →
              </p>
            </div>

            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="relative w-[280px] sm:w-[320px] md:w-[340px] h-[420px] sm:h-[480px] md:h-[510px] overflow-hidden rounded-xl bg-transparent">
                <Image
                  src="/images/becoming/queen-sapphire/7.jpeg"
                  alt="Queen Sapphire World International Selection Final poster in Helsinki"
                  fill
                  className="object-contain transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </Link>
        </div>
      </section>

      <SearchArticles />

      {/* LATEST */}
      <section
        id="latest"
        className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-24 md:pb-32 scroll-mt-24"
      >
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
              Latest
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-serif leading-tight text-editorial-text">
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
                <div
                  className={`relative overflow-hidden ${
                    isQueenSapphireFeatured
                      ? "aspect-[3/4]"
                      : "aspect-[4/3] bg-white/30"
                  }`}
                >
                  <Image
                    src={featuredLatest.image}
                    alt={`${featuredLatest.title} — editorial feature in The Issue № magazine`}
                    fill
                    className={`transition duration-700 ${
                      isQueenSapphireFeatured
                        ? "object-contain group-hover:scale-[1.015]"
                        : "object-cover group-hover:scale-[1.025]"
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
                    {featuredLatest.category}
                  </p>

                  <p className="text-xs text-neutral-500">
                    By {featuredLatest.author || "The Issue № Editorial Team"} ·{" "}
                    <time dateTime={featuredLatest.date}>
                      {formatArticleDate(featuredLatest.date)}
                    </time>
                  </p>
                </div>

                <h3 className="font-serif text-3xl md:text-5xl leading-tight text-editorial-text">
                  {featuredLatest.title}
                </h3>

                <p className="max-w-[42ch] text-neutral-700 leading-[1.75]">
                  {featuredLatest.excerpt}
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
                  <article className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-5 items-start">
                    <div className="relative aspect-[3/4] overflow-hidden bg-white/30">
                      <Image
                        src={article.image}
                        alt={`${article.title} — ${article.category} story in The Issue №`}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                        {article.category}
                      </p>

                      <p className="mt-2 text-[11px] leading-relaxed text-neutral-500">
                        By {article.author || "The Issue № Editorial Team"}
                        <br />
                        <time dateTime={article.date}>
                          {formatArticleDate(article.date)}
                        </time>
                      </p>

                      <h3 className="mt-3 text-xl md:text-2xl font-serif leading-tight text-editorial-text">
                        {article.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        {/* MOBILE ALL ARTICLES CTA */}
        <div className="mt-14 md:hidden">
          <Link
            href="/columns"
            className="block border-t border-b border-[#4A3F3C]/20 py-6"
          >
            <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
              Explore
            </p>

            <div className="mt-3 flex items-center justify-between gap-6">
              <p className="font-serif text-3xl leading-tight text-[#4A3F3C]">
                All stories
              </p>

              <span className="text-2xl text-[#4A3F3C]">→</span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Browse the full magazine archive by column: Practice, Work,
              Intimacy, Becoming and Place.
            </p>
          </Link>
        </div>
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

            <h2 className="mt-6 text-5xl md:text-7xl font-serif leading-[1.02] text-editorial-text">
              This is not a journal.
              <br />
              It is a continuation of the journey.
            </h2>

            <div className="mt-8 space-y-6 text-neutral-700 leading-[1.85] text-lg max-w-2xl">
              <p>
                The Issue № began as a collection of separate ideas — about
                work, presence and the way people shape their environment.
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
            <h2 className="mt-3 text-3xl md:text-5xl font-serif leading-tight text-editorial-text">
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
          {activeColumns.slice(0, 5).map((column, index) => (
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
                    alt={`${column.label} column — ${column.title} in The Issue № editorial magazine`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <p className="text-[10px] uppercase tracking-[0.32em] text-neutral-600">
                  {column.label}
                </p>

                <h3 className="font-serif text-2xl leading-tight text-editorial-text">
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

            <h2 className="mt-5 font-serif text-5xl md:text-6xl leading-[1.02] text-editorial-text">
              The Issue №
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-[26px] md:text-[38px] leading-[1.28] text-editorial-text max-w-none font-serif">
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
                <p>
                  about those who change, grow, lose illusions and gain clarity
                </p>
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
                        alt="Sofia Solas, Founder and Editor of The Issue №"
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
                        alt="Maria Shatylovich, Co-Founder and Editorial Director of The Issue №"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="font-medium">Maria Shatylovich</p>
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