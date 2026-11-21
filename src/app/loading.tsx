export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8" role="status" aria-live="polite">
      <span className="sr-only">Loading…</span>
      <div className="h-3 w-28 animate-pulse rounded-full bg-card" />
      <div className="mt-8 h-14 w-full max-w-2xl animate-pulse rounded-xl bg-card" />
      <div className="mt-4 h-14 w-2/3 max-w-xl animate-pulse rounded-xl bg-card" />
      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-56 animate-pulse rounded-[var(--radius-card)] border border-line bg-card" />
        ))}
      </div>
    </div>
  );
}
