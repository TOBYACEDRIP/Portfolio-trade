import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SmartLink } from "./SmartLink";
import { Reveal } from "./Reveal";
import { isExternal } from "@/lib/format";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "", accent = false }: { children: ReactNode; className?: string; accent?: boolean }) {
  return (
    <p className={`eyebrow ${accent ? "flex items-center gap-2.5 text-sky-deep!" : ""} ${className}`}>
      {accent && <span className="h-1.5 w-1.5 rounded-full bg-sky" aria-hidden="true" />}
      {children}
    </p>
  );
}

/** Soft animated gradient field — the site's signature background. */
export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -left-[10%] -top-[30%] h-[36rem] w-[36rem] rounded-full bg-sky/25 blur-[110px] motion-safe:animate-aurora" />
      <div className="absolute right-[-12%] top-[5%] h-[28rem] w-[28rem] rounded-full bg-ice blur-[90px] motion-safe:animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-[-35%] right-[20%] h-[26rem] w-[26rem] rounded-full bg-peach/40 blur-[110px] motion-safe:animate-aurora [animation-delay:-11s]" />
    </div>
  );
}

/** Header used at the top of every inner page. */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line">
      <Aurora />
      <div className="chart-grid chart-grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className={aside ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]" : ""}>
          <Reveal>
            <Eyebrow accent>{eyebrow}</Eyebrow>
            <h1 className="mt-6 max-w-4xl text-[2.6rem] font-extrabold leading-[1.02] text-navy sm:text-6xl lg:text-7xl">{title}</h1>
            {lede && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-soft sm:text-xl">{lede}</p>}
            {children && <div className="mt-9">{children}</div>}
          </Reveal>
          {aside && <Reveal delay={0.1}>{aside}</Reveal>}
        </div>
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
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  id?: string;
  className?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <Reveal className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow mb-5 inline-flex items-center gap-2.5 ${invert ? "text-sky!" : "text-sky-deep!"}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-sky" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 id={id} className={`text-[2rem] font-extrabold leading-[1.08] sm:text-5xl ${invert ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {lede && <p className={`mt-5 text-base leading-relaxed sm:text-lg ${invert ? "text-white/70" : "text-navy-soft"}`}>{lede}</p>}
    </Reveal>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "sky" | "ghost" | "light";
  className?: string;
  icon?: ReactNode | null;
};

const buttonStyles = {
  primary: "bg-navy text-white hover:bg-[#1b2c4f] shadow-[0_10px_24px_-12px_rgb(16_29_54/0.6)]",
  secondary: "bg-white text-navy border border-line-strong hover:border-sky-deep/50 hover:text-sky-deep",
  sky: "bg-sky text-navy hover:bg-[#86d2f8] shadow-[0_10px_24px_-12px_rgb(28_118_179/0.6)]",
  ghost: "text-navy hover:text-sky-deep",
  light: "bg-white text-navy hover:bg-ice",
};

export function ButtonLink({ href, children, variant = "primary", className = "", icon }: ButtonProps) {
  const trailing =
    icon === null ? null : (icon ?? (isExternal(href) ? <ArrowUpRight size={16} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />));
  return (
    <SmartLink
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 motion-safe:active:scale-[0.98] ${buttonStyles[variant]} ${className}`}
    >
      {children}
      {trailing && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{trailing}</span>}
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
    <section id={id} aria-labelledby={labelledBy} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Chip({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "sky" | "peach" | "navy" }) {
  const tones = {
    default: "border-line-strong bg-white/70 text-navy-soft",
    sky: "border-sky-deep/20 bg-ice text-sky-deep",
    peach: "border-peach-deep/25 bg-peach/50 text-[#8a4a17]",
    navy: "border-navy bg-navy text-white",
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.12em] ${tones[tone]}`}>
      {children}
    </span>
  );
}
