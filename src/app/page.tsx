import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { contact, person, site } from "@/config/site";
import { getSocial, socials } from "@/config/socials";
import { featuredVideos } from "@/config/work";
import { methodIntro } from "@/config/method";
import { mentorship } from "@/config/mentorship";
import { getCategoryLabel } from "@/config/insights";
import { getInsightsMeta } from "@/lib/insights";
import { formatDate } from "@/lib/format";
import { pageMetadata } from "@/lib/seo";
import { BentoCard } from "@/components/ui/BentoCard";
import { ButtonLink, Container } from "@/components/ui/primitives";
import { Portrait, StructureGlyph } from "@/components/ui/Graphics";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIcon } from "@/components/icons/SocialIcon";

export const metadata = pageMetadata({ description: site.description, path: "/" });

export default function HomePage() {
  const latest = getInsightsMeta().slice(0, 2);
  const youtube = getSocial("youtube");
  const video = featuredVideos[0];
  const profiles = socials.filter((s) => s.platform !== "email");

  return (
    <div className="relative overflow-hidden">
      <div className="grid-texture pointer-events-none absolute inset-x-0 top-0 h-[40rem]" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/4 h-[30rem] w-[50rem] rounded-full bg-gold/[0.05] blur-3xl"
      />

      <Container className="relative pt-24 pb-24 sm:pt-28">
        <h2 className="sr-only">Overview</h2>
        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[minmax(13.5rem,auto)]">
          {/* ── HERO ───────────────────────────────────────────── */}
          <Reveal className="md:col-span-2 lg:col-span-4 lg:row-span-2">
            <BentoCard tone="feature" className="min-h-[26rem] justify-between" padded>
              <StructureGlyph
                variant="displacement"
                className="pointer-events-none absolute -right-2 top-14 hidden h-auto w-[36%] text-fg opacity-35 lg:block"
              />
              <div className="flex flex-1 flex-col justify-between gap-10">
                <div className="flex items-center gap-3">
                  <span className="gold-rule" aria-hidden="true" />
                  <p className="eyebrow text-gold!">{person.tagline}</p>
                </div>
                <div>
                  <h1 className="font-display text-[3.5rem] leading-[0.92] tracking-tight text-fg sm:text-7xl lg:text-[6.25rem]">
                    TheToby<span className="italic text-gold">Ace</span>
                  </h1>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                    <span className="text-fg">I&apos;m {person.name}.</span> {person.intro}
                  </p>
                  <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2" aria-label="What I do">
                    {person.roles.map((role) => (
                      <li key={role} className="flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
                        <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                        {role}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <ButtonLink href="/method" icon={<ArrowRight size={16} aria-hidden="true" />}>
                      Explore the Method
                    </ButtonLink>
                    <ButtonLink href="/about" variant="secondary" icon={<ArrowRight size={16} aria-hidden="true" />}>
                      About me
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </BentoCard>
          </Reveal>

          {/* ── PORTRAIT ───────────────────────────────────────── */}
          <Reveal delay={0.05} className="md:col-span-1 lg:col-span-2 lg:row-span-2">
            <BentoCard href="/about" padded={false} ariaLabel={`About ${person.name}`} className="min-h-[26rem]">
              <Portrait priority sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw" />
              <div className="relative mt-auto px-9 pb-9">
                <p className="font-display text-2xl text-fg">{person.name}</p>
                <p className="eyebrow mt-2">{person.brand}{person.location && ` · ${person.location}`}</p>
              </div>
            </BentoCard>
          </Reveal>

          {/* ── ABOUT ──────────────────────────────────────────── */}
          <Reveal delay={0.05} className="md:col-span-1 lg:col-span-2">
            <BentoCard href="/about" label="About" ariaLabel="About — read the full story">
              <p className="mt-auto font-display text-[1.75rem] leading-[1.1] text-fg">
                Engineer by training. <span className="italic text-muted">Trader by discipline.</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                From {person.education} to the Forex markets — the story behind the work.
              </p>
            </BentoCard>
          </Reveal>

          {/* ── PHILOSOPHY ─────────────────────────────────────── */}
          <Reveal delay={0.1} className="md:col-span-1 lg:col-span-2">
            <BentoCard href="/method#principles" label="Trading philosophy" ariaLabel="Trading philosophy">
              <p className="mt-auto font-display text-[1.75rem] leading-[1.1] text-fg">
                Process over <span className="italic text-gold">prediction.</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Defined risk, patience, and no trade without a reason.
              </p>
            </BentoCard>
          </Reveal>

          {/* ── METHOD ─────────────────────────────────────────── */}
          <Reveal delay={0.15} className="md:col-span-2 lg:col-span-2 lg:row-span-2">
            <BentoCard href="/method" label="Framework" tone="feature" ariaLabel={`${methodIntro.name} — read the framework`}>
              <h3 className="font-display text-4xl leading-none text-fg">
                The TOBYACE <span className="italic text-gold">Method™</span>
              </h3>
              <StructureGlyph className="my-8 h-auto w-full text-fg" />
              <ol className="mt-auto space-y-0 divide-y divide-line border-t border-line">
                {methodIntro.formula.map((step, i) => (
                  <li key={step} className="flex items-baseline gap-4 py-3">
                    <span className="font-mono text-[0.6875rem] text-gold">0{i + 1}</span>
                    <span className="text-sm text-fg">{step}</span>
                  </li>
                ))}
              </ol>
            </BentoCard>
          </Reveal>

          {/* ── FEATURED CONTENT ───────────────────────────────── */}
          <Reveal className="md:col-span-2 lg:col-span-4">
            <BentoCard label="Featured trading content">
              <ul className="grid gap-3 sm:grid-cols-2">
                {latest.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/insights/${post.slug}`}
                      className="group/item flex h-full flex-col rounded-xl border border-line bg-bg/40 p-5 transition-colors duration-300 hover:border-line-strong hover:bg-bg/70"
                    >
                      <p className="eyebrow text-gold!">{getCategoryLabel(post.category)}</p>
                      <p className="mt-3 font-display text-xl leading-snug text-fg">{post.title}</p>
                      <p className="mt-auto pt-4 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-subtle">
                        <time dateTime={post.date}>{formatDate(post.date, "short")}</time> · {post.readingTime} min read
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <Link href="/insights" className="inline-flex items-center gap-1.5 text-fg transition-colors hover:text-gold-soft">
                  All insights <ArrowRight size={14} aria-hidden="true" />
                </Link>
                <Link href="/work" className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg">
                  Selected work <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </BentoCard>
          </Reveal>

          {/* ── YOUTUBE ────────────────────────────────────────── */}
          <Reveal delay={0.05} className="md:col-span-1 lg:col-span-2">
            <BentoCard
              href={video ? `https://www.youtube.com/watch?v=${video.youtubeId}` : youtube.href}
              label="YouTube"
              ariaLabel={video ? `Watch on YouTube: ${video.title}` : `YouTube channel ${youtube.handle}`}
            >
              {video ? (
                <div className="relative mb-4 aspect-video overflow-hidden rounded-lg border border-line">
                  <Image
                    src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <SocialIcon platform="youtube" size={34} className="mb-6 text-fg/80 transition-colors duration-300 group-hover:text-[#FF0033]" />
              )}
              <p className="mt-auto font-display text-2xl leading-tight text-fg">
                {video ? video.title : "Trade breakdowns & lessons"}
              </p>
              <p className="mt-2 text-sm text-muted">{video ? "Watch the latest video" : youtube.handle}</p>
            </BentoCard>
          </Reveal>

          {/* ── MENTORSHIP ─────────────────────────────────────── */}
          <Reveal className="md:col-span-1 lg:col-span-4">
            <BentoCard href="/mentorship" label="Mentorship" tone="feature" ariaLabel={`${mentorship.name} — mentorship`}>
              <div className="mt-auto grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
                <div>
                  <h3 className="font-display text-4xl leading-none text-fg sm:text-5xl">
                    The Liquidity <span className="italic text-gold">Room</span>
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">{mentorship.lede}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted lg:justify-self-end">
                  {["Structured curriculum", "Live market application", "Risk-first teaching", "No signals. No promises."].map((x) => (
                    <li key={x} className="flex items-center gap-3">
                      <span className="h-px w-4 bg-gold/70" aria-hidden="true" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </BentoCard>
          </Reveal>

          {/* ── SOCIALS ────────────────────────────────────────── */}
          <Reveal delay={0.05} className="md:col-span-1 lg:col-span-2">
            <BentoCard label="Connect">
              <p className="font-display text-2xl leading-tight text-fg">Follow the work</p>
              <ul className="mt-auto grid grid-cols-3 gap-2 pt-6" aria-label="Social profiles">
                {profiles.map((s) => (
                  <li key={s.platform}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.label} (opens in a new tab)`}
                      title={s.label}
                      className="flex h-14 items-center justify-center rounded-xl border border-line bg-bg/40 text-muted transition-colors duration-300 hover:border-gold/40 hover:bg-bg/80 hover:text-fg"
                    >
                      <SocialIcon platform={s.platform} size={19} />
                    </a>
                  </li>
                ))}
              </ul>
            </BentoCard>
          </Reveal>

          {/* ── ENTREPRENEURSHIP & TECH ────────────────────────── */}
          <Reveal delay={0.1} className="md:col-span-1 lg:col-span-2">
            <BentoCard href="/about#entrepreneurship" label="Entrepreneurship & technology" ariaLabel="Entrepreneurship and technology">
              <p className="mt-auto font-display text-2xl leading-tight text-fg">
                Building beyond <span className="italic text-muted">the charts.</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Businesses, media and software — built with the same discipline as a trading plan.
              </p>
            </BentoCard>
          </Reveal>

          {/* ── CONTACT ────────────────────────────────────────── */}
          <Reveal delay={0.15} className="md:col-span-2 lg:col-span-2">
            <BentoCard href="/contact" label="Contact" ariaLabel="Contact — business, collaboration and mentorship enquiries">
              <p className="mt-auto font-display text-2xl leading-tight text-fg">Let&apos;s talk.</p>
              <p className="mt-3 text-sm text-muted">Business, collaboration or mentorship.</p>
              <p className="mt-4 inline-flex items-center gap-1.5 break-all text-sm text-fg">
                {contact.email}
                <ArrowUpRight size={14} aria-hidden="true" className="shrink-0 text-gold" />
              </p>
            </BentoCard>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
