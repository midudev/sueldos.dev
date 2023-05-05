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

  return href && !disabled
    ? (
      <Link href={href} className={className} {...props} />
      )
    : (
      <button className={className} {...props} />
      )
}
