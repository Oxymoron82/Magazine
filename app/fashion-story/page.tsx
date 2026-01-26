import Image from "next/image";
import Link from "next/link";

export default function FashionStoryPage() {
  return (
    <main className="bg-[#FFFBEB] text-neutral-900">
      {/* BACK */}
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <Link
          href="/"
          className="text-xs uppercase tracking-[0.35em] text-neutral-600 hover:text-black"
        >
          ← Back to Home
        </Link>
      </div>

      {/* ARTICLE HEADER */}
      <header className="max-w-3xl mx-auto px-6 pt-12 pb-16">
        <div className="text-xs uppercase tracking-[0.35em] text-neutral-600">
          Fashion Story · January 2026 · 6 min read
        </div>

        <h1 className="mt-6 text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-semibold">
          Saint Laurent by<br />Anthony Vaccarello
        </h1>

        <p className="mt-6 text-[1.15rem] leading-relaxed text-neutral-700">
          How minimalism became the most powerful statement in contemporary
          fashion — and why restraint now speaks louder than excess.
        </p>
      </header>

      {/* HERO IMAGE */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[20px]">
          <Image
            src="/images/article-hero.jpg"
            alt="Saint Laurent editorial"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* Drop cap */}
        <p className="text-[1.05rem] leading-[1.95] text-neutral-800">
          <span className="float-left mr-3 mt-2 text-6xl leading-none font-semibold">
            T
          </span>
          here is a quiet revolution happening in fashion. It does not announce
          itself with spectacle or excess, but through absence — through space,
          precision, and silence.
        </p>

        <div className="mt-10 space-y-10">
          <p>
            Anthony Vaccarello’s Saint Laurent collections exist in tension
            between strength and restraint. Each silhouette is deliberate. Each
            line earns its place.
          </p>

          <p>
            The removal of excess shifts attention to proportion, texture, and
            posture. Clothing becomes architecture rather than decoration.
          </p>

          {/* Pull quote */}
          <blockquote className="py-12">
            <div className="flex gap-6">
              <div className="w-[2px] bg-neutral-300" />
              <p className="text-[clamp(1.4rem,2.5vw,2.2rem)] leading-snug italic text-neutral-700">
                “Simplicity is the ultimate sophistication — but it takes courage
                to be simple.”
              </p>
            </div>
          </blockquote>

          <p>
            This philosophy demands confidence. When there is nothing to hide
            behind, every detail is exposed. Every choice matters.
          </p>

          <h2 className="pt-8 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold">
            The Art of Restraint
          </h2>

          <p>
            To design with restraint is not to design less — it is to design
            better. The quiet discipline of minimalism reveals form in its
            purest state.
          </p>
        </div>
      </article>

      {/* AUTHOR */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.35em] text-neutral-600">
              Written by
            </div>

            <h3 className="mt-4 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold">
              Élise Moreau
            </h3>

            <div className="mt-2 text-xs uppercase tracking-[0.35em] text-neutral-600">
              Fashion & Culture Editor
            </div>

            <p className="mt-6 text-neutral-700 leading-relaxed">
              Élise explores the intersection of fashion, art, and philosophy.
              With a background in fine arts and over a decade in editorial, she
              brings a contemplative lens to contemporary style.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px]">
              <Image
                src="/images/author.jpg"
                alt="Author portrait"
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
