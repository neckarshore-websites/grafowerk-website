import BrandRibbon from "@/components/BrandRibbon";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Wordmark from "@/components/Wordmark";

/**
 * Grafowerk landing page (v0).
 *
 * Echoes the grafowerk.de identity — wordmark (mirrored R's) on the left, the
 * green "Farbband" ribbon on the right — but responsive and on the house stack,
 * with the contact form below. Real content layers in later without restructuring.
 */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Brand hero — wordmark + tagline left, green ribbon right */}
        <section className="mx-auto max-w-5xl px-6 pt-16 md:pt-24">
          <div className="grid items-start gap-8 sm:grid-cols-[1fr_auto]">
            <div className="text-left">
              <h1>
                <Wordmark className="text-4xl sm:text-5xl md:text-6xl" />
              </h1>
              <p className="mt-6 text-lg text-muted sm:text-xl">
                Konzeption und Gestaltung
              </p>
            </div>
            <BrandRibbon className="h-36 w-auto justify-self-start sm:h-56 sm:justify-self-end" />
          </div>
        </section>

        {/* Contact */}
        <section className="mx-auto max-w-xl px-6 pt-12 pb-20 md:pt-16">
          <p className="mb-8 text-base text-muted">
            Unsere neue Website entsteht gerade — schreiben Sie uns gern schon
            jetzt.
          </p>
          <h2 className="mb-6 font-display text-2xl font-semibold text-ink">
            Kontakt
          </h2>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}
