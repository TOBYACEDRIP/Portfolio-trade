import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, Handshake, LineChart, MessageCircle } from "lucide-react";
import { mailto } from "@/config/socials";
import { mentorship } from "@/config/mentorship";
import { pageMetadata } from "@/lib/seo";
import { Container, PageHero, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { ConnectHub } from "@/components/connect/ConnectHub";

export const metadata = pageMetadata({
  title: "Connect",
  description:
    "Connect with TheTobyAce on Telegram, by email or across social platforms — for collaborations, brand partnerships, trading-related, educational and general enquiries.",
  path: "/connect",
});

const enquiries = [
  { icon: Handshake, title: "Professional collaborations", subject: "Collaboration enquiry" },
  { icon: Briefcase, title: "Brand partnerships", subject: "Brand partnership enquiry" },
  { icon: LineChart, title: "Trading-related enquiries", subject: "Trading enquiry" },
  { icon: GraduationCap, title: "Educational enquiries", subject: "Educational enquiry" },
  { icon: MessageCircle, title: "General communication", subject: "General enquiry" },
];

export default function ConnectPage() {
  return (
    <>
      <PageHero
        eyebrow="Connect"
        title={
          <>
            Let&apos;s <span className="text-gradient">connect.</span>
          </>
        }
        lede="Telegram is the most direct way to reach me. For collaborations and anything more detailed, email works best."
      />

      <Section className="pt-12 sm:pt-16">
        <h2 className="sr-only">Contact options</h2>
        <ConnectHub />
      </Section>

      <section aria-labelledby="enquiry-title" className="border-y border-line bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            id="enquiry-title"
            eyebrow="Enquiries"
            title="What can I help with?"
            lede="Choose a topic and your email opens with the subject already filled in."
            className="mb-12"
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {enquiries.map((e, i) => (
              <Reveal as="li" key={e.title} delay={0.04 * i}>
                <a
                  href={mailto(e.subject)}
                  className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-canvas p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-deep/25 hover:bg-white hover:shadow-[var(--shadow-lift)]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sky-deep shadow-[var(--shadow-soft)] transition-colors group-hover:bg-navy group-hover:text-sky">
                    <e.icon size={19} aria-hidden="true" />
                  </span>
                  <span className="mt-5 font-bold leading-snug text-navy">{e.title}</span>
                  <span className="mt-auto pt-4 text-sm font-semibold text-sky-deep">Email →</span>
                </a>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <Section>
        <Reveal>
          <Link
            href="/mentorship"
            className="panel-ice group flex flex-col gap-6 p-7 transition-shadow hover:shadow-[var(--shadow-lift)] sm:flex-row sm:items-center sm:justify-between sm:p-10"
          >
            <div>
              <p className="eyebrow text-sky-deep!">Mentorship</p>
              <p className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">{mentorship.name}</p>
              <p className="mt-2 max-w-xl text-navy-soft">{mentorship.tagline} Structured education built around the TOBYACE Model™.</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white">
              Learn more <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
