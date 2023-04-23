import AdevintaLogo from '@/images/logos/adevinta.webp'
import GlobantLogo from '@/images/logos/globant.webp'
import NttDataLogo from '@/images/logos/nttdata.webp'
import OracleLogo from '@/images/logos/oracle.webp'
import Stratesys from '@/images/logos/stratesys.webp'

export const BRAND_LOGOS = [
  [
    { name: 'Adevinta', logo: AdevintaLogo },
    { name: 'Stratesys', logo: Stratesys },
    { name: 'Globant', logo: GlobantLogo }
  ],
  [
    { name: 'Oracle', logo: OracleLogo },
    { name: 'NTT Data', logo: NttDataLogo }
  ]
]

export const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none'
}

export const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white'
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-700 dark:text-slate-200 ring-slate-300 hover:text-slate-900 hover:ring-slate-600 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white'
  }
}

export const formClasses = 'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm'
