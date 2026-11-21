import { ArrowDown, ArrowRight, Check, Lock, MessagesSquare, ShieldCheck, Users, Video } from "lucide-react";
import { comparison, faqs, group, mentorshipIntro, privateMentorship, sharedFoundation, telegramHref } from "@/config/mentorship";
import { riskDisclaimer } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { Aurora, Container, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { SmartLink } from "@/components/ui/SmartLink";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { CandleField } from "@/components/charts/CandleField";
import { ApplicationForm } from "@/components/mentorship/ApplicationForm";
import { Faq } from "@/components/mentorship/Faq";

export const metadata = pageMetadata({
  title: "Mentorship — The Liquidity Room & Private Mentorship",
  description:
    "Two ways to learn the TOBYACE Model™ with TheTobyAce: The Liquidity Room group mentorship (8 live Zoom classes) and six-week private one-to-one mentorship. Education, not signals.",
  path: "/mentorship",
});

const joinHref = telegramHref ?? group.joinEmail;

function TelegramMark({ size = 13, className = "" }: { size?: number; className?: string }) {
  return <SocialIcon platform="telegram" size={size} className={className} />;
}

/** Abstract "group" motif: overlapping circles in the brand palette. */
function CommunityMark() {
  const dots = ["bg-sky", "bg-peach", "bg-navy", "bg-sky-soft", "bg-white"];
  return (
    <div className="flex -space-x-2.5" aria-hidden="true">
      {dots.map((c, i) => (
        <span key={i} className={`h-9 w-9 rounded-full border-2 border-white ${c} shadow-sm`} />
      ))}
    </div>
  );
}

export default function MentorshipPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden border-b border-line">
        <Aurora />
        <div className="chart-grid chart-grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative pt-32 pb-16 text-center sm:pt-40 sm:pb-20">
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-2.5 text-sky-deep!">
              <span className="h-1.5 w-1.5 rounded-full bg-sky" aria-hidden="true" />
              {mentorshipIntro.eyebrow}
            </p>
            <h1 className="mx-auto mt-6 max-w-4xl text-[2.6rem] font-extrabold leading-[1.02] text-navy sm:text-6xl lg:text-7xl">
              Learn to read the market <span className="text-gradient">for yourself.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-soft sm:text-xl">{mentorshipIntro.lede}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href="#programmes" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-navy px-6 text-sm font-semibold text-white hover:bg-[#1b2c4f]">
                Compare the programmes <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
            <p className="mx-auto mt-8 inline-flex max-w-2xl items-start gap-2.5 rounded-2xl border border-line bg-white/70 px-4 py-3 text-left text-sm text-navy-soft backdrop-blur">
              <ShieldCheck size={17} className="mt-0.5 shrink-0 text-sky-deep" aria-hidden="true" />
              {mentorshipIntro.notSignals}
            </p>
          </Reveal>
        </Container>
      </header>

      {/* ── SHARED FOUNDATION ────────────────────────────────────────────── */}
      <div className="border-b border-line bg-white">
        <Container className="flex flex-col gap-4 py-6 lg:flex-row lg:items-center lg:gap-8">
          <p className="eyebrow shrink-0">Both programmes teach</p>
          <ul className="flex flex-wrap gap-2">
            {sharedFoundation.map((t) => (
              <li key={t} className="rounded-full border border-line bg-canvas px-3 py-1.5 text-xs font-medium text-navy-soft">
                {t}
              </li>
            ))}
          </ul>
        </Container>
      </div>

      {/* ── TWO PROGRAMME CARDS ──────────────────────────────────────────── */}
      <Section id="programmes" labelledBy="programmes-title" className="pb-12 sm:pb-16">
        <h2 id="programmes-title" className="sr-only">
          The two programmes
        </h2>
        <div className="grid items-stretch gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)]">
          {/* Group */}
          <Reveal className="h-full">
            <TiltCard className="h-full" max={3}>
              <article aria-labelledby="group-card-title" className="panel-ice relative flex h-full flex-col overflow-hidden p-7 sm:p-9">
                <div className="chart-grid absolute inset-0 opacity-60" aria-hidden="true" />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow text-sky-deep!">{group.kind}</p>
                    <h3 id="group-card-title" className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
                      {group.name}
                    </h3>
                  </div>
                  <CommunityMark />
                </div>
                <p className="relative mt-4 text-navy-soft">{group.positioning}</p>

                <div className="relative mt-7 flex flex-wrap items-end gap-x-4 gap-y-1 border-y border-sky-deep/15 py-5">
                  <p className="text-5xl font-extrabold tracking-tight text-navy">{group.price.primary}</p>
                  <p className="pb-1.5 text-xl font-bold text-navy-soft">/ {group.price.secondary}</p>
                  <p className="w-full font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">{group.price.note}</p>
                </div>

                <ul className="relative mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: Users, t: "Group classes" },
                    { icon: Video, t: "8 live Zoom sessions" },
                    { icon: MessagesSquare, t: "Student community" },
                  ].map(({ icon: Icon, t }) => (
                    <li key={t} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy shadow-[var(--shadow-soft)]">
                      <Icon size={13} className="text-sky-deep" aria-hidden="true" /> {t}
                    </li>
                  ))}
                </ul>

                <ul className="relative mt-6 grid gap-2.5 sm:grid-cols-2">
                  {group.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-navy-soft">
                      <Check size={16} className="mt-0.5 shrink-0 text-sky-deep" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-auto pt-8">
                  <p className="text-sm text-navy">
                    <span className="font-bold">Ideal for: </span>
                    {group.idealFor}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <SmartLink
                      href={joinHref}
                      className="inline-flex min-h-12 items-center gap-2 rounded-full bg-navy px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1b2c4f]"
                    >
                      {group.cta} <ArrowRight size={16} aria-hidden="true" />
                    </SmartLink>
                    <a href="#liquidity-room" className="text-sm font-semibold text-sky-deep hover:text-navy">
                      See the 8 classes
                    </a>
                  </div>
                </div>
              </article>
            </TiltCard>
          </Reveal>

          {/* Private */}
          <Reveal delay={0.08} className="h-full">
            <TiltCard className="h-full" max={3}>
              {/* Gradient hairline border for a more refined, private treatment */}
              <div className="h-full rounded-[calc(var(--radius-card)+2px)] bg-[linear-gradient(140deg,#70C8F5,rgba(112,200,245,0.15)_40%,rgba(255,218,184,0.2)_65%,#FFDAB8)] p-[1.5px] shadow-[0_40px_80px_-40px_rgb(16_29_54/0.7)]">
                <article aria-labelledby="private-card-title" className="panel-navy relative flex h-full flex-col overflow-hidden p-7 sm:p-9">
                  <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sky/20 blur-3xl motion-safe:animate-float-slow" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p className="eyebrow text-sky!">{privateMentorship.kind}</p>
                      <h3 id="private-card-title" className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                        {privateMentorship.name}
                      </h3>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-peach/40 bg-peach/10 px-3 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-peach">
                      <Lock size={11} aria-hidden="true" /> By application
                    </span>
                  </div>
                  <p className="relative mt-4 text-white/75">{privateMentorship.positioning}</p>

                  <div className="relative mt-7 flex flex-wrap items-end gap-x-4 gap-y-1 border-y border-white/10 py-5">
                    <p className="text-5xl font-extrabold tracking-tight text-white">{privateMentorship.price.primary}</p>
                    <p className="w-full font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-white/60">{privateMentorship.price.note}</p>
                  </div>

                  <ul className="relative mt-6 flex flex-wrap gap-2">
                    {[
                      { icon: Lock, t: "One-to-one" },
                      { icon: Video, t: "Weekly private Zoom" },
                      { icon: TelegramMark, t: "Direct Telegram access" },
                    ].map(({ icon: Icon, t }) => (
                      <li key={t} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white">
                        <Icon size={13} className="text-sky" aria-hidden="true" /> {t}
                      </li>
                    ))}
                  </ul>

                  <ul className="relative mt-6 grid gap-2.5 sm:grid-cols-2">
                    {privateMentorship.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-sm text-white/80">
                        <Check size={16} className="mt-0.5 shrink-0 text-sky" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-auto pt-8">
                    <p className="text-sm text-white/70">
                      <span className="font-bold text-white">Limited enrolment. </span>
                      {privateMentorship.exclusivity}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <a href="#apply" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-navy transition-colors hover:bg-ice">
                        {privateMentorship.cta} <ArrowRight size={16} aria-hidden="true" />
                      </a>
                      <a href="#private" className="text-sm font-semibold text-sky hover:text-white">
                        See the six weeks
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </Section>

      {/* ── THE LIQUIDITY ROOM — DETAIL ──────────────────────────────────── */}
      <section id="liquidity-room" aria-labelledby="lr-title" className="scroll-mt-20 border-t border-line bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading id="lr-title" eyebrow="Group Mentorship" title="The Liquidity Room" lede={group.summary} />
              <Reveal className="mt-8">
                <CommunityMark />
                <p className="mt-4 text-sm leading-relaxed text-navy-soft">
                  Learn alongside other students in a focused community — ask questions live, discuss setups and revisit recordings where available.
                </p>
                <SmartLink
                  href={joinHref}
                  className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-navy px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1b2c4f]"
                >
                  {group.cta} <ArrowRight size={16} aria-hidden="true" />
                </SmartLink>
                {telegramHref && (
                  <p className="mt-3 text-sm text-muted">
                    Prefer email?{" "}
                    <a href={group.joinEmail} className="font-semibold text-sky-deep underline underline-offset-4 hover:text-navy">
                      Enquire by email
                    </a>
                  </p>
                )}
              </Reveal>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2" aria-label="The 8 classes">
              {group.classes.map((c, i) => (
                <Reveal as="li" key={c.n} delay={0.03 * (i % 2)} className="panel-ice p-5">
                  <p className="font-mono text-xs text-sky-deep">Class {c.n}</p>
                  <h3 className="mt-2 text-lg font-bold text-navy">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-soft">{c.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* ── PRIVATE — DETAIL ─────────────────────────────────────────────── */}
      <section id="private" aria-labelledby="pm-title" className="relative scroll-mt-20 overflow-hidden bg-navy py-20 text-white sm:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-sky/15 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-peach/10 blur-3xl" />
        <Container className="relative">
          <SectionHeading
            id="pm-title"
            invert
            eyebrow="Private One-to-One · 6 weeks"
            title="Built around you, not a syllabus."
            lede={privateMentorship.summary}
          />

          <Reveal className="mt-10 grid gap-6 text-base leading-relaxed text-white/75 lg:grid-cols-2">
            {privateMentorship.philosophy.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </Reveal>

          {/* Six-week journey */}
          <ol className="relative mt-14 grid gap-3 md:grid-cols-3 lg:grid-cols-6" aria-label="The six weeks">
            {privateMentorship.weeks.map((w, i) => (
              <Reveal as="li" key={w.n} delay={0.04 * i} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky font-mono text-xs font-bold text-navy">{i + 1}</span>
                <p className="mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-sky">{w.n}</p>
                <h3 className="mt-1 font-bold text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{w.body}</p>
              </Reveal>
            ))}
          </ol>
          <p className="mt-4 text-sm text-white/55">Throughout: weekly private Zoom sessions, direct Telegram communication, individual chart reviews and accountability.</p>

          <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <Reveal className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-7">
              <h3 className="eyebrow text-sky!">The ideal student</h3>
              <ul className="mt-5 space-y-3">
                {privateMentorship.idealFor.map((t) => (
                  <li key={t} className="flex gap-3 text-white/80">
                    <Check size={17} className="mt-0.5 shrink-0 text-sky" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.06} className="flex flex-col rounded-[var(--radius-card)] bg-white p-7 text-navy">
              <Lock size={20} className="text-sky-deep" aria-hidden="true" />
              <h3 className="mt-4 text-2xl font-extrabold">Limited enrolment</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-soft">{privateMentorship.exclusivity}</p>
              <p className="mt-6 text-4xl font-extrabold tracking-tight">{privateMentorship.price.primary}</p>
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">{privateMentorship.price.note}</p>
              <a href="#apply" className="mt-6 inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-navy px-6 text-sm font-semibold text-white hover:bg-[#1b2c4f]">
                {privateMentorship.cta} <ArrowRight size={16} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── COMPARISON ───────────────────────────────────────────────────── */}
      <Section labelledBy="compare-title">
        <SectionHeading
          id="compare-title"
          eyebrow="Compare"
          title="Same philosophy. Different delivery."
          lede="Both programmes teach the TOBYACE Model™. The difference is the learning environment, the structure and the level of individual attention."
          className="mb-12"
        />
        <Reveal>
          <div className="overflow-x-auto rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-soft)]">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <caption className="sr-only">Comparison of The Liquidity Room and Private Mentorship</caption>
              <thead>
                <tr>
                  <th scope="col" className="w-[24%] border-b border-line px-5 py-4 font-mono text-[0.6875rem] font-normal uppercase tracking-[0.12em] text-muted">
                    &nbsp;
                  </th>
                  <th scope="col" className="w-[38%] border-b border-line bg-ice/60 px-5 py-4 text-base font-extrabold text-navy">
                    The Liquidity Room
                    <span className="block font-mono text-[0.625rem] font-normal uppercase tracking-[0.12em] text-sky-deep">Group</span>
                  </th>
                  <th scope="col" className="w-[38%] border-b border-navy bg-navy px-5 py-4 text-base font-extrabold text-white">
                    Private Mentorship
                    <span className="block font-mono text-[0.625rem] font-normal uppercase tracking-[0.12em] text-sky">One-to-one</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-b border-line last:border-0">
                    <th scope="row" className="px-5 py-4 font-semibold text-navy">
                      {row.label}
                    </th>
                    <td className="bg-ice/30 px-5 py-4 text-navy-soft">{row.group === "—" ? <span className="text-muted">Not included</span> : row.group}</td>
                    <td className="bg-navy/[0.03] px-5 py-4 text-navy">{row.private}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <Section labelledBy="faq-title" className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions, answered honestly." />
          <Reveal>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </Section>

      {/* ── APPLY ────────────────────────────────────────────────────────── */}
      <section id="apply" aria-labelledby="apply-title" className="scroll-mt-20 py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="panel-navy relative overflow-hidden px-6 py-12 sm:px-12 sm:py-16">
              <CandleField className="pointer-events-none absolute -right-10 bottom-0 hidden h-[60%] w-[40%] opacity-25 lg:block" />
              <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
                <div>
                  <p className="eyebrow inline-flex items-center gap-2 text-peach!">
                    <Lock size={12} aria-hidden="true" /> Private mentorship
                  </p>
                  <h2 id="apply-title" className="mt-5 text-3xl font-extrabold leading-[1.08] text-white sm:text-5xl">
                    Apply for private mentorship.
                  </h2>
                  <p className="mt-5 text-white/70">
                    A few short questions so I can understand where you are and whether the programme is the right fit. I review every application individually and reply with next steps.
                  </p>
                  <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                    <p className="text-sm font-semibold text-white">Looking for The Liquidity Room instead?</p>
                    <SmartLink href={joinHref} className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-sky hover:text-white">
                      {group.cta} <ArrowRight size={14} aria-hidden="true" />
                    </SmartLink>
                  </div>
                </div>
                <ApplicationForm />
              </div>
            </div>
          </Reveal>
          <p className="mt-8 max-w-4xl text-xs leading-relaxed text-muted">{riskDisclaimer} Mentorship is education only and does not guarantee profits, consistency or any particular trading outcome.</p>
        </Container>
      </section>
    </>
  );
}
