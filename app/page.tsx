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
        className="relative w-full overflow-hidden scroll-mt-24 md:h-[100svh] md:min-h-[720px]"
      >
        <div className="grid md:h-full md:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="relative h-[34vh] min-h-[240px] md:h-full">
            <Image
              src="/images/editorial-2.jpg"
              alt="Editorial cover"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-6 px-6 text-center md:bottom-auto md:inset-0 md:flex md:items-center md:justify-center md:px-10">
              <p className="font-didot text-[13px] leading-none tracking-[0.04em] text-white md:text-[22px]">
                An Independent Editorial Platform
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative bg-[#E1D5D5]">
            <div className="flex items-center justify-center px-6 py-8 md:h-full md:px-12 md:py-12">
              <div className="relative aspect-[3/4] w-full max-w-[290px] md:max-w-[760px]">
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
        className="max-w-5xl mx-auto px-6 py-28 md:py-36 scroll-mt-24"
      >
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
            About The Issue
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl leading-tight font-semibold font-serif">
            The Issue is not just a magazine.
            <br />
            It is a continuation.
          </h2>

          <div className="mt-10 space-y-7 text-[17px] md:text-[18px] leading-relaxed text-neutral-800">
            <p>
              The Issue is not simply a magazine about fashion, business, or
              visuals. It is a space about continuing.
            </p>

            <p>
              About people who don’t move in a straight line. About those who
              begin again — in a new country, a new role, at a new age.
            </p>

            <p>
              This magazine didn’t grow out of an idea to “create media.” It grew
              out of lived experience — falls and restarts, relocations, work
              from zero, returning to yourself and to what truly matters.
            </p>

            <p>
              Here, beauty is not about perfection. It is about inner strength.
              About posture, even when it’s hard. About a gaze that doesn’t drop.
            </p>

            <p>
              The Issue is about people who build themselves. About women and men
              who change, grow up, lose illusions and gain clarity.
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
              The Issue is the continuation of movement. Not proof of success,
              but evidence of growth. Not a showcase, but a process.
            </p>

            <p className="pt-4 font-serif text-[20px] md:text-[22px] leading-snug">
              This magazine is for those who understand:
              <br />a new chapter doesn’t arrive by itself —
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
              I have always been surrounded by beautiful women.
              <br />
              Not glossy beauty, but real beauty — strong, confident, alive.
            </p>

            <p className="mt-4 italic text-neutral-500 text-sm">by Sofia Solas</p>

            <Link
              href="/editor"
              className="inline-block mt-6 text-sm underline underline-offset-4 hover:text-black transition"
            >
              Read the full note →
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
                The Issue N is an independent fashion and editorial magazine
                exploring contemporary culture through visual storytelling,
                photography, and design.
              </p>

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