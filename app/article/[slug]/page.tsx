import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { articles, ArticleBlock } from "@/data/articles";
import SubmitForm from "@/components/SubmitForm";
import ArticlePhotoCarousel from "@/components/ArticlePhotoCarousel";

/* ---------------- HELPERS ---------------- */

function formatArticleDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderTextWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const normalizedText = text.replace(/\s*\n+\s*/g, " ");
  const parts = normalizedText.split(urlRegex);

  return parts.map((part, index) => {
    const isUrl = /^https?:\/\/[^\s]+$/.test(part);

    if (isUrl) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="italic underline underline-offset-4 hover:text-black"
        >
          {part}
        </a>
      );
    }

    return <Fragment key={index}>{part}</Fragment>;
  });
}

/* ---------------- SMALL UI ---------------- */

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-neutral-600">
      {children}
    </p>
  );
}

/* ---------------- IMAGE COMPONENTS ---------------- */

function FullBleedImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="my-12 md:my-14">
      <div className="relative w-full overflow-hidden bg-white/30">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={1800}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

function InlineImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="my-10">
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-neutral-200 bg-white/30">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 672px"
          className="object-cover"
        />
      </div>
    </div>
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
            key={`${image.src}-${index}`}
            className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-neutral-200 bg-white/30"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 320px"
              className="object-cover transition duration-500 hover:scale-[1.04]"
            />
          </div>
        ))}
      </div>

      {caption ? <Caption>{caption}</Caption> : null}
    </div>
  );
}

/* ---------------- CREDITS ---------------- */

function CreditsList({
  items,
}: {
  items: { label: string; value: string; href?: string }[];
}) {
  return (
    <div className="min-w-0">
      <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
        Credits
      </p>

      <dl className="mt-5 space-y-4 text-sm text-neutral-800">
        {items.map((item) => (
          <div key={`${item.label}-${item.value}`} className="flex gap-3">
            <dt className="w-24 shrink-0 text-neutral-500 md:w-28">
              {item.label}
            </dt>

            <dd className="break-words font-medium leading-snug">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-black"
                >
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </dd>
          </div>
        ))}
      </dl>
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
  const logoImage = (
    <Image
      src={logo?.src || ""}
      alt={logo?.alt || "Logo"}
      width={180}
      height={120}
      className="h-auto w-full max-w-[160px] object-contain opacity-95 transition hover:opacity-100"
    />
  );

  return (
    <aside className="mt-12 overflow-hidden rounded-2xl border border-neutral-200 bg-white/40 p-6 md:p-8">
      {logo ? (
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_180px] md:gap-10">
          <CreditsList items={items} />

          <div className="flex min-w-0 justify-center md:justify-end">
            {logo.href ? (
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {logoImage}
              </a>
            ) : (
              logoImage
            )}
          </div>
        </div>
      ) : (
        <div className="max-w-md">
          <CreditsList items={items} />
        </div>
      )}
    </aside>
  );
}

/* ---------------- VIDEO ---------------- */

function VideoBlock({
  src,
  caption,
  autoplay,
}: {
  src: string;
  caption?: string;
  autoplay?: boolean;
}) {
  const videoPoster =
    src === "/images/places/tallinweek/video1.mp4"
      ? "/images/places/tallinweek/poster.jpg"
      : "/images/trinity/6.jpg";

  return (
    <div className="my-12">
      <video
        src={src}
        poster={videoPoster}
        controls
        playsInline
        className="w-full rounded-2xl"
        {...(autoplay
          ? {
              autoPlay: true,
              muted: true,
              loop: true,
            }
          : {})}
      />

      {caption ? (
        <p className="mt-3 text-center text-sm text-neutral-500">{caption}</p>
      ) : null}
    </div>
  );
}

/* ---------------- BLOCK RENDER ---------------- */

