import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getStudioJournalArticles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Studio Journal | The Issue №",
  description:
    "Studio Journal by Maria S. — a behind-the-scenes look at editorial production, digital publishing, branding and the creative process behind The Issue №.",
  alternates: {
    canonical: "https://theissue.xyz/studio-journal",
  },
};

const futureTopics = [
  "Editorial production",
  "Digital publishing",
  "Brand storytelling",
  "UI/UX design",
  "Creative direction",
  "The process behind The Issue №",
];

function formatArticleDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function StudioJournalPage() {
  const studioArticles = getStudioJournalArticles();

  return (
    <main className="bg-[#f7f4ec] text-[#191918]">
      {/* HERO */}
      <section className="border-b border-black/10">
        <div className="mx-auto flex min-h-[72vh] max-w-[1500px] items-center px-6 py-28 md:px-12 md:py-36">
          <div className="max-w-5xl">
            <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
              Author&apos;s Column
            </p>

            <h1 className="mt-8 font-serif text-6xl leading-[0.9] tracking-[-0.055em] md:text-8xl lg:text-[112px]">
              Studio Journal
            </h1>

            <p className="mt-10 max-w-4xl font-serif text-3xl leading-[1.25] text-neutral-700 md:text-5xl">
              A behind-the-scenes look at editorial production, digital
              publishing, branding and the creative process behind The Issue №.
            </p>

            <div className="mt-12">
              <p className="font-serif text-2xl text-neutral-900">
                Maria S.
              </p>

              <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                Creative Developer · UI/UX Designer · Editorial Creative
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-[1500px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
              Inside the studio
            </p>

            <h2 className="mt-7 font-serif text-5xl leading-[1] tracking-[-0.04em] md:text-7xl">
              Ideas, process and the work behind the finished page.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="max-w-3xl space-y-6 text-[17px] leading-[1.85] text-neutral-700">
              <p>
                Studio Journal is where I document how editorial ideas become
                digital experiences — from the first visual direction to the
                final published website.
              </p>

              <p>
                The column explores design decisions, creative production,
                branding, technology and the practical work behind building The
                Issue №.
              </p>

              <p>
                It is not a technical diary. It is a closer look at how
                aesthetics, storytelling and modern web development become one
                coherent experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="border-y border-black/10 bg-[#ebe6dc]">
        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-12 md:py-24">
          <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
            The journal explores
          </p>

          <div className="mt-10 grid grid-cols-1 border-t border-black/15 sm:grid-cols-2 lg:grid-cols-3">
            {futureTopics.map((topic, index) => (
              <div
                key={topic}
                className="border-b border-black/15 py-7 sm:px-6 sm:first:pl-0 lg:border-r lg:last:border-r-0"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-4 font-serif text-2xl leading-tight text-neutral-900">
                  {topic}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="mx-auto max-w-[1500px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid grid-cols-1 gap-10 border-b border-black/10 pb-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">
              Publications
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-neutral-900 md:text-6xl">
              Notes from inside the creative process.
            </h2>

            <p className="mt-7 max-w-3xl text-[16px] leading-[1.8] text-neutral-700">
              Essays on editorial thinking, digital design, branding,
              development and the decisions that shape The Issue №.
            </p>
          </div>
        </div>

        {studioArticles.length > 0 ? (
          <div className="mt-14">
            {studioArticles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/article/${article.slug}`}
                className="group block"
              >
                <article className="grid grid-cols-1 gap-8 border-b border-black/10 py-12 md:grid-cols-12 md:gap-12">
                  <div className="md:col-span-2">
                    <p className="font-serif text-3xl text-neutral-500">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <div className="md:col-span-4">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#ded9cf]">
                      <Image
                        src={article.image}
                        alt={`${article.title} — Studio Journal by Maria S.`}
                        fill
                        sizes="(max-width: 768px) 100vw, 34vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.025]"
                      />

                      <div className="absolute inset-0 bg-black/[0.03] transition duration-500 group-hover:bg-transparent" />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center md:col-span-6">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                        Published
                      </p>

                      <time
                        dateTime={article.date}
                        className="text-[10px] uppercase tracking-[0.3em] text-neutral-400"
                      >
                        {formatArticleDate(article.date)}
                      </time>
                    </div>

                    <h3 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.05] tracking-[-0.025em] text-neutral-900 transition group-hover:text-neutral-600 md:text-5xl">
                      {article.title}
                    </h3>

                    <p className="mt-6 max-w-2xl text-[16px] leading-[1.85] text-neutral-700">
                      {article.excerpt}
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                      <p className="text-sm underline decoration-black/40 underline-offset-6 transition group-hover:text-neutral-500">
                        Read article →
                      </p>

                      <p className="text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                        {article.category}
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-14 border-b border-black/10 py-16">
            <p className="font-serif text-3xl text-neutral-700">
              The first Studio Journal publication is coming soon.
            </p>
          </div>
        )}
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-[1500px] px-6 pb-24 md:px-12 md:pb-32">
        <div className="flex flex-col items-start justify-between gap-8 border-t border-black/10 pt-12 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">
              More about the work
            </p>

            <p className="mt-5 max-w-2xl font-serif text-3xl leading-[1.2] text-neutral-900 md:text-4xl">
              Explore the story, design and development behind The Issue №.
            </p>
          </div>

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <Link
              href="/behind-the-issue"
              className="text-[10px] uppercase tracking-[0.28em] underline decoration-black/40 underline-offset-8 transition hover:text-neutral-500"
            >
              Behind The Issue →
            </Link>

            <Link
              href="/services"
              className="text-[10px] uppercase tracking-[0.28em] underline decoration-black/40 underline-offset-8 transition hover:text-neutral-500"
            >
              Explore services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}