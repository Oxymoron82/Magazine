import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Behind The Issue | The Issue №",
  description:
    "Discover how The Issue № was conceived, designed and developed by Maria Shatylovich — from editorial concept to frontend code.",
  alternates: {
    canonical: "https://theissue.xyz/behind-the-issue",
  },
};

const roles = [
  "Editorial concept",
  "Content architecture",
  "UI design",
  "Responsive layouts",
  "Frontend development",
  "Article system",
  "Interactive galleries",
  "Photography selection",
  "Visual storytelling",
  "AI-assisted creative workflow",
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "App Router",
  "Responsive Design",
  "Reusable Components",
  "Vercel",
];

const processSteps = [
  {
    number: "01",
    title: "The Direction",
    text: "The project began with a clear question: what could an independent digital magazine become if its editorial identity, visual language and technology were developed as one experience?",
  },
  {
    number: "02",
    title: "The Structure",
    text: "I created the magazine architecture, its editorial columns, article formats and reusable content blocks. The system had to support very different stories without losing a consistent identity.",
  },
  {
    number: "03",
    title: "The Experience",
    text: "The visual language was developed directly through references, typography, composition, photography and continuous iteration in the browser. Every page was refined through real content rather than isolated mock-ups.",
  },
  {
    number: "04",
    title: "The Development",
    text: "The platform was built with Next.js, React, TypeScript and Tailwind CSS. Reusable components support articles, galleries, carousels, full-width imagery, credits and editorial layouts.",
  },
  {
    number: "05",
    title: "The Publication",
    text: "The result is not a static portfolio case. It is a living publication with real articles, collaborations, commercial projects and an evolving editorial identity.",
  },
];

const selectedProjects = [
  {
    title: "The Issue №",
    category: "Independent Editorial Platform",
    image: "/images/partnerships/partnerships.png",
    description:
      "A complete digital publication combining editorial strategy, visual design, frontend development, photography and storytelling.",
    details: "Next.js · UI Design · Frontend · Editorial System",
    href: "/",
  },
  {
    title: "Trinity",
    category: "Editorial Experience",
    image: "/images/trinity/22.jpeg",
    description:
      "An original editorial project bringing together creative direction, photography, storytelling and a dedicated digital experience.",
    details: "Creative Direction · Web Design · Development",
    href: "/trinity",
  },
  {
    title: "Partnerships",
    category: "Commercial Editorial Platform",
    image: "/images/trinity/115.jpg",
    description:
      "A commercial layer for The Issue № that presents editorial services, collaboration formats, pricing and visual partnership opportunities.",
    details: "Service Design · Content · UI · Frontend",
    href: "/partnerships",
  },
];

