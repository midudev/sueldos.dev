import Link from 'next/link'

export function NavLink ({ href, children }) {
  return (
    <Link
      href={href}
      className='inline-block px-2 py-1 text-sm rounded-lg text-slate-700 dark:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900'
    >
      {children}
    </Link>
  )
}
