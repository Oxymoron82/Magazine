import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editor’s Note | The Issue №",
  description:
    "Editor’s Note by Sofia Solas — reflections on fashion, identity, publishing and contemporary editorial culture.",
  alternates: {
    canonical: "https://theissue.xyz/editors-note",
  },
};

const editorArticles = [
  {
    title: "Starting Again in Another Country",
    excerpt:
      "A personal reflection on starting over, finding direction and learning to build a new life away from everything familiar.",
    image: "/images/becoming/starting-again/main.jpeg",
    href: "/article/starting-again-in-another-country",
    status: "Published",
    date: "2026",
  },
  {
    title: "Beyond the Logo: Why Brand Identity Matters",
    excerpt:
      "Why do some brands become unforgettable while others disappear? A reflection on identity, storytelling and the role of editorial.",
    image: "/images/sonja1.jpeg",
    href: "/article/beyond-the-logo-why-brand-identity-matters",
status: "Published",
    date: "2026",
  },
];

export default function EditorsNotePage() {
  return (
    <main className="bg-editorial-bg text-neutral-900">
      {/* HERO */}
      <section className="border-b border-neutral-200/70">
        <div className="mx-auto grid min-h-[72vh] max-w-7xl grid-cols-1 lg:grid-cols-12">
          <div className="flex items-center px-6 py-24 md:px-12 lg:col-span-7 lg:py-32">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.4em] text-neutral-500">
                Author&apos;s Column
              </p>

              <h1 className="mt-7 font-serif text-6xl leading-[0.92] tracking-[-0.05em] text-editorial-text md:text-8xl">
                Editor&apos;s Note
              </h1>

              <p className="mt-9 max-w-2xl font-serif text-3xl leading-[1.3] text-neutral-700 md:text-4xl">
                Thoughts on fashion, identity, publishing and the ideas behind
                contemporary editorial culture.
              </p>

              <div className="mt-10">
                <p className="font-serif text-2xl text-editorial-text">
                  Sofia Solas
                </p>

                <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                  Editor-in-Chief, The Issue №
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] bg-neutral-200 lg:col-span-5 lg:min-h-full">
            <Image
              src="/images/sonja1.jpeg"
              alt="Sofia Solas, Editor-in-Chief of The Issue №"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/5" />
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <div className="flex flex-col gap-5 border-b border-neutral-200/70 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
              Publications
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-editorial-text md:text-6xl">
              Notes from the editor.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-[1.8] text-neutral-600">
            Personal essays and editorial reflections on identity, fashion,
            storytelling and the changing world around us.
          </p>
        </div>

        <div className="mt-14 space-y-0">
          {editorArticles.map((article, index) => {
            const content = (
              <article className="group grid grid-cols-1 gap-8 border-b border-neutral-200/70 py-12 md:grid-cols-12 md:gap-12">
                <div className="md:col-span-2">
                  <p className="font-serif text-3xl text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>

                <div className="md:col-span-4">
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 34vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.025]"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center md:col-span-6">
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                      {article.status}
                    </p>

                    <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                      {article.date}
                    </p>
                  </div>

                  <h3 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.05] tracking-[-0.025em] text-editorial-text md:text-5xl">
                    {article.title}
                  </h3>

                  <p className="mt-6 max-w-2xl text-[16px] leading-[1.85] text-neutral-700">
                    {article.excerpt}
                  </p>

                  {article.href ? (
                    <p className="mt-7 text-sm underline decoration-neutral-400 underline-offset-6">
                      Read article →
                    </p>
                  ) : (
                    <p className="mt-7 text-[10px] uppercase tracking-[0.3em] text-[#8A5A2B]">
                      New publication coming soon
                    </p>
                  )}
                </div>
              </article>
            );

            return article.href ? (
              <Link
                key={article.title}
                href={article.href}
                className="block"
              >
                {content}
              </Link>
            ) : (
              <div key={article.title}>{content}</div>
            );
          })}
        </div>
      </section>

      {/* CLOSING */}
      <section className="border-t border-neutral-200/70">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                The editorial voice
              </p>
            </div>

            <div className="lg:col-span-8">
              <blockquote className="max-w-4xl font-serif text-4xl leading-[1.15] tracking-[-0.03em] text-editorial-text md:text-6xl">
                Fashion begins with identity.
              </blockquote>

              <p className="mt-8 text-sm text-neutral-600">
                Sofia Solas, Editor-in-Chief
              </p>

              <Link
                href="/"
                className="mt-10 inline-block text-[10px] uppercase tracking-[0.28em] underline decoration-neutral-400 underline-offset-8 transition hover:text-black"
              >
                Return to the magazine
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}