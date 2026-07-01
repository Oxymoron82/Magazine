import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Partnerships | The Issue №",
  description:
    "Editorial partnerships, brand stories, visual campaigns and creative collaborations with The Issue №.",
  alternates: {
    canonical: "https://theissue.xyz/partnerships",
  },
};

const mediaKitPages = [1, 2, 3, 4, 5, 6];

export default function PartnershipsPage() {
  return (
    <main className="bg-editorial-bg text-neutral-900">
      {/* HERO */}
      <section className="relative h-[86vh] min-h-[620px] overflow-hidden bg-black">
        <Image
          src="/images/trinity/115.jpg"
          alt="The Issue № editorial partnerships"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

        <div className="absolute inset-0 z-10 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
            <p className="text-xs uppercase tracking-[0.4em] text-white/75">
              Partnerships
            </p>

            <h1 className="mt-6 font-serif text-5xl md:text-8xl leading-[0.95] tracking-[-0.04em] text-white max-w-4xl">
              Let’s tell your story.
            </h1>

            <p className="mt-8 max-w-xl text-[17px] md:text-xl leading-[1.8] text-white/85">
              The Issue № collaborates with brands, founders, artists and
              cultural projects through editorial storytelling, photography and
              visual campaigns.
            </p>

            <a
              href="mailto:hello@theissue.xyz"
              className="inline-block mt-10 text-sm uppercase tracking-[0.25em] text-white underline underline-offset-8 hover:text-white/75 transition"
            >
              Start a collaboration
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              About The Issue №
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="font-serif text-3xl md:text-5xl leading-[1.2] text-editorial-text max-w-5xl">
              An independent magazine exploring fashion, business, creativity
              and people through visual storytelling.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-[17px] leading-[1.8] text-neutral-700">
              <p>
                We create editorial stories for brands, founders and creative
                businesses that want to be seen with depth, atmosphere and
                visual identity.
              </p>

              <p>
                Our collaborations are built around interviews, photography,
                personal narratives, cultural context and long-form editorial
                presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE CREATE */}
      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div className="border-t border-neutral-200/70 pt-16">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            What we create
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              [
                "Editorial Feature",
                "A magazine-style article built around your story, identity and visual world.",
              ],
              [
                "Brand Story",
                "A thoughtful profile for founders, studios, businesses and creative projects.",
              ],
              [
                "Event Coverage",
                "Photography, atmosphere, interviews and editorial reporting from selected events.",
              ],
              [
                "Visual Campaign",
                "Image-led storytelling for launches, campaigns and creative announcements.",
              ],
              [
                "Interview",
                "A personal conversation shaped into a polished editorial publication.",
              ],
              [
                "Creative Direction",
                "Concept, mood, story structure and visual direction for editorial production.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border border-neutral-200 bg-white/35 p-6 md:p-7 min-h-[210px]"
              >
                <p className="font-serif text-2xl leading-tight text-editorial-text">
                  {title}
                </p>

                <div className="mt-5 h-px w-12 bg-[#4A3F3C]/25" />

                <p className="mt-5 text-sm leading-[1.8] text-neutral-700">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRINITY FEATURE */}
      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <Link
          href="/article/trinity-sofia"
          className="group block border-t border-b border-neutral-200/70 py-16 md:py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                Featured Project
              </p>

              <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em] text-editorial-text">
                Trinity
              </h2>

              <div className="mt-7 h-px w-16 bg-[#4A3F3C]/35" />

              <p className="mt-7 max-w-sm text-[17px] leading-[1.75] text-neutral-700">
                A fashion editorial photography story about feminine
                transformation, identity, empowerment and personal evolution.
              </p>

              <p className="mt-8 text-sm underline underline-offset-4 group-hover:text-black transition">
                Explore the project →
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="relative aspect-[16/9] overflow-hidden bg-white/30">
                <Image
                  src="/images/trinity/115.jpg"
                  alt="Trinity editorial project by The Issue №"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.025]"
                />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* WHY THE ISSUE */}
      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-b border-neutral-200/70 pb-16">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Why The Issue №
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="font-serif text-3xl md:text-5xl leading-[1.18] text-editorial-text max-w-4xl">
              We do not create advertising. We create editorial stories people
              actually want to read.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-[16px] leading-[1.8] text-neutral-700">
              <p>
                Every collaboration becomes part of a curated editorial archive,
                not a temporary campaign that disappears after a few days.
              </p>

              <p>
                We combine writing, photography, atmosphere and cultural context
                to present each project with clarity and emotional presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATION BOOK */}
      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div className="border-b border-neutral-200/70 pb-16 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                Collaboration Book
              </p>
            </div>

            <div className="lg:col-span-8">
              <h2 className="font-serif text-4xl md:text-6xl leading-tight text-editorial-text">
                Inside The Issue №
              </h2>

              <p className="mt-6 max-w-2xl text-neutral-700 leading-[1.8]">
                Browse our visual partnership presentation — a compact editorial
                book about the magazine, our collaborations and the stories we
                create with brands and creative projects.
              </p>
            </div>
          </div>

          <div className="mt-14 md:mt-18 space-y-12 md:space-y-16">
            {mediaKitPages.map((page) => (
              <div
                key={page}
                className="mx-auto w-full max-w-[420px] md:max-w-[460px]"
              >
                <Image
                  src={`/images/media-kit/${page}.png`}
                  alt={`The Issue № media kit page ${page}`}
                  width={1080}
                  height={1920}
                  className="w-full h-auto rounded-2xl shadow-[0_24px_80px_rgba(74,63,60,0.18)]"
                />
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href="/media-kit.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm uppercase tracking-[0.25em] underline underline-offset-8 hover:text-black transition"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-7xl mx-auto px-6 pb-24 md:pb-32">
        <div className="border-t border-neutral-200/70 pt-16">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Contact
          </p>

          <h2 className="mt-6 font-serif text-5xl md:text-7xl leading-[1] tracking-[-0.03em] text-editorial-text max-w-4xl">
            Let’s create something memorable.
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-700">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Partnerships
              </p>
              <a
                href="mailto:hello@theissue.xyz"
                className="inline-block mt-3 text-xl underline underline-offset-4 hover:text-black transition"
              >
                hello@theissue.xyz
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Submit your story
              </p>
              <a
                href="mailto:submissions@theissue.xyz"
                className="inline-block mt-3 text-xl underline underline-offset-4 hover:text-black transition"
              >
                submissions@theissue.xyz
              </a>

              <p className="mt-3 text-sm leading-relaxed">
                For pitches, articles and visual stories.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}