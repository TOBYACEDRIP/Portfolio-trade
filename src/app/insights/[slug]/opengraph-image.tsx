import { getCategoryLabel } from "@/config/insights";
import { getAllInsights, getInsight } from "@/lib/insights";
import { formatDate } from "@/lib/format";
import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "TheTobyAce — Insights";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllInsights().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getInsight(slug);
  return renderOgImage({
    eyebrow: post ? getCategoryLabel(post.category) : "Insights",
    title: post?.title ?? "Insights",
    footer: post ? `${formatDate(post.date)} · ${post.readingTime} min read` : undefined,
  });
}
