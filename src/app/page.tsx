import BrandRibbon from "@/components/BrandRibbon";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Wordmark from "@/components/Wordmark";

/**
 * Grafowerk landing page (v0).
 *
 * Echoes the grafowerk.de identity — wordmark (mirrored R's) over a large green
 * "Farbband" ribbon set as a background graphic, bleeding off the top-right.
 * Content sits in a left-aligned column in front; the form below. On mobile the
 * ribbon drops to a faint watermark so text stays readable.
 */
export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Decorative brand "Farbband" — slim folded ribbon, behind content,
          right-aligned and bleeding off the right edge (echoes grafowerk.de) */}
      <BrandRibbon className="pointer-events-none absolute top-12 right-[-3rem] -z-10 h-[58vh] w-auto opacity-20 sm:top-20 sm:right-[-4rem] sm:h-[78vh] sm:opacity-100" />

      <main className="relative z-10 flex-1">
        {/* Brand hero */}
        <section className="mx-auto max-w-5xl px-6 pt-16 md:pt-24">
          <div className="max-w-xl">
            <h1>
              <Wordmark className="text-4xl sm:text-5xl md:text-6xl" />
            </h1>
            <p className="mt-6 text-lg text-muted sm:text-xl">
              Konzeption und Gestaltung
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mx-auto max-w-5xl px-6 pt-12 pb-20 md:pt-16">
          <div className="max-w-xl">
            <p className="mb-8 text-base text-muted">
              Unsere neue Website entsteht gerade — schreiben Sie uns gern schon
              jetzt.
            </p>
            <h2 className="mb-6 font-display text-2xl font-semibold text-ink">
              Kontakt
            </h2>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
