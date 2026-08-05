import type { Metadata } from "next";
import Link from "next/link";

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

export default function StudioJournalPage() {
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

      {/* FIRST PUBLICATION */}
      <section className="mx-auto max-w-[1500px] px-6 py-20 md:px-12 md:py-28">
        <Link
          href="/article/why-we-dont-build-ordinary-websites"
          className="group block"
        >
          <article className="grid grid-cols-1 gap-12 border-b border-black/10 pb-16 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">
                First publication
              </p>

              <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-[#8A5A2B]">
                Published · August 2026
              </p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="max-w-4xl font-serif text-5xl leading-[1] tracking-[-0.04em] text-neutral-900 transition group-hover:text-neutral-600 md:text-7xl">
                Why We Don&apos;t Build Ordinary Websites
              </h2>

              <p className="mt-8 max-w-3xl text-[17px] leading-[1.85] text-neutral-700">
                A reflection on why memorable digital experiences need more
                than attractive layouts — and how editorial thinking gives a
                website character, rhythm and purpose.
              </p>

              <p className="mt-8 text-sm underline decoration-black/40 underline-offset-8 transition group-hover:text-neutral-500">
                Read article →
              </p>
            </div>
          </article>
        </Link>
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

          <Link
            href="/behind-the-issue"
            className="text-[10px] uppercase tracking-[0.28em] underline decoration-black/40 underline-offset-8 transition hover:text-neutral-500"
          >
            Behind The Issue →
          </Link>
        </div>
      </section>
    </main>
  );
}