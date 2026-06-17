import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Grafowerk",
  description: "Datenschutzerklärung der Grafowerk Website.",
  robots: { index: false, follow: true },
};

/**
 * Datenschutzerklärung — PLACEHOLDER STUB.
 *
 * Legally required (GDPR / DSGVO) before go-live, especially because the
 * contact form processes personal data. The real privacy policy must be filled
 * in before this site is promoted to production.
 */
export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="font-display text-3xl font-semibold text-ink">
        Datenschutzerklärung
      </h1>

      <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
        <p className="rounded-lg border border-line bg-subtle p-4 text-ink">
          <strong>Platzhalter.</strong> Die vollständige Datenschutzerklärung
          nach DSGVO wird vor dem Live-Gang ergänzt.
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          Kontaktformular
        </h2>
        <p>
          Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden
          Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen
          Kontaktdaten zur Bearbeitung der Anfrage und für den Fall von
          Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
          Ihre Einwilligung weiter.
        </p>
        <p>
          Verantwortliche Stelle und Ihre Rechte (Auskunft, Berichtigung,
          Löschung, Widerspruch) werden hier vor dem Live-Gang vollständig
          ausgeführt.
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
