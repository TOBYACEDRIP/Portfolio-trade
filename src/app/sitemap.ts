import type { MetadataRoute } from "next";
import { navigation, secondaryNavigation } from "@/config/site";
import { getInsightsMeta } from "@/lib/insights";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const insights = getInsightsMeta();
  const latest = insights[0]?.updated ?? insights[0]?.date;
  const priority: Record<string, number> = { "/": 1, "/model": 0.9, "/insights": 0.9, "/library": 0.8 };

  const pages: MetadataRoute.Sitemap = [...navigation, ...secondaryNavigation].map((item) => ({
    url: absoluteUrl(item.href),
    changeFrequency: item.href === "/insights" || item.href === "/library" ? "weekly" : "monthly",
    priority: priority[item.href] ?? 0.7,
    ...(item.href === "/insights" && latest ? { lastModified: latest } : {}),
  }));

  const articles: MetadataRoute.Sitemap = insights.map((post) => ({
    url: absoluteUrl(`/insights/${post.slug}`),
    lastModified: post.updated ?? post.date,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...pages, ...articles];
}
