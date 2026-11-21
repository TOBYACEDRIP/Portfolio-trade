import Image from "next/image";
import { featuredVideos, work, workCategories } from "@/config/work";
import { getSocial } from "@/config/socials";
import { pageMetadata } from "@/lib/seo";
import { PageHeader, Section, SectionHeading, ButtonLink } from "@/components/ui/primitives";
import { WorkGrid } from "@/components/work/WorkGrid";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { SmartLink } from "@/components/ui/SmartLink";
import { SocialIcon } from "@/components/icons/SocialIcon";

export const metadata = pageMetadata({
  title: "My Work",
  description:
    "Selected work from TheTobyAce — trading breakdowns, educational videos, market analysis, collaborations and featured projects.",
  path: "/work",
});

export default function WorkPage() {
  const youtube = getSocial("youtube");
  const labelFor = (id: string) => workCategories.find((c) => c.id === id)?.label ?? id;

  return (
    <>
      <PageHeader
        eyebrow="My work"
        title={
          <>
            Selected <span className="italic text-gold">work.</span>
          </>
        }
        lede="Trading breakdowns, education, analysis and the projects I build alongside them."
      />

      <Section className="pb-12 sm:pb-16">
        <WorkGrid items={work} contactHref="/contact" />
      </Section>

      <section aria-labelledby="videos-title" className="border-t border-line py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading id="videos-title" eyebrow="Video" title="On YouTube" lede="Long-form breakdowns and lessons." />
            <ButtonLink href={youtube.href} variant="secondary" icon={<SocialIcon platform="youtube" size={16} />}>
              Visit the channel
            </ButtonLink>
          </div>

          {featuredVideos.length > 0 ? (
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredVideos.map((v) => (
                <li key={v.youtubeId}>
                  <SmartLink href={`https://www.youtube.com/watch?v=${v.youtubeId}`} className="surface group block overflow-hidden">
                    <div className="relative aspect-video border-b border-line">
                      <Image
                        src={`https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <p className="eyebrow">{labelFor(v.category)}</p>
                      <h3 className="mt-3 font-display text-xl leading-snug text-fg">{v.title}</h3>
                      {v.description && <p className="mt-2 text-sm text-muted">{v.description}</p>}
                    </div>
                  </SmartLink>
                </li>
              ))}
            </ul>
          ) : (
            <SmartLink
              href={youtube.href}
              className="surface group mt-12 flex flex-col gap-6 p-8 transition-colors hover:border-line-strong sm:flex-row sm:items-center sm:justify-between sm:p-10"
            >
              <div className="flex items-center gap-5">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line text-fg transition-colors group-hover:text-[#FF0033]">
                  <SocialIcon platform="youtube" size={24} />
                </span>
                <div>
                  <p className="font-display text-2xl text-fg">{youtube.handle}</p>
                  <p className="mt-1 text-sm text-muted">{youtube.description}</p>
                </div>
              </div>
              <span className="text-sm text-fg/80 group-hover:text-gold-soft" aria-hidden="true">
                Watch on YouTube →
              </span>
            </SmartLink>
          )}
        </div>
      </section>

      <CtaBanner
        eyebrow="Collaborations"
        title={
          <>
            Building something in <span className="italic text-gold">trading, media or tech?</span>
          </>
        }
        body="I'm open to thoughtful collaborations with brands, creators and businesses that care about doing things properly."
        primary={{ label: "Start a conversation", href: "/contact" }}
      />
    </>
  );
}
