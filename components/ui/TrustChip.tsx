interface TrustChipProps {
  icon: string
  label: string
  dark?: boolean
}

export default function TrustChip({ icon, label, dark }: TrustChipProps) {
  const classes = dark
    ? 'inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 rounded-full px-3 py-1.5 text-sm font-medium'
    : 'inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-brand-text border border-brand-border rounded-full px-3 py-1.5 text-sm font-medium shadow-sm'

  return (
    <span className={classes}>
      <span aria-hidden="true">{icon}</span>
      {label}
    </span>
  )
}
