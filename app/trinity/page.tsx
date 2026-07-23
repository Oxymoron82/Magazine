import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Trinity | The Issue №",
  description:
    "Trinity is an original editorial project by The Issue № combining photography, creative direction and storytelling for people, brands and businesses.",
  alternates: {
    canonical: "https://theissue.xyz/trinity",
  },
};

const editorialFormats = [
  {
    title: "Editorial Portrait",
    subtitle: "One story. One vision.",
    image: "/images/trinity/card_portrait.jpg",
    text: "Designed for individuals who need a strong visual identity without a large-scale production.",
    includes: [
      "Creative consultation",
      "One editorial concept",
      "One styling direction",
      "Professional photography",
      "Selected edited images",
      "Editorial layout",
      "Publication in THE ISSUE N° optional",
    ],
  },
  {
    title: "Trinity",
    subtitle: "Three chapters. One story.",
    image: "/images/trinity/card_trinity.jpg",
    text: "A complete editorial experience exploring different sides of the same person through three visual chapters.",
    includes: [
      "Creative consultation",
      "Three editorial concepts",
      "Styling guidance",
      "Professional photography",
      "Editorial story written by THE ISSUE N°",
      "Magazine-style layout",
      "Publication in THE ISSUE N°",
    ],
  },
  {
    title: "Brand Story",
    subtitle: "Every brand has a story worth telling.",
    image: "/images/trinity/card_business.jpg",
    text: "Created for brands, founders and creative businesses that want imagery with depth, personality and editorial quality.",
    includes: [
      "Brand discovery session",
      "Creative direction",
      "Editorial photography",
      "Team portraits or product imagery",
      "Interview or editorial article optional",
      "Publication in THE ISSUE N°",
    ],
  },
];

const galleryImages = [
  "/images/trinity/1.jpeg",
  "/images/trinity/2.jpeg",
  "/images/trinity/3.jpeg",
  "/images/trinity/4.jpeg",
  "/images/trinity/5.jpeg",
  "/images/trinity/6.jpg",
  "/images/trinity/8.jpeg",
  "/images/trinity/21.jpeg",
  "/images/trinity/20.jpeg",
  "/images/trinity/22.jpeg",

  "/images/trinity/new-model/1.jpeg",
  "/images/trinity/new-model/2.jpeg",
  "/images/trinity/new-model/3.jpeg",
  "/images/trinity/new-model/4.jpeg",
  "/images/trinity/new-model/5.jpeg",
  "/images/trinity/new-model/6.jpeg",
];

const processSteps = [
  ["01", "Conversation", "Every project begins with listening."],
  [
    "02",
    "Creative Direction",
    "We shape the mood, story, location and visual language.",
  ],
  [
    "03",
    "Photography",
    "The shoot becomes a carefully guided editorial experience.",
  ],
  ["04", "Story", "Images and words are brought together into one narrative."],
  ["05", "Publication", "The final result can live inside The Issue №."],
];

