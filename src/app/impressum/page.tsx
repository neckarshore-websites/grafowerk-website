import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum — Grafowerk",
  description: "Impressum der Grafowerk Website.",
  robots: { index: false, follow: true },
};

/**
 * Impressum — PLACEHOLDER STUB.
 *
 * Legally required (§ 5 DDG / § 18 MStV) before go-live. The real provider
 * details must be filled in before this site is promoted to production.
 */
export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="font-display text-3xl font-semibold text-ink">Impressum</h1>

      <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
        <p className="rounded-lg border border-line bg-subtle p-4 text-ink">
          <strong>Platzhalter.</strong> Die gesetzlich erforderlichen
          Anbieterangaben (§&nbsp;5 DDG) werden vor dem Live-Gang ergänzt.
        </p>

        <p>Angaben gemäß § 5 DDG:</p>
        <p>
          Grafowerk
          <br />
          [Straße &amp; Hausnummer]
          <br />
          [PLZ Ort]
        </p>
        <p>
          <strong>Kontakt:</strong>
          <br />
          E-Mail:{" "}
          <a href="mailto:info@grafowerk.de" className="text-ink underline">
            info@grafowerk.de
          </a>
        </p>
        <p>
          <strong>Vertreten durch:</strong> [Name]
        </p>
      </div>

      <p className="mt-12">
        <Link href="/" className="text-ink underline">
          ← Zurück zur Startseite
        </Link>
      </p>
    </main>
  );
}
