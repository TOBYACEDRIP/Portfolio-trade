"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navigation, person } from "@/config/site";
import { socials } from "@/config/socials";
import { SocialIcon } from "@/components/icons/SocialIcon";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the menu whenever the route changes.
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

  // Escape to close, focus trap and scroll lock while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(panelRef.current?.querySelectorAll<HTMLElement>("a[href], button") ?? []);
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
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/*
        The blurred background lives on its own layer: a backdrop-filter on the
        <header> itself would become the containing block for the fixed mobile
        menu and clip it to the header's height.
      */}
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 -z-10 h-16 border-b transition-[background-color,border-color] duration-500 sm:h-[4.5rem] ${
          scrolled || open ? "border-line bg-bg/80 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      />
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-baseline gap-0.5 font-display text-2xl tracking-tight text-fg"
          aria-label={`${person.brand} — home`}
        >
          TheToby<span className="italic text-gold transition-colors group-hover:text-gold-soft">Ace</span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-sm transition-colors duration-300 ${
                      active ? "text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-3.5 -bottom-0.5 h-px bg-linear-to-r from-transparent via-gold to-transparent"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/mentorship"
            className="inline-flex items-center rounded-full border border-line-strong px-4 py-2 text-sm text-fg transition-colors duration-300 hover:border-gold/60 hover:text-gold-soft"
          >
            The Liquidity Room
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative -mr-2 flex h-11 w-11 items-center justify-center rounded-full text-fg lg:hidden"
        >
          <span aria-hidden="true" className="relative block h-3 w-5">
            <span
              className={`absolute left-0 h-px w-5 bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 h-px w-5 bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
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
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-line bg-bg px-4 pb-10 pt-6 sm:top-[4.5rem] sm:px-6 lg:hidden"
          >
            <nav aria-label="Mobile">
              <ul className="divide-y divide-line border-y border-line">
                <li>
                  <Link
                    href="/"
                    aria-current={pathname === "/" ? "page" : undefined}
                    className="flex items-baseline justify-between py-4"
                  >
                    <span className={`font-display text-3xl ${pathname === "/" ? "text-gold" : "text-fg"}`}>Home</span>
                  </Link>
                </li>
                {navigation.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className="flex flex-col gap-1 py-4"
                      >
                        <span className={`font-display text-3xl ${active ? "text-gold" : "text-fg"}`}>{item.label}</span>
                        <span className="text-sm text-muted">{item.description}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Social profiles">
              {socials.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.href}
                    {...(s.platform !== "email" && { target: "_blank", rel: "noopener noreferrer" })}
                    aria-label={s.platform === "email" ? `Email ${s.handle}` : `${s.label} (opens in a new tab)`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-gold/50 hover:text-fg"
                  >
                    <SocialIcon platform={s.platform} size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
