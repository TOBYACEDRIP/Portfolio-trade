import { Quote } from "lucide-react";
import { modelFormula, modelIntro, modelPrinciples, narrativeIntro, narrativeSteps, pillars } from "@/config/model";
import { riskDisclaimer } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { Container, PageHero, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ModelDiagram } from "@/components/charts/ModelDiagram";
import { NarrativeExplorer } from "@/components/charts/NarrativeExplorer";
import { PillarVisual } from "@/components/charts/PillarVisuals";
import { PriceDivider } from "@/components/charts/PriceDivider";

export const metadata = pageMetadata({
  title: "The TOBYACE Model™",
  description:
    "The TOBYACE Model™: Top-Down Analysis + POI Logic + Entry Model + Refinements, connected by Market Narrative — where price is, what has happened, where it is drawing into and what confirms it.",
  path: "/model",
});

export default function ModelPage() {
  return (
    <>
      <PageHero
        eyebrow="Trading framework"
        title={
          <>
            THE TOBYACE <span className="text-gradient">MODEL™</span>
          </>
        }
        lede={modelIntro.lede}
      >
        <ol className="flex flex-wrap items-center gap-2" aria-label="Model composition">
          {modelFormula.map((f, i) => (
            <li key={f} className="flex items-center gap-2">
              <span className="rounded-full border border-line-strong bg-white px-4 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-navy shadow-[var(--shadow-soft)]">
                {f}
              </span>
              {i < modelFormula.length - 1 && (
                <span className="font-bold text-peach-ink" aria-hidden="true">
                  +
                </span>
              )}
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-xl border-l-2 border-sky pl-4 text-base font-semibold text-navy">{modelIntro.statement}</p>
      </PageHero>

      {/* Diagram */}
      <Section labelledBy="system-title">
        <SectionHeading
          id="system-title"
          eyebrow="One connected framework"
          title="Not a collection of concepts. A sequence of decisions."
          lede="Each pillar answers a different question, and each one depends on the answer before it. Select a pillar to see its role."
          className="mb-12"
        />
        <Reveal>
          <ModelDiagram />
        </Reveal>
      </Section>

      {/* Market Narrative */}
      <section id="narrative" aria-labelledby="narrative-title" className="scroll-mt-20 border-y border-line bg-white py-20 sm:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
            <SectionHeading id="narrative-title" eyebrow="The reasoning layer" title={narrativeIntro.title} />
            <Reveal>
              <figure className="panel-ice p-6">
                <Quote size={20} className="text-sky-deep" aria-hidden="true" />
                <blockquote className="mt-3 text-xl font-bold leading-snug text-navy sm:text-2xl">{narrativeIntro.principle}</blockquote>
              </figure>
            </Reveal>
          </div>
          <Reveal className="mb-12 grid gap-5 text-base leading-relaxed text-navy-soft sm:text-lg lg:grid-cols-2">
            {narrativeIntro.body.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </Reveal>
          <Reveal>
            <NarrativeExplorer />
          </Reveal>

          <ol className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4" aria-label="The four questions in detail">
            {narrativeSteps.map((s, i) => (
              <Reveal as="li" key={s.id} delay={0.05 * i} className="surface flex flex-col p-6">
                <span className="font-mono text-xs text-sky-deep">{s.number}</span>
                <h3 className="mt-2 text-lg font-bold leading-snug text-navy">{s.question}</h3>
                <p className="mt-1 text-sm font-semibold text-peach-ink">{s.purpose}</p>
                <ul className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm text-navy-soft">
                  {s.topics.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Pillars */}
      {pillars.map((p, idx) => (
        <section
          key={p.id}
          id={p.id}
          aria-labelledby={`${p.id}-title`}
          className={`scroll-mt-20 py-20 sm:py-28 ${idx % 2 ? "bg-white" : ""} ${idx > 0 ? "border-t border-line" : ""}`}
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <Reveal>
                  <p className="eyebrow inline-flex items-center gap-2.5 text-sky-deep!">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky" aria-hidden="true" />
                    Pillar {p.number}
                  </p>
                  <h2 id={`${p.id}-title`} className="mt-5 text-4xl font-extrabold leading-[1.05] text-navy sm:text-5xl">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-lg font-semibold text-sky-deep">{p.role}</p>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-soft">
                    {p.body.map((b) => (
                      <p key={b.slice(0, 20)}>{b}</p>
                    ))}
                  </div>
                  <div className="panel-ice mt-8 p-4">
                    <PillarVisual id={p.id} />
                  </div>
                  <figure className="mt-6 border-l-2 border-peach-deep pl-4">
                    <blockquote className="text-base font-semibold leading-relaxed text-navy">{p.insight}</blockquote>
                  </figure>
                </Reveal>
              </div>
              <dl className="grid content-start gap-3 sm:grid-cols-2">
                {p.topics.map((t, i) => (
                  <Reveal key={t.term} delay={0.03 * (i % 4)} className="surface p-5 transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
                    <dt className="flex items-baseline gap-3 font-bold text-navy">
                      <span className="font-mono text-[0.6875rem] font-normal text-sky-deep">{String(i + 1).padStart(2, "0")}</span>
                      {t.term}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted">{t.note}</dd>
                  </Reveal>
                ))}
              </dl>
            </div>
          </Container>
        </section>
      ))}

      <PriceDivider className="py-4" />

      {/* Principles */}
      <Section labelledBy="principles-title" className="pt-12 sm:pt-16">
        <SectionHeading id="principles-title" eyebrow="Principles" title="What the model is — and isn't." className="mb-12" />
        <ul className="grid gap-4 md:grid-cols-3">
          {modelPrinciples.map((pr, i) => (
            <Reveal as="li" key={pr.title} delay={0.06 * i} className="surface p-7">
              <p className="font-mono text-xs text-sky-deep">0{i + 1}</p>
              <h3 className="mt-4 text-xl font-bold leading-snug text-navy">{pr.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{pr.body}</p>
            </Reveal>
          ))}
        </ul>
        <p className="mt-10 max-w-3xl border-l-2 border-line-strong pl-4 text-sm leading-relaxed text-muted">{riskDisclaimer}</p>
      </Section>

      <CtaBanner
        eyebrow="Continue learning"
        title="See each concept explained, one lesson at a time."
        body="The Trading Library organises short video lessons by the same concepts used throughout the model."
        primary={{ label: "Open the Trading Library", href: "/library" }}
        secondary={{ label: "Read market insights", href: "/insights" }}
      />
    </>
  );
}
