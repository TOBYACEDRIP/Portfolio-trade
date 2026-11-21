import { experienceChapters, experienceIntro, experiencePillars, milestones } from "@/config/experience";
import { pageMetadata } from "@/lib/seo";
import { Container, PageHero, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Portrait } from "@/components/ui/Graphics";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PriceDivider } from "@/components/charts/PriceDivider";

export const metadata = pageMetadata({
  title: "Experience",
  description:
    "How TheTobyAce approaches the Forex market: studying price behaviour, market structure, liquidity and price delivery, risk management and decision-making under uncertainty.",
  path: "/experience",
  type: "profile",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title={experienceIntro.headline}
        lede={experienceIntro.lede}
        aside={
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-white shadow-[0_40px_80px_-40px_rgb(16_29_54/0.45)]">
            <Portrait sizes="(min-width: 1024px) 30vw, 90vw" />
          </div>
        }
      />

      {/* Focus areas */}
      <Section labelledBy="focus-title" className="bg-white">
        <SectionHeading id="focus-title" eyebrow="Areas of focus" title="What the work is built on." className="mb-12" />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {experiencePillars.map((p, i) => (
            <Reveal as="li" key={p.title} delay={0.04 * i} className="panel-ice p-6">
              <p className="font-mono text-xs text-sky-deep">0{i + 1}</p>
              <p className="mt-3 text-lg font-bold text-navy">{p.title}</p>
              <p className="mt-1 text-sm text-navy-soft">{p.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Editorial chapters */}
      <Section className="pb-12">
        <div className="mx-auto max-w-3xl space-y-20">
          {experienceChapters.map((c, i) => (
            <Reveal as="section" key={c.id}>
              <div id={c.id} className="scroll-mt-28">
                <p className="eyebrow inline-flex items-center gap-3 text-sky-deep!">
                  <span className="font-mono">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px w-8 bg-sky" aria-hidden="true" />
                  {c.eyebrow}
                </p>
                <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] text-navy sm:text-[2.6rem]">{c.title}</h2>
                <div className="mt-6 space-y-5 text-lg leading-[1.8] text-navy-soft">
                  {c.body.map((p) => (
                    <p key={p.slice(0, 20)}>{p}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {milestones.length > 0 && (
        <Section labelledBy="milestones-title" className="bg-white">
          <SectionHeading id="milestones-title" eyebrow="Milestones" title="Along the way." className="mb-12" />
          <ol className="relative space-y-8 border-l border-line pl-8">
            {milestones.map((m) => (
              <Reveal as="li" key={m.title} className="relative">
                <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-sky shadow" aria-hidden="true" />
                <p className="font-mono text-sm text-sky-deep">{m.year}</p>
                <p className="mt-1 text-lg font-bold text-navy">{m.title}</p>
                {m.body && <p className="mt-1 text-navy-soft">{m.body}</p>}
              </Reveal>
            ))}
          </ol>
        </Section>
      )}

      <PriceDivider className="pb-16" />

      <Container className="pb-20">
        <Reveal>
          <figure className="mx-auto max-w-4xl text-center">
            <blockquote className="text-3xl font-extrabold leading-[1.15] text-navy sm:text-5xl">
              “Understand where price is. <span className="text-gradient">Understand where it is likely drawing into.</span>”
            </blockquote>
          </figure>
        </Reveal>
      </Container>

      <CtaBanner
        eyebrow="The framework"
        title="See the model this work produced."
        primary={{ label: "Explore the TOBYACE Model", href: "/model" }}
        secondary={{ label: "Connect", href: "/connect" }}
      />
    </>
  );
}
