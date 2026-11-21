/**
 * Market Insights categories. An entry's frontmatter `category` must match one
 * of these ids. Empty categories are hidden from the filter automatically.
 */
export const insightCategories = [
  { id: "forex-analysis", label: "Forex Analysis" },
  { id: "technical-analysis", label: "Technical Analysis" },
  { id: "market-structure", label: "Market Structure" },
  { id: "liquidity", label: "Liquidity Analysis" },
  { id: "fundamental-context", label: "Fundamental Context" },
  { id: "psychology", label: "Trading Psychology" },
] as const;

export type InsightCategoryId = (typeof insightCategories)[number]["id"];

export function getCategoryLabel(id: string): string {
  return insightCategories.find((c) => c.id === id)?.label ?? id;
}
