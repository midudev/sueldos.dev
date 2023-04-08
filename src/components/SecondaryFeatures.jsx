import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { SECONDARY_FEATURES } from '@/constants'

function Feature ({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-blue-600' : 'bg-slate-500'
        )}
      >
        <svg aria-hidden='true' className='h-9 w-9' fill='none'>
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-blue-600' : 'text-slate-600'
        )}
      >
        {feature.name}
      </h3>
      <p className='mt-2 text-xl font-display text-slate-900'>
        {feature.summary}
      </p>
      <p className='mt-4 text-sm text-slate-600'>{feature.description}</p>
    </div>
  )
}

function FeaturesMobile () {
  return (
    <div className='flex flex-col px-4 mt-20 -mx-4 overflow-hidden gap-y-10 sm:-mx-6 sm:px-6 lg:hidden'>
      {SECONDARY_FEATURES.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className='max-w-2xl mx-auto' isActive />
          <div className='relative pb-10 mt-10'>
            <div className='absolute bottom-0 -inset-x-4 top-8 bg-slate-200 sm:-inset-x-6' />
            <div className='relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10'>
              <Image
                className='w-full'
                src={feature.image}
                alt=''
                sizes='52.75rem'
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop () {
  return (
    <Tab.Group as='div' className='hidden lg:mt-20 lg:block'>
      {({ selectedIndex }) => (
        <>
          <Tab.List className='grid grid-cols-3 gap-x-8'>
            {SECONDARY_FEATURES.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className='[&:not(:focus-visible)]:focus:outline-none'>
                      <span className='absolute inset-0' />
                      {feature.name}
                    </Tab>
                  )
                }}
                isActive={featureIndex === selectedIndex}
                className='relative'
              />
            ))}
          </Tab.List>
          <Tab.Panels className='relative py-16 mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 xl:px-16'>
            <div className='flex -mx-5'>
              {SECONDARY_FEATURES.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.name}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60'
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className='w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10'>
                    <Image
                      className='w-full'
                      src={feature.image}
                      alt=''
                      sizes='52.75rem'
                    />
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className='absolute inset-0 pointer-events-none rounded-4xl ring-1 ring-inset ring-slate-900/10' />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

export function SecondaryFeatures () {
  return (
    <section
      id='secondary-features'
      aria-label='Features for simplifying everyday business tasks'
      className='pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32'
    >
      <Container>
        <div className='max-w-2xl mx-auto md:text-center'>
          <h2 className='text-3xl tracking-tight font-display text-slate-900 sm:text-4xl'>
            Simplify everyday business tasks.
          </h2>
          <p className='mt-4 text-lg tracking-tight text-slate-700'>
            Because you’d probably be a little confused if we suggested you
            complicate your everyday business tasks instead.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
