import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import MediaKitCarousel from "@/components/MediaKitCarousel";

export const metadata: Metadata = {
  title: "Partnerships | The Issue №",
  description:
    "Editorial partnerships, brand stories, visual campaigns and creative collaborations with The Issue №.",
  alternates: {
    canonical: "https://theissue.xyz/partnerships",
  },
};

const partnershipFormats = [
  {
    title: "Editorial Feature",
    text: "A magazine-style article built around your story, identity and visual world.",
    image: "/images/partnerships/1.png",
  },
  {
    title: "Brand Story",
    text: "A thoughtful profile for founders, studios, businesses and creative projects.",
    image: "/images/partnerships/2.png",
  },
  {
    title: "Event Coverage",
    text: "Photography, atmosphere, interviews and editorial reporting from selected events.",
    image: "/images/partnerships/3.png",
  },
  {
    title: "Visual Campaign",
    text: "Image-led storytelling for launches, campaigns and creative announcements.",
    image: "/images/partnerships/4.png",
  },
  {
    title: "Interview",
    text: "A personal conversation shaped into a polished editorial publication.",
    image: "/images/partnerships/5.png",
  },
  {
    title: "Creative Direction",
    text: "Concept, mood, story structure and visual direction for editorial production.",
    image: "/images/partnerships/6.png",
  },
];

const collaborationPackages = [
  {
    number: "01",
    title: "Editorial Feature",
    description:
      "An in-depth editorial article about founders, brands, creatives and inspiring projects.",
    price: "€90",
    label: "One article",
  },
  {
    number: "02",
    title: "Business Feature",
    description:
      "A story about entrepreneurship, branding, strategy and creative business.",
    price: "€120",
    label: "One article",
  },
  {
    number: "03",
    title: "Event Coverage",
    description:
      "Thoughtful digital coverage of events, exhibitions, launches and cultural experiences.",
    price: "€120",
    label: "Full coverage",
  },
  {
    number: "04",
    title: "Brand Editorial Experience",
    description:
      "A complete editorial feature combining storytelling, professional photography and publication to communicate the identity and values of a brand.",
    price: "€300",
    label: "Full coverage",
    href: "/partnerships/brand-editorial-experience",
    linkText: "Read more",
  },
  {
    number: "05",
    title: "Trinity Project",
    description:
      "An in-house editorial project combining photography, creative direction and visual storytelling.",
    price: "€280",
    label: "Editorial suite",
    href: "/trinity",
    linkText: "Discover Trinity",
  },
];

const trinityFeatureImages = [
  "/images/trinity/115.jpg",
  "/images/trinity/61.jpeg",
  "/images/trinity/62.jpeg",
  "/images/trinity/63.jpeg",
  "/images/trinity/64.jpeg",
  "/images/trinity/65.jpeg",
];

