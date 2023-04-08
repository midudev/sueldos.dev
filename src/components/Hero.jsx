import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { HeroIcon } from '@/components/Icons'

import AdevintaLogo from '@/images/logos/adevinta.webp'
import GlobantLogo from '@/images/logos/globant.webp'
import NttDataLogo from '@/images/logos/nttdata.webp'
import OracleLogo from '@/images/logos/oracle.webp'
import Stratesys from '@/images/logos/stratesys.webp'

export function Hero () {
  return (
    <Container className='relative pt-20 pb-16 text-center lg:pt-32'>
      <div
        className='-z-10 absolute inset-0 max-w-lg m-auto h-[27rem] sm:h-64 sm:max-w-7xl' style={{
          background: 'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
          filter: 'blur(118px)'
        }}
      />
      <h1 className='max-w-4xl mx-auto text-5xl font-medium tracking-tight font-display text-slate-900 sm:text-7xl'>
        Descubre{' '}
        <span className='relative text-blue-600 whitespace-nowrap'>
          <HeroIcon />
          <span className='relative'>los sueldos</span>
        </span>{' '}
        en el mundo de la programación
      </h1>
      <p className='max-w-xl mx-auto mt-6 text-lg tracking-tight text-slate-700'>
        Recopilamos datos de forma anónima para que puedas comparar tu sueldo con el de otros desarrolladores.
      </p>
      <div className='flex justify-center mt-10 gap-x-6'>
        <Button href='#sueldos'>Quiero ver los sueldos</Button>
        <Button href='#faq' variant='outline'>
          <span>¿De dónde salen los datos?</span>
        </Button>
      </div>
      <div className='mt-36 lg:mt-44'>
        <p className='text-sm font-display text-slate-700'>
          Tenemos datos de empresas como:
        </p>
        <ul
          role='list'
          className='flex items-center justify-center mt-8 gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0'
        >
          {[
            [
              { name: 'Adevinta', logo: AdevintaLogo },
              { name: 'Stratesys', logo: Stratesys },
              { name: 'Globant', logo: GlobantLogo }
            ],
            [
              { name: 'Oracle', logo: OracleLogo },
              { name: 'NTT Data', logo: NttDataLogo }
            ]
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role='list'
                className='flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0'
              >
                {group.map((company) => (
                  <li key={company.name} className='flex'>
                    <Image className='opacity-50 invert' width={100} src={company.logo} alt={company.name} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
