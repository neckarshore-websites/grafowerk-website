import Link from "next/link";
import { Mail, Phone } from "lucide-react";

/**
 * Minimal site footer: contact (phone + mail) + legal navigation.
 */
export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
          <a
            href="tel:+4971121729291"
            className="inline-flex items-center gap-2 text-ink transition-opacity hover:opacity-70"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            +49 711 217 29 29 1
          </a>
          <a
            href="mailto:info@grafowerk.de"
            className="inline-flex items-center gap-2 text-ink transition-opacity hover:opacity-70"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            info@grafowerk.de
          </a>
        </div>
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
