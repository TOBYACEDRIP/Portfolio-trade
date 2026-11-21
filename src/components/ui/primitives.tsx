import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { SmartLink } from "./SmartLink";
import { Reveal } from "./Reveal";
import { isExternal } from "@/lib/format";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "", gold = false }: { children: ReactNode; className?: string; gold?: boolean }) {
  return <p className={`eyebrow ${gold ? "text-gold!" : ""} ${className}`}>{children}</p>;
}

/** Standard page header used at the top of every inner page. */
export function PageHeader({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line">
      <div className="grid-texture pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        <Reveal>
          <div className="mb-6 flex items-center gap-3">
            <span className="gold-rule" aria-hidden="true" />
            <Eyebrow gold>{eyebrow}</Eyebrow>
          </div>
          <h1 className="max-w-4xl font-display text-5xl leading-[1.02] tracking-tight text-fg sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {lede && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{lede}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </Container>
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  id,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <Reveal className={`max-w-3xl ${className}`}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2 id={id} className="font-display text-4xl leading-[1.05] tracking-tight text-fg sm:text-5xl">
        {title}
      </h2>
      {lede && <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{lede}</p>}
    </Reveal>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: ReactNode;
};

const buttonStyles = {
  primary:
    "bg-fg text-bg hover:bg-gold-soft border border-transparent",
  secondary:
    "border border-line-strong text-fg hover:border-gold/60 hover:text-gold-soft bg-white/[0.02]",
  ghost: "text-muted hover:text-fg",
};

export function ButtonLink({ href, children, variant = "primary", className = "", icon }: ButtonProps) {
  const trailing = icon ?? (isExternal(href) ? <ArrowUpRight size={16} aria-hidden="true" /> : null);
  return (
    <SmartLink
      href={href}
      className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${buttonStyles[variant]} ${className}`}
    >
      {children}
      {trailing && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {trailing}
        </span>
      )}
    </SmartLink>
  );
}

export function Section({
  children,
  className = "",
  id,
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-20 sm:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
      {children}
    </span>
  );
}
