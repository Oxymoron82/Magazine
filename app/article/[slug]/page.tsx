import Image from "next/image";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { articles, ArticleBlock } from "@/data/articles";

import SubmitForm from "@/components/SubmitForm";

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
                  className="hover:underline"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
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
                width={300}
                height={140}
                className="w-full max-w-[280px] h-auto object-contain opacity-95 hover:opacity-100 transition"
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
  const isTallinnWeekVideo =
    src === "/images/places/tallinweek/video1.mp4";

  const isTrinityVideo =
    src === "/images/trinity/video_trinity.mp4";

  const videoText = isTallinnWeekVideo
    ? "Tallinn Fashion Week this season was not only about runway presentations, but about observation — of people, of style, and of how fashion exists in real life."
    : "From the first moodboard to the final shutter click, we create a space where you can finally take up the room you deserve.";

  const videoPoster = isTallinnWeekVideo
    ? "/images/places/tallinweek/poster.jpg"
    : "/images/trinity/6.jpg";

  return (
    <div className="my-12 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-10 items-center">
      <div className="md:pt-8">
        <p className="font-serif text-[22px] leading-[1.5] text-neutral-900 tracking-tight">
          {videoText}
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-black">
        <video
          src={src}
          poster={videoPoster}
          controls
          playsInline
          className="w-full max-w-[520px] h-auto transition duration-500 hover:scale-[1.02]"
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
    </div>
  );
}
/* ---------------- BLOCK RENDER ---------------- */

function renderBlock(block: ArticleBlock, index: number) {
  switch (block.type) {
    case "p":
      return (
        <p
          key={index}
          className={[
            "my-6 text-[18px] leading-relaxed text-neutral-800 whitespace-pre-line",
            block.dropCap
              ? "first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:font-serif first-letter:text-6xl md:first-letter:text-7xl first-letter:leading-none"
              : "",
          ].join(" ")}
        >
          {renderText(block.text)}
        </p>
      );

    case "h2":
      return (
        <h2
          key={index}
          className="mt-12 mb-5 font-serif text-2xl md:text-3xl leading-snug text-neutral-900"
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

/* ---------------- PAGE ---------------- */

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) notFound();

  const isAboutElegance =
    article.slug === "about-elegance-musical-fuad-oranski";

  const isContainedHero =
    article.slug === "anastasija-balak-silent-guardian-falling-petals" ||
    article.slug === "starting-again-in-another-country";

  return (
    <main className="bg-[#FFFBEB] text-neutral-900">
      {/* HERO */}
      {isAboutElegance ? (
        <section className="relative w-full bg-black text-white">
          <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 md:pt-32 md:pb-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                {article.category}
              </p>

              <h1 className="mt-4 font-serif text-[34px] md:text-[56px] leading-[1.05] tracking-[-0.01em] max-w-[20ch] text-balance">
                {article.title}
              </h1>

              <p className="mt-6 text-lg text-white/80 max-w-[45ch] leading-relaxed">
                {article.excerpt}
              </p>

              <div className="mt-6 text-sm text-white/60">
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>

            <div className="relative w-full flex justify-end">
              <Image
                src={article.image}
                alt={article.title}
                width={1000}
                height={900}
                priority
                className="w-full max-w-[640px] h-auto object-contain"
              />
            </div>
          </div>
        </section>
      ) : (
        <section
          className={`relative w-full ${
            isContainedHero
              ? "h-[85vh] md:h-[90vh] bg-black flex items-center justify-center"
              : "h-[70vh] md:h-[80vh]"
          }`}
        >
          <Image
            src={article.image}
            alt={article.title}
            fill={!isContainedHero}
            width={isContainedHero ? 1200 : undefined}
            height={isContainedHero ? 900 : undefined}
            priority
            className={
              isContainedHero
                ? "object-contain max-h-[80vh]"
                : "object-cover"
            }
          />

          <div
            className={`absolute inset-0 ${
              isContainedHero
                ? "bg-gradient-to-t from-black/70 via-black/20 to-black/20"
                : "bg-gradient-to-t from-black/60 via-black/10 to-transparent"
            }`}
          />

          <div className="absolute bottom-0 left-0 right-0">
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

              <div className="mt-6 text-sm text-white/80">
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CONTENT */}
      <section className="py-16 md:py-20">
        <article className="max-w-2xl mx-auto px-6">
          {article.blocks.map((b, i) => renderBlock(b, i))}
          <SubmitForm />
        </article>
      </section>
    </main>
  );
}