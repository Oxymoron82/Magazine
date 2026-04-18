import Image from "next/image";
import Link from "next/link";

export default function EditorPage() {
  return (
    <main className="bg-[#FFFBEB] text-neutral-900">
      {/* top spacing so header doesn't overlap */}
      <section className="max-w-5xl mx-auto px-6 pt-20 md:pt-24 pb-10">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/#editors-note"
            className="text-sm underline underline-offset-4 text-neutral-700 hover:text-black transition"
          >
            ← Back to homepage
          </Link>

          <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
            Editor’s Note
          </p>
        </div>

        <h1 className="mt-10 text-4xl md:text-6xl font-serif leading-tight">
          This is not a journal.
          <br />
          It is a continuation of the journey.
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-600">
          <span className="italic">by Sofia Solas</span>
          <span className="text-neutral-300">•</span>
          <span>Helsinki</span>
        </div>
      </section>

      {/* hero image + caption */}
      <section className="max-w-5xl mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-8">
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="/images/sonja1.jpeg"
                alt="Editor portrait"
                fill
                className="object-cover object-[center_22%]"
                priority
              />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.35em] text-neutral-500">
              Portrait • Editor
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="border border-neutral-200/70 rounded-2xl p-6 bg-[#FFFBEB]">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
                In one line
              </p>
              <p className="mt-4 font-serif text-xl leading-snug">
                Beauty is not perfection — it is posture, even when it’s hard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* article body */}
      <section className="max-w-3xl mx-auto px-6 pb-24 md:pb-28">
        {/* Drop cap paragraph */}
        <p className="text-lg leading-relaxed text-neutral-800">
          <span className="float-left font-serif text-6xl leading-[0.85] pr-3 pt-2 text-neutral-900">
            I
          </span>
          have always been surrounded by beautiful women. Not glossy beauty, but
          real beauty — strong, confident, alive. As a child I watched them like
          I was standing behind the curtain. My mother was a professional
          director and ran a modeling agency. For some, it was simply work. For
          me, it was a whole world: runways, fittings, music, the tension before
          a step onto the light — and that particular feeling when an idea turns
          into an image.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-neutral-800">
          I grew up among women who knew their value, held their posture, and
          didn’t fear being seen. That’s where my understanding of beauty was
          formed — as power, not shape. Over time, admiration turned into a
          clearer desire: to be part of this world. Fashion stopped being only
          aesthetics. It became a language — a way to speak about character,
          femininity, vulnerability, and courage.
        </p>

        {/* pull quote */}
        <div className="mt-10 border-l border-neutral-300 pl-6">
          <p className="font-serif text-2xl md:text-3xl leading-snug">
            “If you want to be noticed, you have to be visible — and do your
            work well.”
          </p>
          <p className="mt-3 text-sm text-neutral-600 italic">
            — Editor’s note
          </p>
        </div>

        <h2 className="mt-12 font-serif text-3xl leading-tight">
          Starting again, in another country
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-neutral-800">
          My path wasn’t inherited. I had to build everything myself — learn,
          try, make mistakes, fall out of rhythm, and return. One of the most
          intense points was moving to a different country. I came to Helsinki
          with a small child — to build a family, with the feeling that a new
          life could be possible. Migration removes illusions quickly. In a new
          country you start from zero: no status, no connections, no reputation.
          Very soon you understand: you can rely only on yourself.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-neutral-800">
          When the relationship ended, responsibility remained — for my child and
          my own life. It wasn’t easy. But that is where adult clarity appears:
          you either stop, or you begin again.
        </p>

        <h2 className="mt-12 font-serif text-3xl leading-tight">
          Work, discipline, and respect
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-neutral-800">
          Like many, my first job in Finland was cleaning. I feel no shame in
          that. It was an honest stage — work that gives stability, discipline,
          and respect for every kind of labor. Step by step, I moved forward.
          Later I was offered a position in a well-known hotel chain in
          Scandinavia. I received Finnish citizenship within four years of living
          in the country. I graduated in hospitality and event management. I was
          rebuilding slowly — but I always felt that something inside me was
          still not fully unlocked.
        </p>

        <h2 className="mt-12 font-serif text-3xl leading-tight">
          Returning to the visual
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-neutral-800">
          I returned to visual storytelling. I trained in posing and fashion
          production — and I understood clearly: I can do this myself. Create
          shoots. Build teams. Work with photographers, designers, makeup
          artists. See a project as a whole — from idea and styling to the final
          publication. Later I studied fashion styling and visual concepts in an
          Italian school of fashion and style. In parallel, I began studying
          finance — because I want to not only create beauty, but also build
          sustainable projects and businesses.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-neutral-800">
          The right people began to appear. Projects started forming naturally.
          Our shoots were published internationally across Europe, the US, and
          the UK. But the most important part is this: women were always around
          me — different ages, different bodies, different stories. They
          inspired me again and again.
        </p>

        {/* ending */}
        <div className="mt-12 border-t border-neutral-200/70 pt-10">
          <p className="font-serif text-2xl leading-snug">
            The Issue is not a showcase.
            <br />
            It is a process. A continuation. A chapter you create.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#about"
              className="text-sm underline underline-offset-4 text-neutral-700 hover:text-black transition"
            >
              Read the manifesto →
            </Link>
            <Link
              href="/#contact"
              className="text-sm underline underline-offset-4 text-neutral-700 hover:text-black transition"
            >
              Contacts →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}