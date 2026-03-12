'use client'

import { useState, FormEvent } from 'react'

interface QuoteFormData {
  from: string
  to: string
  date: string
  size: string
  name: string
  phone: string
}

const apartmentSizes = [
  '1-Zimmer (bis 35 m²)',
  '2-Zimmer (35–60 m²)',
  '3-Zimmer (60–80 m²)',
  '4-Zimmer (80–100 m²)',
  '5+ Zimmer (100+ m²)',
  'Büro / Gewerbe',
  'Lagerraum / Sonstiges',
]

interface QuoteFormProps {
  compact?: boolean
}

export function QuoteForm({ compact = false }: QuoteFormProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    from: '',
    to: '',
    date: '',
    size: '',
    name: '',
    phone: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (field: keyof QuoteFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-card text-center">
        <div className="w-14 h-14 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-brand-dark" fill="none" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-bold text-brand-dark mb-2">Anfrage erhalten!</h3>
        <p className="text-brand-muted text-sm">Wir melden uns innerhalb von 60 Minuten bei Ihnen. Versprochen.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-cardHover overflow-hidden"
      noValidate
      aria-label="Umzugsangebot anfordern"
    >
      <div className="bg-brand-dark px-6 py-4">
        <h3 className="font-display text-lg font-bold text-white">Kostenloses Angebot</h3>
        <p className="text-sm text-brand-green mt-0.5">Antwort innerhalb von 60 Minuten</p>
      </div>

      <div className="p-6 space-y-4">
        <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted block mb-1.5">
              Von (Ort / PLZ)
            </span>
            <input
              type="text"
              value={formData.from}
              onChange={handleChange('from')}
              placeholder="z. B. Mannheim"
              required
              className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg text-brand-text placeholder:text-brand-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition"
              autoComplete="address-level2"
            />
          </label>

          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted block mb-1.5">
              Nach (Ort / PLZ)
            </span>
            <input
              type="text"
              value={formData.to}
              onChange={handleChange('to')}
              placeholder="z. B. Heidelberg"
              required
              className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg text-brand-text placeholder:text-brand-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition"
              autoComplete="address-level2"
            />
          </label>
        </div>

        <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted block mb-1.5">
              Gewünschtes Datum
            </span>
            <input
              type="date"
              value={formData.date}
              onChange={handleChange('date')}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition"
            />
          </label>

          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted block mb-1.5">
              Wohnungsgröße
            </span>
            <select
              value={formData.size}
              onChange={handleChange('size')}
              required
              className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition appearance-none cursor-pointer"
            >
              <option value="">Bitte wählen</option>
              {apartmentSizes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>
        </div>

        <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted block mb-1.5">
              Ihr Name
            </span>
            <input
              type="text"
              value={formData.name}
              onChange={handleChange('name')}
              placeholder="Vorname Nachname"
              required
              className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg text-brand-text placeholder:text-brand-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition"
              autoComplete="name"
            />
          </label>

          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted block mb-1.5">
              Telefon / E-Mail
            </span>
            <input
              type="text"
              value={formData.phone}
              onChange={handleChange('phone')}
              placeholder="0621 … oder name@mail.de"
              required
              className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg text-brand-text placeholder:text-brand-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition"
              autoComplete="tel"
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Wird gesendet…
            </>
          ) : (
            <>
              Angebot anfordern
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </>
          )}
        </button>

        <p className="text-xs text-brand-muted text-center leading-relaxed">
          🔒 Kostenlos & unverbindlich · Ihre Daten werden DSGVO-konform verarbeitet und nicht weitergegeben.
        </p>
      </div>
    </form>
  )
}
