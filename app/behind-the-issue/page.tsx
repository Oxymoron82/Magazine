import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Behind The Issue | The Issue №",
  description:
    "The story behind The Issue № — an independent editorial magazine created, designed and developed by Maria Shatylovich.",
};

type PhotoPlaceholderProps = {
  label: string;
  note?: string;
  className?: string;
};

function PhotoPlaceholder({
  label,
  note,
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`relative flex overflow-hidden bg-[#ded9cf] ${className}`}
      aria-label={label}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/10" />

      <div className="relative z-10 m-auto px-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600">
          Photo placeholder
        </p>

        <p className="mt-3 font-serif text-2xl leading-tight text-neutral-800">
          {label}
        </p>

        {note && (
          <p className="mt-3 text-xs leading-relaxed text-neutral-500">
            {note}
          </p>
        )}
      </div>
    </div>
  );
}

const creationSteps = [
  {
    number: "01",
    title: "The Idea",
    text: "I wanted to create a real editorial product rather than another portfolio made of isolated screens.",
    photo: "Notebook, handwritten ideas or printed references",
  },
  {
    number: "02",
    title: "Research",
    text: "I explored independent magazines, editorial websites, typography and ways to make long-form content feel engaging online.",
    photo: "Printed magazines, books and visual references",
  },
  {
    number: "03",
    title: "Design & Doubts",
    text: "The visual direction changed many times. I kept simplifying the layouts until the magazine began to feel calm, spacious and contemporary.",
    photo: "Maria reviewing layouts or working at the computer",
  },
  {
    number: "04",
    title: "Development",
    text: "I turned the concept into a responsive editorial platform using reusable components and flexible article layouts.",
    photo: "Code visible on the computer screen",
  },
  {
    number: "05",
    title: "Launch & Evolution",
    text: "The Issue № is not a finished experiment. It continues to grow through new stories, collaborations and ideas.",
    photo: "Magazine website, printed pages or publishing process",
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

              <p className="mt-10 max-w-lg text-[17px] leading-[1.8] text-neutral-650">
                The Issue № is an independent editorial magazine created,
                designed and developed by Maria Shatylovich.
              </p>

              <p className="mt-5 max-w-lg text-[17px] leading-[1.8] text-neutral-650">
                It brings together editorial storytelling, visual design,
                photography and modern web development in one evolving digital
                experience.
              </p>

              <p className="mt-10 font-serif text-3xl italic text-neutral-700">
                Maria
              </p>
            </div>
          </div>

          <PhotoPlaceholder
            label="Maria working at the computer"
            note="Recommended: horizontal or portrait crop, at least 1400 px wide"
            className="min-h-[560px] lg:min-h-full"
          />
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

            <div className="mt-10 max-w-xl space-y-5 text-[16px] leading-[1.8] text-neutral-650">
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

          <PhotoPlaceholder
            label="Printed magazines and editorial references"
            note="Recommended ratio: 4:3, at least 1400 × 1050 px"
            className="aspect-[4/3]"
          />
        </div>
      </section>

      {/* CREATION STEPS */}
      <section className="border-y border-black/10 bg-[#f2eee5]">
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

                  <p className="mt-5 min-h-[120px] text-sm leading-[1.75] text-neutral-650">
                    {step.text}
                  </p>
                </div>

                <PhotoPlaceholder
                  label={step.photo}
                  className="mt-7 aspect-[4/3]"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN PHILOSOPHY */}
      <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-2">
          <PhotoPlaceholder
            label="Maria working with code on a large screen"
            note="Recommended: horizontal photograph, at least 1600 × 1100 px"
            className="min-h-[520px]"
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

              <p className="mt-8 max-w-xl text-[16px] leading-[1.8] text-neutral-650">
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

      {/* PHOTO STRIP */}
      <section className="mx-auto max-w-[1600px] px-6 pb-20 md:px-12 md:pb-28">
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
            Inside the process
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <PhotoPlaceholder
            label="Writing"
            className="aspect-[3/4]"
          />

          <PhotoPlaceholder
            label="Development"
            className="aspect-[3/4]"
          />

          <PhotoPlaceholder
            label="Editorial research"
            className="aspect-[3/4]"
          />

          <PhotoPlaceholder
            label="Publishing"
            className="aspect-[3/4]"
          />
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

              <p className="mt-8 max-w-xl text-[17px] leading-[1.8] text-neutral-650">
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

          <PhotoPlaceholder
            label="The Issue, notebook, laptop and coffee"
            note="Recommended: horizontal still life, at least 1400 px wide"
            className="min-h-[500px]"
          />
        </div>
      </section>
    </main>
  );
}