import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { columns } from "@/data/columns";
import { articles } from "@/data/articles";
import { notFound } from "next/navigation";

const siteUrl = "https://theissue.xyz";

type ColumnSlug = "becoming" | "work" | "practice" | "intimacy";

const columnSeo: Record<
  ColumnSlug,
  {
    title: string;
    description: string;
  }
> = {
  becoming: {
    title: "Becoming | The Issue N",
    description:
      "Becoming is The Issue N column dedicated to transformation, identity, personal evolution, and contemporary visual storytelling.",
  },
  work: {
    title: "Work | The Issue N",
    description:
      "Work is The Issue N column exploring business, entrepreneurship, professional journeys, and modern working identities.",
  },
  practice: {
    title: "Practice | The Issue N",
    description:
      "Practice is The Issue N column focused on designers, makers, creative processes, sustainable fashion, and artistic work.",
  },
  intimacy: {
    title: "Intimacy | The Issue N",
    description:
      "Intimacy is The Issue N column exploring sensuality, emotion, identity, and human connection through editorial storytelling.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const column = columns.find((c) => c.slug === slug);

  if (!column) {
    return {
      title: "Column | The Issue N",
      description: "Editorial columns from The Issue N.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const seo =
    columnSeo[slug as ColumnSlug] ?? {
      title: `${column.title} | The Issue N`,
      description: column.descriptionShort ?? column.description,
    };

  const columnUrl = `${siteUrl}/columns/${column.slug}`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: columnUrl,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: columnUrl,
      siteName: "The Issue N",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `${siteUrl}${column.image}`,
          width: 1200,
          height: 630,
          alt: `${column.title} column in The Issue N`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${siteUrl}${column.image}`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ColumnPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const column = columns.find((c) => c.slug === slug);
  if (!column) notFound();

  const list = articles.filter((a) => a.column === slug);

  const sorted = [...list].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featured = sorted[0];
  const rest = sorted.slice(1);

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
                alt={`${column.title} column in The Issue N editorial magazine`}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-neutral-200/70" />
      </div>

      {/* FEATURED ARTICLE */}
      <section className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
              Featured
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-serif">
              Latest story
            </h2>
          </div>
        </div>

        {!featured ? (
          <div className="rounded-2xl border border-neutral-200 bg-white/40 p-8">
            <p className="text-neutral-700 leading-relaxed">
              No articles yet — this column is being curated.
            </p>
          </div>
        ) : (
          <Link href={`/article/${featured.slug}`} className="block group">
            <article className="grid md:grid-cols-12 gap-10 items-center border border-neutral-200 rounded-3xl overflow-hidden bg-white/30">
              <div className="md:col-span-7 relative aspect-[16/10] md:aspect-[4/3]">
                <Image
                  src={featured.image}
                  alt={`${featured.title} featured editorial story in ${column.title}`}
                  fill
                  className="object-cover group-hover:scale-[1.01] transition"
                />
              </div>

              <div className="md:col-span-5 p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
                  {featured.category}
                </p>

                <h3 className="mt-4 text-3xl font-serif leading-tight">
                  {featured.title}
                </h3>

                <p className="mt-4 text-neutral-700 leading-relaxed">
                  {featured.excerpt}
                </p>

                <p className="mt-6 text-sm underline underline-offset-4">
                  Read →
                </p>
              </div>
            </article>
          </Link>
        )}
      </section>

      {/* GRID OF OTHER ARTICLES */}
      {rest.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-24 md:pb-28">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
                More stories
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-serif">
                Explore the column
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {rest.map((a) => (
              <Link key={a.slug} href={`/article/${a.slug}`}>
                <article className="space-y-4 group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-neutral-200">
                    <Image
                      src={a.image}
                      alt={`${a.title} editorial feature in The Issue N`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
                    {a.category}
                  </p>

                  <h3 className="text-xl font-medium leading-snug">
                    {a.title}
                  </h3>

                  <p className="text-neutral-700">{a.excerpt}</p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}