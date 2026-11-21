import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { person } from "@/config/site";

/**
 * Portrait slot. Renders the configured photo; until one is supplied in
 * src/config/site.ts it shows a clearly labelled, on-brand placeholder.
 */
export function Portrait({
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  className = "",
  monogramTop = false,
}: {
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Place the placeholder monogram high, for compositions that overlap the lower half. */
  monogramTop?: boolean;
}) {
  if (person.portrait) {
    return (
      <div className={`absolute inset-0 ${className}`}>
        <Image src={person.portrait} alt={person.portraitAlt} fill priority={priority} sizes={sizes} className="object-cover object-top" />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden bg-[linear-gradient(160deg,#ffffff_0%,#dff1fc_50%,#b9e3fa_100%)] ${className}`} role="img" aria-label="Portrait placeholder — photo to be added">
      <div className="chart-grid absolute inset-0 opacity-80" aria-hidden="true" />
      <div aria-hidden="true" className="absolute -bottom-16 -right-10 h-64 w-64 rounded-full bg-peach/60 blur-3xl" />
      <div aria-hidden="true" className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-sky/30 blur-3xl" />
      <div className={`absolute inset-0 flex justify-center ${monogramTop ? "items-start pt-[14%]" : "items-center"}`} aria-hidden="true">
        <span className="select-none font-display text-[8.5rem] font-extrabold leading-none tracking-tighter text-navy/90">
          T<span className="text-sky">A</span>
        </span>
      </div>
      <span className={`absolute ${monogramTop ? "right-4" : "left-4"} top-4 inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-white/80 px-3 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted backdrop-blur`}>
        <ImageIcon size={12} aria-hidden="true" /> Portrait · coming soon
      </span>
    </div>
  );
}
