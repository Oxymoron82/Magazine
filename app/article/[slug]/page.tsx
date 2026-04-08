import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, ArticleBlock } from "@/data/articles";

import SubmitForm from "@/components/SubmitForm";

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
  position = "center",
}: {
  src: string;
  alt: string;
  caption?: string;
  position?: "center" | "top";
}) {
  return (
    <div className="my-12 md:my-14">
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-white/30">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition duration-500 hover:scale-[1.02] ${
            position === "top" ? "object-top" : "object-center"
          }`}
        />
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
  position = "center",
}: {
  src: string;
  alt: string;
  caption?: string;
  position?: "center" | "top";
}) {
  return (
    <div className="my-10">
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-neutral-200 bg-white/30">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition duration-500 hover:scale-[1.03] ${
            position === "top" ? "object-top" : "object-center"
          }`}
        />
      </div>
      {caption ? <Caption>{caption}</Caption> : null}
    </div>
  );
}

function CreditsCard({
  items,
  logo,
}: {
  items: { label: string; value: string; href?: string }[];
  logo?: {
    src: string;
    href?: string;
    alt?: string;
  };
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
                      href={it.href ?? `https://${it.value}`}
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

        {logo ? (
          <div className="flex justify-center md:justify-end min-w-0">
            <a
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src={logo.src}
                alt={logo.alt || "logo"}
                width={300}
                height={140}
                className="w-full max-w-[280px] h-auto object-contain opacity-95 hover:opacity-100 transition"
              />
            </a>
          </div>
        ) : null}
      </div>
    </aside>
  );
}

function GalleryBlock({
  images,
  caption,
}: {
  images: { src: string; alt: string }[];
  caption?: string;
}) {
  return (
    <div className="my-12 md:my-14">
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-neutral-200 bg-white/30"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition duration-500 hover:scale-[1.04]"
            />
          </div>
        ))}
      </div>

      {caption ? <Caption>{caption}</Caption> : null}
    </div>
  );
}

function renderBlock(
  block: ArticleBlock,
  index: number,
  imagePosition: "center" | "top"
) {
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

    case "video":
      return (
        <div
          key={index}
          className="my-12 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-10 items-center"
        >
          <div className="md:pt-8">
            <p className="font-serif text-[22px] leading-[1.5] text-neutral-900 tracking-tight">
              From the first moodboard to the final shutter click, we create a
              space where you can finally take up the room you deserve.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-black">
            <video
              src={block.src}
              poster="/images/trinity/6.jpg"
              controls
              playsInline
              className="w-full max-w-[520px] h-auto transition duration-500 hover:scale-[1.02]"
              {...(block.autoplay && {
                autoPlay: true,
                muted: true,
                loop: true,
              })}
            />
            {block.caption ? (
              <p className="mt-3 text-sm text-neutral-500 text-center">
                {block.caption}
              </p>
            ) : null}
          </div>
        </div>
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
          position={imagePosition}
        />
      ) : (
        <InlineImage
          key={index}
          src={block.src}
          alt={block.alt}
          caption={block.caption}
          position={imagePosition}
        />
      );

    case "hr":
      return <div key={index} className="my-12 h-px bg-neutral-200/70" />;

    case "gallery":
      return (
        <GalleryBlock
          key={index}
          images={block.images}
          caption={block.caption}
        />
      );

    case "credits":
      return <CreditsCard key={index} items={block.items} logo={block.logo} />;

    default:
      return null;
  }
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) return {};

  return {
    title: `${article.title} | The Issue N`,
    description: article.excerpt,
  };
}
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const isMarina = article.slug === "marina-smagin-artmari-handmade-dsn";
  const imagePosition: "center" | "top" = isMarina ? "top" : "center";

  return (
    <main className="bg-[#FFFBEB] text-neutral-900">
      <section className="relative w-full h-[70vh] md:h-[80vh]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className={`object-cover ${
            imagePosition === "top" ? "object-top" : "object-center"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-5xl mx-auto px-6 pb-10 md:pb-14">
            <p className="text-xs uppercase tracking-[0.35em] text-white/80">
              {article.category}
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-serif leading-tight text-white">
              {article.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-white/90 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-5 text-sm text-white/80">
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
                className="underline underline-offset-4 hover:text-white transition"
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
          {article.blocks.map((b, i) => renderBlock(b, i, imagePosition))}

          <SubmitForm />

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