import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import FaqAccordion from "@/components/ui/FaqAccordion";
import type { FaqItem } from "@/types";

export const HOMEPAGE_FAQS: FaqItem[] = [
  {
    question: "Was kostet ein Umzug mit FriendsMove?",
    answer:
      "Die Kosten hängen von Entfernung, Wohnungsgröße und gewünschten Zusatzleistungen ab. Als Orientierung: Ein 1-Zimmer-Umzug beginnt bei ca. 390 €, ein 3-Zimmer-Umzug bei ca. 750 €. Wir erstellen Ihnen gerne ein kostenloses und verbindliches Festpreisangebot.",
  },
  {
    question: "Sind meine Möbel während des Transports versichert?",
    answer:
      "Ja, absolut. Alle Transporte sind vollkaskoversichert. Ihr Inventar ist bei uns zu 100 % geschützt. Im unwahrscheinlichen Fall eines Schadens klären wir alles schnell und unkompliziert.",
  },
  {
    question: "Wie schnell bekomme ich ein Angebot?",
    answer:
      "Wir garantieren eine Rückmeldung innerhalb von 60 Minuten nach Eingang Ihrer Anfrage – während unserer Geschäftszeiten (Mo–Fr 07–19 Uhr, Sa 08–16 Uhr). In der Regel sind wir noch schneller.",
  },
  {
    question: "Brauche ich eine Halteverbotszone?",
    answer:
      "Das hängt von der Situation vor Ort ab. In vielen Innenstädten wie Mannheim oder Heidelberg ist eine Halteverbotszone sinnvoll oder sogar notwendig. Wir übernehmen die Beantragung und Einrichtung auf Wunsch für Sie.",
  },
  {
    question: "Arbeiten Sie auch am Wochenende?",
    answer:
      "Ja. Samstags sind wir von 08:00 bis 16:00 Uhr erreichbar und führen auch Umzüge durch. Für Sonntage gilt: auf Anfrage – besonders für Firmenumzüge, die den Betrieb möglichst wenig stören sollen.",
  },
  {
    question: "Was passiert, wenn sich der Umzugstermin verschiebt?",
    answer:
      "Wir sind flexibel. Bitte informieren Sie uns so früh wie möglich, dann passen wir die Planung an. Bis zu 72 Stunden vor dem vereinbarten Termin ist eine kostenfreie Verschiebung in der Regel möglich.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="bg-[#F6F0E8] section-py">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-start">
          {/* Left sticky column */}
          <FadeUp className="lg:sticky lg:top-28">
            <p className="section-label">Häufige Fragen</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[#062014] mb-5 leading-tight">
              Ihre Fragen –<br />unsere Antworten
            </h2>
            <p className="text-[#5A7A6E] leading-relaxed mb-8 text-base">
              Sie haben eine Frage, die hier nicht beantwortet wird? Wir helfen
              Ihnen gerne persönlich weiter.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#062014] text-[#062014] px-6 py-3 font-semibold text-sm hover:bg-[#062014] hover:text-white transition-all duration-200"
            >
              Alle FAQs ansehen
            </Link>
          </FadeUp>

          {/* Right accordion */}
          <FadeUp delay={100} className="lg:col-span-2">
            <FaqAccordion items={HOMEPAGE_FAQS} />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
