import Link from "next/link";
import Image from "next/image";
import { columns } from "@/data/columns";

export default function ColumnsPage() {
  return (
    <main className="bg-[#FFFBEB] text-neutral-900">
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
          Columns
        </p>

        <div className="mt-4 flex items-end justify-between gap-6">
          <h1 className="text-4xl md:text-5xl font-serif leading-tight">
            All columns.
          </h1>

          <Link
            href="/#columns"
            className="text-sm underline underline-offset-4 hover:text-black transition"
          >
            Back to home →
          </Link>
        </div>

        <p className="mt-6 max-w-2xl text-neutral-700 leading-relaxed">
          The Issue is structured around recurring columns — each one a way of
          looking at people, work, form, and place.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-neutral-200/70" />
      </div>

      <section className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20">
          {columns.map((c) => (
            <Link key={c.slug} href={`/columns/${c.slug}`} className="block">
              <article className="space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
                  {c.label}
                </p>

                <h3 className="text-xl font-medium leading-snug">{c.title}</h3>

                <p className="text-sm text-neutral-700 leading-relaxed">
                  {c.descriptionShort}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}