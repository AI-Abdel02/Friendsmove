import { trustStats } from '@/lib/routes'

export function TrustStrip() {
  return (
    <section
      className="bg-white py-10 border-y border-brand-border"
      aria-label="Unsere Kennzahlen"
    >
      <div className="container-site">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
          {trustStats.map((stat) => (
            <li
              key={stat.label}
              className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left"
            >
              <span
                className="text-2xl flex-shrink-0"
                aria-hidden
              >
                {stat.icon}
              </span>
              <div>
                <p className="font-display text-2xl font-bold text-brand-dark leading-none">
                  {stat.value}
                </p>
                <p className="text-xs text-brand-muted mt-0.5 leading-tight">{stat.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
