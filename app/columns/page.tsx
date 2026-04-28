import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { columns } from "@/data/columns";

const siteUrl = "https://theissue.xyz";

export const metadata: Metadata = {
  title: "Columns | The Issue № Editorial Magazine",
  description:
    "Explore all columns of The Issue № — an independent editorial magazine covering fashion, photography, creative practice, business, and contemporary culture.",
  alternates: {
    canonical: `${siteUrl}/columns`,
  },
  openGraph: {
    title: "Columns | The Issue №",
    description:
      "Discover editorial columns on fashion, photography, design, business, and identity in The Issue № magazine.",
    url: `${siteUrl}/columns`,
    siteName: "The Issue №",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/images/editorial-2.jpg`,
        width: 1200,
        height: 630,
        alt: "The Issue № editorial columns overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Columns | The Issue №",
    description:
      "Explore fashion, photography, design, and creative columns in The Issue № editorial platform.",
    images: [`${siteUrl}/images/editorial-2.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
          The Issue № is structured around editorial columns — each one exploring
          fashion, photography, creative practice, business, and contemporary
          identity through visual storytelling and independent publishing.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-neutral-200/70" />
      </div>

      <section className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20">
          {columns.map((c) => (
            <Link key={c.slug} href={`/columns/${c.slug}`} className="block">
              <article className="space-y-5 group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src={c.image}
                    alt={`${c.label} column in The Issue № editorial magazine`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <h3 className="font-serif text-4xl md:text-5xl leading-tight">
                  {c.label}
                </h3>

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