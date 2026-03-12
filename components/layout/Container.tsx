import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article'
}

export function Container({ children, className = '', as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={`container-site ${className}`}>
      {children}
    </Tag>
  )
}

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  dark?: boolean
  alt?: boolean
  'aria-label'?: string
  'aria-labelledby'?: string
}

export function Section({
  children,
  className = '',
  id,
  dark = false,
  alt = false,
  ...rest
}: SectionProps) {
  const bg = dark ? 'bg-brand-dark' : alt ? 'bg-white' : 'bg-brand-bg'

  return (
    <section id={id} className={`section-py ${bg} ${className}`} {...rest}>
      <Container>{children}</Container>
    </section>
  )
}
