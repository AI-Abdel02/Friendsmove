import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Über uns – Das Team hinter FriendsMove | FriendsMove",
  description:
    "Lernen Sie das Team von FriendsMove kennen. Regionaler Umzugspartner im Rhein-Neckar-Gebiet – mit echter Leidenschaft für saubere, stressfreie Umzüge.",
  alternates: { canonical: "https://www.friendsmove.de/ueber-uns" },
};

export default function UeberUnsPage() {
  return (
    <>
      <section className="bg-brand-dark py-20 md:py-28" aria-labelledby="about-heading">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label text-brand-green">Über uns</p>
              <h1 id="about-heading" className="font-display font-bold text-4xl md:text-5xl text-white mt-2 mb-5 leading-tight">
                Wir sind<br />
                <span className="text-brand-green">FriendsMove</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Wir sind ein regionales Umzugsunternehmen mit Herz, das im Rhein-Neckar-Gebiet 
                seit 2015 für stressfreie und professionelle Umzüge steht. Gegründet mit dem Ziel, 
                den schlechten Ruf mancher Umzugsunternehmen zu widerlegen.
              </p>
              <p className="text-white/70 leading-relaxed">
                Unser Name ist Programm: Wie gute Freunde helfen wir Ihnen beim Umzug – 
                zuverlässig, ehrlich und mit echtem Engagement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "Seit 2015", label: "In der Region aktiv" },
                { value: "120+", label: "Umzüge pro Jahr" },
                { value: "4,9 ★", label: "Google-Bewertung" },
                { value: "100%", label: "Vollversichert" },
              ].map((s) => (
                <div key={s.label} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <p className="font-display font-bold text-3xl text-brand-green mb-1">{s.value}</p>
                  <p className="text-white/60 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="section-label">Unsere Geschichte</p>
            <h2 className="font-display font-bold text-3xl text-brand-dark mb-5">
              Regional verwurzelt. Professionell aufgestellt.
            </h2>
            <div className="flex flex-col gap-4 text-brand-muted leading-relaxed">
              <p>
                FriendsMove wurde 2015 in Mannheim gegründet, weil unser Gründer 
                selbst schlechte Erfahrungen mit unzuverlässigen Umzugsunternehmen gemacht hatte. 
                Die Idee: Ein Umzugsunternehmen, auf das man sich wirklich verlassen kann.
              </p>
              <p>
                Heute sind wir ein eingespieltes Team von Umzugsprofis, das die Rhein-Neckar Region 
                wie seine eigene Westentasche kennt. Jeder Umzug – egal ob eine kleine Singlewohnung 
                oder ein Bürokomplex – wird mit demselben Engagement durchgeführt.
              </p>
              <p>
                Unser Wachstum basiert fast ausschließlich auf Weiterempfehlungen. 
                Das sagt alles über unsere Qualität.
              </p>
            </div>
          </div>
          <div>
            <p className="section-label">Unsere Werte</p>
            <h2 className="font-display font-bold text-3xl text-brand-dark mb-5">
              Was uns antreibt
            </h2>
            <ul className="flex flex-col gap-4">
              {[
                { icon: "🤝", title: "Verlässlichkeit", desc: "Ein Versprechen ist ein Versprechen. Was wir zusagen, halten wir ein." },
                { icon: "💬", title: "Transparenz", desc: "Klare Kommunikation, nachvollziehbare Preise, keine versteckten Kosten." },
                { icon: "❤️", title: "Sorgfalt", desc: "Ihre Möbel und Ihr Inventar werden behandelt wie unser Eigenes." },
                { icon: "📍", title: "Regionalität", desc: "Wir sind Teil dieser Region und engagieren uns für sie." },
              ].map((v) => (
                <li key={v.title} className="flex items-start gap-4 p-4 bg-brand-card rounded-xl border border-brand-border">
                  <span className="text-2xl flex-shrink-0" aria-hidden="true">{v.icon}</span>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">{v.title}</h3>
                    <p className="text-brand-muted text-sm">{v.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}
