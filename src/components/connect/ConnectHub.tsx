import { ArrowUpRight, Clock } from "lucide-react";
import { contact } from "@/config/site";
import { mailto, socials, telegramUsername } from "@/config/socials";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { CopyButton } from "@/components/ui/CopyButton";
import { TiltCard } from "@/components/ui/TiltCard";
import { Reveal } from "@/components/ui/Reveal";

const brandHover: Record<string, string> = {
  youtube: "group-hover:text-[#FF0033]",
  x: "group-hover:text-black",
  instagram: "group-hover:text-[#E1306C]",
  tiktok: "group-hover:text-black",
  linkedin: "group-hover:text-[#0A66C2]",
};

/** Telegram + email + every social platform. Unconfigured profiles render as "coming soon". */
export function ConnectHub() {
  const telegram = socials.find((s) => s.platform === "telegram")!;
  const profiles = socials.filter((s) => s.platform !== "email" && s.platform !== "telegram");

  return (
    <div className="grid gap-4 lg:grid-cols-12">
      {/* Telegram */}
      <Reveal className="lg:col-span-7">
        <TiltCard className="h-full" max={3}>
          <div className="panel-navy relative flex h-full min-h-[18rem] flex-col overflow-hidden p-7 sm:p-10">
            <div aria-hidden="true" className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-sky/25 blur-2xl motion-safe:animate-float-slow" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-sky text-navy">
              <SocialIcon platform="telegram" size={26} />
            </span>
            <h3 className="relative mt-8 text-3xl font-extrabold text-white sm:text-4xl">Connect on Telegram</h3>
            <p className="relative mt-3 max-w-md text-white/70">{telegram.description}</p>
            <div className="relative mt-auto pt-8">
              {telegramUsername ? (
                <a
                  href={telegram.url!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-sky px-6 text-sm font-semibold text-navy transition-colors hover:bg-[#86d2f8]"
                >
                  Message {telegram.handle} <ArrowUpRight size={16} aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ) : (
                <p className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm text-white/70">
                  <Clock size={15} aria-hidden="true" /> Telegram link coming soon — please use email for now
                </p>
              )}
            </div>
          </div>
        </TiltCard>
      </Reveal>

      {/* Email */}
      <Reveal delay={0.06} className="lg:col-span-5">
        <TiltCard className="h-full" max={3}>
          <div className="panel-ice flex h-full min-h-[18rem] flex-col p-7 sm:p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-deep shadow-[var(--shadow-soft)]">
              <SocialIcon platform="email" size={26} />
            </span>
            <h3 className="mt-8 text-3xl font-extrabold text-navy">Send an enquiry</h3>
            <p className="mt-3 text-navy-soft">Collaborations, partnerships, educational and general enquiries.</p>
            <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
              <a
                href={mailto("Enquiry via thetobyace.com")}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-navy px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1b2c4f]"
              >
                Send an enquiry <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <CopyButton value={contact.email} label="Copy email address" />
            </div>
            <p className="mt-4 break-all font-mono text-xs text-muted">{contact.email}</p>
          </div>
        </TiltCard>
      </Reveal>

      {/* Social platforms */}
      <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-5" aria-label="Social platforms">
        {profiles.map((s, i) => (
          <Reveal as="li" key={s.platform} delay={0.04 * i}>
            {s.url ? (
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="surface group flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <span className="flex items-center justify-between">
                  <SocialIcon platform={s.platform} size={22} className={`text-navy transition-colors ${brandHover[s.platform] ?? ""}`} />
                  <ArrowUpRight size={16} aria-hidden="true" className="text-muted transition-transform group-hover:rotate-45 group-hover:text-navy" />
                </span>
                <span className="mt-5 text-lg font-bold text-navy">{s.label}</span>
                {s.handle && <span className="font-mono text-xs text-sky-deep">{s.handle}</span>}
                <span className="mt-2 text-sm leading-relaxed text-muted">{s.description}</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <div className="flex h-full flex-col rounded-[var(--radius-card)] border border-dashed border-line-strong bg-white/50 p-5" aria-label={`${s.label} — link coming soon`}>
                <SocialIcon platform={s.platform} size={22} className="text-navy/40" />
                <span className="mt-5 text-lg font-bold text-navy/70">{s.label}</span>
                <span className="mt-2 text-sm leading-relaxed text-muted">{s.description}</span>
                <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-canvas px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted">
                  <Clock size={11} aria-hidden="true" /> Coming soon
                </span>
              </div>
            )}
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