function renderBlock(block: ArticleBlock, index: number) {
  switch (block.type) {
    case "p": {
      const paragraphLink = block.link;

      return (
        <p
          key={index}
          lang="en"
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            hyphens: "none",
          }}
          className={[
            "my-6 text-[18px] leading-relaxed text-neutral-800",
            block.className || "",
            block.dropCap
              ? "first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:font-serif first-letter:text-6xl first-letter:leading-none md:first-letter:text-7xl"
              : "",
          ].join(" ")}
        >
          {renderTextWithLinks(block.text)}

          {paragraphLink ? (
            <>
              {" "}
              <Link
                href={paragraphLink.href}
                className="underline underline-offset-4 transition hover:text-black"
              >
                {paragraphLink.text}
              </Link>
            </>
          ) : null}
        </p>
      );
    }

    case "h2":
      return (
        <h2
          key={index}
          className="mb-5 mt-12 font-serif text-2xl leading-snug text-editorial-text md:text-3xl"
        >
          {block.text}
        </h2>
      );

    case "quote":
      return (
        <blockquote
          key={index}
          className="my-12 font-serif text-[24px] leading-snug text-neutral-900 md:text-[30px]"
        >
          {block.text}
        </blockquote>
      );

    case "image":
      return block.fullBleed ? (
        <FullBleedImage key={index} src={block.src} alt={block.alt} />
      ) : (
        <InlineImage key={index} src={block.src} alt={block.alt} />
      );

    case "gallery":
      return (
        <GalleryBlock
          key={index}
          images={block.images}
          caption={block.caption}
        />
      );

    case "carousel":
      return (
        <ArticlePhotoCarousel
          key={index}
          images={block.images}
          caption={block.caption}
        />
      );

    case "video":
      return (
        <VideoBlock
          key={index}
          src={block.src}
          caption={block.caption}
          autoplay={block.autoplay}
        />
      );

    case "hr":
      return <div key={index} className="my-12 h-px bg-neutral-200/70" />;

    case "credits":
      return <CreditsCard key={index} items={block.items} logo={block.logo} />;

    default:
      return null;
  }
}

/* ---------------- RELATED ARTICLES ---------------- */

type ArticleItem = (typeof articles)[number];

function getRelatedArticles(article: ArticleItem) {
  return articles
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => {
      const sameJournal =
        Boolean(article.journal) && candidate.journal === article.journal;

      const sameColumn = candidate.column === article.column;

      const sameAuthor =
        Boolean(article.author) && candidate.author === article.author;

      let relevanceScore = 0;

      if (sameJournal) relevanceScore += 100;
      if (sameColumn) relevanceScore += 40;
      if (sameAuthor) relevanceScore += 15;

      return {
        article: candidate,
        relevanceScore,
      };
    })
    .sort((a, b) => {
      if (a.relevanceScore !== b.relevanceScore) {
        return b.relevanceScore - a.relevanceScore;
      }

      return (
        new Date(b.article.date).getTime() -
        new Date(a.article.date).getTime()
      );
    })
    .slice(0, 3)
    .map((item) => item.article);
}

