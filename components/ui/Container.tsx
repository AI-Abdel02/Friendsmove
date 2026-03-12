interface ContainerProps {
  children: React.ReactNode
  className?: string
  narrow?: boolean
  as?: 'div' | 'section' | 'article' | 'aside'
}

export default function Container({ children, className = '', narrow, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={`${narrow ? 'max-w-4xl' : 'max-w-7xl'} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  )
}
