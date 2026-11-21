import { getInsightsMeta } from "@/lib/insights";
import { pageMetadata } from "@/lib/seo";
import { PageHeader, Section } from "@/components/ui/primitives";
import { InsightList } from "@/components/insights/InsightList";

export const metadata = pageMetadata({
  title: "Insights",
  description:
    "Articles by TheTobyAce on Forex trading, market structure, liquidity, trading psychology, prop firms, entrepreneurship, personal development and technology.",
  path: "/insights",
});

export default function InsightsPage() {
  const posts = getInsightsMeta();

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title={
          <>
            Notes on markets, <span className="italic text-gold">business</span> and growth.
          </>
        }
        lede="Long-form writing on how I think about trading, building and improving — written to be useful, not to sell anything."
      />
      <Section>
        <h2 className="sr-only">All articles</h2>
        <InsightList posts={posts} />
      </Section>
    </>
  );
}
