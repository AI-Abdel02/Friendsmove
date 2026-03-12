import { SectionHeading } from '@/components/ui/SectionHeading'

const envPoints = [
  {
    icon: '🌱',
    title: 'CO₂-optimierte Routen',
    description: 'Wir planen Fahrtstrecken intelligent, um Umwege und unnötigen Kraftstoffverbrauch zu minimieren.',
  },
  {
    icon: '🔄',
    title: 'Reduzierte Leerfahrten',
    description: 'Durch effiziente Tourenplanung vermeiden wir konsequent unnötige Leerfahrten.',
  },
  {
    icon: '📦',
    title: 'Nachhaltige Verpackung',
    description: 'Wir setzen auf wiederverwendbare Möbeldecken und umweltfreundliche Verpackungsalternativen.',
  },
  {
    icon: '⚡',
    title: 'Moderne Fahrzeugflotte',
    description: 'Unsere Fahrzeuge erfüllen aktuelle Emissionsstandards. Wir investieren kontinuierlich in unsere Flotte.',
  },
]

export function EnvironmentSection() {
  return (
    <section
      className="section-py bg-white"
      aria-labelledby="env-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Nachhaltigkeit"
              title="Umzug mit Verantwortung"
              description="Wir sind uns unserer Verantwortung bewusst – für unsere Kunden und für die Region, in der wir leben und arbeiten."
              id="env-heading"
            />
            <p className="text-brand-muted text-sm leading-relaxed">
              Nachhaltigkeit bedeutet für uns nicht nur Umweltschutz, sondern auch Verlässlichkeit gegenüber unseren Kunden. Ein gut geplanter Umzug ist automatisch ein effizienterer – und das ist gut für alle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {envPoints.map((point) => (
              <div
                key={point.title}
                className="flex gap-4 p-5 bg-brand-bg rounded-2xl"
              >
                <span className="text-2xl flex-shrink-0" aria-hidden>{point.icon}</span>
                <div>
                  <h3 className="font-semibold text-brand-dark text-sm mb-1">{point.title}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
