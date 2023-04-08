import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { MobileNavIcon } from '@/components/Icons'

function MobileNavLink ({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className='block w-full p-2'>
      {children}
    </Popover.Button>
  )
}

function MobileNavigation () {
  return (
    <Popover>
      <Popover.Button
        className='relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none'
        aria-label='Toggle Navigation'
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='duration-150 ease-in'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Popover.Overlay className='fixed inset-0 bg-slate-300/50' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            as='div'
            className='absolute inset-x-0 flex flex-col p-4 mt-4 text-lg tracking-tight origin-top bg-white shadow-xl top-full rounded-2xl text-slate-900 ring-1 ring-slate-900/5'
          >
            <MobileNavLink href='#sueldos'>Sueldos</MobileNavLink>
            <MobileNavLink href='#api'>API</MobileNavLink>
            <MobileNavLink href='#faq'>Preguntas frecuentes</MobileNavLink>
            {/* <hr className='m-2 border-slate-300/40' />
            <MobileNavLink href='/login'>Sign in</MobileNavLink> */}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

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
