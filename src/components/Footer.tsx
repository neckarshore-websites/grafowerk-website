import Link from "next/link";
import { Mail } from "lucide-react";

/**
 * Minimal site footer: direct mail link + legal navigation.
 *
 * The Impressum / Datenschutz links point at placeholder stub pages for now —
 * real legal copy lands before go-live.
 */
export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <a
          href="mailto:info@grafowerk.de"
          className="inline-flex items-center gap-2 text-ink transition-opacity hover:opacity-70"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          info@grafowerk.de
        </a>
        <nav className="flex items-center gap-6">
          <Link href="/impressum" className="transition-colors hover:text-ink">
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="transition-colors hover:text-ink"
          >
            Datenschutz
          </Link>
        </nav>
      </div>
    </footer>
  );
}
