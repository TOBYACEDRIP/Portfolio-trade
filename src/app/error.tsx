"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex min-h-[80dvh] w-full max-w-7xl flex-col justify-center px-4 pt-32 pb-24 sm:px-6 lg:px-8" role="alert">
      <p className="eyebrow text-sky-deep!">Something went wrong</p>
      <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] text-navy sm:text-6xl">This page didn&apos;t load as expected.</h1>
      <p className="mt-6 max-w-xl text-lg text-navy-soft">Please try again. If the problem continues, head back to the home page.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <button type="button" onClick={reset} className="inline-flex min-h-12 items-center rounded-full bg-navy px-6 text-sm font-semibold text-white hover:bg-[#1b2c4f]">
          Try again
        </button>
        <Link href="/" className="inline-flex min-h-12 items-center rounded-full border border-line-strong bg-white px-6 text-sm font-semibold text-navy hover:border-sky-deep">
          Back to home
        </Link>
      </div>
      {error.digest && <p className="mt-8 font-mono text-xs text-muted">Reference: {error.digest}</p>}
    </section>
  );
}
