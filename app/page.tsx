import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import EditorialCard from "@/components/EditorialCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "The Issue N | Independent Fashion and Editorial Magazine",
  description:
    "The Issue N is an independent fashion and editorial magazine exploring contemporary culture through visual storytelling, photography, design, creative practice, and modern identity.",
  alternates: {
    canonical: "https://theissue.xyz",
  },
  openGraph: {
    title: "The Issue N | Independent Fashion and Editorial Magazine",
    description:
      "An independent editorial platform exploring fashion, photography, design, creative practice, and modern identity through visual storytelling.",
    url: "https://theissue.xyz",
    siteName: "The Issue N",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://theissue.xyz/images/editorial-2.jpg",
        width: 1200,
        height: 630,
        alt: "The Issue N editorial magazine homepage cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Issue N | Independent Fashion and Editorial Magazine",
    description:
      "An independent editorial platform exploring fashion, photography, design, creative practice, and modern identity through visual storytelling.",
    images: ["https://theissue.xyz/images/editorial-2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  const latestArticles = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <main className="bg-[#FFFBEB] text-neutral-900">
      {/* HERO */}
      <section
        id="home"
        className="relative w-full overflow-hidden scroll-mt-24"
      >
        <div className="grid md:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="relative h-[52vh] min-h-[360px] md:h-[72vh] md:min-h-[560px] bg-black overflow-hidden">
            <Image
              src="/images/editorial-2.jpg"
              alt="Editorial cover"
              fill
              priority
              className="object-contain"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/20" />

            <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
              <p className="font-serif text-white text-[24px] md:text-[42px] leading-[1.18] tracking-[0.08em] max-w-[520px] drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)]">
                Individual stories
                <br />
                and fashion identity
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative h-[52vh] min-h-[360px] md:h-[72vh] md:min-h-[560px] bg-[#E1D5D5] overflow-hidden">
            <div className="flex h-full items-center justify-center px-6 py-8 md:px-12 md:py-12">
              <div className="relative aspect-[3/4] w-full max-w-[290px] md:max-w-[620px]">
                <Image
                  src="/images/logo_main.jpg"
                  alt="The Issue N logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO / ABOUT */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-6 py-16 md:py-24 scroll-mt-24"
      >
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
            About The Issue №
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl leading-tight font-semibold font-serif">
            The Issue № is not about fashion, business or visuals.
            <br />
            It is about continuing.
          </h2>

          <div className="mt-10 space-y-7 text-[17px] md:text-[18px] leading-relaxed text-neutral-800">
            <p>
              The Issue № is an independent editorial platform exploring people,
              work and contemporary life.
            </p>

            <p>
              Based in Northern Europe, the magazine moves between fashion,
              business and personal transformation - focusing on process,
              presence and the way individuals shape themselves over time.
            </p>

            <p>
              The Issue № is not built around trends or fast content. It is a
              space for observation - where image, narrative and experience
              exist together.
            </p>

            <p>
              Each story begins with a question - not to provide quick answers,
              but to understand what is at stake.
            </p>

            <p>
              The Issue № is about people who build themselves. About women and
              men who change, grow up, lose illusions and gain clarity.
            </p>

            <div className="mt-10 border-l border-neutral-300 pl-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
                This is a magazine
              </p>
              <ul className="space-y-2 text-neutral-800">
                <li>— about transformation, without spectacle</li>
                <li>— about business, without a cold mask</li>
                <li>— about fashion, as a language — not a trend</li>
                <li>— about space and cities that shape us</li>
                <li>— about work that teaches respect for every kind of labor</li>
                <li>— about people who remain real</li>
              </ul>
            </div>

            <p>
              Here, visuals are not decoration. They are a way to speak about
              character, choice, and path.
            </p>

            <p>
              The Issue № is the continuation of movement. Not proof of success,
              but evidence of growth. Not a showcase, but a process.
            </p>

            <p className="pt-4 font-serif text-[20px] md:text-[22px] leading-snug">
              This magazine is for those who understand:
              <br />a new chapter doesn’t arrive by itself -
              <br />
              it is created.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-neutral-200/70" />
      </div>

      {/* EDITOR NOTE */}
      <section
        id="editors-note"
        className="max-w-7xl mx-auto px-6 py-24 md:py-28 scroll-mt-24"
      >
        <div className="grid md:grid-cols-12 gap-14 items-center">
          <div className="md:col-span-7 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
              Editor’s Note
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-serif leading-tight">
              This is not a journal.
              <br />
              It is a continuation of the journey.
            </h2>

            <p className="mt-6 text-neutral-700 leading-relaxed text-lg">
              The Issue № began as a collection of separate ideas — about work,
              presence and the way people shape their environment.
              <br />
              Over time, it became something more connected. Not a finished
              statement, but a process.
              <br />
              <br />
              There is no single narrative here. Only moments, observations and
              people — each carrying their own direction.
            </p>

            <p className="mt-4 italic text-neutral-500 text-sm">
              by Sofia Solas
            </p>

            <Link
              href="/article/starting-again-in-another-country"
              className="inline-block mt-6 text-sm underline underline-offset-4 hover:text-black transition"
            >
              read more →
            </Link>
          </div>

          <div className="md:col-span-5">
            <div className="relative ml-auto w-full max-w-sm aspect-[4/5]">
              <Image
                src="/images/sonja1.jpeg"
                alt="Editor portrait"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-neutral-200/70" />
      </div>

      {/* COLUMNS */}
      <section
        id="columns"
        className="max-w-7xl mx-auto px-6 py-24 md:py-28 scroll-mt-24"
      >
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
              Columns
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-serif">
              Essays, voices and personal angles.
            </h2>
          </div>

          <Link
            href="/columns"
            className="text-sm underline underline-offset-4 hover:text-black transition"
          >
            More →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-24">
          <Link href="/columns/becoming" className="block">
            <EditorialCard
              category="BECOMING"
              title="Trinity"
              image="/images/card-2.jpg"
            />
          </Link>

          <Link href="/columns/work" className="block">
            <EditorialCard
              category="WORK"
              title="Work & Path"
              image="/images/card-1.jpg"
            />
          </Link>

          <Link href="/columns/practice" className="block">
            <EditorialCard
              category="PRACTICE"
              title="Creative Practice"
              image="/images/card-3.jpg"
            />
          </Link>
        </div>
      </section>

      {/* LATEST */}
      <section
        id="latest"
        className="max-w-7xl mx-auto px-6 pb-28 md:pb-32 scroll-mt-24"
      >
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
              Latest
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-serif">
              New pieces and fresh visuals.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-24">
          {latestArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/article/${article.slug}`}
              className="block"
            >
              <EditorialCard
                category={article.category}
                title={article.title}
                image={article.image}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* SEO / ABOUT BLOCK */}
      <section className="max-w-7xl mx-auto px-6 pb-24 md:pb-32">
        <div className="h-px bg-neutral-200/70 mb-12" />

        <div className="group rounded-[28px] border border-neutral-200/70 bg-white/30 px-8 py-12 md:px-14 md:py-16 transition-all duration-500 hover:bg-white/45 hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                About
              </p>

              <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-neutral-900 transition-transform duration-500 group-hover:translate-x-1">
                The Issue N
              </h2>
            </div>

            <div className="lg:col-span-8">
              <p className="text-[22px] md:text-[30px] leading-[1.45] text-neutral-800 max-w-none">
                The Issue № is an independent fashion and editorial magazine
                exploring contemporary culture through visual storytelling,
                photography, and design.
              </p>
<div className="mt-10 space-y-10 text-neutral-800">

  <div>
    <p className="text-[18px] leading-relaxed">
      The Issue № is an independent editorial platform exploring people, work and contemporary life.
    </p>

    <p className="mt-5 text-[18px] leading-relaxed">
      It is built around observation — of how individuals shape themselves, how work evolves over time, and how environment influences both.
    </p>
  </div>

  <div className="border-l border-neutral-300 pl-6 space-y-3">
    <p>— about people who build themselves</p>
    <p>— about those who change, grow, lose illusions and gain clarity</p>
    <p>— about transformation without spectacle</p>
    <p>— about work without a cold mask</p>
    <p>— about fashion as a language, not a trend</p>
    <p>— about cities and spaces that shape us</p>
    <p>— about people who remain real</p>
  </div>

  <div>
    <p className="text-[18px] leading-relaxed">
      We approach stories through process rather than outcome.
    </p>

    <p className="mt-5 text-[18px] leading-relaxed">
      Each piece is developed with attention to detail, image and narrative — not to explain, but to reveal.
    </p>

    <p className="mt-5 text-[18px] leading-relaxed">
      Visuals are not decoration. They are part of the language.
    </p>
  </div>

  {/* TEAM */}
  <div className="mt-12">
    <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-6">
      Team
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      <div className="space-y-3">
        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
          <Image
            src="/images/team/sofia.jpg"
            alt="Sofia Solas"
            fill
            className="object-cover"
          />
        </div>
        <p className="font-medium">Sofia Solas</p>
        <p className="text-sm text-neutral-500">Founder & Editor</p>
      </div>

      <div className="space-y-3">
        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
          <Image
            src="/images/team/maria.jpeg"
            alt="Maria"
            fill
            className="object-cover"
          />
        </div>
        <p className="font-medium">Maria</p>
        <p className="text-sm text-neutral-500">
          Co-Founder & Editorial Director
        </p>
      </div>

    </div>
  </div>

</div>
              <p className="mt-6 text-[17px] md:text-[20px] leading-[1.75] text-neutral-700 max-w-[1100px]">
                Based in Northern Europe, the magazine features designers,
                photographers, and creative entrepreneurs working at the
                intersection of aesthetics, sustainability, and identity.
              </p>
            </div>
          </div>
        </div>

        <div className="h-px bg-neutral-200/70 mt-12" />
      </section>
    </main>
  );
}