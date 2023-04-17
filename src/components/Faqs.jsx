import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { DISCORD_URL, FAQs } from '@/constants'

export function Faqs () {
  return (
    <section
      id='faq'
      aria-labelledby='faq-title'
      className='relative py-20 overflow-hidden bg-slate-50 dark:bg-gray-950 sm:py-32'
    >
      <Image
        className='absolute dark:hidden top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4'
        src={backgroundImage}
        alt=''
        width={1558}
        height={946}
        unoptimized
      />
      <div
        className='absolute hidden dark:block inset-0 max-w-lg m-auto h-[27rem] sm:h-64 sm:max-w-7xl' style={{
          background: 'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
          filter: 'blur(118px)'
        }}
      />
      <Container className='relative'>
        <div className='max-w-2xl mx-auto lg:mx-0'>
          <h2
            id='faq-title'
            className='text-3xl tracking-tight font-display text-slate-900 dark:text-slate-50 sm:text-4xl'
          >
            Preguntas frecuentes
          </h2>
          <p className='mt-4 text-lg tracking-tight text-slate-700 dark:text-slate-200'>
            Si no encuentras aquí tu pregunta, puedes acceder al <a className='underline transition-all hover:text-blue-800' href={DISCORD_URL}>Discord de la comunidad</a> para que te ayuden.
          </p>
        </div>
        <ul
          role='list'
          className='grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 lg:max-w-none lg:grid-cols-3'
        >
          {FAQs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role='list' className='flex flex-col gap-y-8'>
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className='text-lg leading-6 font-display text-slate-900 dark:text-slate-50'>
                      {faq.question}
                    </h3>
                    <p className='mt-1 text-sm text-slate-700 dark:text-slate-200'>{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
