import Link from "next/link";
import Wordmark from "@/components/Wordmark";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Wordmark className="text-2xl" />
      <p className="mt-8 font-display text-5xl font-bold text-ink">404</p>
      <p className="mt-3 text-base text-muted">
        Diese Seite gibt es nicht (mehr).
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-lg bg-accent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-hover"
      >
        Zur Startseite
      </Link>
    </main>
  );
}
