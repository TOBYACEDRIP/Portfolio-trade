/** TheTobyAce wordmark: a small candle mark plus the name. */
export function Wordmark({ invert = false, className = "" }: { invert?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" focusable="false">
        <rect width="28" height="28" rx="8" fill={invert ? "#ffffff" : "#101D36"} />
        <line x1="9" x2="9" y1="7" y2="19" stroke="#FFDAB8" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="7" y="10" width="4" height="6" rx="1" fill="#FFDAB8" />
        <line x1="17" x2="17" y1="6" y2="22" stroke="#70C8F5" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="15" y="9" width="4" height="10" rx="1" fill="#70C8F5" />
        <line x1="21.5" x2="21.5" y1="5" y2="13" stroke="#70C8F5" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="19.5" y="7" width="4" height="4" rx="1" fill="#70C8F5" />
      </svg>
      <span className={`font-display text-[1.2rem] font-extrabold tracking-tight ${invert ? "text-white" : "text-navy"}`}>
        TheToby<span className={invert ? "text-sky" : "text-sky-deep"}>Ace</span>
      </span>
    </span>
  );
}
