import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { HeroIcon } from '@/components/Icons'

import BrandLogoList from './BrandLogoList'

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
        <BrandLogoList />
      </div>
    </Container>
  )
}
