import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { SmartLink } from "./SmartLink";

type Props = {
  children: ReactNode;
  className?: string;
  /**
   * When set, the whole card is a single link. Leave empty for cards that
   * contain their own links (nested links are invalid HTML).
   */
  href?: string;
  /** Accessible name for a linked card when the visible text isn't enough. */
  ariaLabel?: string;
  /** Small mono label in the top-left corner. */
  label?: string;
  /** Visual tone. "feature" adds a soft gold glow for emphasis. */
  tone?: "default" | "feature" | "plain";
  padded?: boolean;
};

/**
 * The core Bento tile. Server component — hover/focus states are pure CSS so no
 * JavaScript ships for the grid itself.
 */
export function BentoCard({
  children,
  className = "",
  href,
  ariaLabel,
  label,
  tone = "default",
  padded = true,
}: Props) {
  const interactive = Boolean(href);

  const body = (
    <>
      {tone === "feature" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />
      )}
      {(label || interactive) && (
        <div
          className={`z-10 flex items-start justify-between gap-4 ${padded ? "relative mb-5" : "absolute inset-x-0 top-0 p-5 sm:p-6"}`}
        >
          {label ? <p className="eyebrow">{label}</p> : <span />}
          {interactive && (
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 group-hover:border-gold/50 group-hover:text-gold group-hover:rotate-45"
            >
              <ArrowUpRight size={15} strokeWidth={1.75} />
            </span>
          )}
        </div>
      )}
      <div className="relative z-10 flex h-full flex-1 flex-col">{children}</div>
    </>
  );

  const classes = `surface group flex h-full flex-col overflow-hidden ${padded ? "p-6 sm:p-7" : ""} transition-[border-color,background-color,transform] duration-500 ease-out ${
    interactive
      ? "hover:border-line-strong hover:bg-card-hover motion-safe:hover:-translate-y-0.5 focus-visible:border-gold/60"
      : ""
  } ${className}`;

  if (href) {
    return (
      <SmartLink href={href} aria-label={ariaLabel} className={classes}>
        {body}
      </SmartLink>
    );
  }
  return <div className={classes}>{body}</div>;
}
