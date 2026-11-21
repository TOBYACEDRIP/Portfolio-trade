import { Info } from "lucide-react";
import { getInsightsMeta } from "@/lib/insights";
import { pageMetadata } from "@/lib/seo";
import { PageHero, Section } from "@/components/ui/primitives";
import { InsightList } from "@/components/insights/InsightList";

export const metadata = pageMetadata({
  title: "Market Insights",
  description:
    "Selected Forex analysis and market observations from TheTobyAce — market structure, liquidity, fundamental context and the narrative behind each idea.",
  path: "/insights",
});

const questions = ["Where is price?", "What has happened?", "Where is it drawing towards?", "What confirms it?", "What invalidates it?"];

export default function InsightsPage() {
  const posts = getInsightsMeta();
  const hasAnalysis = posts.some((p) => p.type === "analysis");

  return (
    <>
      <PageHero
        eyebrow="Market Insights"
        title={
          <>
            Quality analysis, <span className="text-gradient">not volume.</span>
          </>
        }
        lede="Selected chart breakdowns and observations. Every analysis is built around the same five questions — and is a directional expectation, never a certainty."
      >
        <ol className="flex flex-wrap gap-2" aria-label="Every analysis answers">
          {questions.map((q, i) => (
            <li key={q} className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white px-3.5 py-2 text-sm text-navy shadow-[var(--shadow-soft)]">
              <span className="font-mono text-[0.6875rem] text-sky-deep">0{i + 1}</span>
              {q}
            </li>
          ))}
        </ol>
      </PageHero>

      <Section className="pt-12 sm:pt-16">
        {!hasAnalysis && (
          <p className="mb-8 flex items-start gap-3 rounded-2xl border border-line bg-white p-4 text-sm text-navy-soft">
            <Info size={17} className="mt-0.5 shrink-0 text-sky-deep" aria-hidden="true" />
            Chart breakdowns are published here as they are written. In the meantime, these insights explain the concepts behind the analysis.
          </p>
        )}
        <InsightList posts={posts} />
      </Section>
    </>
  );
}
