import Image from "next/image";
import { AlertTriangle } from "lucide-react";
import type { InsightMeta } from "@/lib/insights";

const rows = [
  { key: "where", n: "01", label: "Where is price?" },
  { key: "happened", n: "02", label: "What has happened?" },
  { key: "draw", n: "03", label: "Where is it potentially drawing towards?" },
  { key: "confirmation", n: "04", label: "What would confirm the expectation?" },
  { key: "invalidation", n: "05", label: "What would invalidate it?" },
] as const;

/** Structured market narrative for chart-breakdown entries. */
export function NarrativePanel({ post }: { post: InsightMeta }) {
  const n = post.narrative;
  const hasRows = n && rows.some((r) => n[r.key]);
  if (!post.chart && !hasRows && !post.poi) return null;

  return (
    <section aria-label="Market narrative" className="mb-12 space-y-4">
      {post.chart && (
        <figure className="surface overflow-hidden">
          <Image
            src={post.chart}
            alt={post.chartAlt ?? `${post.instrument ?? "Chart"} ${post.timeframe ?? ""} annotated analysis`}
            width={1600}
            height={1000}
            sizes="(min-width: 1024px) 720px, 100vw"
            className="h-auto w-full"
            priority
          />
          {(post.instrument || post.timeframe) && (
            <figcaption className="border-t border-line px-4 py-3 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
              {[post.instrument, post.timeframe].filter(Boolean).join(" · ")} · annotated chart
            </figcaption>
          )}
        </figure>
      )}

      {hasRows && (
        <div className="panel-ice p-5 sm:p-7">
          <p className="eyebrow text-sky-deep!">Market narrative</p>
          <dl className="mt-5 divide-y divide-sky-deep/10">
            {rows
              .filter((r) => n![r.key])
              .map((r) => (
                <div key={r.key} className="grid gap-1 py-3.5 sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-6">
                  <dt className="flex gap-2 text-sm font-bold text-navy">
                    <span className="font-mono text-xs font-normal text-sky-deep">{r.n}</span>
                    {r.label}
                  </dt>
                  <dd className={`text-sm leading-relaxed ${r.key === "invalidation" ? "text-peach-ink" : "text-navy-soft"}`}>{n![r.key]}</dd>
                </div>
              ))}
            {post.poi && (
              <div className="grid gap-1 py-3.5 sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-6">
                <dt className="text-sm font-bold text-navy">Relevant POI</dt>
                <dd className="text-sm leading-relaxed text-navy-soft">{post.poi}</dd>
              </div>
            )}
          </dl>
        </div>
      )}

      <p className="flex items-start gap-3 rounded-2xl border border-peach-deep/25 bg-peach/30 p-4 text-sm text-[#7a3d10]">
        <AlertTriangle size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
        This is a directional expectation, not a confirmed trade or a recommendation. It becomes valid only if price confirms it, and is abandoned if price invalidates it.
      </p>
    </section>
  );
}
