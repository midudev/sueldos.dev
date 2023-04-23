import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Button } from '@/components/Button'
import Link from 'next/link'
import clsx from 'clsx'

export function MobileNavigation () {
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
          <Popover.Overlay className='fixed inset-0 bg-slate-300/50 dark:bg-slate-800/70' />
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
            className='absolute inset-x-0 flex flex-col p-4 mt-4 text-lg tracking-tight origin-top bg-white shadow-xl dark:bg-slate-900 dark:text-slate-200 top-full rounded-2xl text-slate-900 ring-1 ring-slate-900/5'
          >
            <MobileNavLink href='#sueldos'>Sueldos</MobileNavLink>
            <MobileNavLink href='#api'>API</MobileNavLink>
            <MobileNavLink href='#faq'>Preguntas frecuentes</MobileNavLink>
            <Button className='self-center w-full max-w-[300px] mt-4' disabled href='/register' color='blue'>
              <span>
                Añade tu sueldo
              </span>
            </Button>
            {/* <hr className='m-2 border-slate-300/40' />
            <MobileNavLink href='/login'>Sign in</MobileNavLink> */}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function MobileNavLink ({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className='block w-full p-2'>
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon ({ open }) {
  return (
    <svg
      aria-hidden='true'
      className='h-3.5 w-3.5 overflow-visible stroke-slate-700 dark:stroke-slate-200'
      fill='none'
      strokeWidth={2}
      strokeLinecap='round'
    >
      <path
        d='M0 1H14M0 7H14M0 13H14'
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d='M2 2L12 12M12 2L2 12'
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}
