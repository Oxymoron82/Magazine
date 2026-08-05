import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { columns } from "@/data/columns";

const siteUrl = "https://theissue.xyz";

export const metadata: Metadata = {
  title: "Columns | The Issue № Editorial Magazine",
  description:
    "Explore the editorial structure of The Issue № — thematic columns and ongoing journals covering fashion, identity, photography, creative practice, business, design, and contemporary culture.",
  alternates: {
    canonical: `${siteUrl}/columns`,
  },
  openGraph: {
    title: "Columns | The Issue №",
    description:
      "Discover thematic editorial columns and ongoing journals on fashion, photography, design, business, identity, and creative culture.",
    url: `${siteUrl}/columns`,
    siteName: "The Issue №",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/images/editorial-2.jpg`,
        width: 1200,
        height: 630,
        alt: "The Issue № editorial structure and columns",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Columns | The Issue №",
    description:
      "Explore thematic editorial columns and ongoing author journals in The Issue №.",
    images: [`${siteUrl}/images/editorial-2.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const editorialJournals = [
  {
    number: "01",
    title: "Editor’s Note",
    author: "Sofia Solas",
    role: "Editor-in-Chief",
    description:
      "Thoughts on fashion, identity, publishing and the ideas behind contemporary editorial culture.",
    articles: [
      "Beyond the Logo: Why Brand Identity Matters",
      "Starting Again in Another Country",
    ],
    href: "/editors-note",
    image: "/images/sonja1.jpeg",
    imageAlt: "Sofia Solas, Editor-in-Chief of The Issue №",
  },
  {
    number: "02",
    title: "Studio Journal",
    author: "Maria S.",
    role: "Creative Developer · UI/UX Designer",
    description:
      "A behind-the-scenes look at editorial production, branding, digital publishing, UI/UX and the creative process behind The Issue №.",
    articles: ["Why We Don’t Build Ordinary Websites"],
    href: "/studio-journal",
    image: "/images/behind-the-issue/8.png",
    imageAlt:
      "Editorial workspace representing design and development at The Issue №",
  },
];

export default function ColumnsPage() {
  const activeColumns = columns.filter((column) => column.active);

  return (
    <main className="bg-[#FFFBEB] text-neutral-900">
      {/* HERO */}
      <section className="border-b border-neutral-200/70">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 md:pb-24 md:pt-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
                Columns
              </p>
            </div>

            <div className="lg:col-span-8">
              <h1 className="max-w-5xl font-serif text-5xl leading-[0.96] tracking-[-0.04em] text-editorial-text md:text-7xl lg:text-8xl">
                Editorial Structure
              </h1>

              <p className="mt-8 max-w-4xl font-serif text-3xl leading-[1.25] text-neutral-700 md:text-4xl">
                Every story belongs somewhere. Every voice has its own place.
              </p>

              <p className="mt-8 max-w-3xl text-[17px] leading-[1.85] text-neutral-700">
                The Issue № combines thematic editorial columns with ongoing
                journals, creating a publication that grows through both stories
                and perspectives.
              </p>

              <Link
                href="/"
                className="mt-10 inline-block text-[10px] uppercase tracking-[0.28em] underline decoration-neutral-400 underline-offset-8 transition hover:text-black"
              >
                Back to the magazine →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL COLUMNS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-10 border-b border-neutral-200/70 pb-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
              Editorial Columns
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-editorial-text md:text-6xl">
              Stories organised by subject, experience and perspective.
            </h2>

            <p className="mt-7 max-w-3xl text-[16px] leading-[1.8] text-neutral-700">
              These thematic columns form the core editorial structure of The
              Issue №, bringing together fashion, work, creativity, identity,
              relationships and place.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {activeColumns.map((column, index) => (
            <Link
              key={column.slug}
              href={`/columns/${column.slug}`}
              className="group block"
            >
              <article
                className={`space-y-5 ${
                  index === 1 || index === 4 ? "lg:pt-10" : ""
                }`}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
                  <Image
                    src={column.image}
                    alt={`${column.label} column in The Issue № editorial magazine`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-black/[0.04] transition duration-500 group-hover:bg-transparent" />

                  <span className="absolute right-5 top-5 text-[10px] uppercase tracking-[0.35em] text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.32em] text-neutral-500">
                    Thematic Column
                  </p>

                  <h3 className="mt-4 font-serif text-4xl leading-tight text-editorial-text md:text-5xl">
                    {column.label}
                  </h3>

                  <div className="mt-5 h-px w-12 bg-[#4A3F3C]/30 transition-all duration-500 group-hover:w-20" />

                  <p className="mt-5 max-w-md text-sm leading-[1.8] text-neutral-700">
                    {column.descriptionShort}
                  </p>

                  <p className="mt-7 text-sm underline decoration-neutral-400 underline-offset-6 transition group-hover:text-black">
                    Explore column →
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* EDITORIAL JOURNALS */}
      <section className="border-y border-neutral-200/70 bg-[#F2EEE5]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
                Editorial Journals
              </p>
            </div>

            <div className="lg:col-span-8">
              <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-editorial-text md:text-6xl">
                Ongoing voices from inside The Issue №.
              </h2>

              <p className="mt-7 max-w-3xl text-[16px] leading-[1.8] text-neutral-700">
                Continuing editorial series written by members of The Issue №
                team, each offering a distinct perspective on culture,
                creativity and the work behind the publication.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {editorialJournals.map((journal) => (
              <Link
                key={journal.title}
                href={journal.href}
                className="group block"
              >
                <article className="flex h-full flex-col overflow-hidden border border-black/10 bg-[#FFFBEB] transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(74,63,60,0.10)]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                    <Image
                      src={journal.image}
                      alt={journal.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.025]"
                    />

                    <div className="absolute inset-0 bg-black/10" />

                    <span className="absolute right-6 top-6 text-[10px] uppercase tracking-[0.35em] text-white">
                      {journal.number}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7 md:p-10">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">
                      Author&apos;s Journal
                    </p>

                    <h3 className="mt-5 font-serif text-4xl leading-[1] tracking-[-0.03em] text-editorial-text md:text-6xl">
                      {journal.title}
                    </h3>

                    <div className="mt-7">
                      <p className="font-serif text-2xl text-editorial-text">
                        {journal.author}
                      </p>

                      <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-neutral-500">
                        {journal.role}
                      </p>
                    </div>

                    <p className="mt-8 max-w-xl text-[16px] leading-[1.8] text-neutral-700">
                      {journal.description}
                    </p>

                    <div className="mt-9 border-t border-neutral-200/80 pt-7">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                        Published
                      </p>

                      <ul className="mt-5 space-y-4">
                        {journal.articles.map((articleTitle) => (
                          <li
                            key={articleTitle}
                            className="flex gap-3 font-serif text-xl leading-snug text-neutral-800"
                          >
                            <span aria-hidden="true">—</span>
                            <span>{articleTitle}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="mt-auto pt-10 text-sm underline decoration-neutral-400 underline-offset-6 transition group-hover:text-black">
                      Explore {journal.title} →
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
              The magazine continues
            </p>
          </div>

          <div className="lg:col-span-8">
            <blockquote className="max-w-4xl font-serif text-4xl leading-[1.12] tracking-[-0.03em] text-editorial-text md:text-6xl">
              A publication grows not only through what it covers, but through
              the voices that shape it.
            </blockquote>

            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <Link
                href="/#latest"
                className="border border-black px-7 py-4 text-[10px] uppercase tracking-[0.25em] transition hover:bg-black hover:text-white"
              >
                Read the latest stories
              </Link>

              <Link
                href="/behind-the-issue"
                className="text-[10px] uppercase tracking-[0.25em] underline decoration-black/40 underline-offset-8 transition hover:text-neutral-500"
              >
                Behind The Issue →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}