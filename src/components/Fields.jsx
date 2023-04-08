import clsx from 'clsx'
import { FORM_CLASSES } from '@/constants'

function Label ({ id, children }) {
  return (
    <label
      htmlFor={id}
      className='block mb-3 text-sm font-medium text-gray-700'
    >
      {children}
    </label>
  )
}

export function TextField ({
  id,
  label,
  type = 'text',
  className = '',
  ...props
}) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={FORM_CLASSES} />
    </div>
  )
}

export function SelectField ({ id, label, className = '', ...props }) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(FORM_CLASSES, 'pr-8')} />
    </div>
  )
}
