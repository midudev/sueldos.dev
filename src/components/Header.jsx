import dynamic from 'next/dynamic'
import { MobileNavigation } from './MobileNavigation'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import ThemeProvider from '@/contexts/Theme'
import Link from 'next/link'

const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), {
  ssr: false
})

export function Header () {
  return (
    <header className='py-10'>
      <Container>
        <nav className='relative z-50 flex justify-between'>
          <div className='flex items-center md:gap-x-8'>
            <Link href='/' aria-label='Página principal' className='flex'>
              <Logo className='w-auto h-8' />
            </Link>
            <div className='hidden md:flex md:gap-x-4'>
              <NavLink href='#sueldos'>Sueldos</NavLink>
              <NavLink href='#api'>API</NavLink>
              <NavLink href='#faq'>Preguntas frecuentes</NavLink>
            </div>
          </div>
          <div className='flex items-center gap-x-5 md:gap-x-8'>
            <div className='hidden'>
              <NavLink href='/login'>Iniciar sesión</NavLink>
            </div>
            <Button className='hidden md:inline-flex' disabled href='/register' color='blue'>
              <span>
                Añade tu sueldo
              </span>
            </Button>
            <ThemeProvider>
              <div className='w-[74px]'>
                <ThemeToggle />
              </div>
            </ThemeProvider>
            <div className='-mr-1 md:hidden'>
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
