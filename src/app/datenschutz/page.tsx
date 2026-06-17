import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Grafowerk",
  description: "Datenschutzerklärung der Grafowerk Website.",
  robots: { index: false, follow: true },
};

const h2 = "mt-10 font-display text-xl font-semibold text-ink";
const h3 = "mt-6 font-display text-base font-semibold text-ink";

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="font-display text-3xl font-semibold text-ink">
        Datenschutzerklärung
      </h1>

      <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
        <h2 className={h2}>1. Datenschutz auf einen Blick</h2>
        <h3 className={h3}>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
          Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
          Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
          identifiziert werden können. Ausführliche Informationen zum Thema
          Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </p>

        <h2 className={h2}>2. Hosting</h2>
        <p>
          Diese Website wird bei einem externen Dienstleister gehostet (Hoster).
          Die personenbezogenen Daten, die auf dieser Website erfasst werden,
          werden auf den Servern des Hosters gespeichert. Hierbei kann es sich
          v.&nbsp;a. um IP-Adressen, Kontaktanfragen, Meta- und
          Kommunikationsdaten, Websitezugriffe und sonstige Daten, die über eine
          Website generiert werden, handeln.
        </p>
        <p>
          Unser Hoster ist:
          <br />
          <span className="text-ink">
            Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA
          </span>
        </p>
        <p>
          Der Einsatz des Hosters erfolgt im Interesse einer sicheren, schnellen
          und effizienten Bereitstellung unseres Online-Angebots durch einen
          professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine
          entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
          ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Da der
          Hoster Daten auch in den USA verarbeiten kann, weisen wir darauf hin,
          dass für die USA kein dem europäischen Recht vergleichbares
          Datenschutzniveau gewährleistet ist.
        </p>

        <h2 className={h2}>3. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3 className={h3}>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung. Wir weisen darauf hin, dass die Datenübertragung
          im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail)
          Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor
          dem Zugriff durch Dritte ist nicht möglich.
        </p>

        <h3 className={h3}>Hinweis zur verantwortlichen Stelle</h3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website
          ist:
        </p>
        <p className="text-ink">
          Christian Thoss
          <br />
          Rotebühlstraße 174
          <br />
          70197 Stuttgart
          <br />
          Telefon: +49 711 217 29 29 1
          <br />
          E-Mail: info@grafowerk.de
        </p>

        <h3 className={h3}>Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
          berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
          Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir
          keine anderen rechtlich zulässigen Gründe für die Speicherung haben.
        </p>

        <h3 className={h3}>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
          Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>

        <h3 className={h3}>
          Widerspruchsrecht gegen die Datenerhebung (Art. 21 DSGVO)
        </h3>
        <p>
          Werden Daten auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO
          verarbeitet, haben Sie jederzeit das Recht, aus Gründen, die sich aus
          Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer
          personenbezogenen Daten Widerspruch einzulegen.
        </p>

        <h3 className={h3}>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
        <p>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
          Beschwerderecht bei einer Aufsichtsbehörde zu. Das Beschwerderecht
          besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
          gerichtlicher Rechtsbehelfe.
        </p>

        <h3 className={h3}>Recht auf Datenübertragbarkeit</h3>
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder
          an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen
          zu lassen.
        </p>

        <h3 className={h3}>SSL- bzw. TLS-Verschlüsselung</h3>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
          vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine
          verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
          Browsers von „http://“ auf „https://“ wechselt.
        </p>

        <h3 className={h3}>Auskunft, Löschung und Berichtigung</h3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
          Datenverarbeitung sowie ggf. ein Recht auf Berichtigung oder Löschung
          dieser Daten.
        </p>

        <h2 className={h2}>4. Datenerfassung auf dieser Website</h2>
        <h3 className={h3}>Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
          Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
          Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
          Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf
          Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
          Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
          vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
          beruht die Verarbeitung auf unserem berechtigten Interesse an der
          effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1
          lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
        </p>

        <h3 className={h3}>Anfrage per E-Mail oder Telefon</h3>
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage
          inklusive aller daraus hervorgehenden personenbezogenen Daten (Name,
          Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert
          und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung
          weiter.
        </p>

        <h2 className={h2}>5. Schriftarten</h2>
        <p>
          Diese Website verwendet zur einheitlichen Darstellung von Schriftarten
          ausschließlich lokal gehostete Schriftdateien. Es wird keine Verbindung
          zu Servern Dritter (z.&nbsp;B. Google Fonts) aufgebaut; beim Aufruf der
          Seite werden hierfür keine personenbezogenen Daten an Dritte übermittelt.
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
