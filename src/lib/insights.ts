import "server-only";

import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";
import { insightCategories, type InsightCategoryId } from "@/config/insights";
import { slugify } from "@/lib/format";

/**
 * Articles live in /src/content/insights as .mdx files. The filename is the
 * URL slug. Adding a new article = adding one file; nothing else to register.
 *
 * Required frontmatter: title, description, date (YYYY-MM-DD), category.
 * Optional: tags (string[]), updated (YYYY-MM-DD), draft (boolean), image.
 */

const INSIGHTS_DIR = path.join(process.cwd(), "src", "content", "insights");
const WORDS_PER_MINUTE = 230;

export type InsightMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: InsightCategoryId;
  tags: string[];
  image?: string;
  readingTime: number;
  wordCount: number;
};

export type Insight = InsightMeta & { content: string };

const validCategories = new Set<string>(insightCategories.map((c) => c.id));

function countWords(markdown: string): number {
  const text = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`~\-[\]()!|]/g, " ");
  return text.split(/\s+/).filter(Boolean).length;
}

function parseFile(fileName: string): Insight | null {
  const slug = fileName.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(INSIGHTS_DIR, fileName), "utf8");
  const { content, data } = matter(raw);

  if (data.draft === true && process.env.NODE_ENV === "production") return null;

  const missing = ["title", "description", "date", "category"].filter((k) => !data[k]);
  if (missing.length) {
    throw new Error(`[insights] ${fileName} is missing frontmatter: ${missing.join(", ")}`);
  }
  if (!validCategories.has(String(data.category))) {
    throw new Error(
      `[insights] ${fileName} has unknown category "${data.category}". Add it to src/config/insights.ts.`,
    );
  }

  const wordCount = countWords(content);
  const toISODate = (v: unknown) =>
    v instanceof Date ? v.toISOString().slice(0, 10) : String(v);

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    date: toISODate(data.date),
    updated: data.updated ? toISODate(data.updated) : undefined,
    category: data.category as InsightCategoryId,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    image: data.image ? String(data.image) : undefined,
    readingTime: Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE)),
    wordCount,
    content,
  };
}

export const getAllInsights = cache((): Insight[] => {
  if (!fs.existsSync(INSIGHTS_DIR)) return [];
  return fs
    .readdirSync(INSIGHTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(parseFile)
    .filter((p): p is Insight => p !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
});

export function getInsightsMeta(): InsightMeta[] {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return getAllInsights().map(({ content, ...meta }) => meta);
}

export function getInsight(slug: string): Insight | null {
  return getAllInsights().find((p) => p.slug === slug) ?? null;
}

export function getAdjacentInsights(slug: string) {
  const all = getInsightsMeta();
  const i = all.findIndex((p) => p.slug === slug);
  return {
    newer: i > 0 ? all[i - 1] : null,
    older: i >= 0 && i < all.length - 1 ? all[i + 1] : null,
  };
}

export function getRelatedInsights(slug: string, limit = 2): InsightMeta[] {
  const all = getInsightsMeta();
  const current = all.find((p) => p.slug === slug);
  if (!current) return [];
  return all
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      p,
      score:
        (p.category === current.category ? 2 : 0) +
        p.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score || b.p.date.localeCompare(a.p.date))
    .slice(0, limit)
    .map(({ p }) => p);
}

export function extractToc(markdown: string): { id: string; text: string }[] {
  const withoutCode = markdown.replace(/```[\s\S]*?```/g, "");
  return [...withoutCode.matchAll(/^##\s+(.+)$/gm)].map((m) => {
    const text = m[1].replace(/[*_`]/g, "").trim();
    return { id: slugify(text), text };
  });
}
