interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export default function SectionHeader({ eyebrow, title, description, centered, light, className = '' }: SectionHeaderProps) {
  const align = centered ? 'text-center' : ''
  const textColor = light ? 'text-white' : 'text-brand-text'
  const mutedColor = light ? 'text-white/70' : 'text-brand-muted'
  const eyebrowColor = light ? 'text-brand-green' : 'text-brand-dark'
  const borderColor = light ? 'bg-brand-green/30' : 'bg-brand-green'

  return (
    <div className={`${align} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-4 ${align}`}>
          <span className={`inline-block w-8 h-0.5 ${borderColor}`} aria-hidden="true" />
          <span className={`text-sm font-semibold uppercase tracking-widest ${eyebrowColor}`}>{eyebrow}</span>
          <span className={`inline-block w-8 h-0.5 ${borderColor}`} aria-hidden="true" />
        </div>
      )}
      <h2 className={`${textColor} text-balance mb-4`}>{title}</h2>
      {description && (
        <p className={`${mutedColor} text-lg max-w-2xl ${centered ? 'mx-auto' : ''}`}>{description}</p>
      )}
    </div>
  )
}
