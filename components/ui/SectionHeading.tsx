interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
  id,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${light ? 'text-brand-green' : 'text-brand-muted'}`}>
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight ${
          light ? 'text-white' : 'text-brand-dark'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/70' : 'text-brand-muted'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
