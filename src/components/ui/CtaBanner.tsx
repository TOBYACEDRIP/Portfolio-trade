import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { ButtonLink, Container } from "./primitives";
import { Reveal } from "./Reveal";

type Action = { label: string; href: string };

export function CtaBanner({
  eyebrow,
  title,
  body,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: string;
  primary: Action;
  secondary?: Action;
}) {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <Reveal>
          <div className="surface relative overflow-hidden px-6 py-14 sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-gold/[0.08] blur-3xl"
            />
            <div className="grid-texture pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="relative max-w-2xl">
              <p className="eyebrow text-gold!">{eyebrow}</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] text-fg sm:text-5xl">{title}</h2>
              {body && <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{body}</p>}
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href={primary.href} icon={primary.href.startsWith("/") ? <ArrowRight size={16} aria-hidden="true" /> : undefined}>
                  {primary.label}
                </ButtonLink>
                {secondary && (
                  <ButtonLink
                    href={secondary.href}
                    variant="secondary"
                    icon={secondary.href.startsWith("/") ? <ArrowRight size={16} aria-hidden="true" /> : undefined}
                  >
                    {secondary.label}
                  </ButtonLink>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
