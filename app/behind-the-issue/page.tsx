import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Behind The Issue | The Issue №",
  description:
    "The story behind The Issue № — an independent editorial magazine created, designed and developed by Maria S.",
};

type EditorialImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

function EditorialImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: EditorialImageProps) {
  return (
    <div
      className={`relative overflow-hidden bg-[#ded9cf] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${imageClassName}`}
      />
    </div>
  );
}

const creationSteps = [
  {
    number: "01",
    title: "The Idea",
    text: "I wanted to create a real editorial product rather than another portfolio made of isolated screens.",
    image: "/images/behind-the-issue/3.png",
    alt: "Early ideas and notes for The Issue magazine",
  },
  {
    number: "02",
    title: "Research",
    text: "I explored independent magazines, editorial websites, typography and ways to make long-form content feel engaging online.",
    image: "/images/behind-the-issue/4.png",
    alt: "Editorial research and visual references",
  },
  {
    number: "03",
    title: "Design & Doubts",
    text: "The visual direction changed many times. I kept simplifying the layouts until the magazine began to feel calm, spacious and contemporary.",
    image: "/images/behind-the-issue/5.png",
    alt: "Design exploration and visual decisions",
  },
  {
    number: "04",
    title: "Development",
    text: "I turned the concept into a responsive editorial platform using reusable components and flexible article layouts.",
    image: "/images/behind-the-issue/6.png",
    alt: "Frontend development and code for The Issue",
  },
  {
    number: "05",
    title: "Launch & Evolution",
    text: "The Issue № is not a finished experiment. It continues to grow through new stories, collaborations and ideas.",
    image: "/images/behind-the-issue/7.png",
    alt: "The Issue magazine publishing process",
  },
];

const professionalAreas = [
  {
    label: "Frontend",
    value: "Next.js · React · TypeScript · JavaScript",
  },
  {
    label: "Design",
    value: "UI/UX · Responsive Design · Editorial Layouts",
  },
  {
    label: "Workflow",
    value: "Git · Figma · Reusable Component Systems",
  },
  {
    label: "Focus",
    value: "Editorial Platforms · Business Websites · Digital Storytelling",
  },
];

const principles = [
  "Typography before decoration",
  "White space creates rhythm",
  "Photography supports the story",
  "Interactions should feel natural",
  "Every page needs a clear purpose",
  "Simplicity takes time",
];

