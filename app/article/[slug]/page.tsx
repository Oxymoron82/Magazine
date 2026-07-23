import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { articles, ArticleBlock } from "@/data/articles";
import SubmitForm from "@/components/SubmitForm";
import Link from "next/link";
import ArticlePhotoCarousel from "@/components/ArticlePhotoCarousel";

/* ---------------- HELPERS ---------------- */

function renderText(text: string) {
  const lines = text.split("\n");

  return lines.map((line, i) => (
    <Fragment key={i}>
      {line}
      {i < lines.length - 1 ? <br /> : null}
    </Fragment>
  ));
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
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

function InlineImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="my-10">
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-neutral-200 bg-white/30">
        <Image src={src} alt={alt} fill className="object-cover" />
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
        {items.map((it) => (
          <div key={it.label} className="flex gap-3">
            <dt className="w-24 md:w-28 shrink-0 text-neutral-500">
              {it.label}
            </dt>

            <dd className="font-medium leading-snug break-words">
              {it.href ? (
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-black"
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
      {logo ? (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_180px] gap-8 md:gap-10 items-center">
          <CreditsList items={items} />

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
                width={180}
                height={120}
                className="w-full max-w-[160px] h-auto object-contain opacity-95 hover:opacity-100 transition"
              />
            </a>
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
        {...(autoplay && {
          autoPlay: true,
          muted: true,
          loop: true,
        })}
      />

      {caption ? (
        <p className="mt-3 text-sm text-neutral-500 text-center">
          {caption}
        </p>
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
            hyphens: "auto",
          }}
          className={[
            "my-6 text-[18px] leading-relaxed text-neutral-800",
            block.className || "",
            block.dropCap
              ? "first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:font-serif first-letter:text-6xl md:first-letter:text-7xl first-letter:leading-none"
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
          className="mt-12 mb-5 font-serif text-2xl md:text-3xl leading-snug text-editorial-text"
        >
          {block.text}
        </h2>
      );

    case "quote":
      return (
        <blockquote
          key={index}
          className="my-12 font-serif text-[24px] md:text-[30px] leading-snug text-neutral-900"
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

/* ---------------- PAGE SEO ---------------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

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
  const article = articles.find((a) => a.slug === slug);

  if (!article) notFound();

  const isBalakArticle =
    article.slug === "anastasija-balak-silent-guardian-falling-petals";

  return (
    <main className="bg-[#FFFBEB] text-neutral-900">
      {/* HERO */}
      <section className="relative h-[72vh] min-h-[520px] md:h-[82vh] overflow-hidden bg-black">
        {isBalakArticle ? (
          <>
            {/* Blurred background fills the frame */}
            <Image
              src={article.image}
              alt=""
              fill
              aria-hidden="true"
              sizes="100vw"
              className="scale-110 object-cover object-center blur-2xl opacity-45"
            />

            {/* Main image is fully visible and centered */}
            <Image
              src={article.image}
              alt={`${article.title} — ${article.category} article in The Issue №`}
              fill
              priority
              sizes="100vw"
              className="object-contain object-center"
            />

            {/* Smooth fade into black side frames */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.76)_7%,rgba(0,0,0,0.30)_17%,transparent_29%,transparent_71%,rgba(0,0,0,0.30)_83%,rgba(0,0,0,0.76)_93%,rgba(0,0,0,0.96)_100%)]" />
          </>
        ) : (
          <Image
            src={article.image}
            alt={`${article.title} — ${article.category} article in The Issue №`}
            fill
            priority
            className="object-cover"
          />
        )}

        <div
          className={
            isBalakArticle
              ? "absolute inset-0 bg-black/20"
              : "absolute inset-0 bg-black/45"
          }
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-5xl mx-auto px-6 pb-10 md:pb-14">
            <p className="text-xs uppercase tracking-[0.35em] text-white/80">
              {article.category}
            </p>

            <h1 className="mt-4 font-serif text-[34px] md:text-[56px] leading-[1.05] tracking-[-0.01em] text-white max-w-[22ch] md:max-w-[20ch] text-balance">
              {article.title}
            </h1>

            <p className="mt-5 max-w-[55ch] text-lg text-white/90 leading-relaxed">
              {article.excerpt}
            </p>

            {article.slug === "trinity-sofia" && (
              <div className="mt-8">
                <Link
                  href="/trinity"
                  className="inline-flex items-center gap-2 border border-white/40 bg-white/10 px-5 py-3 text-xs uppercase tracking-[0.35em] text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
                >
                  Explore Trinity Experience
                  <span>↗</span>
                </Link>
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/80">
              <span>By {article.author || "The Issue № Editorial Team"}</span>
              <span>—</span>

              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-20">
        <article lang="en" className="max-w-2xl mx-auto px-6">
          {article.blocks.map((block, index) => renderBlock(block, index))}

          <SubmitForm />
        </article>
      </section>
    </main>
  );
}