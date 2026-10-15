"use client";

import Image from "next/image";
import { useState } from "react";
import { vehicles, waLink, type VehicleKind } from "@/lib/site";
import { BagIcon, CheckIcon, UsersIcon, WhatsAppIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const filters: { key: "all" | VehicleKind; label: string }[] = [
  { key: "all", label: "All Vehicles" },
  { key: "luxury", label: "Luxury MPV" },
  { key: "mpv", label: "MPV" },
  { key: "sedan", label: "Sedan" },
  { key: "van", label: "Van" },
];

export function Fleet() {
  const [filter, setFilter] = useState<"all" | VehicleKind>("all");
  const shown = filter === "all" ? vehicles : vehicles.filter((v) => v.kind === filter);

  return (
    <section id="fleet" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Fleet"
          title="Choose Your Ride"
          text="One-way airport transfer rates from KLIA / KLIA2 to Kuala Lumpur or Subang. Hourly, daily and tour rates on request."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                filter === f.key
                  ? "bg-gold-foil text-ink"
                  : "border border-gold-soft text-foreground/80 hover:text-gold-light"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((v) => (
            <article
              key={v.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gold-soft bg-panel transition-all hover:-translate-y-1 hover:border-gold hover:shadow-2xl hover:shadow-gold/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={v.image}
                  alt={v.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-gold-light backdrop-blur">
                  {v.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold uppercase italic">{v.name}</h3>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest text-muted">Per way</p>
                    <p className="font-display text-2xl font-extrabold text-gold-foil">
                      RM{v.price}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex gap-5 text-sm text-muted">
                  <span className="flex items-center gap-1.5">
                    <UsersIcon className="h-4 w-4 text-gold" />
                    {v.guests} guests
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BagIcon className="h-4 w-4 text-gold" />
                    {v.luggage}
                  </span>
                </div>

                <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(
                    `Hi Danial, I would like to book:\n\nVehicle: ${v.name} (${v.category})\nRoute: KLIA → Kuala Lumpur / Subang\nPrice: RM${v.price} (one way)\n\nPickup date & time:\nPassengers:`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-full border border-gold py-3 text-sm font-bold text-gold-light transition-colors group-hover:bg-gold group-hover:text-ink"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Book Now
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          * Prices may vary depending on location, time and tolls. WhatsApp us for an exact quote.
        </p>
      </div>
    </section>
  );
}
