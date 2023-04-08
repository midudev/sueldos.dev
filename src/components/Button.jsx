import Link from 'next/link'
import clsx from 'clsx'
import { BUTTON_BASE_STYLES, BUTTON_VARIANTE_STYLES } from '@/constants'

export function Button ({
  variant = 'solid',
  color = 'slate',
  className,
  disabled,
  href,
  ...props
}) {
  className = clsx(
    BUTTON_BASE_STYLES[variant],
    BUTTON_VARIANTE_STYLES[variant][color],
    className,
    disabled && 'opacity-50 cursor-not-allowed'
  )

  return href
    ? (
      <Link href={href} className={className} {...props} />
      )
    : (
      <button className={className} {...props} />
      )
}
