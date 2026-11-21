import { Check, Minus } from "lucide-react";
import {
  audience,
  classStructure,
  curriculum,
  mentorship,
  mentorshipEnquiry,
  teachingPhilosophy,
} from "@/config/mentorship";
import { riskDisclaimer } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { ButtonLink, Container, PageHeader, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIcon } from "@/components/icons/SocialIcon";

export const metadata = pageMetadata({
  title: "Mentorship — The Liquidity Room",
  description:
    "The Liquidity Room: structured Forex trading education built on the TOBYACE Method. A curriculum covering market structure, liquidity, POIs, entries, risk and psychology — not a signals service.",
  path: "/mentorship",
});

export default function MentorshipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mentorship"
        title={
          <>
            The Liquidity <span className="italic text-gold">Room</span>
          </>
        }
        lede={mentorship.lede}
      >
        <div className="flex flex-wrap items-center gap-3">
          {mentorship.status && (
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-3.5 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              {mentorship.status}
            </span>
          )}
          <ButtonLink href="#enquire" icon={null}>
            Enquire now
          </ButtonLink>
          <ButtonLink href="#curriculum" variant="secondary" icon={null}>
            View the curriculum
          </ButtonLink>
        </div>
      </PageHeader>

      {/* Overview */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionHeading eyebrow="Overview" title={mentorship.tagline} />
          <Reveal className="space-y-5 text-base leading-[1.85] text-muted sm:text-lg">
            {mentorship.overview.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* Teaching philosophy */}
      <section aria-labelledby="teaching-title" className="border-y border-line bg-surface py-20 sm:py-28">
        <Container>
          <SectionHeading id="teaching-title" eyebrow="Teaching philosophy" title="How I teach." />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teachingPhilosophy.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 0.05} className="surface p-7">
                <p className="font-mono text-xs text-gold">0{i + 1}</p>
                <h3 className="mt-6 font-display text-2xl leading-tight text-fg">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t.body}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Curriculum */}
      <Section id="curriculum" labelledBy="curriculum-title" className="scroll-mt-16">
        <SectionHeading
          id="curriculum-title"
          eyebrow="Curriculum"
          title="Taught in order. Built to compound."
          lede="Seven modules that follow the TOBYACE Method from foundations to execution and review."
        />
        <ol className="mt-14 divide-y divide-line border-y border-line">
          {curriculum.map((m) => (
            <Reveal as="li" key={m.number} className="grid gap-4 py-8 md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1.2fr)] md:gap-8">
              <span className="font-mono text-sm text-gold">{m.number}</span>
              <div>
                <h3 className="font-display text-3xl leading-tight text-fg">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.description}</p>
              </div>
              <ul className="flex flex-wrap content-start gap-2" aria-label={`${m.title} topics`}>
                {m.topics.map((t) => (
                  <li key={t} className="rounded-full border border-line px-3 py-1.5 text-xs text-fg/80">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Class structure */}
      <section aria-labelledby="structure-title" className="border-t border-line py-20 sm:py-28">
        <Container>
          <SectionHeading id="structure-title" eyebrow="Class structure" title="What the room looks like." />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {classStructure.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 0.05} className="surface p-7">
                <h3 className="font-display text-2xl text-fg">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Audience */}
      <section aria-labelledby="audience-title" className="border-y border-line bg-surface py-20 sm:py-28">
        <Container>
          <SectionHeading id="audience-title" eyebrow="Who it's for" title="Is this the right fit?" />
          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            <Reveal className="surface p-8">
              <h3 className="eyebrow text-gold!">It&apos;s for you if</h3>
              <ul className="mt-6 space-y-4">
                {audience.forYou.map((a) => (
                  <li key={a} className="flex gap-3 text-sm leading-relaxed text-fg/90 sm:text-base">
                    <Check size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.06} className="surface p-8">
              <h3 className="eyebrow">It&apos;s not for you if</h3>
              <ul className="mt-6 space-y-4">
                {audience.notForYou.map((a) => (
                  <li key={a} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                    <Minus size={18} className="mt-0.5 shrink-0 text-subtle" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Enquiry */}
      <section id="enquire" aria-labelledby="enquire-title" className="scroll-mt-16 py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="surface relative overflow-hidden px-6 py-14 sm:px-12 sm:py-20">
              <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/[0.08] blur-3xl" />
              <div className="relative max-w-2xl">
                <p className="eyebrow text-gold!">Enquire</p>
                <h2 id="enquire-title" className="mt-5 font-display text-4xl leading-[1.05] text-fg sm:text-5xl">
                  {mentorshipEnquiry.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{mentorshipEnquiry.body}</p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <ButtonLink href={mentorshipEnquiry.telegram} icon={<SocialIcon platform="telegram" size={16} />}>
                    Message on Telegram
                  </ButtonLink>
                  <ButtonLink href={mentorshipEnquiry.email} variant="secondary" icon={<SocialIcon platform="email" size={16} />}>
                    Enquire by email
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-subtle">{riskDisclaimer}</p>
        </Container>
      </section>
    </>
  );
}
