import Link from 'next/link'
import clsx from 'clsx'
import { variantStyles, baseStyles } from '@/constants/styles'

export function Button ({
  variant = 'solid',
  color = 'slate',
  className,
  disabled,
  href,
  ...props
}) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className,
    disabled && 'opacity-50 cursor-not-allowed'
  )

  if (href) {
    return (
      <Link
        href={disabled ? 'javascript:void(0)' : href}
        className={className}
        aria-disabled={disabled}
        {...props}
      />
    )
  }

  return <button className={className} disabled={disabled} {...props} />
}