export default function BehindTheIssuePage() {
  return (
    <main className="bg-editorial-bg text-neutral-900">
      {/* HERO */}
      <section className="relative min-h-[88vh] overflow-hidden bg-[#171716]">
        <div className="absolute inset-0">
          <Image
            src="/images/partnerships/partnerships.png"
            alt="The Issue № digital editorial experience"
            fill
            priority
            className="object-cover object-center opacity-45"
          />

          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-28 md:px-12">
          <div className="max-w-5xl">
            <p className="text-xs uppercase tracking-[0.42em] text-white/65">
              Behind The Issue
            </p>

            <h1 className="mt-7 max-w-5xl font-serif text-6xl leading-[0.9] tracking-[-0.055em] text-white md:text-8xl lg:text-[120px]">
              From concept
              <br />
              to code.
            </h1>

            <p className="mt-10 max-w-2xl font-serif text-2xl leading-[1.35] text-white/90 md:text-4xl">
              I did not want to build another portfolio website.
            </p>

            <p className="mt-6 max-w-xl text-[16px] leading-[1.85] text-white/75 md:text-[18px]">
              I wanted to create something real — a living editorial product
              where storytelling, visual design and modern web technology could
              become one complete experience.
            </p>

            <p className="mt-10 text-[10px] uppercase tracking-[0.3em] text-white/55">
              Concept · UI Design · Frontend Development · Editorial Direction
            </p>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              The Beginning
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2 className="max-w-5xl font-serif text-4xl leading-[1.1] tracking-[-0.035em] text-editorial-text md:text-7xl">
              A real publication instead of another collection of mock-ups.
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-8 text-[17px] leading-[1.85] text-neutral-700 md:grid-cols-2">
              <p>
                The Issue № began as an attempt to bring together several parts
                of my professional identity: design, development, photography,
                writing and editorial thinking.
              </p>

              <p>
                Instead of creating isolated portfolio screens, I built a
                functioning publication with its own content, audience,
                collaborations and commercial potential.
              </p>

              <p>
                Every new story introduces a different visual and technical
                challenge. The platform continues to evolve through real use,
                rather than being presented as a finished academic exercise.
              </p>

              <p>
                What you see is not only the final interface. It is also the
                result of hundreds of decisions about structure, rhythm,
                typography, imagery, interaction and responsive behaviour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="border-y border-neutral-200/70">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
          <blockquote className="max-w-6xl font-serif text-5xl leading-[1.02] tracking-[-0.045em] text-editorial-text md:text-8xl">
            The magazine itself
            <br />
            is my portfolio.
          </blockquote>

          <div className="mt-12 grid grid-cols-1 gap-4 text-[11px] uppercase tracking-[0.28em] text-neutral-500 md:grid-cols-4">
            <p>Every article.</p>
            <p>Every layout.</p>
            <p>Every interaction.</p>
            <p>Every component.</p>
          </div>
        </div>
      </section>

      {/* MY ROLE */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              My Role
            </p>

            <h2 className="mt-6 max-w-md font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-editorial-text md:text-7xl">
              One product.
              <br />
              Many disciplines.
            </h2>

            <p className="mt-8 max-w-sm text-[16px] leading-[1.8] text-neutral-600">
              I designed and developed the digital experience behind The Issue №
              while also participating in its editorial direction, visual
              production and commercial development.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-neutral-200/70">
              {roles.map((role, index) => (
                <div
                  key={role}
                  className="grid grid-cols-[45px_1fr] gap-5 border-b border-neutral-200/70 py-5 md:grid-cols-[70px_1fr] md:py-7"
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="font-serif text-2xl leading-none text-editorial-text md:text-4xl">
                    {role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL INTERLUDE */}
      <section className="mx-auto max-w-[1600px] px-0 md:px-8">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
            <Image
              src="/images/trinity/22.jpeg"
              alt="Editorial photography used in The Issue №"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
            <Image
              src="/images/trinity/115.jpg"
              alt="Editorial project created for The Issue №"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
            <Image
              src="/images/trinity/new-model/1.jpeg"
              alt="Visual storytelling for The Issue №"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              How It Came Together
            </p>

            <h2 className="mt-6 max-w-md font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-editorial-text md:text-7xl">
              Built through continuous iteration.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-neutral-200/70">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="grid grid-cols-1 gap-5 border-b border-neutral-200/70 py-8 md:grid-cols-[70px_1fr] md:gap-8 md:py-10"
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                    {step.number}
                  </p>

                  <div>
                    <h3 className="font-serif text-3xl leading-none text-editorial-text md:text-5xl">
                      {step.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-[16px] leading-[1.85] text-neutral-600">
                      {step.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-[#1B1B19] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                Technology
              </p>

              <h2 className="mt-6 max-w-md font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-white md:text-7xl">
                The system behind the stories.
              </h2>
            </div>

            <div className="lg:col-span-8">
              <p className="max-w-3xl font-serif text-3xl leading-[1.3] text-white/90 md:text-5xl">
                The magazine is built as a reusable editorial platform rather
                than a collection of individually coded pages.
              </p>

              <p className="mt-8 max-w-2xl text-[16px] leading-[1.85] text-white/60">
                Article blocks, galleries, carousels, credits, quotes and visual
                layouts can be combined to support different types of stories
                while preserving a consistent reading experience.
              </p>

              <div className="mt-12 flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border border-white/20 px-4 py-3 text-[10px] uppercase tracking-[0.25em] text-white/65"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI WORKFLOW */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              AI-Assisted Workflow
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2 className="max-w-5xl font-serif text-4xl leading-[1.12] tracking-[-0.035em] text-editorial-text md:text-7xl">
              AI accelerates the process. It does not replace creative
              judgement.
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-8 text-[17px] leading-[1.85] text-neutral-700 md:grid-cols-2">
              <p>
                I use AI to explore ideas, compare visual directions, structure
                information, test alternatives and move more quickly from an
                early concept to a working version.
              </p>

              <p>
                The final selection, composition, editing, implementation and
                quality control remain part of my own creative and technical
                process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-12 md:pb-32">
        <div className="border-t border-neutral-200/70 pt-16">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Selected Digital Experiences
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {selectedProjects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group block"
              >
                <article>
                  <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
                    <Image
                      src={project.image}
                      alt={`${project.title} project`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.025]"
                    />

                    <div className="absolute inset-0 bg-black/5 transition duration-500 group-hover:bg-black/15" />
                  </div>

                  <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                    {project.category}
                  </p>

                  <h3 className="mt-3 font-serif text-4xl leading-none text-editorial-text">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-sm leading-[1.8] text-neutral-600">
                    {project.description}
                  </p>

                  <p className="mt-5 text-[10px] uppercase tracking-[0.23em] text-neutral-400">
                    {project.details}
                  </p>

                  <p className="mt-6 text-sm underline decoration-neutral-400 underline-offset-8">
                    Explore the project →
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="border-y border-neutral-200/70">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                Why I Built It
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-2 font-serif text-4xl leading-[1.12] tracking-[-0.035em] text-editorial-text md:text-7xl">
                <p>Real articles.</p>
                <p>Real collaborations.</p>
                <p>Real businesses.</p>
                <p>Real readers.</p>
              </div>

              <p className="mt-12 max-w-2xl text-[17px] leading-[1.85] text-neutral-700">
                A functioning product demonstrates more than static screens ever
                could. It has to communicate, adapt, perform, evolve and serve
                the people who use it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
          Start a Conversation
        </p>

        <h2 className="mt-7 max-w-5xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] text-editorial-text md:text-8xl">
          Let’s create something people remember.
        </h2>

        <p className="mt-10 max-w-2xl text-[17px] leading-[1.85] text-neutral-700">
          I design and develop thoughtful digital experiences for independent
          businesses, creative professionals and editorial projects — from
          structure and visual direction to the final published website.
        </p>

        <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <a
            href="mailto:hello@theissue.xyz"
            className="inline-block text-sm uppercase tracking-[0.25em] underline decoration-neutral-400 underline-offset-8 transition hover:text-neutral-500"
          >
            Start a conversation →
          </a>

          <Link
            href="/partnerships"
            className="inline-block text-sm uppercase tracking-[0.25em] text-neutral-500 transition hover:text-black"
          >
            Explore partnerships
          </Link>
        </div>
      </section>
    </main>
  );
}