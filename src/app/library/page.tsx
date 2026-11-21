import { libraryCategories } from "@/config/library";
import { getSocial } from "@/config/socials";
import { pageMetadata } from "@/lib/seo";
import { PageHero, Section } from "@/components/ui/primitives";
import { LibraryBrowser } from "@/components/library/LibraryBrowser";
import { CategoryIcon } from "@/components/library/CategoryIcon";
import { CtaBanner } from "@/components/ui/CtaBanner";

export const metadata = pageMetadata({
  title: "Trading Library",
  description:
    "A curated library of short educational videos by TheTobyAce on market structure, liquidity, points of interest, execution, fundamental analysis, psychology and risk management.",
  path: "/library",
});

export default function LibraryPage() {
  const youtube = getSocial("youtube");

  return (
    <>
      <PageHero
        eyebrow="Trading Library"
        title={
          <>
            Short lessons. <span className="text-gradient">One concept at a time.</span>
          </>
        }
        lede="Brief, focused introductions to the concepts behind the TOBYACE Model™ — organised so you can study them in a logical order."
        aside={
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
            {libraryCategories.slice(0, 6).map((c, i) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className={`group flex items-center gap-3 rounded-2xl border border-white bg-white/80 p-3.5 shadow-[var(--shadow-soft)] backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] motion-safe:animate-float ${
                  i % 2 ? "[animation-delay:-2s]" : "[animation-delay:-4s]"
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ice text-sky-deep group-hover:bg-navy group-hover:text-sky">
                  <CategoryIcon id={c.id} size={17} />
                </span>
                <span className="text-sm font-bold leading-tight text-navy">{c.label}</span>
              </a>
            ))}
          </div>
        }
      />

      <Section className="pt-10 sm:pt-14">
        <LibraryBrowser youtubeUrl={youtube.url} />
      </Section>

      <CtaBanner
        eyebrow="Put it together"
        title="See how every concept fits into one model."
        primary={{ label: "Explore the TOBYACE Model", href: "/model" }}
        secondary={{ label: "The Liquidity Room", href: "/mentorship" }}
      />
    </>
  );
}
