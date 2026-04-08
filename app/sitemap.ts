import { articles } from "@/data/articles";

const siteUrl = "https://theissue.xyz";

export default function sitemap() {
  const articleUrls = articles.map((article) => ({
    url: `${siteUrl}/article/${article.slug}`,
    lastModified: article.date,
  }));

  const staticUrls = [
    {
      url: siteUrl,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteUrl}/columns`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteUrl}/columns/becoming`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteUrl}/columns/work`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteUrl}/columns/practice`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteUrl}/columns/intimacy`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteUrl}/editor`,
      lastModified: new Date().toISOString(),
    },
  ];

  return [...staticUrls, ...articleUrls];
}