"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { navigation, person } from "@/config/site";
import { socials } from "@/config/socials";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { Wordmark } from "./Wordmark";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the menu on route change.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Escape closes, Tab is trapped, page scroll is locked while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusables = () => Array.from(panelRef.current?.querySelectorAll<HTMLElement>("a[href], button") ?? []);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close();
      if (e.key !== "Tab") return;
      const items = [toggleRef.current!, ...focusables()];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const liveSocials = socials.filter((s) => s.url);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Background on its own layer — a backdrop-filter on <header> would clip the fixed mobile menu. */}
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 -z-10 h-16 border-b transition-[background-color,border-color,box-shadow] duration-500 sm:h-[4.5rem] ${
          scrolled || open ? "border-line bg-white/80 shadow-[0_8px_30px_-20px_rgb(16_29_54/0.25)] backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      />
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <Link href="/" aria-label={`${person.brand} — home`} className="shrink-0">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-0.5 rounded-full border border-line bg-white/60 p-1 backdrop-blur">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="relative">
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-navy"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      aria-hidden="true"
                    />
                  )}
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block whitespace-nowrap rounded-full px-3.5 py-2 text-[0.8125rem] font-semibold transition-colors duration-300 xl:px-4 ${
                      active ? "text-white" : "text-navy-soft hover:text-navy"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href="/connect"
          className="hidden shrink-0 items-center gap-1.5 rounded-full bg-sky px-4 py-2.5 text-[0.8125rem] font-semibold text-navy transition-colors hover:bg-[#86d2f8] xl:inline-flex"
        >
          Get in touch <ArrowUpRight size={15} aria-hidden="true" />
        </Link>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative -mr-1 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/80 text-navy lg:hidden"
        >
          <span aria-hidden="true" className="relative block h-3 w-[18px]">
            <span className={`absolute left-0 h-[1.5px] w-[18px] rounded bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-[1.5px] w-[18px] rounded bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-canvas px-4 pb-10 pt-4 sm:top-[4.5rem] sm:px-6 lg:hidden"
          >
            <nav aria-label="Mobile">
              <ul className="space-y-2">
                {navigation.map((item, i) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <motion.li key={item.href} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={`flex flex-col gap-1 rounded-2xl border px-5 py-4 ${active ? "border-navy bg-navy text-white" : "border-line bg-white text-navy"}`}
                      >
                        <span className="text-xl font-bold">{item.label}</span>
                        <span className={`text-sm ${active ? "text-white/65" : "text-muted"}`}>{item.description}</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
            {liveSocials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Social profiles">
                {liveSocials.map((s) => (
                  <li key={s.platform}>
                    <a
                      href={s.url!}
                      {...(s.platform !== "email" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      aria-label={s.platform === "email" ? `Email ${s.handle}` : `${s.label} (opens in a new tab)`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-navy"
                    >
                      <SocialIcon platform={s.platform} size={18} />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
