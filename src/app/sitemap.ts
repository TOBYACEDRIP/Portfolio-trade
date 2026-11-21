import type { MetadataRoute } from "next";
import { navigation } from "@/config/site";
import { getInsightsMeta } from "@/lib/insights";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const insights = getInsightsMeta();
  const latest = insights[0]?.updated ?? insights[0]?.date;

  const pages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    ...navigation.map((item) => ({
      url: absoluteUrl(item.href),
      changeFrequency: (item.href === "/insights" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: item.href === "/insights" || item.href === "/method" ? 0.9 : 0.8,
      ...(item.href === "/insights" && latest ? { lastModified: latest } : {}),
    })),
  ];

  const articles: MetadataRoute.Sitemap = insights.map((post) => ({
    url: absoluteUrl(`/insights/${post.slug}`),
    lastModified: post.updated ?? post.date,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...pages, ...articles];
}
