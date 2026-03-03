import { articles } from "@/data/articles";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const safeSlug = decodeURIComponent(slug).trim();

  const article = articles.find((a) => a.slug.trim() === safeSlug);

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-[#FFFBEB] text-neutral-900 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-xs uppercase tracking-[0.35em] text-neutral-600">
          {article.category}
        </div>

        <h1 className="mt-6 text-4xl font-semibold">{article.title}</h1>

        <p className="mt-6 text-lg text-neutral-700">{article.excerpt}</p>

        <div className="mt-10 text-neutral-800 leading-relaxed whitespace-pre-line">
          {article.content}
        </div>
      </div>
    </main>
  );
}