import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { columns } from "@/data/columns";
import { articles } from "@/data/articles";

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
      description: column.descriptionShort,
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

  const columnArticles = articles
    .filter((article) => article.column === slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="bg-[#FFFBEB] text-neutral-900">
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
          {column.label}
        </p>

        <div className="mt-4 flex items-end justify-between gap-6">
          <h1 className="text-4xl md:text-5xl font-serif leading-tight">
            {column.title}
          </h1>

          <Link
            href="/columns"
            className="text-sm underline underline-offset-4 hover:text-black transition"
          >
            Back to all columns →
          </Link>
        </div>

        <p className="mt-6 max-w-2xl text-neutral-700 leading-relaxed">
          {column.descriptionShort}
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-neutral-200/70" />
      </div>

      <section className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        {columnArticles.length === 0 ? (
          <p className="text-neutral-600">No articles in this column yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20">
            {columnArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/article/${article.slug}`}
                className="block group"
              >
                <article className="space-y-4">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                    <Image
                      src={article.image}
                      alt={`${article.title} editorial feature in The Issue N`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
                    {article.category}
                  </p>

                  <h2 className="text-xl font-medium leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {article.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}