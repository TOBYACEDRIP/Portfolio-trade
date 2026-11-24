import Link from "next/link";
import { contact, navigation, person, riskDisclaimer, secondaryNavigation } from "@/config/site";
import { socials } from "@/config/socials";
import { legalLinks } from "@/config/legal";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { Container } from "@/components/ui/primitives";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const live = socials.filter((s) => s.url);
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-0 h-80 w-[40rem] rounded-full bg-sky/15 blur-3xl" />
      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label={`${person.brand} — home`}>
              <Wordmark invert />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Forex trader and technical analyst. Market structure, liquidity, price delivery and the TOBYACE Model™.
            </p>
            <a href={`mailto:${contact.email}`} className="mt-6 inline-block break-all text-sm font-semibold text-sky underline decoration-sky/40 underline-offset-4 hover:decoration-sky">
              {contact.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow mb-5 text-white/50!">Explore</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {[...navigation, ...secondaryNavigation].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/75 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-5 text-white/50!">Connect</p>
            <ul className="flex flex-wrap gap-2">
              {live.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.url!}
                    {...(s.platform !== "email" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={s.platform === "email" ? `Email ${s.handle}` : `${s.label} (opens in a new tab)`}
                    title={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-sky hover:bg-sky hover:text-navy"
                  >
                    <SocialIcon platform={s.platform} size={16} />
                  </a>
                </li>
              ))}
            </ul>
            <Link href="/connect" className="mt-5 inline-block text-sm text-white/75 underline decoration-white/25 underline-offset-4 hover:text-white">
              All platforms →
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-white/55">
            <span className="font-semibold text-white/75">Risk disclaimer. </span>
            {riskDisclaimer}
          </p>
          <nav aria-label="Legal" className="mt-6">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/70 underline decoration-white/20 underline-offset-4 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {person.brand}. All rights reserved.
            </p>
            <p className="font-mono uppercase tracking-[0.16em]">thetobyace.com</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
