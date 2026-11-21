"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex min-h-[80dvh] w-full max-w-7xl flex-col justify-center px-4 pt-32 pb-24 sm:px-6 lg:px-8" role="alert">
      <p className="eyebrow text-gold!">Something went wrong</p>
      <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.02] text-fg sm:text-6xl">
        This page didn&apos;t load as expected.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted">Please try again. If the problem continues, head back to the home page.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-11 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg transition-colors hover:bg-gold-soft"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 text-sm text-fg transition-colors hover:border-gold/60"
        >
          Back to home
        </Link>
      </div>
      {error.digest && <p className="mt-8 font-mono text-xs text-subtle">Reference: {error.digest}</p>}
    </section>
  );
}
