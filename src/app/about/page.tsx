import { aboutFacts, aboutIntro, aboutSections, philosophy } from "@/config/about";
import { person } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { Container, PageHeader, Section } from "@/components/ui/primitives";
import { Portrait } from "@/components/ui/Graphics";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/ui/CtaBanner";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Toby — TheTobyAce. Electrical & Electronics Engineering background, Forex trader, trading educator, content creator and entrepreneur.",
  path: "/about",
  type: "profile",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title={aboutIntro.headline} lede={aboutIntro.lede} />

      {/* Facts strip */}
      <div className="border-b border-line">
        <Container>
          <dl className="grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
            {aboutFacts.map((fact) => (
              <div key={fact.label} className="py-8 lg:px-8 lg:first:pl-0">
                <dt className="eyebrow">{fact.label}</dt>
                <dd className="mt-3 font-display text-xl leading-snug text-fg sm:text-2xl">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          {/* Sticky portrait + section index */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="surface group relative aspect-[4/5] overflow-hidden">
                <Portrait sizes="(min-width: 1024px) 38vw, 100vw" />
              </div>
              <nav aria-label="On this page" className="mt-8 hidden lg:block">
                <p className="eyebrow mb-4">On this page</p>
                <ul className="space-y-2.5 text-sm">
                  {aboutSections.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="text-muted transition-colors hover:text-fg">
                        {s.eyebrow}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#philosophy" className="text-muted transition-colors hover:text-fg">
                      Philosophy
                    </a>
                  </li>
                </ul>
              </nav>
            </Reveal>
          </div>

          <div className="space-y-20">
            {aboutSections.map((section) => (
              <Reveal as="section" key={section.id}>
                <div id={section.id} className="scroll-mt-28">
                  <p className="eyebrow mb-4 text-gold!">{section.eyebrow}</p>
                  <h2 className="font-display text-4xl leading-[1.05] text-fg sm:text-[2.75rem]">{section.title}</h2>
                  <div className="mt-6 space-y-5 text-base leading-[1.85] text-muted sm:text-lg">
                    {section.paragraphs.map((p) => (
                      <p key={p.slice(0, 32)}>{p}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <section id="philosophy" aria-labelledby="philosophy-title" className="scroll-mt-20 border-y border-line bg-surface py-20 sm:py-28">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-gold!">{philosophy.title}</p>
            <h2 id="philosophy-title" className="mt-5 font-display text-5xl leading-[1.02] text-fg sm:text-6xl">
              {philosophy.statement}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">{philosophy.body}</p>
          </Reveal>
          <ul className="mt-14 grid gap-4 md:grid-cols-3">
            {philosophy.principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.06} className="surface p-7">
                <p className="font-mono text-xs text-gold">0{i + 1}</p>
                <h3 className="mt-6 font-display text-2xl text-fg">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <div className="pt-24 sm:pt-32" />
      <CtaBanner
        eyebrow="Next"
        title={
          <>
            See how I read the market — <span className="italic text-gold">the TOBYACE Method™</span>
          </>
        }
        body={`The framework ${person.name} uses for every trade: top-down analysis, POI logic, a confirmation-based entry model and refinements.`}
        primary={{ label: "Explore the Method", href: "/method" }}
        secondary={{ label: "Get in touch", href: "/contact" }}
      />
    </>
  );
}
