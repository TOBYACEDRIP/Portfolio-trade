import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { person, site } from "@/config/site";
import { modelFormula, modelIntro, pillars } from "@/config/model";
import { libraryCategories, videos } from "@/config/library";
import { experiencePillars } from "@/config/experience";
import { getInsightsMeta } from "@/lib/insights";
import { pageMetadata } from "@/lib/seo";
import { Aurora, ButtonLink, Container, Section, SectionHeading } from "@/components/ui/primitives";
import { BentoCard } from "@/components/ui/BentoCard";
import { Reveal } from "@/components/ui/Reveal";
import { Portrait } from "@/components/ui/Graphics";
import { HeroChart } from "@/components/charts/HeroChart";
import { NarrativeExplorer } from "@/components/charts/NarrativeExplorer";
import { PillarVisual } from "@/components/charts/PillarVisuals";
import { PriceDivider } from "@/components/charts/PriceDivider";
import { InsightCard } from "@/components/insights/InsightCard";
import { CategoryIcon } from "@/components/library/CategoryIcon";
import { VideoCard } from "@/components/library/VideoCard";
import { ConnectHub } from "@/components/connect/ConnectHub";

export const metadata = pageMetadata({ description: site.description, path: "/" });

export default function HomePage() {
  const insights = getInsightsMeta();
  const featured = [...insights.filter((p) => p.type === "analysis"), ...insights.filter((p) => p.type !== "analysis")].slice(0, 3);
  const featuredVideos = [...videos].sort((a, b) => Number(!!b.featured) - Number(!!a.featured)).slice(0, 3);

  return (
    <>
      {/* ── 5.1 HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" aria-labelledby="hero-title">
        <Aurora />
        <div className="chart-grid chart-grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative grid items-center gap-14 pb-20 pt-28 sm:pt-36 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:pb-28 lg:pt-40">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 py-1.5 pl-1.5 pr-4 text-xs font-semibold text-navy-soft backdrop-blur">
                <span className="rounded-full bg-navy px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-white">{person.brand}</span>
                Forex · Technical Analysis · Education
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 id="hero-title" className="mt-7 text-[2.9rem] font-extrabold leading-[0.98] text-navy sm:text-7xl lg:text-[5.4rem]">
                Understanding the markets <span className="text-gradient">beyond the charts.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-soft sm:text-xl">
                A structured approach to technical analysis, liquidity, market structure, fundamental context and trading psychology.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/model">Explore the TOBYACE Model</ButtonLink>
                <ButtonLink href="/library" variant="secondary">
                  Trading Library
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <ul className="mt-10 flex flex-wrap gap-2" aria-label="Professional identity">
                {person.identity.map((label, i) => (
                  <li
                    key={label}
                    className={`rounded-full border px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] ${
                      i === 0 ? "border-sky-deep/25 bg-ice text-sky-deep" : i === 3 ? "border-peach-deep/25 bg-peach/45 text-[#8a4a17]" : "border-line-strong bg-white/70 text-navy-soft"
                    }`}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Layered composition */}
          <Reveal delay={0.15} className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative ml-auto aspect-[4/5] w-[78%] overflow-hidden rounded-[2rem] border border-white shadow-[0_40px_80px_-40px_rgb(16_29_54/0.45)]">
              <Portrait priority monogramTop sizes="(min-width: 1024px) 34vw, 78vw" />
            </div>
            <div className="absolute -left-2 bottom-[8%] w-[78%] rounded-[1.5rem] border border-white bg-white/90 p-3 shadow-[0_30px_60px_-30px_rgb(28_118_179/0.55)] backdrop-blur-xl motion-safe:animate-float-slow sm:-left-6 sm:p-4">
              <div className="mb-2 flex items-center justify-between px-1">
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted">Illustration · price delivery</span>
                <span className="flex gap-1" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-sky" />
                  <span className="h-2 w-2 rounded-full bg-peach" />
                </span>
              </div>
              <HeroChart className="h-auto w-full" />
            </div>
            <div className="absolute -right-1 top-[46%] hidden rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-[var(--shadow-lift)] backdrop-blur motion-safe:animate-float sm:block">
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted">Narrative</p>
              <p className="mt-1 text-sm font-bold text-navy">Sweep → Shift → Deliver</p>
            </div>
            <div className="absolute left-0 top-[16%] hidden rounded-2xl border border-white bg-navy px-4 py-3 text-white shadow-[var(--shadow-lift)] motion-safe:animate-float [animation-delay:-3s] md:block">
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-sky">Draw on liquidity</p>
              <p className="mt-1 text-sm font-bold">Equal highs · BSL</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── 5.2 MARKET NARRATIVE ─────────────────────────────────────────── */}
      <Section labelledBy="narrative-title" className="relative bg-white">
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
          <SectionHeading id="narrative-title" eyebrow="Market Narrative" title="Every market move has a narrative." />
          <Reveal>
            <p className="text-lg leading-relaxed text-navy-soft">
              Understanding price requires more than identifying patterns. It requires understanding where the market is, what has brought it there and where it may be drawing towards.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <NarrativeExplorer compact autoplay />
        </Reveal>
      </Section>

      <PriceDivider className="bg-white pb-4" />

      {/* ── 5.3 MODEL PREVIEW ────────────────────────────────────────────── */}
      <Section labelledBy="model-title" className="bg-white pt-12 sm:pt-16">
        <div className="grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <BentoCard tone="navy" tilt={false} className="min-h-[24rem]">
              <p className="eyebrow inline-flex items-center gap-2.5 text-sky!">
                <span className="h-1.5 w-1.5 rounded-full bg-sky" aria-hidden="true" />
                The framework
              </p>
              <h2 id="model-title" className="mt-6 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
                THE TOBYACE <span className="text-sky">MODEL™</span>
              </h2>
              <p className="mt-5 text-white/70">{modelIntro.lede}</p>
              <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-white/80">
                {modelFormula.map((f, i) => (
                  <span key={f} className="inline-flex items-center gap-2">
                    {f}
                    {i < modelFormula.length - 1 && <span className="text-peach">+</span>}
                  </span>
                ))}
              </p>
              <div className="mt-auto pt-10">
                <ButtonLink href="/model" variant="sky">
                  Explore the TOBYACE Model
                </ButtonLink>
              </div>
            </BentoCard>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {pillars.map((p, i) => (
              <Reveal key={p.id} delay={0.05 * i}>
                <BentoCard href={`/model#${p.id}`} ariaLabel={`${p.title}: ${p.role}`} tone={i === 1 || i === 2 ? "ice" : "white"} label={`Pillar ${p.number}`}>
                  <PillarVisual id={p.id} className="mb-5 rounded-xl bg-white/80 p-1" />
                  <h3 className="text-xl font-extrabold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-soft">{p.role}</p>
                </BentoCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 5.4 FEATURED MARKET ANALYSIS ─────────────────────────────────── */}
      <Section labelledBy="insights-title">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="insights-title"
            eyebrow="Market Insights"
            title="Analysis begins with context, not confirmation."
            lede="Selected breakdowns and observations — each one built around where price is, what has happened and where it may be drawing into."
          />
          <Reveal>
            <ButtonLink href="/insights" variant="secondary">
              All insights
            </ButtonLink>
          </Reveal>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {featured.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={0.06 * i}>
              <InsightCard post={post} />
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ── 5.5 TRADING LIBRARY PREVIEW ──────────────────────────────────── */}
      <section aria-labelledby="library-title" className="relative overflow-hidden border-y border-line bg-ice/60 py-20 sm:py-28">
        <Aurora className="opacity-60" />
        <Container className="relative">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              id="library-title"
              eyebrow="Trading Library"
              title="Short lessons. One concept at a time."
              lede="A curated collection of educational videos, organised by the concepts that make up the model."
            />
            <Reveal>
              <ButtonLink href="/library">Open the library</ButtonLink>
            </Reveal>
          </div>

          {featuredVideos.length > 0 ? (
            <ul className="mb-4 grid gap-4 md:grid-cols-3">
              {featuredVideos.map((v) => (
                <li key={v.title}>
                  <VideoCard video={v} />
                </li>
              ))}
            </ul>
          ) : null}

          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">
            {libraryCategories.map((c, i) => (
              <Reveal as="li" key={c.id} delay={0.04 * i}>
                <Link
                  href={`/library#${c.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-white bg-white/80 p-4 shadow-[var(--shadow-soft)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ice text-sky-deep transition-colors group-hover:bg-navy group-hover:text-sky">
                    <CategoryIcon id={c.id} size={19} />
                  </span>
                  <span className="mt-4 text-sm font-bold leading-tight text-navy">{c.label}</span>
                  <span className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted">{c.topics.length} topics</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── 5.6 EXPERIENCE PREVIEW ───────────────────────────────────────── */}
      <Section labelledBy="experience-title">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-2.5 text-sky-deep!">
              <span className="h-1.5 w-1.5 rounded-full bg-sky" aria-hidden="true" />
              Experience
            </p>
            <h2 id="experience-title" className="mt-5 text-4xl font-extrabold leading-[1.05] text-navy sm:text-5xl">
              A serious study of how markets deliver price.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-soft">
              Concepts can be memorised quickly. Understanding comes from watching price across different conditions, reviewing decisions honestly and building a framework that holds up under uncertainty.
            </p>
            <div className="mt-8">
              <ButtonLink href="/experience" variant="secondary">
                Read the approach
              </ButtonLink>
            </div>
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {experiencePillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={0.05 * i} className="surface p-5">
                <span className="flex items-center gap-2 font-mono text-xs text-sky-deep">
                  <Sparkles size={13} aria-hidden="true" /> 0{i + 1}
                </span>
                <p className="mt-3 font-bold text-navy">{p.title}</p>
                <p className="mt-1 text-sm text-muted">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── 5.7 CONNECT ─────────────────────────────────────────────────── */}
      <section aria-labelledby="connect-title" className="relative overflow-hidden border-t border-line bg-white pb-24 pt-20 sm:pb-32 sm:pt-28">
        <Container>
          <SectionHeading
            id="connect-title"
            eyebrow="Connect"
            title="Follow the analysis. Start a conversation."
            lede="Telegram is the most direct route. Email works for collaborations and anything more detailed."
            className="mb-12"
          />
          <ConnectHub />
          <Reveal className="mt-8">
            <Link href="/connect" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-deep hover:text-navy">
              More ways to connect <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
