import Image from "next/image";
import Link from "next/link";

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  // Пока без CMS: заглушка данных по slug
  const article = getMockArticle(params.slug);

  return (
    <main className="bg-[#FFFBEB] text-neutral-900">
      {/* top nav spacer (если хочешь "возврат") */}
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <Link href="/" className="text-xs uppercase tracking-[0.35em] text-neutral-600 hover:text-black">
          ← Back to Home
        </Link>
      </div>

      {/* HEADER */}
      <header className="max-w-6xl mx-auto px-6 pt-10 pb-14">
        <div className="text-xs uppercase tracking-[0.35em] text-neutral-600">
          {article.category} &nbsp;•&nbsp; {article.date} &nbsp;•&nbsp; {article.readTime}
        </div>

        <h1 className="mt-6 text-[clamp(2.4rem,5vw,4.25rem)] leading-[1.05] font-semibold">
          {article.title}
        </h1>

        <p className="mt-6 max-w-2xl text-[clamp(1.05rem,2vw,1.35rem)] leading-relaxed text-neutral-700">
          {article.subtitle}
        </p>
      </header>

      {/* HERO IMAGE */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[18px]">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Drop cap paragraph */}
        <p className="text-[1.05rem] leading-[1.95] text-neutral-800">
          <span className="float-left mr-3 mt-2 text-6xl leading-none font-semibold text-neutral-900">
            {article.body[0].slice(0, 1)}
          </span>
          {article.body[0].slice(1)}
        </p>

        {/* Remaining paragraphs */}
        <div className="mt-10 space-y-10">
          {article.body.slice(1, 3).map((p, idx) => (
            <p key={idx} className="text-[1.05rem] leading-[1.95] text-neutral-800">
              {p}
            </p>
          ))}

          {/* Pull quote block (как на втором скрине) */}
          <PullQuote text={article.quote} />

          {article.body.slice(3).map((p, idx) => (
            <p key={idx} className="text-[1.05rem] leading-[1.95] text-neutral-800">
              {p}
            </p>
          ))}

          <h2 className="pt-6 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-tight">
            {article.sectionTitle}
          </h2>

          <p className="text-[1.05rem] leading-[1.95] text-neutral-800">
            {article.sectionBody}
          </p>
        </div>
      </article>

      {/* AUTHOR BLOCK (как на третьем скрине) */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.35em] text-neutral-600">
              Written by
            </div>

            <h3 className="mt-4 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-tight">
              {article.author.name}
            </h3>

            <div className="mt-3 text-xs uppercase tracking-[0.35em] text-neutral-600">
              {article.author.role}
            </div>

            <p className="mt-6 text-neutral-700 leading-relaxed">
              {article.author.bio}
            </p>

            <Link
              href="/#latest"
              className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-neutral-700 hover:text-black"
            >
              View all articles <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="md:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[18px]">
              <Image
                src={article.author.image}
                alt={article.author.name}
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PullQuote({ text }: { text: string }) {
  return (
    <blockquote className="py-10">
      <div className="flex gap-6 items-start">
        <div className="w-[2px] bg-neutral-300 mt-2" />
        <p className="text-[clamp(1.4rem,2.4vw,2.2rem)] leading-snug text-neutral-700 italic">
          “{text}”
        </p>
      </div>
    </blockquote>
  );
}

// ---- mock data (потом заменим на CMS) ----
function getMockArticle(slug: string) {
  // Можешь потом сделать разные статьи по slug
  const title = slugToTitle(slug);

  return {
    slug,
    category: "Fashion Essay",
    date: "January 2026",
    readTime: "6 min read",
    title: title || "The Eloquence of Empty Space",
    subtitle:
      "How minimalism became the most powerful statement in contemporary fashion — and why the absence of ornament speaks louder than its presence.",
    heroImage: "/images/article-hero.jpg",
    body: [
      "here is a quiet revolution happening in the world of fashion. It speaks not in loud patterns or bold statements, but in the eloquent pause between elements — in the breath of white space, the weight of a single, perfect fold.",
      'The concept of "more space" in design is not about emptiness. It is about intentionality. Each garment, each silhouette, exists in conversation with the void around it. The Japanese call this ma — the pregnant nothingness that gives meaning to form.',
      "In an era of constant visual noise, the most radical act may be restraint. To wear less, but better. To choose one exquisite piece over ten forgettable ones. This is the new luxury: the courage to leave space.",
      "The designers leading this movement understand that every element must earn its place. A single button, a particular drape, the precise break of a trouser — these details become amplified when surrounded by space. Nothing is incidental; everything is essential.",
      "Consider the work of minimalist ateliers from Tokyo to Copenhagen. Their approach strips away the superfluous to reveal what matters: the quality of the fabric against skin, the architecture of a well-considered seam, the poetry of proportion.",
    ],
    quote: "Simplicity is the ultimate sophistication — but it takes courage to be simple.",
    sectionTitle: "The Art of Restraint",
    sectionBody:
      "When we embrace more space, we also embrace vulnerability. There is nowhere to hide in minimalism. Every line, every proportion, every material choice is exposed and must stand on its own.",
    author: {
      name: "Élise Moreau",
      role: "Fashion & Culture Editor",
      bio:
        "Élise explores the intersection of fashion, art, and philosophy. With a background in fine arts and a decade in editorial, she brings a contemplative lens to the world of style. Based between Paris and Copenhagen.",
      image: "/images/author.jpg",
    },
  };
}

function slugToTitle(slug: string) {
  if (!slug) return "";
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
