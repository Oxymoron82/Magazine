import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { columns } from "@/data/columns";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://theissue.xyz";

  const articleUrls: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/article/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const columnUrls: MetadataRoute.Sitemap = columns.map((column) => ({
    url: `${baseUrl}/columns/${column.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/editor`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/columns`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...columnUrls,
    ...articleUrls,
  ];
}