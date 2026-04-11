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
        className="relative w-full scroll-mt-24 md:h-[100svh] md:min-h-[720px]"
      >
        <div className="grid md:grid-cols-2">
          {/* LEFT SIDE — PHOTO */}
          <div className="relative h-[38vh] min-h-[260px] md:h-full">
            <Image
              src="/images/editorial-2.jpg"
              alt="Editorial cover"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center px-6 md:px-10">
              <p className="font-didot text-[14px] md:text-[22px] tracking-[0.03em] text-white text-center">
                An Independent Editorial Platform
              </p>
            </div>
          </div>

          {/* RIGHT SIDE — LOGO PANEL (FIXED MOBILE) */}
          <div className="relative bg-[#E1D5D5] py-10 md:h-full md:py-0">
            <div className="flex h-full items-center justify-center px-6 md:px-12 md:pt-24 md:pb-10">
              <div className="relative w-[72vw] max-w-[320px] aspect-[3/4] md:w-full md:max-w-[760px]">
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

      {/* дальше код без изменений */}
    </main>
  );
}