export default function BehindTheIssuePage() {
  return (
    <main className="bg-[#f7f4ec] text-[#191918]">
      {/* HERO */}
      <section className="border-b border-black/10">
        <div className="mx-auto grid min-h-[78vh] max-w-[1600px] grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center px-6 py-20 md:px-12 lg:px-20 lg:py-28">
            <div className="max-w-xl">
              <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
                Behind The Issue
              </p>

              <h1 className="mt-8 font-serif text-6xl leading-[0.92] tracking-[-0.055em] md:text-8xl lg:text-[105px]">
                A magazine built from concept to code.
              </h1>

              <p className="mt-10 max-w-lg text-[17px] leading-[1.8] text-neutral-600">
                The Issue № is an independent editorial magazine created,
                designed and developed by me.
              </p>

              <p className="mt-5 max-w-lg text-[17px] leading-[1.8] text-neutral-600">
                It brings together editorial storytelling, visual design,
                photography and modern web development in one evolving digital
                experience.
              </p>

              <p className="mt-10 font-serif text-3xl italic text-neutral-700">
                Maria S.
              </p>
            </div>
          </div>

          <div className="flex min-h-[560px] items-center justify-center bg-[#ded9cf] px-6 py-8 md:px-10 md:py-10 lg:min-h-full">
            <div className="relative h-full min-h-[520px] w-full">
              <Image
                src="/images/behind-the-issue/1.png"
                alt="Maria S., creator, designer and developer of The Issue magazine"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="mx-auto max-w-[1500px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
              Why this matters to me
            </p>

            <h2 className="mt-7 max-w-xl font-serif text-5xl leading-[1.03] tracking-[-0.04em] md:text-7xl">
              More than a portfolio.
            </h2>

            <p className="mt-8 max-w-xl font-serif text-3xl leading-[1.3] text-neutral-800 md:text-4xl">
              It is proof of how I think, create and solve problems.
            </p>

            <div className="mt-10 max-w-xl space-y-5 text-[16px] leading-[1.8] text-neutral-600">
              <p>
                I did not want to demonstrate my skills through static mock-ups
                alone. I wanted to build something people could actually read,
                explore and return to.
              </p>

              <p>
                This project gave me responsibility for the complete experience:
                the idea, structure, visual direction, development, publishing
                and continuous improvement.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 border-t border-black/10 pt-8 sm:grid-cols-2">
              {[
                "Real content and collaborations",
                "Full ownership from idea to code",
                "A product that continues to evolve",
                "Design, development and editorial thinking",
              ].map((item) => (
                <p
                  key={item}
                  className="text-xs uppercase leading-[1.7] tracking-[0.18em] text-neutral-600"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <EditorialImage
            src="/images/behind-the-issue/2.png"
            alt="Creative editorial workspace representing design thinking and portfolio development"
            className="aspect-[4/3]"
            imageClassName="object-center"
          />
        </div>
      </section>

      {/* PROFESSIONAL PROFILE */}
      <section className="border-y border-black/10 bg-[#ebe6dc]">
        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-12 md:py-28">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-6">
              <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
                Meet your developer
              </p>

              <h2 className="mt-7 max-w-2xl font-serif text-5xl leading-[1.02] tracking-[-0.04em] md:text-7xl">
                Design and development as one complete experience.
              </h2>

              <div className="mt-9 max-w-2xl space-y-5 text-[16px] leading-[1.85] text-neutral-700">
                <p>
                  I am a frontend developer and UI/UX designer creating
                  editorial and business websites that combine clear structure,
                  refined visuals and thoughtful user experience.
                </p>

                <p>
                  I work with Next.js, React, TypeScript and modern frontend
                  technologies, taking projects from content structure and
                  visual direction to responsive implementation and launch.
                </p>

                <p>
                  The Issue № is the clearest example of this approach: a real,
                  evolving digital product where design, development and
                  storytelling work together.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border-t border-black/15">
                {professionalAreas.map((area) => (
                  <div
                    key={area.label}
                    className="grid grid-cols-1 gap-3 border-b border-black/15 py-7 sm:grid-cols-[145px_minmax(0,1fr)] sm:gap-8"
                  >
                    <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                      {area.label}
                    </p>

                    <p className="font-serif text-2xl leading-[1.25] text-neutral-800">
                      {area.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 border border-black/15 bg-[#f7f4ec]/70 p-7 md:p-9">
                <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">
                  Why work with me
                </p>

                <p className="mt-6 font-serif text-3xl leading-[1.2] tracking-[-0.025em] text-neutral-900 md:text-4xl">
                  Every decision is considered from both a designer&apos;s and a
                  developer&apos;s perspective.
                </p>

                <p className="mt-6 text-[15px] leading-[1.85] text-neutral-650">
                  Typography, layout, usability, responsiveness and technical
                  implementation are treated as parts of one coherent digital
                  experience rather than separate stages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREATION STEPS */}
      <section className="border-b border-black/10 bg-[#f2eee5]">
        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 md:py-28">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
              How The Issue was created
            </p>

            <h2 className="mt-7 font-serif text-5xl leading-[1] tracking-[-0.04em] md:text-7xl">
              From the first idea to a living publication.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2 xl:grid-cols-5">
            {creationSteps.map((step) => (
              <article key={step.number}>
                <div className="border-t border-black/20 pt-5">
                  <p className="font-serif text-4xl text-neutral-700">
                    {step.number}
                  </p>

                  <h3 className="mt-5 font-serif text-3xl leading-none">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-sm leading-[1.75] text-neutral-600 xl:min-h-[145px]">
                    {step.text}
                  </p>
                </div>

                <EditorialImage
                  src={step.image}
                  alt={step.alt}
                  className="mt-7 aspect-[4/3]"
                  imageClassName="transition duration-700 hover:scale-[1.025]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 20vw"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN PHILOSOPHY */}
      <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
          <EditorialImage
            src="/images/behind-the-issue/8.png"
            alt="Editorial workspace with code for The Issue magazine"
            className="min-h-[520px]"
            imageClassName="object-center"
          />

          <div className="flex items-center bg-[#ebe6dc] px-8 py-16 md:px-14 lg:px-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
                Ideas behind the modern look
              </p>

              <h2 className="mt-7 font-serif text-5xl leading-[1] tracking-[-0.04em] md:text-7xl">
                Clean.
                <br />
                Editorial.
                <br />
                Timeless.
              </h2>

              <p className="mt-8 max-w-xl text-[16px] leading-[1.8] text-neutral-600">
                I wanted the magazine to feel like a carefully curated reading
                experience rather than a conventional business website.
                Typography, imagery, space and rhythm guide every design
                decision.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-5 border-t border-black/10 pt-8 sm:grid-cols-2">
                {principles.map((principle) => (
                  <p
                    key={principle}
                    className="text-xs uppercase leading-[1.7] tracking-[0.17em] text-neutral-700"
                  >
                    + {principle}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATION CTA */}
      <section className="border-t border-black/10">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center px-6 py-20 md:px-12 lg:px-20 lg:py-28">
            <div className="max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
                Let&apos;s create something meaningful
              </p>

              <h2 className="mt-7 font-serif text-5xl leading-[1] tracking-[-0.045em] md:text-7xl">
                Looking for a designer and developer for your next project?
              </h2>

              <p className="mt-8 max-w-xl text-[17px] leading-[1.8] text-neutral-600">
                I help businesses and creative professionals create clear,
                beautiful and memorable digital experiences — from visual
                direction and UI design to the final published website.
              </p>

              <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <a
                  href="mailto:hello@theissue.xyz"
                  className="border border-black px-7 py-4 text-[10px] uppercase tracking-[0.25em] transition hover:bg-black hover:text-white"
                >
                  Start a conversation →
                </a>

                <Link
                  href="/partnerships"
                  className="text-[10px] uppercase tracking-[0.25em] underline decoration-black/40 underline-offset-8"
                >
                  Explore partnerships
                </Link>
              </div>
            </div>
          </div>

          <EditorialImage
            src="/images/behind-the-issue/9.png"
            alt="The Issue magazine, notebook, laptop and coffee"
            className="min-h-[500px]"
            imageClassName="object-center"
          />
        </div>
      </section>
    </main>
  );
}