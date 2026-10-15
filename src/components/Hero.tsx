"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site, waLink } from "@/lib/site";
import { ArrowIcon, WhatsAppIcon } from "./Icons";

const slides = [
  {
    image: "/images/stock/hero-kl-night.jpg",
    title: "Luxury Transport Service",
    sub: "Airport Transfer • Chauffeur • 24 Hours",
  },
  {
    image: "/images/stock/hero-kl-day.jpg",
    title: "KLIA / KLIA2 Transfers",
    sub: "Meet & Greet • Flight Tracking • Door to Door",
  },
  {
    image: "/images/stock/hero-melaka.jpg",
    title: "Private Tours Across Malaysia",
    sub: "Genting • Cameron • Penang • Melaka & More",
  },
  {
    image: "/images/stock/hero-terengganu.jpg",
    title: "Safe • Reliable • Comfort",
    sub: "On Time, Every Time",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {slides.map((s, i) => (
        <Image
          key={s.image}
          src={s.image}
          alt=""
          fill
          priority={i === 0}
          quality={90}
          sizes="100vw"
          className={`object-cover transition-[opacity,transform] duration-[1500ms,7000ms] ease-out ${
            i === active ? "scale-105 opacity-100" : "scale-100 opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/65 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      <div className="pointer-events-none absolute -left-20 top-28 h-px w-[60%] -rotate-6 bg-gradient-to-r from-transparent via-gold-light to-transparent" />
      <div className="pointer-events-none absolute -right-20 bottom-32 h-px w-[50%] -rotate-6 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6">
        <div key={active} className="animate-fade-up max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold-soft bg-black/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            24 Hrs Service
          </div>
          <h1 className="font-display text-4xl font-black italic uppercase leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="text-gold-foil">{slides[active].title}</span>
          </h1>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-foreground/90 sm:text-base">
            {slides[active].sub}
          </p>
        </div>
        <p className="mt-6 max-w-xl text-muted">
          Premium Alphard, Vellfire, Staria, MPV and van fleet with professional drivers.
          Comfortable, punctual and safe travel from KLIA to anywhere in Malaysia.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={waLink("Hi Danial, I would like to book a ride.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-foil inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-ink shadow-xl shadow-gold/20 transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Book on WhatsApp
          </a>
          <a
            href="#fleet"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-soft px-8 py-4 font-semibold text-gold-light transition-colors hover:bg-gold/10"
          >
            View Fleet & Prices
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 flex items-center gap-4">
          {slides.map((s, i) => (
            <button
              key={s.image}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-10 bg-gold" : "w-4 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
          <span className="ml-4 hidden font-script text-3xl text-gold-light sm:inline">
            {site.contactName}
          </span>
          <span className="hidden text-sm text-muted sm:inline">{site.phoneDisplay}</span>
        </div>
      </div>
    </section>
  );
}
