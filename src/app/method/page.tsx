import { methodConcepts, methodIntro, methodPillars, methodPrinciples, type MethodConcept } from "@/config/method";
import { riskDisclaimer } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { Container, PageHeader, Section, SectionHeading } from "@/components/ui/primitives";
import { StructureGlyph } from "@/components/ui/Graphics";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/ui/CtaBanner";

export const metadata = pageMetadata({
  title: "The TOBYACE Method™",
  description:
    "The TOBYACE Method™: Top-Down Analysis + POI Logic + Entry Model + Refinements. A structured approach to market structure, liquidity, order blocks, fair value gaps and risk.",
  path: "/method",
});

const groups: MethodConcept["group"][] = ["Structure", "Liquidity", "Arrays", "Confirmation", "Discipline"];
const glyphFor = ["range", "sweep", "displacement", "sweep"] as const;

export default function MethodPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trading philosophy"
        title={
          <>
            The TOBYACE <span className="italic text-gold">Method™</span>
          </>
        }
        lede={methodIntro.lede}
      >
        <ol className="flex flex-wrap items-center gap-x-3 gap-y-3 font-mono text-[0.75rem] uppercase tracking-[0.14em]" aria-label="The four stages">
          {methodIntro.formula.map((step, i) => (
            <li key={step} className="flex items-center gap-3">
              <span className="rounded-full border border-line-strong px-3.5 py-2 text-fg">{step}</span>
              {i < methodIntro.formula.length - 1 && <span className="text-gold" aria-hidden="true">+</span>}
            </li>
          ))}
        </ol>
      </PageHeader>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionHeading eyebrow="Overview" title="A process, not a prediction." />
          <Reveal className="space-y-5 text-base leading-[1.85] text-muted sm:text-lg">
            {methodIntro.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* Four pillars */}
      <section aria-labelledby="framework-title" className="border-y border-line bg-surface py-20 sm:py-28">
        <Container>
          <SectionHeading
            id="framework-title"
            eyebrow="The framework"
            title="Four stages. One question each."
            lede="If a stage can't be answered clearly, there is no trade."
          />
          <ol className="mt-14 grid gap-4 md:grid-cols-2">
            {methodPillars.map((pillar, i) => (
              <Reveal as="li" key={pillar.step} delay={(i % 2) * 0.06} className="surface flex flex-col p-7 sm:p-9">
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-sm text-gold">{pillar.step}</span>
                  <StructureGlyph variant={glyphFor[i]} className="h-auto w-32 text-fg opacity-70" />
                </div>
                <h3 className="mt-8 font-display text-3xl text-fg sm:text-4xl">{pillar.title}</h3>
                <p className="mt-2 font-display text-lg italic text-gold-soft">{pillar.question}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">{pillar.summary}</p>
                <ul className="mt-6 space-y-3 border-t border-line pt-6">
                  {pillar.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-relaxed text-fg/85">
                      <span className="mt-2.5 h-px w-3 shrink-0 bg-gold" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Concepts */}
      <Section>
        <SectionHeading
          eyebrow="Core concepts"
          title="The vocabulary of the method."
          lede="Each concept is a tool for describing what price is doing. None of them work in isolation — context is what turns a pattern into a reason."
        />
        <div className="mt-16 space-y-14">
          {groups.map((group) => (
            <div key={group} className="grid gap-6 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-12">
              <Reveal>
                <h3 className="eyebrow lg:sticky lg:top-28">{group}</h3>
              </Reveal>
              <dl className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2 sm:[&>*:last-child:nth-child(odd)]:col-span-2">
                {methodConcepts
                  .filter((c) => c.group === group)
                  .map((c) => (
                    <div key={c.term} className="bg-card p-6 sm:p-7">
                      <dt className="font-display text-2xl text-fg">{c.term}</dt>
                      <dd className="mt-3 text-sm leading-relaxed text-muted">{c.definition}</dd>
                    </div>
                  ))}
              </dl>
            </div>
          ))}
        </div>
      </Section>

      {/* Principles */}
      <section id="principles" aria-labelledby="principles-title" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
        <Container>
          <SectionHeading id="principles-title" eyebrow="Principles" title="What the method will — and won't — do." />
          <ul className="mt-14 grid gap-4 md:grid-cols-3">
            {methodPrinciples.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.06} className="surface p-7">
                <h3 className="font-display text-2xl text-fg">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl border-l border-gold/40 pl-5 text-sm leading-relaxed text-subtle">{riskDisclaimer}</p>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Learn it properly"
        title={
          <>
            Study the method inside <span className="italic text-gold">The Liquidity Room.</span>
          </>
        }
        body="Structured lessons, live application and review — taught from first principles. Education, not signals."
        primary={{ label: "About the mentorship", href: "/mentorship" }}
        secondary={{ label: "Read the insights", href: "/insights" }}
      />
    </>
  );
}
