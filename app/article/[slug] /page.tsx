export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">
        Article: {params.slug}
      </h1>
      <p className="text-gray-500">
        This is a placeholder article page. Content will be added later.
      </p>
    </main>
  );
}
