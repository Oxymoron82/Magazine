import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles, ArticleBlock } from "@/data/articles";

import SubmitForm from "@/components/SubmitForm";

const siteUrl = "https://theissue.xyz";

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
          className={`object-cover ${
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
          className={`object-cover ${
            position === "top" ? "object-top" : "object-center"
          }`}
        />
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
        <h2 key={index} className="mt-12 mb-5 font-serif text-2xl md:text-3xl">
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
              ? "first-letter:float-left first-letter:mr-3 first-letter:text-6xl"
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
      robots: { index: false, follow: false },
    };
  }

  const url = `${siteUrl}/article/${article.slug}`;

  return {
    title: `${article.title} | The Issue N`,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      images: [
        {
          url: `${siteUrl}${article.image}`,
          width: 1200,
          height: 630,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [`${siteUrl}${article.image}`],
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

  const imagePosition: "center" | "top" =
    article.slug === "marina-smagin-artmari-handmade-dsn"
      ? "top"
      : "center";

  // ✅ SEO structured data
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
    <main className="bg-[#FFFBEB] text-neutral-900">
      {/* ✅ ВАЖНО: это вставляет structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* HERO */}
      <section className="relative w-full h-[70vh] md:h-[80vh]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
        />
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <article className="max-w-2xl mx-auto px-6">
          {article.blocks.map((b, i) =>
            renderBlock(b, i, imagePosition)
          )}

          <SubmitForm />
        </article>
      </section>
    </main>
  );
}