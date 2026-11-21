import Link from "next/link";
import { contact, navigation, person, riskDisclaimer } from "@/config/site";
import { socials } from "@/config/socials";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { Container } from "@/components/ui/primitives";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-bg">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="font-display text-3xl tracking-tight text-fg">
              TheToby<span className="italic text-gold">Ace</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{person.intro}</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-6 inline-block text-sm text-fg underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-gold"
            >
              {contact.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow mb-5">Explore</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted transition-colors hover:text-fg">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-5">Follow</p>
            <ul className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.href}
                    {...(s.platform !== "email" && { target: "_blank", rel: "noopener noreferrer" })}
                    aria-label={s.platform === "email" ? `Email ${s.handle}` : `${s.label} (opens in a new tab)`}
                    title={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors duration-300 hover:border-gold/50 hover:text-fg"
                  >
                    <SocialIcon platform={s.platform} size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-subtle">
            <span className="font-medium text-muted">Risk disclaimer. </span>
            {riskDisclaimer}
          </p>
          <div className="mt-6 flex flex-col gap-2 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
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
