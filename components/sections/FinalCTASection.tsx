import { PHONE, PHONE_DISPLAY } from '@/lib/seo'

const LEAD_URL = "https://app.friendsmove.com/web/public/vue-app/lead";

export function FinalCTASection() {
  return (
    <section
      className="section-py"
      style={{ background: 'linear-gradient(135deg, #0E2A1F 0%, #062014 100%)' }}
      aria-labelledby="final-cta-heading"
    >
      <div className="container-site text-center">
        {/* Decoration */}
        <div className="inline-flex items-center gap-2 bg-brand-green/20 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" aria-hidden />
          <span className="text-sm font-semibold text-brand-green">Jetzt verfügbar</span>
        </div>

        <h2
          id="final-cta-heading"
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white text-balance mb-5 max-w-3xl mx-auto"
        >
          Bereit für Ihren stressfreien Umzug?
        </h2>

        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Fordern Sie jetzt Ihr kostenloses Angebot an. Wir antworten innerhalb von 60 Minuten – und begleiten Sie von der ersten Planung bis zum letzten Karton.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={LEAD_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Kostenloses Angebot
          </a>
          <a
            href={`tel:${PHONE}`}
            className="btn-outline-white text-base px-8 py-4"
            aria-label={`Jetzt anrufen: ${PHONE_DISPLAY}`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Telefonische Beratung
          </a>
        </div>

        {/* Trust micro copy */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {[
            '✓ Kostenlos & unverbindlich',
            '✓ Antwort in 60 Min.',
            '✓ Festpreis möglich',
            '✓ DSGVO-konform',
          ].map((item) => (
            <span key={item} className="text-sm text-white/50">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
