import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline-white'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
  external?: boolean
}

const variantClasses = {
  primary: 'inline-flex items-center justify-center gap-2 bg-brand-green text-brand-text font-semibold rounded-xl transition-all duration-200 hover:bg-[#00e87a] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
  secondary: 'inline-flex items-center justify-center gap-2 bg-white text-brand-dark font-semibold rounded-xl border-2 border-brand-border transition-all duration-200 hover:border-brand-dark hover:bg-brand-bg',
  ghost: 'inline-flex items-center justify-center gap-2 text-brand-dark font-semibold rounded-lg transition-all duration-200 hover:bg-brand-border/30',
  'outline-white': 'inline-flex items-center justify-center gap-2 bg-transparent text-white font-semibold rounded-xl border-2 border-white/40 transition-all duration-200 hover:bg-white/10 hover:border-white/80',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3.5 text-sm md:text-base',
  lg: 'px-8 py-4 text-base md:text-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  type = 'button',
  disabled,
  onClick,
  external,
}: ButtonProps) {
  const classes = `${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    return <Link href={href} className={classes}>{children}</Link>
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
