import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { PHONE, PHONE_DISPLAY, EMAIL, ADDRESS, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Impressum | FriendsMove",
  description: "Impressum und rechtliche Angaben von FriendsMove, Ihrem Umzugsunternehmen im Rhein-Neckar-Gebiet.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <SectionWrapper className="bg-brand-bg">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display font-bold text-4xl text-brand-dark mb-10">Impressum</h1>

        <div className="flex flex-col gap-10 text-brand-text">
          <section aria-labelledby="angaben-heading">
            <h2 id="angaben-heading" className="font-display font-bold text-xl text-brand-dark mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="card p-6">
              <p className="font-semibold text-brand-dark mb-1">{SITE_NAME} GmbH</p>
              <p>{ADDRESS.street}</p>
              <p>{ADDRESS.zip} {ADDRESS.city}</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section aria-labelledby="kontakt-heading">
            <h2 id="kontakt-heading" className="font-display font-bold text-xl text-brand-dark mb-4">Kontakt</h2>
            <div className="card p-6 flex flex-col gap-2">
              <p>Telefon: <a href={`tel:${PHONE}`} className="text-brand-accent hover:underline">{PHONE_DISPLAY}</a></p>
              <p>E-Mail: <a href={`mailto:${EMAIL}`} className="text-brand-accent hover:underline">{EMAIL}</a></p>
            </div>
          </section>

          <section aria-labelledby="register-heading">
            <h2 id="register-heading" className="font-display font-bold text-xl text-brand-dark mb-4">Handelsregister</h2>
            <div className="card p-6 flex flex-col gap-2 text-brand-muted">
              <p>Eingetragen im Handelsregister</p>
              <p>Registergericht: Amtsgericht Mannheim</p>
              <p>Registernummer: [Handelsregisternummer eintragen]</p>
            </div>
          </section>

          <section aria-labelledby="ust-heading">
            <h2 id="ust-heading" className="font-display font-bold text-xl text-brand-dark mb-4">
              Umsatzsteuer-ID
            </h2>
            <div className="card p-6 text-brand-muted">
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</p>
              <p className="font-semibold text-brand-dark mt-1">[USt-ID eintragen]</p>
            </div>
          </section>

          <section aria-labelledby="verantwortlich-heading">
            <h2 id="verantwortlich-heading" className="font-display font-bold text-xl text-brand-dark mb-4">
              Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV
            </h2>
            <div className="card p-6 text-brand-muted">
              <p>[Vor- und Nachname]</p>
              <p>{ADDRESS.street}</p>
              <p>{ADDRESS.zip} {ADDRESS.city}</p>
            </div>
          </section>

          <section aria-labelledby="haftung-heading">
            <h2 id="haftung-heading" className="font-display font-bold text-xl text-brand-dark mb-4">
              Haftungsausschluss
            </h2>
            <div className="card p-6 text-brand-muted leading-relaxed text-sm">
              <h3 className="font-semibold text-brand-dark mb-2">Haftung für Inhalte</h3>
              <p className="mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch 
                nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <h3 className="font-semibold text-brand-dark mb-2">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>
          </section>

          <section aria-labelledby="streitschlichtung-heading">
            <h2 id="streitschlichtung-heading" className="font-display font-bold text-xl text-brand-dark mb-4">
              Online-Streitbeilegung
            </h2>
            <div className="card p-6 text-brand-muted text-sm leading-relaxed">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>
        </div>
      </div>
    </SectionWrapper>
  );
}
