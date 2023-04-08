import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CheckIcon, SwirlyDoodleIcon } from '@/components/Icons'

function Plan ({ name, price, description, href, features, featured = false }) {
  return (
    <section
      className={clsx(
        'flex flex-col rounded-3xl px-6 sm:px-8',
        featured ? 'order-first bg-blue-600 py-8 lg:order-none' : 'lg:py-8'
      )}
    >
      <h3 className='mt-5 text-lg text-white font-display'>{name}</h3>
      <p
        className={clsx(
          'mt-2 text-base',
          featured ? 'text-white' : 'text-slate-400'
        )}
      >
        {description}
      </p>
      <p className='order-first text-5xl font-light tracking-tight text-white font-display'>
        {price}
      </p>
      <ul
        role='list'
        className={clsx(
          'order-last mt-10 flex flex-col gap-y-3 text-sm',
          featured ? 'text-white' : 'text-slate-200'
        )}
      >
        {features.map((feature) => (
          <li key={feature} className='flex'>
            <CheckIcon className={featured ? 'text-white' : 'text-slate-400'} />
            <span className='ml-4'>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        href={href}
        variant={featured ? 'solid' : 'outline'}
        color='white'
        className='mt-8'
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        Get started
      </Button>
    </section>
  )
}

export function Pricing () {
  return (
    <section
      id='pricing'
      aria-label='Pricing'
      className='py-20 bg-slate-900 sm:py-32'
    >
      <Container>
        <div className='md:text-center'>
          <h2 className='text-3xl tracking-tight text-white font-display sm:text-4xl'>
            <span className='relative whitespace-nowrap'>
              <SwirlyDoodleIcon className='absolute top-1/2 left-0 h-[1em] w-full fill-blue-400' />
              <span className='relative'>Simple pricing,</span>
            </span>{' '}
            for everyone.
          </h2>
          <p className='mt-4 text-lg text-slate-400'>
            It doesn’t matter what size your business is, our software won’t
            work well for you.
          </p>
        </div>
        <div className='grid max-w-2xl grid-cols-1 mt-16 -mx-4 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8'>
          <Plan
            name='Starter'
            price='$9'
            description='Good for anyone who is self-employed and just getting started.'
            href='/register'
            features={[
              'Send 10 quotes and invoices',
              'Connect up to 2 bank accounts',
              'Track up to 15 expenses per month',
              'Manual payroll support',
              'Export up to 3 reports'
            ]}
          />
          <Plan
            featured
            name='Small business'
            price='$15'
            description='Perfect for small / medium sized businesses.'
            href='/register'
            features={[
              'Send 25 quotes and invoices',
              'Connect up to 5 bank accounts',
              'Track up to 50 expenses per month',
              'Automated payroll support',
              'Export up to 12 reports',
              'Bulk reconcile transactions',
              'Track in multiple currencies'
            ]}
          />
          <Plan
            name='Enterprise'
            price='$39'
            description='For even the biggest enterprise companies.'
            href='/register'
            features={[
              'Send unlimited quotes and invoices',
              'Connect up to 15 bank accounts',
              'Track up to 200 expenses per month',
              'Automated payroll support',
              'Export up to 25 reports, including TPS'
            ]}
          />
        </div>
      </Container>
    </section>
  )
}