function RelatedArticles({
  relatedArticles,
}: {
  relatedArticles: ArticleItem[];
}) {
  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-neutral-200/70">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <div className="flex flex-col gap-6 border-b border-neutral-200/70 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">
              Continue reading
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] text-editorial-text md:text-6xl">
              More from The Issue №
            </h2>
          </div>

          <Link
            href="/columns"
            className="text-[10px] uppercase tracking-[0.28em] underline decoration-neutral-400 underline-offset-8 transition hover:text-black"
          >
            Explore all columns →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
          {relatedArticles.map((relatedArticle, index) => (
            <Link
              key={relatedArticle.slug}
              href={`/article/${relatedArticle.slug}`}
              className="group block"
            >
              <article className="flex h-full flex-col">
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
                  <Image
                    src={relatedArticle.image}
                    alt={`${relatedArticle.title} — The Issue №`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-black/[0.04] transition duration-500 group-hover:bg-transparent" />

                  <span className="absolute right-5 top-5 text-[10px] uppercase tracking-[0.3em] text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col pt-6">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                      {relatedArticle.category}
                    </p>

                    <time
                      dateTime={relatedArticle.date}
                      className="text-[10px] uppercase tracking-[0.25em] text-neutral-400"
                    >
                      {formatArticleDate(relatedArticle.date)}
                    </time>
                  </div>

                  <h3 className="mt-4 font-serif text-3xl leading-[1.08] tracking-[-0.025em] text-editorial-text transition group-hover:text-neutral-600">
                    {relatedArticle.title}
                  </h3>

                  <p className="mt-5 text-sm leading-[1.8] text-neutral-700">
                    {relatedArticle.excerpt}
                  </p>

                  <p className="mt-auto pt-7 text-sm underline decoration-neutral-400 underline-offset-6 transition group-hover:text-black">
                    Read article →
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- AUTHOR BOX ---------------- */

function AuthorBox({ article }: { article: ArticleItem }) {
  const isEditorsNote = article.journal === "editors-note";
  const isStudioJournal = article.journal === "studio-journal";

  const authorName = article.author || "The Issue № Editorial Team";

  const role = isEditorsNote
    ? "Editor-in-Chief"
    : isStudioJournal
      ? "Creative Developer · UI/UX Designer"
      : "Independent Editorial Team";

  const description = isEditorsNote
    ? "Reflections on fashion, identity, publishing and contemporary editorial culture."
    : isStudioJournal
      ? "A behind-the-scenes look at editorial production, digital publishing, branding and the creative process behind The Issue №."
      : "Independent editorial stories exploring fashion, culture, creativity, work and contemporary identity.";

  const href = isEditorsNote
    ? "/editors-note"
    : isStudioJournal
      ? "/studio-journal"
      : "/columns";

  const linkText = isEditorsNote
    ? "View Editor’s Note →"
    : isStudioJournal
      ? "View Studio Journal →"
      : "Explore the magazine →";

  return (
    <aside className="mt-16 border-y border-neutral-200/70 py-10">
      <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">
        About the author
      </p>

      <div className="mt-7">
        <h2 className="font-serif text-3xl leading-tight text-editorial-text">
          {authorName}
        </h2>

        <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-neutral-500">
          {role}
        </p>

        <p className="mt-6 max-w-xl text-[15px] leading-[1.8] text-neutral-700">
          {description}
        </p>

        <Link
          href={href}
          className="mt-7 inline-block text-[10px] uppercase tracking-[0.28em] underline decoration-neutral-400 underline-offset-8 transition hover:text-black"
        >
          {linkText}
        </Link>
      </div>
    </aside>
  );
}

/* ---------------- PAGE SEO ---------------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | The Issue №",
    };
  }

  const title = `${article.title} | The Issue №`;
  const description = article.excerpt;
  const url = `https://theissue.xyz/article/${article.slug}`;
  const image = `https://theissue.xyz${article.image}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "The Issue №",
      type: "article",
      locale: "en_US",
      publishedTime: article.date,
      authors: [article.author || "The Issue № Editorial Team"],
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${article.title} — The Issue №`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/* ---------------- PAGE ---------------- */

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article);

  const containedHeroSlugs = new Set([
    "anastasija-balak-silent-guardian-falling-petals",
    "beyond-the-logo-why-brand-identity-matters",
    "starting-again-in-another-country",
  ]);

  const useContainedHero = containedHeroSlugs.has(article.slug);

  return (
    <main className="bg-[#FFFBEB] text-neutral-900">
      {/* HERO */}
      <section className="relative h-[72vh] min-h-[520px] overflow-hidden bg-black md:h-[82vh]">
        {useContainedHero ? (
          <>
            {/* Blurred background fills the empty side space */}
            <Image
              src={article.image}
              alt=""
              fill
              aria-hidden="true"
              sizes="100vw"
              className="scale-110 object-cover object-center opacity-50 blur-2xl"
            />

            {/* Darkening over the blurred background */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Main vertical image remains fully visible */}
            <Image
              src={article.image}
              alt={`${article.title} — ${article.category} article in The Issue №`}
              fill
              priority
              sizes="100vw"
              className="object-contain object-center"
            />

            {/* Smooth transition into black side frames */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.82)_7%,rgba(0,0,0,0.38)_17%,transparent_30%,transparent_70%,rgba(0,0,0,0.38)_83%,rgba(0,0,0,0.82)_93%,rgba(0,0,0,0.98)_100%)]" />
          </>
        ) : (
          <Image
            src={article.image}
            alt={`${article.title} — ${article.category} article in The Issue №`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}

        <div
          className={
            useContainedHero
              ? "absolute inset-0 bg-black/15"
              : "absolute inset-0 bg-black/45"
          }
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="mx-auto max-w-5xl px-6 pb-10 md:pb-14">
            <p className="text-xs uppercase tracking-[0.35em] text-white/80">
              {article.category}
            </p>

            <h1 className="mt-4 max-w-[22ch] text-balance font-serif text-[34px] leading-[1.05] tracking-[-0.01em] text-white md:max-w-[20ch] md:text-[56px]">
              {article.title}
            </h1>

            <p className="mt-5 max-w-[55ch] text-lg leading-relaxed text-white/90">
              {article.excerpt}
            </p>

            {article.slug === "trinity-sofia" ? (
              <div className="mt-8">
                <Link
                  href="/trinity"
                  className="inline-flex items-center gap-2 border border-white/40 bg-white/10 px-5 py-3 text-xs uppercase tracking-[0.35em] text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
                >
                  Explore Trinity Experience
                  <span>↗</span>
                </Link>
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/80">
              <span>By {article.author || "The Issue № Editorial Team"}</span>
              <span>—</span>

              <time dateTime={article.date}>
                {formatArticleDate(article.date)}
              </time>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-20">
        <article lang="en" className="mx-auto max-w-2xl px-6">
          {article.blocks.map((block, index) => renderBlock(block, index))}

          <AuthorBox article={article} />

          <SubmitForm />
        </article>
      </section>

      {/* RELATED ARTICLES */}
      <RelatedArticles relatedArticles={relatedArticles} />
    </main>
  );
}