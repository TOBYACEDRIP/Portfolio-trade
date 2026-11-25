import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { legalLinks } from "@/config/legal";
import { extractToc } from "@/lib/insights";
import { getLegalPage, legalPages } from "@/lib/legal";
import { formatDate } from "@/lib/format";
import { pageMetadata } from "@/lib/seo";
import { mdxComponents } from "@/components/insights/mdx";
import { Aurora, Container } from "@/components/ui/primitives";

type Props = { params: Promise<{ legal: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return legalPages.map((p) => ({ legal: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { legal } = await params;
  const page = getLegalPage(legal);
  if (!page) return {};
  return pageMetadata({ title: page.title, description: page.description, path: `/${page.slug}` });
}

export default async function LegalPage({ params }: Props) {
  const { legal } = await params;
  const page = getLegalPage(legal);
  if (!page) notFound();
  const toc = extractToc(page.content);

  return (
    <article>
      <header className="relative overflow-hidden border-b border-line">
        <Aurora className="opacity-60" />
        <Container className="relative pt-32 pb-12 sm:pt-40 sm:pb-14">
          <p className="eyebrow inline-flex items-center gap-2.5 text-sky-deep!">
            <span className="h-1.5 w-1.5 rounded-full bg-sky" aria-hidden="true" />
            Legal
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-navy sm:text-6xl">{page.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-soft">{page.description}</p>
          <p className="mt-6 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
            Last updated <time dateTime={page.updated}>{formatDate(page.updated)}</time>
          </p>
        </Container>
      </header>

      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-20">
          <div className="min-w-0 max-w-[46rem]">
            <MDXRemote source={page.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </div>
          <aside className="lg:order-none">
            <div className="lg:sticky lg:top-28">
              {toc.length > 1 && (
                <nav aria-label="On this page" className="mb-10 hidden lg:block">
                  <p className="eyebrow mb-4">On this page</p>
                  <ol className="space-y-2.5 border-l border-line text-sm">
                    {toc.map((h) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`} className="-ml-px block border-l-2 border-transparent pl-4 text-navy-soft hover:border-sky hover:text-navy">
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
              <nav aria-label="Legal documents">
                <p className="eyebrow mb-4">Legal</p>
                <ul className="space-y-2 text-sm">
                  {legalLinks.map((l) => {
                    const current = l.href === `/${page.slug}`;
                    return (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          aria-current={current ? "page" : undefined}
                          className={`block rounded-xl px-3 py-2 ${current ? "bg-navy font-semibold text-white" : "text-navy-soft hover:bg-white hover:text-navy"}`}
                        >
                          {l.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
}
