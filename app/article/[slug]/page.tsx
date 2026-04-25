import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Fragment } from "react";
import { articles, ArticleBlock, Article } from "@/data/articles";

import SubmitForm from "@/components/SubmitForm";

const siteUrl = "https://theissue.xyz";

const inlineLinkMap: { phrase: string; href: string }[] = [
  {
    phrase: "Anastasija Balak",
    href: "/article/anastasija-balak-silent-guardian-falling-petals",
  },
  {
    phrase: "Tallinn Fashion Week",
    href: "/article/tallinn-fashion-week-between-space-movement-and-form",
  },
  {
    phrase: "Marina Smagin",
    href: "/article/marina-smagin-artmari-handmade-dsn",
  },
  {
    phrase: "TRINITY project",
    href: "/article/trinity-sofia",
  },
  {
    phrase: "Sexuality Is Not a Pose — It Is a State",
    href: "/article/sexuality-is-not-a-pose",
  },
];

const relatedArticlesMap: Record<string, string[]> = {
  "tallinn-fashion-week-between-space-movement-and-form": [
    "anastasija-balak-silent-guardian-falling-petals",
    "marina-smagin-artmari-handmade-dsn",
  ],
  "anastasija-balak-silent-guardian-falling-petals": [
    "tallinn-fashion-week-between-space-movement-and-form",
    "marina-smagin-artmari-handmade-dsn",
  ],
  "marina-smagin-artmari-handmade-dsn": [
    "anastasija-balak-silent-guardian-falling-petals",
    "tallinn-fashion-week-between-space-movement-and-form",
  ],
  "sexuality-is-not-a-pose": ["trinity-sofia"],
  "trinity-sofia": ["sexuality-is-not-a-pose"],
  "radiaatorikeskus-heating-design-estonia": [
    "tallinn-fashion-week-between-space-movement-and-form",
    "anastasija-balak-silent-guardian-falling-petals",
  ],
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderLinkedLine(line: string) {
  if (!line) return null;

  const matches = inlineLinkMap
    .map((item) => {
      const match = line.match(new RegExp(escapeRegExp(item.phrase), "g"));
      return match ? { ...item, count: match.length } : null;
    })
    .filter(Boolean) as { phrase: string; href: string; count: number }[];

  if (matches.length === 0) return line;

  const pattern = new RegExp(
    `(${inlineLinkMap.map((item) => escapeRegExp(item.phrase)).join("|")})`,
    "g"
  );

  const parts = line.split(pattern);

  return parts.map((part, index) => {
    const linkItem = inlineLinkMap.find((item) => item.phrase === part);

    if (linkItem) {
      return (
        <Link
          key={`${part}-${index}`}
          href={linkItem.href}
          className="underline underline-offset-4 hover:text-black transition"
        >
          {part}
        </Link>
      );
    }

    return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
  });
}

function renderLinkedText(text: string) {
  const lines = text.split("\n");

  return lines.map((line, index) => (
    <Fragment key={`${line}-${index}`}>
      {renderLinkedLine(line)}
      {index < lines.length - 1 ? <br /> : null}
    </Fragment>
  ));
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

function RelatedArticles({ items }: { items: Article[] }) {
  if (!items.length) return null;

  return (
    <section className="mt-16 md:mt-20">
      <div className="h-px bg-neutral-200/70 mb-10" />

      <div className="flex items-end justify-between gap-6 mb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
            Related Reading
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-serif">
            Continue exploring
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item) => (
          <Link key={item.slug} href={`/article/${item.slug}`} className="group">
            <article className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-white/30">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
                {item.category}
              </p>

              <h3 className="text-xl font-medium leading-snug">{item.title}</h3>

              <p className="text-neutral-700 leading-relaxed">{item.excerpt}</p>

              <p className="text-sm underline underline-offset-4">
                Read article →
              </p>
            </article>
          </Link>
        ))}
      </div>
    </section>
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

    case "video": {
      const isTallinnWeekVideo =
        block.src === "/images/places/tallinweek/video1.mp4";

      const videoText = isTallinnWeekVideo
        ? "Tallinn Fashion Week this season was not only about runway presentations, but about observation — of people, of style, and of how fashion exists in real life."
        : "From the first moodboard to the final shutter click, we create a space where you can finally take up the room you deserve.";

      const videoPoster = isTallinnWeekVideo
        ? "/images/places/tallinweek/poster.jpg"
        : "/images/trinity/6.jpg";

      return (
        <div
          key={index}
          className="my-12 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-10 items-center"
        >
          <div className="md:pt-8">
            <p className="font-serif text-[22px] leading-[1.5] text-neutral-900 tracking-tight">
              {videoText}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-black">
            <video
              src={block.src}
              poster={videoPoster}
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
    }

    case "p":
      if (block.text.includes("Continue reading")) {
        return (
          <p
            key={index}
            className="my-6 text-[18px] leading-relaxed text-neutral-800"
          >
            {renderLinkedText(block.text)}
          </p>
        );
      }

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
          {renderLinkedText(block.text)}
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
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article | The Issue N",
      description: "Editorial stories from The Issue N.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const articleUrl = `${siteUrl}/article/${article.slug}`;

  return {
    title: `${article.title} | The Issue N`,
    description: article.excerpt,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: `${article.title} | The Issue N`,
      description: article.excerpt,
      url: articleUrl,
      siteName: "The Issue N",
      type: "article",
      locale: "en_US",
      images: [
        {
          url: `${siteUrl}${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | The Issue N`,
      description: article.excerpt,
      images: [`${siteUrl}${article.image}`],
    },
    robots: {
      index: true,
      follow: true,
    },
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
  const isBalak =
    article.slug === "anastasija-balak-silent-guardian-falling-petals";

  const imagePosition: "center" | "top" = isMarina ? "top" : "center";

  const relatedArticles =
    relatedArticlesMap[article.slug]
      ?.map((relatedSlug) => articles.find((item) => item.slug === relatedSlug))
      .filter(Boolean) as Article[] | undefined;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: [`${siteUrl}${article.image}`],
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "The Issue N",
    },
    publisher: {
      "@type": "Organization",
      name: "The Issue N",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo_main.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/article/${article.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      <main className="bg-[#FFFBEB] text-neutral-900">
        <section
          className={`relative w-full ${
            isBalak ? "h-[85vh] md:h-[90vh] bg-black" : "h-[70vh] md:h-[80vh]"
          }`}
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className={
              isBalak
                ? "object-contain"
                : `object-cover ${
                    imagePosition === "top" ? "object-top" : "object-center"
                  }`
            }
          />
          <div
            className={`absolute inset-0 ${
              isBalak
                ? "bg-gradient-to-t from-black/70 via-black/20 to-black/20"
                : "bg-gradient-to-t from-black/60 via-black/10 to-transparent"
            }`}
          />

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

            <RelatedArticles items={relatedArticles ?? []} />

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
    </>
  );
}