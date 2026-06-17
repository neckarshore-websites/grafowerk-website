import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Wordmark from "@/components/Wordmark";

/**
 * Grafowerk landing page (v0).
 *
 * Deliberately minimal — a single, centered column matching the spirit of the
 * current grafowerk.de placeholder, but responsive and on the house stack:
 * wordmark, one line of provisional copy, and the contact form. Real content
 * (services, work, about) layers in later without restructuring this.
 */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 items-center justify-center px-6 py-20">
        <div className="w-full max-w-xl text-center">
          <Wordmark className="text-4xl sm:text-5xl md:text-6xl" />

          <p className="mt-5 text-base text-muted sm:text-lg">
            Grafik &amp; Design.
            <br className="hidden sm:block" /> Unsere neue Website entsteht
            gerade — schreiben Sie uns gern schon jetzt.
          </p>

          <div className="mt-12 text-left">
            <h1 className="mb-6 text-center font-display text-2xl font-semibold text-ink">
              Kontakt
            </h1>
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
