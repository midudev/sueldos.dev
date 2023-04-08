import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { GitHubIcon, TwitterIcon } from '@/components/Icons'

export function Footer () {
  return (
    <footer className='bg-slate-50'>
      <Container>
        <div className='py-16'>
          <Logo className='w-auto h-10 mx-auto' />
        </div>
        <div className='flex flex-col items-center py-10 border-t border-slate-400/10 sm:flex-row-reverse sm:justify-between'>
          <div className='flex gap-x-6'>
            <Link
              target='_blank'
              href='https://twitter.com/midudev'
              className='group'
              aria-label='Twitter de Midudev'
            >
              <TwitterIcon />
            </Link>
            <Link
              target='_blank'
              href='https://github.com/midudev'
              className='group'
              aria-label='sueldos.dev on GitHub'
            >
              <GitHubIcon />
            </Link>
          </div>
          <p className='mt-6 text-sm text-slate-500 sm:mt-0'>
            Desarrollado por la comunidad de midudev - {new Date().getFullYear()}<br />
            &copy; Los logos y marcas registradas pertenecen a sus respectivos dueños.
          </p>
        </div>
      </Container>
    </footer>
  )
}
