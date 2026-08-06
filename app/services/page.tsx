import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editorial Services | The Issue №",
  description:
    "Editorial features, founder interviews, event coverage, editorial productions and international publication opportunities with The Issue №.",
  alternates: {
    canonical: "https://theissue.xyz/services",
  },
};

const editorialServices = [
  {
    number: "01",
    title: "Editorial Feature",
    price: "€120",
    description:
      "An editorial article introducing your brand, collection or creative project.",
    includes: [
      "Editorial article",
      "Publication on The Issue №",
      "Website feature",
      "Social media mention",
    ],
  },
  {
    number: "02",
    title: "Founder Interview",
    price: "€180",
    description:
      "An in-depth interview exploring the story, vision and philosophy behind your brand.",
    includes: [
      "Interview",
      "Editorial editing",
      "Publication on The Issue №",
      "Website feature",
      "Social media mention",
    ],
  },
  {
    number: "03",
    title: "Event Coverage",
    price: "From €180",
    description:
      "Editorial coverage of fashion events, exhibitions, launches and cultural experiences.",
    includes: [
      "Event photography, if required",
      "Editorial article",
      "Publication",
      "Social media coverage",
    ],
  },
];

const productionIncludes = [
  "Creative direction",
  "Concept development",
  "Moodboard",
  "Production planning",
  "Photography",
  "Editorial article or interview",
  "Publication on The Issue №",
  "Social media promotion",
];

const internationalIncludes = [
  "Creative concept",
  "Editorial planning",
  "Story development",
  "Submission preparation",
  "Submission to selected international magazines",
];

