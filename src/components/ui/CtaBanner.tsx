import type { ReactNode } from "react";
import { ButtonLink, Container } from "./primitives";
import { Reveal } from "./Reveal";
import { CandleField } from "@/components/charts/CandleField";

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
    <section className="pb-20 sm:pb-28">
      <Container>
        <Reveal>
          <div className="panel-navy relative overflow-hidden px-6 py-14 sm:px-14 sm:py-20">
            <CandleField className="absolute -right-10 bottom-0 hidden h-[85%] w-[55%] opacity-50 md:block" />
            <div className="relative max-w-2xl">
              <p className="eyebrow inline-flex items-center gap-2.5 text-sky!">
                <span className="h-1.5 w-1.5 rounded-full bg-sky" aria-hidden="true" />
                {eyebrow}
              </p>
              <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] text-white sm:text-5xl">{title}</h2>
              {body && <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">{body}</p>}
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href={primary.href} variant="sky">
                  {primary.label}
                </ButtonLink>
                {secondary && (
                  <ButtonLink href={secondary.href} variant="light">
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
