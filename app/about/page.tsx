import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | The Issue №",
  description:
    "About The Issue № — an independent editorial magazine exploring people, identity, creativity, fashion, culture and the stories behind the image.",
  alternates: {
    canonical: "https://theissue.xyz/about",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-editorial-bg text-neutral-900">
      <section className="max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-20 md:pb-28">
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
          About
        </p>

        <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] text-editorial-text max-w-4xl">
          The stories behind the image.
        </h1>

        <div className="mt-10 max-w-3xl space-y-6 text-[18px] md:text-[21px] leading-[1.8] text-neutral-750">
          <p>
            The Issue № was created from a curiosity about people and the lives
            they build.
          </p>

          <p>
            There are many magazines that tell us what is trending, what to wear
            or what to pay attention to next. We wanted to create a space for
            something different — stories with a little more depth,
            conversations that do not end after a headline and people who are
            interesting for reasons beyond visibility.
          </p>

          <p>
            The magazine brings together interviews, personal essays, editorial
            photography and stories from the worlds of fashion, culture,
            creativity and entrepreneurship.
          </p>

          <p>
            Some of the people we feature are artists, founders, musicians or
            public figures. Others are simply at an interesting point in their
            lives. What matters to us is not status but perspective.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div className="border-t border-neutral-200/70 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              What we explore
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="font-serif text-3xl md:text-5xl leading-[1.18] text-editorial-text max-w-4xl">
              Identity, change, ambition, creativity and the different ways
              people shape their lives and work.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-[17px] leading-relaxed text-neutral-700">
              <div className="border-l border-neutral-300 pl-5">
                We are interested in the stories behind the image.
              </div>

              <div className="border-l border-neutral-300 pl-5">
                The conversations behind the achievement.
              </div>

              <div className="border-l border-neutral-300 pl-5">
                And the moments that often remain outside the frame.
              </div>
            </div>

            <p className="mt-10 text-[18px] leading-[1.8] text-neutral-700 max-w-3xl">
              Based in Northern Europe and working internationally, The Issue №
              explores fashion, culture, creativity and entrepreneurship through
              a personal and editorial lens.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div className="border-t border-neutral-200/70 pt-16">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Team
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-5xl">
            <div>
              <div className="relative aspect-[3/4] overflow-hidden bg-white/30">
                <Image
                  src="/images/team/sofia1.jpeg"
                  alt="Sofia Solas, Founder and Editor-in-Chief of The Issue №"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="mt-5 text-xl font-medium">Sofia Solas</p>
              <p className="mt-1 text-sm text-neutral-500">
                Founder & Editor-in-Chief
              </p>
            </div>

            <div className="md:mt-12">
              <div className="relative aspect-[3/4] overflow-hidden bg-white/30">
                <Image
                  src="/images/team/maria.jpeg"
                  alt="Maria Shatylovich, Co-Founder and Editorial Director of The Issue №"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="mt-5 text-xl font-medium">Maria Shatylovich</p>
              <p className="mt-1 text-sm text-neutral-500">
                Co-Founder & Editorial Director
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div className="border-t border-neutral-200/70 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Contributors
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="text-[18px] md:text-[21px] leading-[1.8] text-neutral-700 max-w-3xl">
              The Issue № works with photographers, writers, artists and
              creatives from different countries and backgrounds.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div className="border-t border-neutral-200/70 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Creative Production Partner
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-neutral-200 bg-white/40 p-6 md:p-8 grid grid-cols-1 md:grid-cols-[1fr_180px] gap-8 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight text-editorial-text">
                  Kinosura Creative Studio
                </h2>

                <p className="mt-4 text-neutral-700 leading-[1.75] max-w-xl">
                  Creative production partner of The Issue №, supporting visual
                  storytelling, photography and editorial production.
                </p>

                <a
                  href="https://kinosura.fi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 text-sm underline underline-offset-4 hover:text-black transition"
                >
                  kinosura.fi →
                </a>
              </div>

              <div className="flex justify-center md:justify-end">
                <a
                  href="https://kinosura.fi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src="/images/becoming/queen-sapphire/kinosura-logo.jpg"
                    alt="Kinosura Creative Studio logo"
                    width={180}
                    height={120}
                    className="w-full max-w-[160px] h-auto object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 md:pb-32">
        <div className="border-t border-neutral-200/70 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Contact
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="font-serif text-3xl md:text-5xl leading-[1.18] text-editorial-text max-w-4xl">
              For interviews, editorial features, collaborations and
              partnerships.
            </p>

            <a
              href="mailto:hello@theissue.xyz"
              className="inline-block mt-8 text-lg underline underline-offset-4 hover:text-black transition"
            >
              hello@theissue.xyz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}