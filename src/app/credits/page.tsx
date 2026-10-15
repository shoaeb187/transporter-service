import type { Metadata } from "next";
import Link from "next/link";
import credits from "@/lib/photo-credits.json";

export const metadata: Metadata = { title: "Photo Credits | Transporter Service" };

export default function CreditsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <Link href="/" className="text-sm text-gold hover:text-gold-light">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-display text-4xl font-extrabold italic uppercase text-gold-foil">
        Photo Credits
      </h1>
      <p className="mt-3 text-muted">
        Stock photos from Wikimedia Commons, used under their free licences.
      </p>
      <ul className="mt-10 divide-y divide-white/5">
        {Object.entries(credits).map(([slug, c]) => (
          <li key={slug} className="py-4 text-sm">
            <a
              href={c.source}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:text-gold-light"
            >
              {c.file.replace(/^File:/, "")}
            </a>
            <p className="text-muted">
              {c.author || "Unknown author"} · {c.license}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