const processSteps = [
  {
    number: "01",
    title: "Tell us about your idea",
    text: "We begin with your brand, project, event or story and discuss the format that would communicate it best.",
  },
  {
    number: "02",
    title: "Shape the concept",
    text: "Together we define the angle, visual direction, participants, location and editorial structure.",
  },
  {
    number: "03",
    title: "Create the material",
    text: "Depending on the selected service, we conduct the interview, photography, writing and editorial production.",
  },
  {
    number: "04",
    title: "Publish and share",
    text: "The completed story is published on The Issue № and supported through our digital and social channels.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-editorial-bg text-neutral-900">
      {/* HERO */}
      <section className="relative min-h-[82vh] overflow-hidden bg-black">
        <Image
          src="/images/partnerships/1.png"
          alt="Editorial services by The Issue №"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-end px-6 pb-20 pt-32 md:px-12 md:pb-28">
          <div className="max-w-5xl">
            <p className="text-[11px] uppercase tracking-[0.4em] text-white/75">
              Editorial Services
            </p>

            <h1 className="mt-7 max-w-5xl font-serif text-6xl leading-[0.9] tracking-[-0.055em] text-white md:text-8xl lg:text-[112px]">
              Beautiful stories deserve beautiful presentation.
            </h1>

            <p className="mt-9 max-w-2xl text-[17px] leading-[1.8] text-white/90 md:text-xl">
              Editorial features, founder interviews, event coverage and
              complete creative productions for brands, artists and independent
              projects.
            </p>

            <a
              href="#packages"
              className="mt-10 inline-block border border-white/70 px-7 py-4 text-[10px] uppercase tracking-[0.27em] text-white transition hover:bg-white hover:text-black"
            >
              View services
            </a>
          </div>
        </div>
      </section>

      {/* FLEXIBLE ENTRY POINT */}
      <section className="border-b border-neutral-200/70 bg-[#ebe6dc]">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                At every stage
              </p>
            </div>

            <div className="lg:col-span-8">
              <p className="max-w-5xl font-serif text-3xl leading-[1.25] tracking-[-0.025em] text-editorial-text md:text-5xl">
                Already have a completed editorial? Or looking for a full
                creative production?
              </p>

              <p className="mt-6 max-w-3xl text-[17px] leading-[1.85] text-neutral-700">
                We can support your project at any stage. The packages below are
                starting points, and every collaboration can be adapted to your
                material, goals and production needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
              Our approach
            </p>

            <h2 className="mt-7 max-w-4xl font-serif text-5xl leading-[1.02] tracking-[-0.04em] text-editorial-text md:text-7xl">
              We do not create conventional advertisements.
            </h2>

            <p className="mt-8 max-w-3xl font-serif text-3xl leading-[1.3] text-neutral-700 md:text-4xl">
              We create editorial stories people actually want to read.
            </p>

            <div className="mt-10 grid max-w-4xl grid-cols-1 gap-8 text-[16px] leading-[1.85] text-neutral-700 md:grid-cols-2">
              <p>
                Every collaboration is developed around the character, values
                and visual identity of the person, brand or project behind it.
              </p>

              <p>
                The completed publication becomes part of The Issue № editorial
                archive, creating a longer-lasting presence than a temporary
                advertising campaign.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
              <Image
                src="/images/partnerships/2.png"
                alt="Editorial collaboration and visual storytelling"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/5" />
            </div>
          </div>
        </div>
      </section>

      {/* STANDARD PACKAGES */}
      <section
        id="packages"
        className="scroll-mt-24 border-y border-neutral-200/70 bg-white/30"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                Editorial Packages
              </p>

              <h2 className="mt-6 max-w-md font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-editorial-text md:text-7xl">
                Choose the format that fits your story.
              </h2>

              <p className="mt-8 max-w-sm text-[16px] leading-[1.8] text-neutral-600">
                These formats work well for independent businesses, founders,
                artists, designers, collections and creative projects.
              </p>

              <p className="mt-5 max-w-sm text-sm leading-[1.8] text-neutral-500">
                Have finished photography or written material already? We can
                build the publication around what you have.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-neutral-300/70">
                {editorialServices.map((service) => (
                  <article
                    key={service.number}
                    className="grid grid-cols-1 gap-6 border-b border-neutral-300/70 py-10 md:grid-cols-[65px_minmax(0,1fr)_150px] md:gap-8 md:py-12"
                  >
                    <p className="text-[10px] uppercase tracking-[0.32em] text-neutral-400">
                      {service.number}
                    </p>

                    <div>
                      <h3 className="font-serif text-4xl leading-none tracking-[-0.025em] text-editorial-text md:text-5xl">
                        {service.title}
                      </h3>

                      <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-neutral-600">
                        {service.description}
                      </p>

                      <div className="mt-8 border-t border-neutral-200/80 pt-6">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                          Includes
                        </p>

                        <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {service.includes.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-[1.7] text-neutral-700"
                            >
                              <span aria-hidden="true">—</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="md:text-right">
                      <p className="font-serif text-4xl leading-none text-editorial-text">
                        {service.price}
                      </p>

                      <p className="mt-3 text-[9px] uppercase tracking-[0.28em] text-neutral-400">
                        Starting price
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL PRODUCTION */}
      <section className="mx-auto max-w-[1600px] px-0 py-20 md:px-8 md:py-28">
        <div className="relative min-h-[760px] overflow-hidden bg-neutral-900">
          <Image
            src="/images/partnerships/7.png"
            alt="Creative editorial production planning"
            fill
            sizes="(max-width: 1600px) 100vw, 1600px"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-y-0 right-0 w-full bg-black/50 lg:w-[48%]" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />

          <div className="relative z-10 min-h-[760px]">
            <p className="absolute bottom-10 left-10 hidden text-[10px] uppercase tracking-[0.35em] text-white/75 lg:block">
              Complete production
            </p>

            <div className="flex min-h-[760px] items-center justify-end">
              <div className="w-full px-7 py-16 text-white md:px-12 lg:ml-auto lg:w-[48%] lg:px-12 xl:px-14">
                <div className="w-full">
                  <div className="flex items-start justify-between gap-8">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-white/70">
                      04
                    </p>

                    <div className="text-right">
                      <p className="font-serif text-4xl leading-none text-white">
                        From €650
                      </p>

                      <p className="mt-3 text-[9px] uppercase tracking-[0.28em] text-white/65">
                        Tailored production
                      </p>
                    </div>
                  </div>

                  <h2 className="mt-12 font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
                    Editorial Production
                  </h2>

                  <p className="mt-8 max-w-xl text-[17px] leading-[1.85] text-white/90">
                    A complete editorial production created together with your
                    brand — from concept to publication.
                  </p>

                  <div className="mt-10 border-t border-white/30 pt-8">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                      Includes
                    </p>

                    <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {productionIncludes.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-[1.7] text-white/90"
                        >
                          <span aria-hidden="true">+</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact"
                    className="mt-12 inline-block border border-white/65 px-7 py-4 text-[10px] uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-black"
                  >
                    Discuss a production
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNATIONAL PUBLICATION */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-12 md:pb-28">
        <div className="grid grid-cols-1 gap-12 border-y border-neutral-200/70 py-16 md:py-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="flex items-start justify-between gap-6 lg:block">
              <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400">
                05
              </p>

              <p className="font-serif text-4xl leading-none text-editorial-text lg:mt-10">
                From €450
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
              International opportunities
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-[1] tracking-[-0.04em] text-editorial-text md:text-7xl">
              International Publication (via Kavyar)
            </h2>

            <p className="mt-8 max-w-3xl text-[17px] leading-[1.85] text-neutral-700">
              Professional editorial production prepared for submission to
              international fashion magazines via Kavyar.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-4 border-t border-neutral-200/80 pt-8 sm:grid-cols-2">
              {internationalIncludes.map((item) => (
                <p
                  key={item}
                  className="flex gap-3 text-sm leading-[1.7] text-neutral-700"
                >
                  <span aria-hidden="true">—</span>
                  <span>{item}</span>
                </p>
              ))}
            </div>

            <p className="mt-8 max-w-3xl text-xs leading-[1.8] text-neutral-500">
              Publication decisions are made independently by each external
              magazine. The service covers creative development, preparation
              and submission but cannot guarantee acceptance.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-12 md:pb-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
              How it works
            </p>

            <h2 className="mt-6 max-w-md font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-editorial-text md:text-7xl">
              From the first message to publication.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-neutral-200/70">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="grid grid-cols-[50px_minmax(0,1fr)] gap-5 border-b border-neutral-200/70 py-8 md:grid-cols-[70px_220px_minmax(0,1fr)] md:gap-8 md:py-10"
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                    {step.number}
                  </p>

                  <h3 className="font-serif text-2xl leading-[1.05] text-editorial-text md:text-3xl">
                    {step.title}
                  </h3>

                  <p className="col-start-2 text-sm leading-[1.8] text-neutral-600 md:col-start-auto">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-12 md:pb-28">
        <div className="bg-[#ebe6dc] px-7 py-14 md:px-12 md:py-20 lg:px-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                Tailored collaborations
              </p>
            </div>

            <div className="lg:col-span-8">
              <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] text-editorial-text md:text-6xl">
                Every collaboration is unique.
              </h2>

              <p className="mt-7 max-w-3xl text-[17px] leading-[1.85] text-neutral-700">
                Custom projects, ongoing collaborations and campaign
                productions are quoted individually.
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-[1.8] text-neutral-500">
                Need something different? We can prepare a bespoke proposal
                based on the material you already have and the support your
                project still needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        id="contact"
        className="relative scroll-mt-24 overflow-hidden bg-black"
      >
        <Image
          src="/images/partnerships/6.png"
          alt="Editorial collaboration with The Issue №"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-white md:px-12 md:py-32">
          <p className="text-[11px] uppercase tracking-[0.4em] text-white/75">
            Start a collaboration
          </p>

          <h2 className="mt-7 max-w-5xl font-serif text-6xl leading-[0.92] tracking-[-0.05em] md:text-8xl">
            Let&apos;s create something meaningful.
          </h2>

          <p className="mt-9 max-w-2xl text-[17px] leading-[1.85] text-white/90">
            Whether you already have a finished editorial or need a complete
            production, tell us about your project. We will help you choose the
            right format and level of support.
          </p>

         <div className="mt-11 flex flex-col items-start gap-7 sm:flex-row sm:flex-wrap sm:items-center">
  <a
    href="mailto:hello@theissue.xyz?subject=Editorial%20Collaboration"
    className="border border-white/70 px-7 py-4 text-[10px] uppercase tracking-[0.27em] text-white transition hover:bg-white hover:text-black"
  >
    Start a conversation
  </a>

  <Link
    href="/partnerships"
    className="text-[10px] uppercase tracking-[0.27em] text-white/75 underline decoration-white/40 underline-offset-8 transition hover:text-white"
  >
    Learn about partnerships →
  </Link>

  <a
    href="mailto:hello@theissue.xyz"
    className="text-lg underline decoration-white/60 underline-offset-8 transition hover:text-white/75"
  >
    hello@theissue.xyz
  </a>
</div>
        </div>
      </section>
    </main>
  );
}