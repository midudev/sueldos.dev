import Link from 'next/link'

export function NavLink ({ href, children }) {
  return (
    <Link
      href={href}
      className='inline-block px-2 py-1 text-sm rounded-lg dark:text-slate-200 text-slate-700 dark:hover:bg-slate-700 dark:hover:text-slate-50 hover:bg-slate-100 hover:text-slate-900'
    >
      {children}
    </Link>
  )
}
