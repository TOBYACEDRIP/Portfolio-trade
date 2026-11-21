import { ArrowUpRight } from "lucide-react";
import { contact } from "@/config/site";
import { socials } from "@/config/socials";
import { mentorshipEnquiry } from "@/config/mentorship";
import { pageMetadata } from "@/lib/seo";
import { Container, PageHeader, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { CopyButton } from "@/components/ui/CopyButton";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { SmartLink } from "@/components/ui/SmartLink";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact TheTobyAce for business enquiries, collaborations and mentorship. Email and all official social platforms.",
  path: "/contact",
});

const mail = (address: string, subject: string) => `mailto:${address}?subject=${encodeURIComponent(subject)}`;

const enquiries = [
  {
    eyebrow: "Business",
    title: "Business enquiries",
    body: "Partnerships, sponsorships, speaking, press and media requests.",
    href: mail(contact.businessEmail, "Business enquiry"),
    cta: "Email",
  },
  {
    eyebrow: "Collaboration",
    title: "Collaborations",
    body: "Content collaborations with creators, brands and businesses in trading, media or tech.",
    href: mail(contact.businessEmail, "Collaboration enquiry"),
    cta: "Email",
  },
  {
    eyebrow: "Mentorship",
    title: "Mentorship enquiries",
    body: "Questions about The Liquidity Room, the curriculum or the next intake.",
    href: mentorshipEnquiry.telegram,
    cta: "Message on Telegram",
    secondary: { href: mentorshipEnquiry.email, label: "or email" },
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s <span className="italic text-gold">talk.</span>
          </>
        }
        lede="The best way to reach me depends on what it's about. Choose the route that fits and I'll get back to you."
      >
        <div className="surface inline-flex max-w-full items-center gap-4 py-2 pl-6 pr-2">
          <a href={`mailto:${contact.email}`} className="truncate text-base text-fg underline decoration-line-strong underline-offset-4 hover:decoration-gold sm:text-lg">
            {contact.email}
          </a>
          <CopyButton value={contact.email} label="Copy email address" />
        </div>
        {contact.responseTime && <p className="mt-4 text-sm text-muted">{contact.responseTime}</p>}
      </PageHeader>

      <Section>
        <h2 className="sr-only">Enquiry types</h2>
        <ul className="grid gap-4 lg:grid-cols-3">
          {enquiries.map((e, i) => (
            <Reveal as="li" key={e.title} delay={i * 0.06} className="surface flex flex-col p-7 sm:p-8">
              <p className="eyebrow text-gold!">{e.eyebrow}</p>
              <h3 className="mt-6 font-display text-3xl text-fg">{e.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{e.body}</p>
              <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-8">
                <SmartLink
                  href={e.href}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong px-5 text-sm text-fg transition-colors hover:border-gold/60 hover:text-gold-soft"
                >
                  {e.cta}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </SmartLink>
                {e.secondary && (
                  <a href={e.secondary.href} className="text-sm text-muted underline decoration-line-strong underline-offset-4 hover:text-fg">
                    {e.secondary.label}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <section aria-labelledby="platforms-title" className="border-t border-line pb-24 pt-20 sm:pb-32 sm:pt-28">
        <Container>
          <SectionHeading id="platforms-title" eyebrow="Official platforms" title="Find me elsewhere." />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {socials.map((s) => (
              <li key={s.platform} className="bg-card">
                <SmartLink href={s.href} className="group flex h-full items-start gap-5 p-6 transition-colors hover:bg-card-hover sm:p-7">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-fg transition-colors group-hover:border-gold/50">
                    <SocialIcon platform={s.platform} size={20} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-3">
                      <span className="font-display text-2xl text-fg">{s.label}</span>
                      <ArrowUpRight size={16} aria-hidden="true" className="text-subtle transition-colors group-hover:text-gold" />
                    </span>
                    <span className="mt-1 block truncate font-mono text-xs text-gold-soft">{s.handle}</span>
                    <span className="mt-3 block text-sm leading-relaxed text-muted">{s.description}</span>
                  </span>
                </SmartLink>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
