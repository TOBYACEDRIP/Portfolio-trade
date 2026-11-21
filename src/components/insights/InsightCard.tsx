import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getCategoryLabel } from "@/config/insights";
import type { InsightMeta } from "@/lib/insights";
import { formatDate } from "@/lib/format";

const biasTone = {
  bullish: "bg-ice text-sky-deep border-sky-deep/20",
  bearish: "bg-peach/50 text-[#8a4a17] border-peach-deep/25",
  neutral: "bg-canvas text-navy-soft border-line-strong",
};

/** Card for a market insight — chart breakdowns show instrument, timeframe and bias. */
export function InsightCard({ post, headingLevel = "h3" }: { post: InsightMeta; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="surface group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
    >
      {post.chart && (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-ice">
          <Image
            src={post.chart}
            alt={post.chartAlt ?? `${post.instrument ?? ""} chart for ${post.title}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="rounded-full bg-navy px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-white">
            {post.type === "analysis" ? "Analysis" : "Insight"}
          </span>
          {post.instrument && (
            <span className="rounded-full border border-line-strong px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-navy">{post.instrument}</span>
          )}
          {post.timeframe && (
            <span className="rounded-full border border-line-strong px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-navy-soft">{post.timeframe}</span>
          )}
          {post.bias && (
            <span className={`rounded-full border px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] ${biasTone[post.bias]}`}>{post.bias} expectation</span>
          )}
        </div>
        <p className="eyebrow mt-5 text-sky-deep!">{getCategoryLabel(post.category)}</p>
        <H className="mt-2.5 text-xl font-bold leading-snug text-navy transition-colors group-hover:text-sky-deep">{post.title}</H>
        <p className="mt-2.5 text-sm leading-relaxed text-muted">{post.description}</p>
        <div className="mt-auto flex items-center justify-between pt-6 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
          <span>
            <time dateTime={post.date}>{formatDate(post.date, "short")}</time> · {post.readingTime} min
          </span>
          <ArrowUpRight size={16} aria-hidden="true" className="text-navy transition-transform group-hover:rotate-45" />
        </div>
      </div>
    </Link>
  );
}
