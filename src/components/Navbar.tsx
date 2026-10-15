"use client";

import { useEffect, useState } from "react";
import { navLinks, site, waLink } from "@/lib/site";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-gold-soft bg-ink/95 backdrop-blur"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="flex flex-col leading-none">
          <span className="font-display text-xl font-black italic uppercase tracking-wide text-gold-foil">
            {site.name}
          </span>
          <span className="mt-0.5 text-[10px] uppercase tracking-[0.4em] text-muted">
            ({site.tagline})
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-gold-light"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={waLink("Hi Danial, I would like to book a ride.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-foil hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-ink shadow-lg shadow-gold/20 transition-transform hover:scale-105 sm:flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Book Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="rounded-md p-2 text-gold lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-gold-soft px-4 pb-6 pt-2 lg:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/5 py-3 font-medium text-foreground/90"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href={waLink("Hi Danial, I would like to book a ride.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-foil flex items-center justify-center gap-2 rounded-full py-3 font-bold text-ink"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp {site.phoneDisplay}
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
