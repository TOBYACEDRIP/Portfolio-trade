import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCategoryLabel } from "@/config/insights";
import { person, site } from "@/config/site";
import { getAdjacentInsights, getAllInsights, getInsight, getRelatedInsights, extractToc } from "@/lib/insights";
import { formatDate } from "@/lib/format";
import { absoluteUrl, jsonLdScript, pageMetadata } from "@/lib/seo";
import { mdxComponents } from "@/components/insights/mdx";
import { ReadingProgress } from "@/components/insights/ReadingProgress";
import { Container, Tag } from "@/components/ui/primitives";
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
    image: post.image,
  });
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  const toc = extractToc(post.content);
  const { newer, older } = getAdjacentInsights(slug);
  const related = getRelatedInsights(slug);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    wordCount: post.wordCount,
    articleSection: getCategoryLabel(post.category),
    keywords: post.tags.join(", "),
    url: absoluteUrl(`/insights/${post.slug}`),
    mainEntityOfPage: absoluteUrl(`/insights/${post.slug}`),
    image: absoluteUrl(post.image ?? `/insights/${post.slug}/opengraph-image`),
    author: { "@type": "Person", "@id": `${site.url}/#person`, name: person.brand, url: site.url },
    publisher: { "@type": "Person", "@id": `${site.url}/#person`, name: person.brand },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Insights", item: absoluteUrl("/insights") },
      { "@type": "ListItem", position: 3, name: post.title, item: absoluteUrl(`/insights/${post.slug}`) },
    ],
  };

  return (
    <>
      <ReadingProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(articleLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbLd)} />

      <article>
        <header className="relative overflow-hidden border-b border-line">
          <div className="grid-texture pointer-events-none absolute inset-0" aria-hidden="true" />
          <Container className="relative pt-32 pb-14 sm:pt-40 sm:pb-16">
            <nav aria-label="Breadcrumb">
              <Link href="/insights" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
                <ArrowLeft size={15} aria-hidden="true" /> All insights
              </Link>
            </nav>
            <p className="eyebrow mt-10 text-gold!">{getCategoryLabel(post.category)}</p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight text-fg sm:text-6xl lg:text-7xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{post.description}</p>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em]">
              <div>
                <dt className="text-subtle">Published</dt>
                <dd className="mt-1.5 text-fg">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </dd>
              </div>
              {post.updated && (
                <div>
                  <dt className="text-subtle">Updated</dt>
                  <dd className="mt-1.5 text-fg">
                    <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-subtle">Reading time</dt>
                <dd className="mt-1.5 text-fg">{post.readingTime} min</dd>
              </div>
              <div>
                <dt className="text-subtle">Author</dt>
                <dd className="mt-1.5 text-fg">{person.brand}</dd>
              </div>
            </dl>
          </Container>
        </header>

        <Container className="py-14 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-20">
            <div className="min-w-0 max-w-[44rem]">
              {toc.length > 1 && (
                <details className="surface mb-10 p-5 lg:hidden">
                  <summary className="eyebrow cursor-pointer">Contents</summary>
                  <ol className="mt-4 space-y-2.5 text-sm">
                    {toc.map((h) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`} className="text-muted hover:text-fg">
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </details>
              )}

              <MDXRemote
                source={post.content}
                components={mdxComponents}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              />

              {post.tags.length > 0 && (
                <ul className="mt-14 flex flex-wrap gap-2 border-t border-line pt-8" aria-label="Tags">
                  {post.tags.map((t) => (
                    <li key={t}>
                      <Tag>{t}</Tag>
                    </li>
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
                        <a href={`#${h.id}`} className="-ml-px block border-l border-transparent pl-4 text-muted transition-colors hover:border-gold hover:text-fg">
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </aside>
            )}
          </div>
        </Container>
      </article>

      {/* Previous / next */}
      {(newer || older) && (
        <nav aria-label="More articles" className="border-t border-line">
          <Container className="grid gap-px py-0 sm:grid-cols-2">
            {older ? (
              <Link href={`/insights/${older.slug}`} className="group py-10 sm:pr-10">
                <span className="eyebrow inline-flex items-center gap-2">
                  <ArrowLeft size={13} aria-hidden="true" /> Previous
                </span>
                <span className="mt-3 block font-display text-2xl leading-snug text-fg group-hover:text-gold-soft">{older.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {newer && (
              <Link href={`/insights/${newer.slug}`} className="group border-line py-10 sm:border-l sm:pl-10 sm:text-right">
                <span className="eyebrow inline-flex items-center gap-2">
                  Next <ArrowRight size={13} aria-hidden="true" />
                </span>
                <span className="mt-3 block font-display text-2xl leading-snug text-fg group-hover:text-gold-soft">{newer.title}</span>
              </Link>
            )}
          </Container>
        </nav>
      )}

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="border-t border-line py-16 sm:py-20">
          <Container>
            <h2 id="related-title" className="eyebrow">
              Related reading
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/insights/${r.slug}`} className="surface group flex h-full flex-col p-7 transition-colors hover:border-line-strong">
                    <p className="eyebrow text-gold!">{getCategoryLabel(r.category)}</p>
                    <p className="mt-4 font-display text-2xl leading-snug text-fg">{r.title}</p>
                    <p className="mt-3 text-sm text-muted">{r.description}</p>
                    <p className="mt-auto pt-6 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">{r.readingTime} min read</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <div className="pt-8" />
      <CtaBanner
        eyebrow="Go deeper"
        title={
          <>
            Learn the full framework in <span className="italic text-gold">The Liquidity Room.</span>
          </>
        }
        primary={{ label: "About the mentorship", href: "/mentorship" }}
        secondary={{ label: "The TOBYACE Method", href: "/method" }}
      />
    </>
  );
}
