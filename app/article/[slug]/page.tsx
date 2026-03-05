import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";

function splitParagraphs(text: string) {
  return text
    .replace(/\r\n/g, "\n")
    .trim()
    .split(/\n\s*\n/g)
    .map((p) => p.trim())
    .filter(Boolean);
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <figure className="my-12 md:my-14">
      <blockquote className="font-serif text-[24px] md:text-[30px] leading-snug text-neutral-900">
        {children}
      </blockquote>
      <div className="mt-6 h-px bg-neutral-200/70" />
    </figure>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-neutral-600">
      {children}
    </p>
  );
}

function FullBleedImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <div className="my-12 md:my-14">
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-white/30">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      {caption ? (
        <div className="max-w-2xl mx-auto px-6">
          <Caption>{caption}</Caption>
        </div>
      ) : null}
    </div>
  );
}

function CreditsCard({
  title,
  items,
}: {
  title: string;
  items: { label: string; value: string }[];
}) {
  return (
    <aside className="mt-12 rounded-2xl border border-neutral-200 bg-white/40 p-6">
      <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
        {title}
      </p>

      <dl className="mt-5 space-y-3 text-sm text-neutral-800">
        {items.map((it) => (
          <div key={it.label} className="flex gap-3">
            <dt className="w-28 shrink-0 text-neutral-500">{it.label}</dt>
            <dd className="font-medium">{it.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const paragraphs = splitParagraphs(article.content);

  const isIntimacy = slug === "sexuality-is-not-a-pose";

  return (
    <main className="bg-[#FFFBEB] text-neutral-900">
      {/* HERO */}
      <section className="relative w-full h-[70vh] md:h-[80vh]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFBEB]/75 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-5xl mx-auto px-6 pb-10 md:pb-14">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-700">
              {article.category}
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-serif leading-tight">
              {article.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-neutral-800 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-5 text-sm text-neutral-700">
              {article.date ? <span>Published {article.date}</span> : null}
              <span className="opacity-60">•</span>
              <Link
                href="/#latest"
                className="underline underline-offset-4 hover:text-black transition"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="py-16 md:py-20">
        {/* верхняя линия */}
        <div className="max-w-2xl mx-auto px-6">
          <div className="h-px bg-neutral-200/70 mb-12" />
        </div>

        {/* текст узкой колонкой */}
        <article className="max-w-2xl mx-auto px-6 text-[18px] leading-relaxed text-neutral-800">
          {paragraphs.map((p, idx) => {
            const insertBefore: React.ReactNode[] = [];

            if (isIntimacy) {
              // full-bleed фото 2
              if (idx === 6) {
                insertBefore.push(
                  <FullBleedImage
                    key="img2"
                    src="/images/Intimacy/1/2.jpg"
                    alt="Intimacy visual"
                    caption="Intimacy — visual study"
                  />
                );
              }

              // pull quote 1
              if (idx === 10) {
                insertBefore.push(
                  <PullQuote key="q1">
                    “Real sexuality is not an image. It is the way you breathe,
                    the way you touch objects, the way you allow yourself to be
                    present.”
                  </PullQuote>
                );
              }

              // full-bleed фото 3
              if (idx === 18) {
                insertBefore.push(
                  <FullBleedImage
                    key="img3"
                    src="/images/Intimacy/1/3.jpg"
                    alt="Intimacy portrait"
                    caption="Body & intimacy — a quiet portrait"
                  />
                );
              }

              // pull quote 2
              if (idx === 24) {
                insertBefore.push(
                  <PullQuote key="q2">
                    “Later might never come. Life has to be lived now.”
                  </PullQuote>
                );
              }
            }

            // Drop cap только на первом параграфе
            const isFirstPara = idx === 0;

            // Мини-заголовки внутри контента (если строка короткая)
            const looksLikeHeading =
              p.length < 70 &&
              !p.includes(".") &&
              !p.includes("—") &&
              !p.includes(",") &&
              p.toLowerCase() === p;

            return (
              <div key={idx}>
                {insertBefore}

                {looksLikeHeading ? (
                  <h2 className="mt-12 mb-5 font-serif text-2xl md:text-3xl leading-snug text-neutral-900">
                    {p}
                  </h2>
                ) : (
                  <p
                    className={[
                      "my-6",
                      isFirstPara
                        ? "first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:font-serif first-letter:text-6xl md:first-letter:text-7xl first-letter:leading-none first-letter:text-neutral-900"
                        : "",
                    ].join(" ")}
                  >
                    {p}
                  </p>
                )}
              </div>
            );
          })}

          {/* credits (красивой карточкой) */}
          {isIntimacy ? (
            <CreditsCard
              title="Credits"
              items={[
                { label: "Model", value: "Evgenia Zapolnova" },
                { label: "Photographer", value: "Nikolai Zapolnov" },
                { label: "Column", value: "INTIMACY" },
              ]}
            />
          ) : null}

          <div className="mt-14 h-px bg-neutral-200/70" />

          <div className="mt-10 flex items-center justify-between gap-6 text-sm">
            <Link
              href="/columns/intimacy"
              className="underline underline-offset-4 hover:text-black transition"
            >
              ← Back to INTIMACY
            </Link>

            <Link
              href="/#columns"
              className="underline underline-offset-4 hover:text-black transition"
            >
              Explore columns →
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}