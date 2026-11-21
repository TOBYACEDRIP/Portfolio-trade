import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Image from "next/image";
import { SmartLink } from "@/components/ui/SmartLink";
import { slugify } from "@/lib/format";

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) {
    return textOf((node as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

/**
 * Typography for MDX articles. Available inside any .mdx file in
 * src/content/insights, including the <Callout> component.
 */
export const mdxComponents = {
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 id={slugify(textOf(children))} className="mt-14 mb-4 scroll-mt-28 text-2xl font-extrabold leading-tight text-navy sm:text-[1.9rem]">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 id={slugify(textOf(children))} className="mt-10 mb-3 scroll-mt-28 text-lg font-bold text-navy">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: ReactNode }) => <p className="my-6 text-[1.0625rem] leading-[1.85] text-navy-soft">{children}</p>,
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="my-6 list-disc space-y-3 pl-6 text-[1.0625rem] leading-[1.8] text-navy-soft marker:text-sky-deep">{children}</ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="my-6 list-decimal space-y-3 pl-6 text-[1.0625rem] leading-[1.8] text-navy-soft marker:font-mono marker:text-sm marker:text-sky-deep">
      {children}
    </ol>
  ),
  li: ({ children }: { children?: ReactNode }) => <li className="pl-1.5">{children}</li>,
  strong: ({ children }: { children?: ReactNode }) => <strong className="font-semibold text-navy">{children}</strong>,
  em: ({ children }: { children?: ReactNode }) => <em className="italic text-navy">{children}</em>,
  a: ({ href = "", children }: { href?: string; children?: ReactNode }) => (
    <SmartLink href={href} className="font-semibold text-sky-deep underline decoration-sky/60 underline-offset-4 transition-colors hover:text-navy">
      {children}
    </SmartLink>
  ),
  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote className="panel-ice my-10 p-6 text-xl font-bold leading-snug text-navy [&_p]:my-0 [&_p]:text-xl [&_p]:font-bold [&_p]:leading-snug [&_p]:text-navy">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-14 border-line" />,
  code: ({ children }: { children?: ReactNode }) => (
    <code className="rounded-md border border-line bg-ice px-1.5 py-0.5 font-mono text-[0.85em] text-navy">{children}</code>
  ),
  pre: ({ children }: { children?: ReactNode }) => (
    <pre className="my-8 overflow-x-auto rounded-xl border border-line bg-white p-5 font-mono text-sm leading-relaxed [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0">
      {children}
    </pre>
  ),
  table: ({ children }: { children?: ReactNode }) => (
    <div className="my-10 overflow-x-auto rounded-2xl border border-line bg-white shadow-[var(--shadow-soft)]">
      <table className="w-full border-collapse text-left text-sm">{children}</table>
    </div>
  ),
  th: ({ children }: { children?: ReactNode }) => (
    <th className="border-b border-line bg-ice px-4 py-3 font-mono text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-sky-deep">
      {children}
    </th>
  ),
  td: ({ children }: { children?: ReactNode }) => <td className="border-b border-line px-4 py-3.5 align-top text-navy-soft">{children}</td>,
  img: ({ src, alt = "" }: ComponentPropsWithoutRef<"img">) =>
    typeof src === "string" ? (
      <figure className="my-10">
        <Image src={src} alt={alt} width={1200} height={750} sizes="(min-width: 768px) 720px, 100vw" className="h-auto w-full rounded-xl border border-line" />
        {alt && <figcaption className="mt-3 text-center text-xs text-muted">{alt}</figcaption>}
      </figure>
    ) : null,
  Callout: ({ title, children }: { title?: string; children?: ReactNode }) => (
    <aside className="surface my-10 border-l-4 border-l-sky p-6 [&_p]:my-2 [&_p]:text-base">
      {title && <p className="eyebrow mb-2 text-sky-deep!">{title}</p>}
      {children}
    </aside>
  ),
};
