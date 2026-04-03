import Link from "next/link";
import Image from "next/image";
import EditorialCard from "@/components/EditorialCard";

export default function HomePage() {
  return (
    <main className="bg-[#FFFBEB] text-neutral-900">
      {/* HERO */}
      <section id="home" className="relative h-[90vh] w-full scroll-mt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/editorial-2.jpg"
            alt="Editorial cover"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-end pb-24">
         <div className="max-w-2xl">
  <p className="text-xs tracking-[0.35em] uppercase text-white mb-6">
    Online Magazine
  </p>

  <h1 className="text-[clamp(3rem,8vw,7rem)] leading-none font-semibold font-serif text-white">
    THE ISSUE
  </h1>

  <p className="mt-6 text-xs tracking-[0.35em] uppercase text-white">
    An Independent Editorial Platform
  </p>
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
              <br />
              a new chapter doesn’t arrive by itself —
              <br />
              it is created.
            </p>
          </div>
        </div>
      </section>

      {/* thin divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-neutral-200/70" />
      </div>

      {/* EDITOR NOTE */}
      <section
        id="editors-note"
        className="max-w-7xl mx-auto px-6 py-24 md:py-28 scroll-mt-24"
      >
        <div className="grid md:grid-cols-12 gap-14 items-center">
          {/* TEXT */}
          <div className="md:col-span-7 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
              Editor’s Note
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-serif leading-tight">
              This is not a journal.
              <br />
              It is a continuation of the journey.
            </h2>

            <p className="mt-6 text-neutral-700 leading-relaxed text-lg">
              I have always been surrounded by beautiful women.
              <br />
              Not glossy beauty, but real beauty — strong, confident, alive.
            </p>

            <p className="mt-4 italic text-neutral-500 text-sm">by Sofia Solas</p>

            <Link
              href="/editor"
              className="inline-block mt-6 text-sm underline underline-offset-4 hover:text-black transition"
            >
              Read the full note →
            </Link>
          </div>

          {/* IMAGE */}
          <div className="md:col-span-5">
            <div className="relative ml-auto w-full max-w-sm aspect-[4/5]">
              <Image
                src="/images/sonja1.jpeg"
                alt="Editor portrait"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* thin divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-neutral-200/70" />
      </div>

      {/* COLUMNS (Rubrics) */}
      <section
        id="columns"
        className="max-w-7xl mx-auto px-6 py-24 md:py-28 scroll-mt-24"
      >
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
              Columns
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-serif">
              Essays, voices, and personal angles.
            </h2>
          </div>

          <Link
            href="/columns"
            className="text-sm underline underline-offset-4 hover:text-black transition"
          >
            More →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-24">
          <Link href="/columns/becoming" className="block">
            <EditorialCard
              category="BECOMING"
              title="Transformation"
              image="/images/card-2.jpg"
            />
          </Link>

          <Link href="/columns/work" className="block">
            <EditorialCard
              category="WORK"
              title="Work & Path"
              image="/images/card-1.jpg"
            />
          </Link>

          <Link href="/columns/practice" className="block">
            <EditorialCard
              category="PRACTICE"
              title="Creative Practice"
              image="/images/card-3.jpg"
            />
          </Link>
        </div>
      </section>

      {/* FULL WIDTH EDITORIAL — Photo Stories */}
   {/*    <section
        id="stories"
        className="relative h-[80vh] w-full my-28 md:my-32 scroll-mt-24"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Featured editorial"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-black mb-6">
              Photo Stories
            </p>

            <h2 className="text-[clamp(3rem,8vw,7rem)] leading-none font-semibold font-serif">
              A STUDY
              <br />
              IN SILENCE
            </h2>
          </div>
        </div>
      </section>
      */}

      {/* LATEST */}
      <section
        id="latest"
        className="max-w-7xl mx-auto px-6 pb-28 md:pb-32 scroll-mt-24"
      >
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
              Latest
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-serif">
              New pieces and fresh visuals.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-24">
          <EditorialCard
            category="Issue"
            title="Loewe × Castor Fleuriste"
            image="/images/card-4.jpg"
          />

          <EditorialCard
            category="Design"
            title="Ronan Bouroullec"
            image="/images/card-5.jpg"
            mediaStyle={{ borderTopRightRadius: "140px" }}
          />

          <EditorialCard
            category="Fashion story"
            title="Boris Ovin + Imruh Asha"
            image="/images/card-6.jpg"
            mediaStyle={{ borderTopLeftRadius: "140px" }}
          />

          <EditorialCard
            category="Portrait"
            title="Bibi Borthwick + Jasmine Hassett"
            image="/images/card-7.jpg"
          />
        </div>
      </section>
    </main>
  );
}