import Image from "next/image";
import { destinations, promises, services, site, steps, waLink } from "@/lib/site";
import { ArrowIcon, PinIcon, WhatsAppIcon, serviceIcons } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="relative bg-panel py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          text="Luxury ground transport, 24 hours a day. From the airport to the highlands, we take you there."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = serviceIcons[s.icon];
            return (
              <div
                key={s.title}
                className="swoosh relative overflow-hidden rounded-2xl border border-gold-soft bg-ink p-7 transition-colors hover:border-gold"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold text-gold-light">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg font-bold uppercase">{s.title}</h3>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
                  {s.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-muted">{s.text}</p>
                <a
                  href={waLink(`Hi Danial, I'm interested in your ${s.title} service.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-light hover:gap-2.5"
                >
                  Enquire <ArrowIcon className="h-4 w-4 transition-all" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Destinations() {
  return (
    <section id="destinations" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Popular Destinations"
          title="Explore Malaysia"
          text="Private trips from Kuala Lumpur or KLIA to every corner of the peninsula."
        />
        {/* Bento grid: two large features, last two cards wide, so all rows fill */}
        <div className="grid grid-flow-dense auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] lg:grid-cols-4">
          {destinations.map((d, i) => {
            const feature = i === 0 || i === 6;
            const wide = i >= destinations.length - 2;
            return (
              <a
                key={d.name}
                href={waLink(`Hi Danial, I'd like a quote for a trip to ${d.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl shadow-xl shadow-black/50 ring-1 ring-gold/25 transition-all duration-500 hover:shadow-gold/20 hover:ring-gold ${
                  feature ? "col-span-2 row-span-2" : wide ? "col-span-2" : ""
                }`}
              >
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  quality={90}
                  sizes={
                    feature || wide
                      ? "(min-width: 1024px) 50vw, 100vw"
                      : "(min-width: 1024px) 25vw, 50vw"
                  }
                  className="object-cover brightness-[.85] contrast-[1.08] saturate-[1.15] transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:brightness-100"
                />
                {/* Warm gold grade + vignette for a consistent luxury look */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-ink/40 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute inset-3 rounded-xl border border-gold-light/0 transition-colors duration-500 group-hover:border-gold-light/40" />

                <span className="absolute right-4 top-4 font-display text-sm font-bold italic text-gold-light/80">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className={`absolute inset-x-0 bottom-0 ${feature ? "p-6 sm:p-8" : "p-4 sm:p-5"}`}>
                  <p className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">
                    <PinIcon className="h-3.5 w-3.5" />
                    {d.region}
                  </p>
                  <h3
                    className={`mt-1 font-display font-extrabold uppercase italic leading-tight ${
                      feature ? "text-3xl sm:text-4xl" : "text-lg sm:text-xl"
                    }`}
                  >
                    {d.name}
                  </h3>
                  <span className="mt-2 block h-px w-10 bg-gold transition-all duration-500 group-hover:w-24" />
                  <p className="mt-3 flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-gold opacity-0 transition-all duration-500 group-hover:opacity-100">
                    Get a quote <ArrowIcon className="h-3.5 w-3.5" />
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="relative overflow-hidden border-y border-gold-soft bg-panel py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Why Choose Us" title="Travel With Confidence" />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-gold-soft bg-gold/20 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p) => {
            const Icon = serviceIcons[p.icon];
            return (
              <div key={p.title} className="bg-ink p-8 text-center">
                <Icon className="mx-auto mb-4 h-10 w-10 text-gold" />
                <h3 className="font-display text-xl font-extrabold uppercase">{p.title}</h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-gold">{p.sub}</p>
                <p className="mt-3 text-sm text-muted">{p.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Booking Process"
          title="How It Works"
          text="No forms, no apps. Book directly with Danial on WhatsApp in a few minutes."
        />
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-gold-soft bg-panel p-7">
              <span className="font-display text-5xl font-black italic text-gold-foil">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold uppercase">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function BusinessCard() {
  return (
    <section id="contact" className="relative overflow-hidden bg-panel py-24">
      <div className="pointer-events-none absolute -left-32 top-10 h-px w-[70%] -rotate-6 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Contact
          </p>
          <h2 className="font-display text-3xl font-extrabold italic uppercase sm:text-5xl">
            <span className="text-gold-foil">Need a ride?</span>
            <br />
            Talk to Danial.
          </h2>
          <p className="mt-5 max-w-md text-muted">
            Available 24 hours for airport pickups, charters, daily bookings and private tours.
            Send your trip details on WhatsApp for a fast quote.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold font-display text-xl font-black text-gold-light">
              24
            </div>
            <div>
              <p className="font-script text-4xl leading-none text-gold-light">
                {site.contactName}
              </p>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-lg font-semibold tracking-wide hover:text-gold-light"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          <a
            href={waLink("Hi Danial, I would like to book a ride.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-foil mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-ink shadow-xl shadow-gold/20 transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="relative rotate-[-4deg] overflow-hidden rounded-xl shadow-2xl shadow-black ring-1 ring-gold/40 transition-transform hover:rotate-0">
            <Image
              src="/images/card-back.png"
              alt="Our services: airport transfer, hourly charter, daily booking, private tour"
              width={685}
              height={420}
              className="h-auto w-full"
            />
          </div>
          <div className="relative -mt-24 ml-10 rotate-[3deg] overflow-hidden rounded-xl shadow-2xl shadow-black ring-1 ring-gold/40 transition-transform hover:rotate-0 sm:ml-16">
            <Image
              src="/images/card-front.png"
              alt="Transporter Service (Luxury) business card. Danial, +60 14-855 5557"
              width={668}
              height={392}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24">
      <Image
        src="/images/stock/cameron-highland.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/85" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-extrabold italic uppercase sm:text-5xl">
          Your next trip starts <span className="text-gold-foil">with one message</span>
        </h2>
        <p className="mt-5 text-muted">
          Tell us where and when. We handle the rest, safely and on time.
        </p>
        <a
          href={waLink("Hi Danial, I would like to plan a trip.")}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold-foil mt-10 inline-flex items-center gap-2 rounded-full px-10 py-4 font-bold text-ink shadow-xl shadow-gold/20 transition-transform hover:scale-105"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Plan My Trip
        </a>
      </div>
    </section>
  );
}
