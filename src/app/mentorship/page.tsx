import { Check, Minus } from "lucide-react";
import { audience, curriculum, mentorship, mentorshipEnquiry, principles } from "@/config/mentorship";
import { riskDisclaimer } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { ButtonLink, Container, PageHero, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { CandleField } from "@/components/charts/CandleField";

export const metadata = pageMetadata({
  title: "The Liquidity Room — Mentorship",
  description:
    "The Liquidity Room: a structured trading education programme built around the TOBYACE Model™ — market narrative, structure, liquidity, POI logic, execution, risk and psychology. Not a signals service.",
  path: "/mentorship",
});

export default function MentorshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Mentorship"
        title={
          <>
            The Liquidity <span className="text-gradient">Room</span>
          </>
        }
        lede={mentorship.lede}
      >
        <div className="flex flex-wrap items-center gap-3">
          {mentorship.status && (
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-deep/25 bg-ice px-3.5 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-sky-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-sky" aria-hidden="true" />
              {mentorship.status}
            </span>
          )}
          <ButtonLink href="#enquire" icon={null}>
            Enquire
          </ButtonLink>
          <ButtonLink href="#curriculum" variant="secondary" icon={null}>
            View the curriculum
          </ButtonLink>
        </div>
      </PageHero>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionHeading eyebrow="Overview" title={mentorship.tagline} />
          <Reveal className="space-y-5 text-lg leading-relaxed text-navy-soft">
            {mentorship.overview.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section id="curriculum" labelledBy="curriculum-title">
        <SectionHeading id="curriculum-title" eyebrow="Curriculum" title="Taught in the same order as the model." className="mb-12" />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {curriculum.map((m, i) => (
            <Reveal as="li" key={m.number} delay={0.04 * (i % 3)} className="surface p-6">
              <p className="font-mono text-sm text-sky-deep">{m.number}</p>
              <h3 className="mt-3 text-xl font-extrabold text-navy">{m.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${m.title} topics`}>
                {m.topics.map((t) => (
                  <li key={t} className="rounded-full border border-line bg-canvas px-3 py-1 text-xs text-navy-soft">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section labelledBy="principles-title" className="bg-white">
        <SectionHeading id="principles-title" eyebrow="Teaching philosophy" title="How the room works." className="mb-12" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.title} delay={0.04 * i} className="panel-ice p-6">
              <h3 className="text-lg font-bold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-soft">{p.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section labelledBy="audience-title">
        <SectionHeading id="audience-title" eyebrow="Who it's for" title="Is it the right fit?" className="mb-12" />
        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal className="surface p-7">
            <h3 className="eyebrow text-sky-deep!">It&apos;s for you if</h3>
            <ul className="mt-5 space-y-3">
              {audience.forYou.map((a) => (
                <li key={a} className="flex gap-3 text-navy-soft">
                  <Check size={18} className="mt-0.5 shrink-0 text-sky-deep" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06} className="surface p-7">
            <h3 className="eyebrow">It&apos;s not for you if</h3>
            <ul className="mt-5 space-y-3">
              {audience.notForYou.map((a) => (
                <li key={a} className="flex gap-3 text-muted">
                  <Minus size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <section id="enquire" aria-labelledby="enquire-title" className="scroll-mt-20 pb-20 sm:pb-28">
        <Container>
          <Reveal>
            <div className="panel-navy relative overflow-hidden px-6 py-14 sm:px-14 sm:py-20">
              <CandleField className="absolute -right-10 bottom-0 hidden h-[85%] w-[50%] opacity-45 md:block" />
              <div className="relative max-w-xl">
                <p className="eyebrow text-sky!">Enquire</p>
                <h2 id="enquire-title" className="mt-5 text-3xl font-extrabold text-white sm:text-5xl">
                  Ask about the next intake.
                </h2>
                <p className="mt-5 text-white/70">Tell me where you are with trading and what you&apos;re looking for, and I&apos;ll reply with details.</p>
                <div className="mt-9 flex flex-wrap gap-3">
                  {mentorshipEnquiry.telegram && (
                    <ButtonLink href={mentorshipEnquiry.telegram} variant="sky" icon={<SocialIcon platform="telegram" size={16} />}>
                      Connect on Telegram
                    </ButtonLink>
                  )}
                  <ButtonLink href={mentorshipEnquiry.email} variant={mentorshipEnquiry.telegram ? "light" : "sky"} icon={<SocialIcon platform="email" size={16} />}>
                    Enquire by email
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted">{riskDisclaimer}</p>
        </Container>
      </section>
    </>
  );
}
