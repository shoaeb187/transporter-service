import Link from "next/link";
import { destinations, navLinks, services, site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t border-gold-soft bg-ink pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-black italic uppercase text-gold-foil">
            {site.name}
          </p>
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted">({site.tagline})</p>
          <p className="mt-4 text-sm text-muted">
            {site.values.join(" • ")}. Luxury airport transfers, charters and private tours
            across Malaysia, 24 hours a day.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">Links</h3>
          <ul className="space-y-2 text-sm text-muted">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={`/${l.href}`} className="hover:text-gold-light">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">Services</h3>
          <ul className="space-y-2 text-sm text-muted">
            {services.map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
          <h3 className="mb-3 mt-6 text-sm font-bold uppercase tracking-widest text-gold">
            Destinations
          </h3>
          <p className="text-sm leading-relaxed text-muted">
            {destinations.map((d) => d.name).join(" · ")}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">Contact</h3>
          <p className="font-script text-3xl text-gold-light">{site.contactName}</p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-sm hover:text-gold-light"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            {site.phoneDisplay}
          </a>
          <p className="mt-2 text-sm text-muted">Available 24 hours</p>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-white/5 px-4 py-6 text-xs text-muted sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name} ({site.tagline}). All rights reserved.
        </p>
        <Link href="/credits" className="hover:text-gold-light">
          Photo credits
        </Link>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hi Danial, I would like to book a ride.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/40 transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
