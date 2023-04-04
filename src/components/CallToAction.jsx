import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction () {
  return (
    <section
      id='get-started-today'
      className='relative py-32 overflow-hidden bg-blue-600'
    >
      <Image
        className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-none'
        src={backgroundImage}
        alt=''
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className='relative'>
        <div className='max-w-lg mx-auto text-center'>
          <h2 className='text-3xl tracking-tight text-white font-display sm:text-4xl'>
            ¡Ayúdanos a tener más datos!
          </h2>
          <p className='mt-4 text-lg tracking-tight text-white'>
            Deja tu sueldo de forma completamente anónima y ayúdanos a
            tener más datos para poder hacer un análisis más preciso.
          </p>
          <Button href='/register' color='white' className='mt-10'>
            ¡Voy a dejar mi sueldo de forma anónima!
          </Button>
        </div>
      </Container>
    </section>
  )
}
