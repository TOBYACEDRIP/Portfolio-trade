import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { isExternal } from "@/lib/format";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

/**
 * Internal links use next/link (prefetching, client navigation).
 * External http(s) links open safely in a new tab with rel="noopener noreferrer"
 * and announce that to screen readers. mailto:/tel: open normally.
 */
export function SmartLink({ href, children, ...rest }: Props) {
  if (!isExternal(href)) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }

  const opensNewTab = /^(https?:)?\/\//.test(href);
  return (
    <a
      href={href}
      {...(opensNewTab && { target: "_blank", rel: "noopener noreferrer" })}
      {...rest}
    >
      {children}
      {opensNewTab && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
