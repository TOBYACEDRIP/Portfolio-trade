import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { SmartLink } from "./SmartLink";
import { TiltCard } from "./TiltCard";

type Props = {
  children: ReactNode;
  className?: string;
  /** Whole card becomes one link. Omit for cards containing their own links. */
  href?: string;
  ariaLabel?: string;
  label?: string;
  tone?: "white" | "ice" | "navy";
  tilt?: boolean;
  padded?: boolean;
};

const tones = {
  white: "surface",
  ice: "panel-ice",
  navy: "panel-navy",
};

/** Bento tile: white, ice or navy surface, optional tilt, CSS hover states. */
export function BentoCard({ children, className = "", href, ariaLabel, label, tone = "white", tilt = true, padded = true }: Props) {
  const invert = tone === "navy";
  const body = (
    <>
      {(label || href) && (
        <div className="relative z-10 mb-6 flex items-start justify-between gap-4">
          {label ? <p className={`eyebrow ${invert ? "text-sky!" : ""}`}>{label}</p> : <span />}
          {href && (
            <span
              aria-hidden="true"
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:rotate-45 ${
                invert
                  ? "border-white/20 text-white group-hover:bg-sky group-hover:text-navy"
                  : "border-line-strong text-navy group-hover:border-navy group-hover:bg-navy group-hover:text-white"
              }`}
            >
              <ArrowUpRight size={16} strokeWidth={2} />
            </span>
          )}
        </div>
      )}
      <div className="relative z-10 flex flex-1 flex-col">{children}</div>
    </>
  );

  const classes = `${tones[tone]} group flex h-full flex-col overflow-hidden ${padded ? "p-6 sm:p-8" : ""} transition-[box-shadow,border-color] duration-500 ${
    href ? "hover:shadow-[var(--shadow-lift)] hover:border-sky-deep/20" : ""
  } ${className}`;

  const card = href ? (
    <SmartLink href={href} aria-label={ariaLabel} className={classes}>
      {body}
    </SmartLink>
  ) : (
    <div className={classes}>{body}</div>
  );

  return tilt ? <TiltCard className="h-full">{card}</TiltCard> : card;
}
