import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { EMAIL, PHONE_DISPLAY, ADDRESS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | FriendsMove",
  description: "Datenschutzerklärung von FriendsMove gemäß DSGVO.",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <SectionWrapper className="bg-brand-bg">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display font-bold text-4xl text-brand-dark mb-4">Datenschutzerklärung</h1>
        <p className="text-brand-muted mb-10">Stand: Januar 2025</p>

        <div className="flex flex-col gap-10 text-brand-text text-sm leading-relaxed">

          <section aria-labelledby="ds-verantwortlicher">
            <h2 id="ds-verantwortlicher" className="font-display font-bold text-xl text-brand-dark mb-4">1. Verantwortlicher</h2>
            <div className="card p-6 text-brand-muted">
              <p className="font-semibold text-brand-dark mb-2">FriendsMove GmbH</p>
              <p>{ADDRESS.street}, {ADDRESS.zip} {ADDRESS.city}</p>
              <p>Telefon: {PHONE_DISPLAY}</p>
              <p>E-Mail: <a href={`mailto:${EMAIL}`} className="text-brand-accent hover:underline">{EMAIL}</a></p>
            </div>
          </section>

          <section aria-labelledby="ds-erhebung">
            <h2 id="ds-erhebung" className="font-display font-bold text-xl text-brand-dark mb-4">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <div className="card p-6 text-brand-muted flex flex-col gap-4">
              <div>
                <h3 className="font-semibold text-brand-dark mb-2">Kontaktformular & Angebotsanfragen</h3>
                <p>Wenn Sie unser Kontaktformular oder das Anfrageformular nutzen, erheben wir folgende Daten: Name, Telefonnummer, E-Mail-Adresse (falls angegeben), Umzugsdetails (Von, Nach, Datum, Größe). Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-dark mb-2">Server-Log-Dateien</h3>
                <p>Der Provider dieser Website erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt (IP-Adresse, Browser, Betriebssystem, Referrer-URL, Datum/Uhrzeit).</p>
              </div>
            </div>
          </section>

          <section aria-labelledby="ds-grundlage">
            <h2 id="ds-grundlage" className="font-display font-bold text-xl text-brand-dark mb-4">3. Rechtsgrundlage der Verarbeitung</h2>
            <div className="card p-6 text-brand-muted">
              <p>Die Verarbeitung Ihrer Daten erfolgt auf Basis von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung oder vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen).</p>
            </div>
          </section>

          <section aria-labelledby="ds-weitergabe">
            <h2 id="ds-weitergabe" className="font-display font-bold text-xl text-brand-dark mb-4">4. Weitergabe an Dritte</h2>
            <div className="card p-6 text-brand-muted">
              <p>Ihre Daten werden nicht an Dritte weitergegeben, verkauft oder für Werbezwecke genutzt. Eine Weitergabe erfolgt nur, wenn dies gesetzlich vorgeschrieben ist oder Sie ausdrücklich zugestimmt haben.</p>
            </div>
          </section>

          <section aria-labelledby="ds-rechte">
            <h2 id="ds-rechte" className="font-display font-bold text-xl text-brand-dark mb-4">5. Ihre Rechte</h2>
            <div className="card p-6 text-brand-muted flex flex-col gap-2">
              <p>Sie haben gemäß DSGVO folgende Rechte:</p>
              <ul className="list-disc list-inside flex flex-col gap-1 mt-2">
                <li>Auskunft über gespeicherte Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              </ul>
              <p className="mt-3">Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href={`mailto:${EMAIL}`} className="text-brand-accent hover:underline">{EMAIL}</a></p>
            </div>
          </section>

          <section aria-labelledby="ds-speicher">
            <h2 id="ds-speicher" className="font-display font-bold text-xl text-brand-dark mb-4">6. Speicherdauer</h2>
            <div className="card p-6 text-brand-muted">
              <p>Personenbezogene Daten werden nur so lange gespeichert, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen (i.d.R. 10 Jahre für Geschäftsunterlagen nach HGB/AO).</p>
            </div>
          </section>

          <section aria-labelledby="ds-cookies">
            <h2 id="ds-cookies" className="font-display font-bold text-xl text-brand-dark mb-4">7. Cookies</h2>
            <div className="card p-6 text-brand-muted">
              <p>Diese Website verwendet nur technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Es werden keine Tracking-Cookies oder Marketing-Cookies eingesetzt.</p>
            </div>
          </section>

          <section aria-labelledby="ds-beschwerderecht">
            <h2 id="ds-beschwerderecht" className="font-display font-bold text-xl text-brand-dark mb-4">8. Beschwerderecht</h2>
            <div className="card p-6 text-brand-muted">
              <p>Sie haben das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren. In Baden-Württemberg ist dies der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg.</p>
            </div>
          </section>

        </div>
      </div>
    </SectionWrapper>
  );
}
