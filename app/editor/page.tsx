import Image from "next/image";

export default function EditorPage() {
  return (
    <main className="bg-[#FFFBEB] text-neutral-900 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-24">

        <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
          Editor’s Note
        </p>

        <h1 className="mt-6 text-4xl md:text-5xl font-serif leading-tight">
          This is not a journal.
          <br />
          It is a continuation of the journey.
        </h1>

        <div className="mt-12 grid md:grid-cols-2 gap-16 items-start">

          <div className="space-y-6 text-neutral-800 leading-relaxed">
            <p>
              I have always been surrounded by beautiful women. Not the kind of
              beauty that belongs to glossy magazines, but real beauty — strong,
              confident, alive.
            </p>

            <p>
              As a child I observed them almost from behind the scenes. My
              mother was a professional director and ran a modeling agency.
            </p>

            <p>
              I grew up among women who knew their worth and were not afraid to
              be seen. Perhaps this is where my understanding of beauty was
              formed — not as perfection, but as strength.
            </p>

            <p>
              Fashion eventually became a language for me — a way to speak about
              character, vulnerability and courage through images and visual
              stories.
            </p>

            <p>
              Moving to Helsinki with a small child became one of the most
              defining chapters of my life. Starting again in another country
              means rebuilding everything — from reputation to confidence.
            </p>

            <p>
              Today this magazine is a continuation of that journey — a space
              for people who change, rebuild and continue forward.
            </p>
          </div>

          <div className="relative aspect-[4/5]">
            <Image
              src="/images/sonja1.jpeg"
              alt="Editor portrait"
              fill
              className="object-cover rounded-xl"
            />
          </div>

        </div>
      </div>
    </main>
  );
}