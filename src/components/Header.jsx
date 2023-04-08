import { MobileNavigation } from './MobileNavigation'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import Link from 'next/link'

export function Header () {
  return (
    <header className='py-10'>
      <Container>
        <nav className='relative z-50 flex justify-between'>
          <div className='flex items-center md:gap-x-12'>
            <Link href='/' aria-label='Página principal' className='flex'>
              <Logo className='w-auto h-8' />
            </Link>
            <div className='hidden md:flex md:gap-x-6'>
              <NavLink href='#sueldos'>Sueldos</NavLink>
              <NavLink href='#api'>API</NavLink>
              <NavLink href='#faq'>Preguntas frecuentes</NavLink>
            </div>
          </div>
          <div className='flex items-center gap-x-5 md:gap-x-8'>
            <div className='hidden'>
              <NavLink href='/login'>Iniciar sesión</NavLink>
            </div>
            <Button disabled href='/register' color='blue'>
              <span>
                Añade tu sueldo
              </span>
            </Button>
            <div className='-mr-1 md:hidden'>
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
