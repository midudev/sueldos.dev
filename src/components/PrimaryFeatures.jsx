import { useResponsive } from '@/hooks/useResponsive'
import Image from 'next/image'
import { Tab } from '@headlessui/react'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import TabsComonents from './TabsComonents'

export function PrimaryFeatures () {
  const { tabOrientation } = useResponsive()

  return (
    <section
      id='features'
      aria-label='Features for running your books'
      className='relative pt-20 overflow-hidden bg-blue-600 pb-28 sm:py-32'
    >
      <Image
        className='absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]'
        src={backgroundImage}
        alt=''
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className='relative'>
        <div className='max-w-2xl md:mx-auto md:text-center xl:max-w-none'>
          <h2 className='text-3xl tracking-tight text-white font-display sm:text-4xl md:text-5xl'>
            Everything you need to run your books.
          </h2>
          <p className='mt-6 text-lg tracking-tight text-blue-100'>
            Well everything you need if you aren’t that picky about minor
            details like tax compliance.
          </p>
        </div>
        <Tab.Group
          as='div'
          className='grid items-center grid-cols-1 pt-10 mt-16 gap-y-2 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0'
          vertical={tabOrientation === 'vertical'}
        >
          <TabsComonents />

        </Tab.Group>
      </Container>
    </section>
  )
}
