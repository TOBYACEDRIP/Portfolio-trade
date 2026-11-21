import type { Metadata } from "next";
import Link from "next/link";
import { navigation } from "@/config/site";
import { Aurora, ButtonLink, Container } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <Aurora />
      <div className="chart-grid chart-grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative flex min-h-[80dvh] flex-col justify-center pt-32 pb-24">
        <p className="eyebrow text-sky-deep!">404 · Liquidity taken</p>
        <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-[1.02] text-navy sm:text-7xl">
          This level isn&apos;t <span className="text-gradient">on the chart.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-navy-soft">The link may be outdated or the page may have moved. Here are some good places to start.</p>
        <div className="mt-10">
          <ButtonLink href="/">Back to home</ButtonLink>
        </div>
        <ul className="mt-12 flex flex-wrap gap-2">
          {navigation.slice(1).map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="inline-flex rounded-full border border-line-strong bg-white px-4 py-2 text-sm font-semibold text-navy hover:border-sky-deep hover:text-sky-deep">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
