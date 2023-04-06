import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { FAQs } from '@/constants'

export function Faqs () {
  return (
    <section
      id='faq'
      aria-labelledby='faq-title'
      className='relative py-20 overflow-hidden bg-slate-50 sm:py-32'
    >
      <Image
        className='absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4'
        src={backgroundImage}
        alt=''
        width={1558}
        height={946}
        unoptimized
      />
      <Container className='relative'>
        <div className='max-w-2xl mx-auto lg:mx-0'>
          <h2
            id='faq-title'
            className='text-3xl tracking-tight font-display text-slate-900 sm:text-4xl'
          >
            Preguntas frecuentes
          </h2>
          <p className='mt-4 text-lg tracking-tight text-slate-700'>
            Si no encuentras aquí tu pregunta, puedes acceder al <a className='underline transition-all hover:text-blue-800' href='https://discord.gg/midudev' target='_blank'>Discord de la comunidad</a> para que te ayuden.
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
                    <h3 className='text-lg leading-6 font-display text-slate-900'>
                      {faq.question}
                    </h3>
                    <p className='mt-1 text-sm text-slate-700'>{faq.answer}</p>
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
