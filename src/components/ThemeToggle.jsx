import { useTheme } from '@/contexts/Theme'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export default function ThemeToggle () {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Activar modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
      className='relative flex items-center justify-between gap-4 p-1 border rounded-full group border-slate-700 dark:border-slate-300'
    >
      <div className={`absolute w-8 h-8 transition-all duration-200 ease-in-out rounded-full bg-slate-700 ${theme === 'light' ? 'left-0' : 'right-0'}`} />
      <SunIcon aria-hidden='true' className='w-6 h-6 text-yellow-500 group-hover:text-orange-400' />
      <MoonIcon aria-hidden='true' className='w-6 h-6 text-yellow-400 group-hover:text-orange-400' />
    </button>
  )
}
