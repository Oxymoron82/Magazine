import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, ArticleBlock } from "@/data/articles";

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

function InlineImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <div className="my-10">
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-neutral-200 bg-white/30">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      {caption ? <Caption>{caption}</Caption> : null}
    </div>
  );
}

function CreditsCard({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <aside className="mt-12 rounded-2xl border border-neutral-200 bg-white/40 p-6 md:p-8 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
            Credits
          </p>

          <dl className="mt-5 space-y-4 text-sm text-neutral-800">
            {items.map((it) => (
              <div key={it.label} className="flex gap-3">
                <dt className="w-24 md:w-28 shrink-0 text-neutral-500">
                  {it.label}
                </dt>

                <dd className="font-medium break-words">
                  {it.label === "Website" ? (
                    <a
                      href={`https://${it.value}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline break-all"
                    >
                      {it.value}
                    </a>
                  ) : (
                    it.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex justify-center md:justify-end min-w-0">
          <a
            href="https://radiaatorikeskus.ee"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src="/images/work/radiaatorikeskus/logo2.png"
              alt="Küttemaailm OÜ logo"
              width={300}
              height={140}
              className="w-full max-w-[280px] h-auto object-contain opacity-95 hover:opacity-100 transition"
            />
          </a>
        </div>
      </div>
    </aside>
  );
}

function renderBlock(block: ArticleBlock, index: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={index}
          className="mt-12 mb-5 font-serif text-2xl md:text-3xl leading-snug text-neutral-900"
        >
          {block.text}
        </h2>
      );

    case "p":
      return (
        <p
          key={index}
          className={[
            "my-6 text-[18px] leading-relaxed text-neutral-800 whitespace-pre-line",
            block.dropCap
              ? "first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:font-serif first-letter:text-6xl md:first-letter:text-7xl first-letter:leading-none first-letter:text-neutral-900"
              : "",
          ].join(" ")}
        >
          {block.text}
        </p>
      );

    case "quote":
      return <PullQuote key={index}>{block.text}</PullQuote>;

    case "image":
      return block.fullBleed ? (
        <FullBleedImage
          key={index}
          src={block.src}
          alt={block.alt}
          caption={block.caption}
        />
      ) : (
        <InlineImage
          key={index}
          src={block.src}
          alt={block.alt}
          caption={block.caption}
        />
      );

    case "hr":
      return <div key={index} className="my-12 h-px bg-neutral-200/70" />;

    case "credits":
      return <CreditsCard key={index} items={block.items} />;

    default:
      return null;
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <main className="bg-[#FFFBEB] text-neutral-900">
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
              {article.date ? (
                <span>
                  Published{" "}
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              ) : null}
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

      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="h-px bg-neutral-200/70 mb-12" />
        </div>

        <article className="max-w-2xl mx-auto px-6">
          {article.blocks.map((b, i) => renderBlock(b, i))}

          <div className="mt-14 h-px bg-neutral-200/70" />

          <div className="mt-10 flex items-center justify-between gap-6 text-sm">
            <Link
              href={`/columns/${article.column}`}
              className="underline underline-offset-4 hover:text-black transition"
            >
              ← Back to column
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