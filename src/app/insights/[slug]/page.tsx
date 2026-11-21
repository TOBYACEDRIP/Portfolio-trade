import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCategoryLabel } from "@/config/insights";
import { person, site } from "@/config/site";
import { extractToc, getAdjacentInsights, getAllInsights, getInsight, getRelatedInsights } from "@/lib/insights";
import { formatDate } from "@/lib/format";
import { absoluteUrl, jsonLdScript, pageMetadata } from "@/lib/seo";
import { mdxComponents } from "@/components/insights/mdx";
import { ReadingProgress } from "@/components/insights/ReadingProgress";
import { NarrativePanel } from "@/components/insights/NarrativePanel";
import { InsightCard } from "@/components/insights/InsightCard";
import { Aurora, Container } from "@/components/ui/primitives";
import { CtaBanner } from "@/components/ui/CtaBanner";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllInsights().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/insights/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated,
    tags: post.tags,
  });
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  const toc = extractToc(post.content);
  const { newer, older } = getAdjacentInsights(slug);
  const related = getRelatedInsights(slug);
  const url = absoluteUrl(`/insights/${post.slug}`);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": post.type === "analysis" ? "AnalysisNewsArticle" : "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    wordCount: post.wordCount,
    articleSection: getCategoryLabel(post.category),
    keywords: post.tags.join(", "),
    url,
    mainEntityOfPage: url,
    image: absoluteUrl(post.chart ?? `/insights/${post.slug}/opengraph-image`),
    author: { "@type": "Person", "@id": `${site.url}/#person`, name: person.brand, url: site.url },
    publisher: { "@type": "Person", "@id": `${site.url}/#person`, name: person.brand },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Market Insights", item: absoluteUrl("/insights") },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <ReadingProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(articleLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbLd)} />

      <article>
        <header className="relative overflow-hidden border-b border-line">
          <Aurora />
          <div className="chart-grid chart-grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
          <Container className="relative pt-28 pb-14 sm:pt-36 sm:pb-16">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
                <li>
                  <Link href="/" className="hover:text-navy">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/insights" className="hover:text-navy">Market Insights</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="max-w-[16rem] truncate text-navy">{post.title}</li>
              </ol>
            </nav>
            <div className="mt-10 flex flex-wrap gap-2">
              <span className="rounded-full bg-navy px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-white">{getCategoryLabel(post.category)}</span>
              {post.instrument && <span className="rounded-full border border-line-strong bg-white px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-navy">{post.instrument}</span>}
              {post.timeframe && <span className="rounded-full border border-line-strong bg-white px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-navy-soft">{post.timeframe}</span>}
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] text-navy sm:text-6xl">{post.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-soft sm:text-xl">{post.description}</p>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em]">
              <div>
                <dt className="text-muted">Published</dt>
                <dd className="mt-1.5 text-navy"><time dateTime={post.date}>{formatDate(post.date)}</time></dd>
              </div>
              {post.updated && (
                <div>
                  <dt className="text-muted">Updated</dt>
                  <dd className="mt-1.5 text-navy"><time dateTime={post.updated}>{formatDate(post.updated)}</time></dd>
                </div>
              )}
              <div>
                <dt className="text-muted">Reading time</dt>
                <dd className="mt-1.5 text-navy">{post.readingTime} min</dd>
              </div>
              <div>
                <dt className="text-muted">Author</dt>
                <dd className="mt-1.5 text-navy">{person.brand}</dd>
              </div>
            </dl>
          </Container>
        </header>

        <Container className="py-14 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-20">
            <div className="min-w-0 max-w-[46rem]">
              <NarrativePanel post={post} />

              {toc.length > 1 && (
                <details className="surface mb-10 p-5 lg:hidden">
                  <summary className="eyebrow cursor-pointer">Contents</summary>
                  <ol className="mt-4 space-y-2.5 text-sm">
                    {toc.map((h) => (
                      <li key={h.id}><a href={`#${h.id}`} className="text-navy-soft hover:text-sky-deep">{h.text}</a></li>
                    ))}
                  </ol>
                </details>
              )}

              <MDXRemote source={post.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />

              {post.tags.length > 0 && (
                <ul className="mt-14 flex flex-wrap gap-2 border-t border-line pt-8" aria-label="Tags">
                  {post.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line-strong bg-white px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-navy-soft">{t}</li>
                  ))}
                </ul>
              )}
            </div>

            {toc.length > 1 && (
              <aside className="hidden lg:block">
                <nav aria-label="Table of contents" className="sticky top-28">
                  <p className="eyebrow mb-5">Contents</p>
                  <ol className="space-y-3 border-l border-line text-sm">
                    {toc.map((h) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`} className="-ml-px block border-l-2 border-transparent pl-4 text-navy-soft transition-colors hover:border-sky hover:text-navy">{h.text}</a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </aside>
            )}
          </div>
        </Container>
      </article>

      {(newer || older) && (
        <nav aria-label="More insights" className="border-t border-line bg-white">
          <Container className="grid sm:grid-cols-2">
            {older ? (
              <Link href={`/insights/${older.slug}`} className="group py-10 sm:pr-10">
                <span className="eyebrow inline-flex items-center gap-2"><ArrowLeft size={13} aria-hidden="true" /> Previous</span>
                <span className="mt-3 block text-xl font-bold leading-snug text-navy group-hover:text-sky-deep">{older.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {newer && (
              <Link href={`/insights/${newer.slug}`} className="group border-line py-10 sm:border-l sm:pl-10 sm:text-right">
                <span className="eyebrow inline-flex items-center gap-2">Next <ArrowRight size={13} aria-hidden="true" /></span>
                <span className="mt-3 block text-xl font-bold leading-snug text-navy group-hover:text-sky-deep">{newer.title}</span>
              </Link>
            )}
          </Container>
        </nav>
      )}

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="border-t border-line py-16 sm:py-20">
          <Container>
            <h2 id="related-title" className="text-2xl font-extrabold text-navy">Related insights</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug}><InsightCard post={r} /></li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CtaBanner
        eyebrow="The framework"
        title="Every insight follows the same model."
        primary={{ label: "Explore the TOBYACE Model", href: "/model" }}
        secondary={{ label: "Trading Library", href: "/library" }}
      />
    </>
  );
}
