import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trinity | The Issue №",
  description:
    "An original editorial project by The Issue № combining photography, creative direction and storytelling.",
};

export default function TrinityPage() {
  return (
    <main className="bg-editorial-bg text-neutral-900">
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Editorial Project
          </p>

          <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-none text-editorial-text">
            Trinity
          </h1>

          <p className="mt-8 text-lg md:text-xl leading-[1.8] text-neutral-700">
            Every story deserves to be seen.
          </p>
        </div>
      </section>
    </main>
  );
}