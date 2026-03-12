import Link from 'next/link'

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
  breadcrumbs?: Breadcrumb[]
  cta?: { label: string; href: string }
  ctaPhone?: boolean
  badges?: string[]
}

export default function PageHero({ eyebrow, title, description, breadcrumbs, cta, ctaPhone, badges }: PageHeroProps) {
  return (
    <section className="bg-brand-dark pt-12 pb-16 md:pt-16 md:pb-20" aria-labelledby="page-hero-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white/70 transition-colors">{crumb.label}</Link>
                  ) : (
                    <span className="text-white/70" aria-current="page">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="max-w-3xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 bg-brand-green rounded-full" aria-hidden="true"></span>
              <span className="text-brand-green text-sm font-medium">{eyebrow}</span>
            </div>
          )}

          <h1 id="page-hero-title" className="text-white text-balance mb-5">{title}</h1>

          {description && (
            <p className="text-white/70 text-lg leading-relaxed mb-8">{description}</p>
          )}

          {badges && badges.length > 0 && (
            <div className="flex flex-wrap gap-2.5 mb-8">
              {badges.map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/10 rounded-full px-3 py-1.5 text-white/80 text-sm">
                  {badge}
                </span>
              ))}
            </div>
          )}

          {(cta || ctaPhone) && (
            <div className="flex flex-wrap gap-3">
              {cta && (
                <Link
                  href={cta.href}
                  className="inline-flex items-center gap-2 bg-brand-green text-brand-text font-bold px-6 py-3.5 rounded-xl hover:bg-[#00e87a] transition-all"
                >
                  {cta.label}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
