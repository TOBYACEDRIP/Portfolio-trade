"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Users, Video } from "lucide-react";
import { group, telegramHref } from "@/config/mentorship";
import { SmartLink } from "@/components/ui/SmartLink";

/**
 * Site-wide promotion for The Liquidity Room, shown above the footer on every
 * page except /mentorship (which already presents the programme in full).
 */
export function LiquidityRoomBand() {
  const pathname = usePathname();
  if (pathname.startsWith("/mentorship")) return null;

  return (
    <aside aria-label="The Liquidity Room" className="border-t border-line bg-ice/70">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-start gap-4">
          <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy text-sky sm:flex" aria-hidden="true">
            <Users size={22} />
          </span>
          <div>
            <p className="eyebrow text-sky-deep!">Group mentorship</p>
            <p className="mt-1.5 text-xl font-extrabold text-navy sm:text-2xl">
              {group.name}: learn the TOBYACE Model™ live.
            </p>
            <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-navy-soft">
              <span className="inline-flex items-center gap-1.5">
                <Video size={14} className="text-sky-deep" aria-hidden="true" /> 8 live Zoom classes
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-navy">
                {group.price.primary} / {group.price.secondary}
              </span>
              <span aria-hidden="true">·</span>
              <span>Education, not signals</span>
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <SmartLink
            href={telegramHref ?? group.joinEmail}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1b2c4f]"
          >
            {group.cta} <ArrowRight size={15} aria-hidden="true" />
          </SmartLink>
          <Link href="/mentorship#liquidity-room" className="text-sm font-semibold text-sky-deep hover:text-navy">
            Learn more
          </Link>
          <p className="w-full text-xs text-muted">
            <Link href="/refund-policy" className="underline underline-offset-2 hover:text-navy">Refund Policy</Link> ·{" "}
            <Link href="/terms" className="underline underline-offset-2 hover:text-navy">Terms</Link>
          </p>
        </div>
      </div>
    </aside>
  );
}