export default function PartnershipsPage() {
  return (
    <main className="bg-editorial-bg text-neutral-900">
      {/* HERO */}
      <section className="relative h-[86vh] min-h-[620px] overflow-hidden bg-black">
        <Image
          src="/images/partnerships/partnerships.png"
          alt="The Issue № editorial partnerships"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
            <p className="text-xs uppercase tracking-[0.4em] text-white/75">
              Partnerships
            </p>

            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-white md:text-8xl">
              Let’s tell your story.
            </h1>

            <p className="mt-8 max-w-xl text-[17px] leading-[1.8] text-white/85 md:text-xl">
              The Issue № collaborates with brands, founders, artists and
              cultural projects through editorial storytelling, photography and
              visual campaigns.
            </p>

            <Link
              href="#contact"
              className="mt-10 inline-block text-sm uppercase tracking-[0.25em] text-white underline underline-offset-8 transition hover:text-white/75"
            >
              Start a collaboration
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              About The Issue №
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="max-w-5xl font-serif text-3xl leading-[1.2] text-editorial-text md:text-5xl">
              An independent magazine exploring fashion, business, creativity
              and people through visual storytelling.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 text-[17px] leading-[1.8] text-neutral-700 md:grid-cols-2">
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
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <div className="border-t border-neutral-200/70 pt-16">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            What we create
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {partnershipFormats.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden border border-neutral-200 bg-white/35 transition duration-500 hover:bg-white/60"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-white/30">
                  <Image
                    src={item.image}
                    alt={`${item.title} — The Issue № partnership format`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                </div>

                <div className="min-h-[210px] p-6 md:p-7">
                  <h2 className="font-serif text-2xl leading-tight text-editorial-text">
                    {item.title}
                  </h2>

                  <div className="mt-5 h-px w-12 bg-[#4A3F3C]/25" />

                  <p className="mt-5 text-sm leading-[1.8] text-neutral-700">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRINITY FEATURE */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <Link
          href="/article/trinity-sofia"
          className="group block border-y border-neutral-200/70 py-5 md:py-6"
        >
          <div className="grid grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                Featured Project
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.03em] text-editorial-text md:text-7xl">
                Trinity
              </h2>

              <div className="mt-7 h-px w-16 bg-[#4A3F3C]/35" />

              <p className="mt-7 max-w-sm text-[17px] leading-[1.75] text-neutral-700">
                A fashion editorial photography story about feminine
                transformation, identity, empowerment and personal evolution.
              </p>

              <p className="mt-8 text-sm underline underline-offset-4 transition group-hover:text-black">
                Explore the project →
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="relative ml-auto aspect-square w-full max-w-[680px] overflow-hidden bg-white/30">
                {trinityFeatureImages.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`Trinity editorial project image ${index + 1}`}
                    fill
                    className={`trinity-partnership-image trinity-partnership-image-${
                      index + 1
                    } object-cover object-[center_22%]`}
                  />
                ))}

                <div className="absolute inset-0 bg-black/8" />

                <style>{`
                  .trinity-partnership-image {
                    position: absolute;
                    inset: 0;
                    opacity: 0;
                    transform: scale(1.01);
                    animation-duration: 18s;
                    animation-iteration-count: infinite;
                    animation-timing-function: ease-in-out;
                  }

                  .trinity-partnership-image-1 {
                    animation-name: trinityPartnershipOne;
                  }

                  .trinity-partnership-image-2 {
                    animation-name: trinityPartnershipTwo;
                  }

                  .trinity-partnership-image-3 {
                    animation-name: trinityPartnershipThree;
                  }

                  .trinity-partnership-image-4 {
                    animation-name: trinityPartnershipFour;
                  }

                  .trinity-partnership-image-5 {
                    animation-name: trinityPartnershipFive;
                  }

                  .trinity-partnership-image-6 {
                    animation-name: trinityPartnershipSix;
                  }

                  @keyframes trinityPartnershipOne {
                    0%, 13% {
                      opacity: 1;
                      transform: scale(1);
                    }

                    18%, 100% {
                      opacity: 0;
                      transform: scale(1.01);
                    }
                  }

                  @keyframes trinityPartnershipTwo {
                    0%, 13% {
                      opacity: 0;
                      transform: scale(1.01);
                    }

                    18%, 30% {
                      opacity: 1;
                      transform: scale(1);
                    }

                    35%, 100% {
                      opacity: 0;
                      transform: scale(1.01);
                    }
                  }

                  @keyframes trinityPartnershipThree {
                    0%, 30% {
                      opacity: 0;
                      transform: scale(1.01);
                    }

                    35%, 47% {
                      opacity: 1;
                      transform: scale(1);
                    }

                    52%, 100% {
                      opacity: 0;
                      transform: scale(1.01);
                    }
                  }

                  @keyframes trinityPartnershipFour {
                    0%, 47% {
                      opacity: 0;
                      transform: scale(1.01);
                    }

                    52%, 64% {
                      opacity: 1;
                      transform: scale(1);
                    }

                    69%, 100% {
                      opacity: 0;
                      transform: scale(1.01);
                    }
                  }

                  @keyframes trinityPartnershipFive {
                    0%, 64% {
                      opacity: 0;
                      transform: scale(1.01);
                    }

                    69%, 81% {
                      opacity: 1;
                      transform: scale(1);
                    }

                    86%, 100% {
                      opacity: 0;
                      transform: scale(1.01);
                    }
                  }

                  @keyframes trinityPartnershipSix {
                    0%, 81% {
                      opacity: 0;
                      transform: scale(1.01);
                    }

                    86%, 96% {
                      opacity: 1;
                      transform: scale(1);
                    }

                    100% {
                      opacity: 0;
                      transform: scale(1.01);
                    }
                  }
                `}</style>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* WHY THE ISSUE */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <div className="grid grid-cols-1 gap-12 border-b border-neutral-200/70 pb-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Why The Issue №
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="max-w-4xl font-serif text-3xl leading-[1.18] text-editorial-text md:text-5xl">
              We do not create advertising. We create editorial stories people
              actually want to read.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 text-[16px] leading-[1.8] text-neutral-700 md:grid-cols-2">
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

      {/* COLLABORATION FORMATS AND PRICING */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <div className="border-t border-neutral-200/70 pt-14 md:pt-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                Collaboration Formats
              </p>

              <h2 className="mt-6 max-w-md font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-editorial-text md:text-7xl">
                What we create.
              </h2>

              <div className="mt-8 h-px w-14 bg-[#4A3F3C]/30" />

              <p className="mt-8 max-w-sm text-[16px] leading-[1.8] text-neutral-700">
                Choose the format that fits your story. Every collaboration is
                shaped around the identity, goals and visual world of the
                project.
              </p>

              <p className="mt-5 max-w-sm text-sm leading-[1.8] text-neutral-500">
                Custom formats and tailored partnership packages are available
                upon request.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-neutral-200/70">
                {collaborationPackages.map((item) => (
                  <article
                    key={item.number}
                    className="grid grid-cols-1 gap-5 border-b border-neutral-200/70 py-8 md:grid-cols-[50px_minmax(0,1fr)_140px] md:gap-7 md:py-10"
                  >
                    <p className="text-[10px] uppercase tracking-[0.32em] text-neutral-400">
                      {item.number}
                    </p>

                    <div>
                      <h3 className="font-serif text-3xl leading-[1] text-editorial-text md:text-4xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-sm leading-[1.8] text-neutral-600">
                        {item.description}
                      </p>

                      {item.href && item.linkText && (
                        <Link
                          href={item.href}
                          className="mt-5 inline-block text-[10px] uppercase tracking-[0.28em] underline decoration-neutral-400 underline-offset-8 transition hover:text-neutral-500"
                        >
                          {item.linkText}
                        </Link>
                      )}
                    </div>

                    <div className="md:text-right">
                      <p className="font-serif text-3xl leading-none text-editorial-text md:text-4xl">
                        {item.price}
                      </p>

                      <p className="mt-3 text-[9px] uppercase tracking-[0.28em] text-neutral-400">
                        {item.label}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <p className="mt-6 max-w-2xl text-xs leading-[1.8] text-neutral-400">
                Final pricing may vary depending on the scope, location,
                photography requirements and complexity of the production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATION BOOK INTRO */}
      <section className="mx-auto max-w-7xl px-6 pb-10 md:pb-14">
        <div className="grid grid-cols-1 gap-10 border-t border-neutral-200/70 pt-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Collaboration Book
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-editorial-text md:text-6xl">
              Inside The Issue №
            </h2>

            <p className="mt-6 max-w-2xl text-[16px] leading-[1.8] text-neutral-700">
              Browse our visual partnership presentation — a compact editorial
              book about the magazine, our collaborations and the stories we
              create with brands and creative projects.
            </p>
          </div>
        </div>
      </section>

      {/* LARGE MEDIA KIT CAROUSEL */}
      <section className="overflow-hidden pb-20 md:pb-28">
        <div className="mx-auto w-full max-w-[1680px] px-0 sm:px-4 md:px-8 lg:px-12">
          <div className="w-full">
            <MediaKitCarousel />
          </div>

          <div className="mt-12 text-center md:mt-14">
            <a
              href="/media-kit.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm uppercase tracking-[0.25em] underline underline-offset-8 transition hover:text-black"
            >
              Download Media Kit (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-24 md:pb-32"
      >
        <div className="border-t border-neutral-200/70 pt-16">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Contact
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-[1] tracking-[-0.03em] text-editorial-text md:text-7xl">
            Let’s create something memorable.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 text-neutral-700 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Partnerships
              </p>

              <a
                href="mailto:hello@theissue.xyz"
                className="mt-3 inline-block text-xl underline underline-offset-4 transition hover:text-black"
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
                className="mt-3 inline-block text-xl underline underline-offset-4 transition hover:text-black"
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