import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import type { FaqItem } from "@/types";

export const metadata: Metadata = {
  title: "Häufige Fragen zum Umzug – FAQ | FriendsMove",
  description:
    "Antworten auf die häufigsten Fragen rund um Ihren Umzug mit FriendsMove: Kosten, Versicherung, Ablauf, Halteverbotszone und mehr.",
  alternates: { canonical: "https://www.friendsmove.de/faq" },
};

const FAQ_SECTIONS: { category: string; items: FaqItem[] }[] = [
  {
    category: "Kosten & Preise",
    items: [
      { question: "Was kostet ein Umzug mit FriendsMove?", answer: "Die Kosten hängen von Entfernung, Wohnungsgröße und Zusatzleistungen ab. Ein 1-Zimmer-Umzug beginnt bei ca. 390 €, ein 3-Zimmer-Umzug bei ca. 750 €. Sie erhalten ein transparentes Festpreisangebot." },
      { question: "Was ist ein Festpreis?", answer: "Beim Festpreis zahlen Sie den vereinbarten Betrag – unabhängig von der tatsächlichen Umzugsdauer. Kein Stundenabrechnung, keine Überraschungen." },
      { question: "Gibt es versteckte Kosten?", answer: "Nein. Unser Angebot ist transparent und bindend. Was drin steht, das zahlen Sie. Punkt." },
      { question: "Wann zahle ich?", answer: "Zahlung erfolgt nach dem Umzug – nach Ihrer Zufriedenheitsbestätigung. Banküberweisung oder Barzahlung möglich." },
    ],
  },
  {
    category: "Ablauf & Planung",
    items: [
      { question: "Wie läuft ein Umzug mit FriendsMove ab?", answer: "1. Anfrage senden, 2. kostenfreie Beratung & Angebot, 3. Buchung & Terminbestätigung, 4. Umzugstag: pünktliche Durchführung, 5. Einzug & Abnahme." },
      { question: "Wie weit im Voraus sollte ich buchen?", answer: "2–4 Wochen Vorlauf sind ideal. Für kurzfristige Umzüge bitte direkt anrufen – oft haben wir noch Kapazität." },
      { question: "Was passiert wenn sich der Termin verschiebt?", answer: "Bis 72 Stunden vorher kostenlose Verschiebung. Bitte frühzeitig informieren." },
      { question: "Kann ich am Tag des Umzugs noch Änderungen machen?", answer: "Kleine Anpassungen sind möglich. Größere Änderungen sollten spätestens 24h vorher kommuniziert werden." },
    ],
  },
  {
    category: "Versicherung & Schäden",
    items: [
      { question: "Sind meine Möbel versichert?", answer: "Ja. Alle Transporte sind vollkaskoversichert. Ihr gesamtes Inventar ist während des Umzugs zu 100 % geschützt." },
      { question: "Was passiert bei einem Schaden?", answer: "Schäden werden von uns schnell und unkompliziert reguliert. Bitte informieren Sie uns sofort – wir kümmern uns." },
      { question: "Was deckt die Versicherung ab?", answer: "Transport- und Handlingschäden. Vorschäden an alten Möbeln, die nachweislich schon vor dem Umzug bestanden, sind ausgenommen." },
    ],
  },
  {
    category: "Halteverbotszone",
    items: [
      { question: "Brauche ich eine Halteverbotszone?", answer: "In innerstädtischen Lagen (z.B. Mannheimer Quadrate, Heidelberger Altstadt) ist sie meist sinnvoll oder notwendig. Wir beraten Sie gerne." },
      { question: "Wer beantragt die Halteverbotszone?", answer: "Das übernehmen wir komplett für Sie beim zuständigen Ordnungsamt. Bitte 7–10 Tage Vorlauf einplanen." },
      { question: "Was kostet die Halteverbotszone?", answer: "Typischerweise 80–150 € inkl. Aufstellen der Schilder, je nach Gemeinde und Größe." },
    ],
  },
  {
    category: "Sonstiges",
    items: [
      { question: "Arbeiten Sie auch am Wochenende?", answer: "Ja. Samstags 08–16 Uhr, Sonntags auf Anfrage – besonders für Firmenumzüge." },
      { question: "Machen Sie auch Fernumzüge?", answer: "Ja, deutschlandweit und auch nach Österreich und in die Schweiz. Bitte direkt anfragen." },
      { question: "Können Sie auch entrümpeln?", answer: "Ja, wir bieten professionelle Entrümpelung an – von der Wohnung bis zum Dachboden." },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_SECTIONS.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }))
  ),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.friendsmove.de" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.friendsmove.de/faq" },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="bg-brand-dark py-20 md:py-24" aria-labelledby="faq-heading">
        <div className="container-max text-center">
          <p className="section-label text-brand-green">FAQ</p>
          <h1 id="faq-heading" className="font-display font-bold text-4xl md:text-5xl text-white mt-2 mb-5">
            Häufige Fragen
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Alles was Sie wissen müssen, bevor Sie Ihren Umzug mit FriendsMove planen.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-brand-bg">
        <div className="max-w-4xl mx-auto flex flex-col gap-14">
          {FAQ_SECTIONS.map((section) => (
            <div key={section.category}>
              <h2 className="font-display font-bold text-2xl text-brand-dark mb-6 pb-3 border-b border-brand-border">
                {section.category}
              </h2>
              <FaqAccordion items={section.items} />
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}
