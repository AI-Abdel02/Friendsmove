import SectionWrapper from '@/components/ui/SectionWrapper'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'

const REASONS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Erfahrenes Team',
    description: 'Unsere Umzugshelfer sind geschulte Fachkräfte – kein Hobby, kein Gelegenheitsjob. Jeder kennt seinen Job.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Strukturierte Planung',
    description: 'Jeder Umzug wird individuell geplant – Fahrzeugauswahl, Zeitplan, Halteverbot. Nichts dem Zufall überlassen.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Vollversicherter Transport',
    description: 'Alle Transporte laufen über unsere Vollkasko-Transportversicherung. Ihre Möbel sind zu jeder Zeit geschützt.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Transparente Preise',
    description: 'Kein versteckter Aufpreis. Unser Angebot ist klar und nachvollziehbar – Festpreis auf Wunsch garantiert.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Regionale Ortskenntnis',
    description: 'Wir kennen Mannheim, Heidelberg und die Region – jede Einbahnstraße, jede Besonderheit, jede Lösung.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Fester Ansprechpartner',
    description: 'Sie sprechen immer mit derselben Person. Kein Call-Center, keine Weiterleitungen – persönliche Betreuung.',
  },
]

export default function WhyUsSection() {
  return (
    <SectionWrapper dark id="warum-friendsmove">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              eyebrow="Warum FriendsMove"
              title="Ihr regionaler Umzugspartner mit System"
              description="Wir sind kein Discount-Umzugsportal und kein überteurtes Großunternehmen. Wir sind Ihr verlässlicher Partner vor Ort – bekannt in der Region, empfohlen von echten Kunden."
              light
              className="mb-8"
            />
            <div className="flex flex-col gap-3">
              {['Festpreisgarantie auf Wunsch', 'Antwort innerhalb von 60 Minuten', 'Keine versteckten Kosten', 'Umzüge auch kurzfristig möglich', 'DSGVO-konforme Datenverarbeitung'].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/80 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REASONS.map((reason) => (
              <div
                key={reason.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 hover:border-brand-green/30 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center text-brand-green mb-3">
                  {reason.icon}
                </div>
                <h3 className="text-white font-semibold text-sm mb-1.5">{reason.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
