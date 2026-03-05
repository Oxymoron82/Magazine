import Link from "next/link";
import Image from "next/image";
import { columns } from "@/data/columns";
import { notFound } from "next/navigation";

export default async function ColumnPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const column = columns.find((c) => c.slug === slug);
  if (!column) notFound();

  return (
    <main className="bg-[#FFFBEB] text-neutral-900">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
          Column
        </p>

        <div className="mt-4 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <h1 className="text-4xl md:text-5xl font-serif leading-tight">
              {column.label}
              <span className="text-neutral-400"> — </span>
              {column.title}
            </h1>

            <p className="mt-6 text-neutral-700 leading-relaxed text-lg max-w-2xl">
              {column.description}
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="/columns"
                className="text-sm underline underline-offset-4 hover:text-black transition"
              >
                All columns →
              </Link>

              <Link
                href="/#columns"
                className="text-sm underline underline-offset-4 hover:text-black transition"
              >
                Home →
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative ml-auto w-full max-w-sm aspect-[4/5]">
              <Image
                src={column.image}
                alt={column.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-neutral-200/70" />
      </div>

      {/* ARTICLES PLACEHOLDER */}
      <section className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
              In this column
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-serif">
              Stories will appear here.
            </h2>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white/40 p-8">
          <p className="text-neutral-700 leading-relaxed">
            No articles yet — this column is being curated. When the first issue
            goes live, you’ll see the full list here.
          </p>
        </div>
      </section>
    </main>
  );
}