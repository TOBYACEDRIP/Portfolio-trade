import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { navigation } from "@/config/site";
import { ButtonLink, Container } from "@/components/ui/primitives";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-texture pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative flex min-h-[80dvh] flex-col justify-center pt-32 pb-24">
        <p className="eyebrow text-gold!">404 · Liquidity taken</p>
        <h1 className="mt-6 max-w-3xl font-display text-6xl leading-[1] text-fg sm:text-7xl">
          This page isn&apos;t <span className="italic text-muted">on the chart.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          The link may be outdated, or the page may have moved. Here are some good places to start instead.
        </p>
        <div className="mt-10">
          <ButtonLink href="/" icon={<ArrowRight size={16} aria-hidden="true" />}>
            Back to home
          </ButtonLink>
        </div>
        <ul className="mt-14 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {navigation.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="text-muted underline decoration-line-strong underline-offset-4 hover:text-fg">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
