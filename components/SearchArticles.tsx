"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { articles } from "@/data/articles";

export default function SearchArticles() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (q.length < 2) return [];

    return articles.filter((article) => {
      const searchable = [
        article.title,
        article.category,
        article.column,
        article.excerpt,
        article.date,
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(q);
    });
  }, [query]);

  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 md:pt-20">
      <div className="border-t border-[#4A3F3C]/20 pt-10">
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
          Search
        </p>

        <div className="mt-5 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[#4A3F3C]">
              Find a story
            </h2>

            <p className="mt-4 max-w-[38ch] text-sm md:text-base leading-relaxed text-neutral-600">
              Search by name, topic, project, city, designer, photographer or
              keyword.
            </p>
          </div>

          <div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the magazine"
              className="w-full border-b border-[#4A3F3C]/40 bg-transparent py-3 text-lg outline-none placeholder:text-neutral-400"
            />

            {query.trim().length >= 2 ? (
              <div className="mt-6 space-y-4">
                {results.length > 0 ? (
                  results.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/article/${article.slug}`}
                      className="block border-b border-neutral-200 pb-4 group"
                    >
                      <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                        {article.category}
                      </p>

                      <h3 className="mt-2 font-serif text-2xl leading-tight text-[#4A3F3C] group-hover:opacity-70 transition">
                        {article.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-neutral-600 line-clamp-2">
                        {article.excerpt}
                      </p>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-neutral-500">
                    No stories found. Try another keyword.
                  </p>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}