export default function TrinityPage() {
  return (
    <main className="bg-editorial-bg text-neutral-900">
      {/* HERO IMAGE SEQUENCE */}
      <section className="relative h-[92vh] min-h-[680px] overflow-hidden bg-black">
        <Image
          src="/images/trinity/22.jpeg"
          alt="Trinity editorial hero image one"
          fill
          priority
          className="hero-image hero-image-1 object-cover object-center"
        />

        <Image
          src="/images/trinity/59.jpeg"
          alt="Trinity editorial hero image two"
          fill
          className="hero-image hero-image-2 object-cover object-center"
        />

        <Image
          src="/images/trinity/60.jpeg"
          alt="Trinity editorial hero image three"
          fill
          className="hero-image hero-image-3 object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/12 to-transparent" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0) 46%, rgba(0,0,0,0.10) 66%, rgba(0,0,0,0.46) 88%, rgba(0,0,0,0.82) 100%)",
          }}
        />

        <div
          className="absolute inset-y-0 left-0 w-[16.5%]"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,.78), rgba(0,0,0,.34), rgba(0,0,0,0))",
          }}
        />

        <div
          className="absolute inset-y-0 right-0 w-[16.5%]"
          style={{
            background:
              "linear-gradient(to left, rgba(0,0,0,.78), rgba(0,0,0,.34), rgba(0,0,0,0))",
          }}
        />

        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
            <p className="text-xs uppercase tracking-[0.45em] text-white/75">
              Original Editorial Project
            </p>

            <h1 className="mt-6 font-serif text-[64px] md:text-[120px] lg:text-[150px] leading-[0.85] tracking-[-0.06em] text-white">
              Trinity
            </h1>

            <p className="mt-8 max-w-2xl text-[22px] md:text-[32px] font-serif leading-[1.25] text-white">
              More than a photoshoot.
            </p>

            <p className="mt-6 max-w-xl text-[16px] md:text-[19px] leading-[1.8] text-white/85">
              Every story deserves to be seen. Trinity is an original project by
              The Issue №, created for people, brands and businesses that want
              more than beautiful images.
            </p>

            <Link
              href="#apply"
              className="inline-block mt-10 text-sm uppercase tracking-[0.28em] text-white underline underline-offset-8 hover:text-white/75 transition"
            >
              Begin your story
            </Link>
          </div>
        </div>

        <style>{`
          .hero-image {
            position: absolute;
            inset: 0;
            opacity: 0;
            transform: scale(1.015);
            animation-duration: 14.5s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
          }

          .hero-image-1 {
            animation-name: heroOne;
          }

          .hero-image-2 {
            animation-name: heroTwo;
          }

          .hero-image-3 {
            animation-name: heroThree;
          }

          @keyframes heroOne {
            0%, 28% {
              opacity: 1;
              transform: scale(1);
            }

            34%, 94% {
              opacity: 0;
              transform: scale(1.018);
            }

            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes heroTwo {
            0%, 28% {
              opacity: 0;
              transform: scale(1.018);
            }

            34%, 61% {
              opacity: 1;
              transform: scale(1);
            }

            67%, 100% {
              opacity: 0;
              transform: scale(1.018);
            }
          }

          @keyframes heroThree {
            0%, 61% {
              opacity: 0;
              transform: scale(1.018);
            }

            67%, 94% {
              opacity: 1;
              transform: scale(1);
            }

            100% {
              opacity: 0;
              transform: scale(1.018);
            }
          }
        `}</style>
      </section>

      {/* TEMPORARY INVITATION */}
      <section className="bg-[#F6EFE4] border-b border-[#4A3F3C]/10">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8A5A2B]">
                Private Invitation
              </p>

              <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-tight text-editorial-text">
                Welcome to Trinity.
              </h2>

              <div className="mt-6 max-w-2xl space-y-3 text-[17px] leading-[1.8] text-neutral-700">
                <p>Thank you for being part of the fashion show.</p>
                <p>
                  Your exclusive 10% invitation for the Trinity project is
                  available until 31 July.
                </p>
                <p>
                  Project price: <span className="font-medium">€230</span>.
                </p>
              </div>

              <Link
                href="#apply"
                className="inline-block mt-8 text-sm uppercase tracking-[0.25em] underline underline-offset-8 hover:text-black transition"
              >
                Apply for Trinity
              </Link>
            </div>

            <div className="md:col-span-4 flex justify-center md:justify-end">
              <a
                href="https://qrco.de/bgue1d"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-[#4A3F3C]/10 bg-white/70 p-4 shadow-[0_18px_60px_rgba(74,63,60,0.12)]"
              >
                <Image
                  src="/images/trinity/qr-invitation.png"
                  alt="QR code for Trinity invitation"
                  width={220}
                  height={220}
                  className="h-auto w-[180px] md:w-[220px]"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              The Idea
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="font-serif text-4xl md:text-6xl leading-[1.12] text-editorial-text max-w-5xl">
              Photography can capture a moment. An editorial captures something
              deeper.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-[17px] leading-[1.85] text-neutral-700">
              <p>
                TRINITY combines photography, creative direction and storytelling
                to create something that feels personal, intentional and
                timeless.
              </p>

              <p>
                Whether it is a single portrait or a complete editorial
                production, every story begins the same way — with a
                conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div className="border-neutral-200/70 pt-16">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Editorial Formats
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {editorialFormats.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden border border-neutral-200 bg-white/35 transition duration-500 hover:bg-white/60"
              >
               <div className="relative aspect-[5/4] overflow-hidden bg-white/30">
  <Image
    src={item.image}
    alt={`${item.title} — Trinity editorial format`}
    fill
    className="object-contain object-center transition duration-700 group-hover:scale-[1.015]"
  />
</div>

                <div className="p-6 md:p-7">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">
                    The Issue №
                  </p>

                  <h2 className="mt-5 font-serif text-3xl leading-tight text-editorial-text">
                    {item.title}
                  </h2>

                  <p className="mt-3 font-serif text-xl leading-snug text-neutral-700">
                    {item.subtitle}
                  </p>

                  <div className="mt-6 h-px w-12 bg-[#4A3F3C]/25" />

                  <p className="mt-6 text-sm leading-[1.8] text-neutral-700">
                    {item.text}
                  </p>

                  <ul className="mt-6 space-y-2 text-sm leading-relaxed text-neutral-600">
                    {item.includes.map((line) => (
                      <li key={line}>— {line}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT INVESTMENT */}
      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div className="border-b border-neutral-200/70 py-14 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                Project Investment
              </p>
            </div>

            <div className="lg:col-span-8">
              <p className="font-serif text-5xl md:text-7xl leading-none text-editorial-text">
                €230
              </p>

              <p className="mt-6 max-w-2xl text-[17px] leading-[1.8] text-neutral-700">
                The Trinity project includes creative consultation, editorial
                direction, professional photography, selected edited images and
                a magazine-style visual story.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-[1.8] text-neutral-500">
                Fashion show participants receive a private 10% invitation until
                31 July.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO STRIP */}
      <section className="pb-20 md:pb-28">
        <div className="relative h-[70vh] min-h-[520px] overflow-hidden bg-black">
          <video
            src="/images/trinity/video_trinity.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/trinity/115.jpg"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 pb-12 md:pb-16">
              <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                Behind the Story
              </p>

              <h2 className="mt-5 max-w-3xl font-serif text-4xl md:text-6xl leading-tight text-white">
                Every project begins long before the camera appears.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div className="border-neutral-200/70 pt-16">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Selected Work
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={src}
                className={`relative overflow-hidden bg-white/30 ${
                  index === 0 || index === 7 || index === 12
                    ? "col-span-2 aspect-[4/5]"
                    : "aspect-[3/4]"
                }`}
              >
                <Image
                  src={src}
                  alt={`Trinity editorial photography ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 hover:scale-[1.035]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div className="border-b border-neutral-200/70 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                How it begins
              </p>

              <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-tight text-editorial-text">
                It starts with a conversation.
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-8">
                {processSteps.map(([number, title, text]) => (
                  <div
                    key={number}
                    className="grid grid-cols-[64px_1fr] gap-6 border-b border-neutral-200/70 pb-8 last:border-b-0 last:pb-0"
                  >
                    <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                      {number}
                    </p>

                    <div>
                      <h3 className="font-serif text-3xl leading-tight text-editorial-text">
                        {title}
                      </h3>

                      <p className="mt-3 text-neutral-700 leading-[1.8]">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <blockquote className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-[-0.04em] text-editorial-text">
              We do not photograph clothes.
              <br />
              We photograph transformation.
            </blockquote>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-white/30">
              <Image
                src="/images/trinity/56.jpeg"
                alt="Trinity editorial transformation portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="apply"
        className="max-w-7xl mx-auto px-6 pb-24 md:pb-32 scroll-mt-24"
      >
        <div className="border-neutral-200/70 pt-16">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Apply
          </p>

          <h2 className="mt-6 font-serif text-5xl md:text-7xl leading-[1] tracking-[-0.03em] text-editorial-text max-w-4xl">
            Let’s create something meaningful.
          </h2>

          <p className="mt-8 max-w-2xl text-[17px] leading-[1.8] text-neutral-700">
            Every Trinity project is tailored to the person or brand behind it.
            To discuss your idea or request a proposal, get in touch.
          </p>

          <p className="mt-6 text-neutral-700">
            To apply, email us at{" "}
            <a
              href="mailto:hello@theissue.xyz"
              className="underline underline-offset-4 hover:text-black"
            >
              hello@theissue.xyz
            </a>
          </p>

          <a
            href="mailto:hello@theissue.xyz"
            className="inline-block mt-10 text-sm uppercase tracking-[0.25em] underline underline-offset-8 hover:text-black transition"
          >
            Send an email
          </a>

          <div className="mt-12">
            <Link
              href="/partnerships"
              className="text-sm underline underline-offset-4 hover:text-black transition"
            >
              View partnerships →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}