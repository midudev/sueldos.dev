import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: '¿De dónde salen los datos?',
      answer:
        'Actualmente, los datos vienen de una encuesta anónima con más de 4000 desarrolladores de España y Latinoamérica. Más adelante podrás enviar tu sueldo de forma anónima desde esta página.'
    },
    {
      question: '¿Puedo usar los datos en mi página web?',
      answer: 'Sí. Siempre y cuando nos cites como fuente.'
    },
    {
      question: '¿Cuándo se activarán los países de Latinoamérica?',
      answer:
        'Estamos filtrando y arreglando los datos para que sean lo más precisos posibles. En breve estará disponible.'
    }
  ],
  [
    {
      question: '¿Son fiables los datos?',
      answer:
        'Intentamos filtrar los datos claramente erróneos, pero no podemos garantizar que todos los datos sean correctos o ciertos. Pero confiamos que la gente responde de buena fe al ser una encuesta anónima.'
    },
    {
      question:
        '¿Se puede filtrar por compañía o por ciudad?',
      answer:
        'Poco a poco vamos a ir añadiendo más filtros. El primero en el que estamos trabajando es el de filtrar por empresa.'
    },
    {
      question:
        'Me gustaría añadir mi sueldo de forma anónima, ¿cómo puedo hacerlo?',
      answer:
        'Actualmente la encuesta está cerrada, pero estamos trabajando para que puedas añadirlo directamente desde esta página.'
    }
  ],
  [
    {
      question: '¿Dónde encuentro el código de la página?',
      answer:
        'Por ahora no está disponible, pero pronto lo tendrás en GitHub.'
    },
    {
      question: '¿Dónde puedo encontrar más información sobre el proyecto?',
      answer: 'Este proyecto ha sido desarrollado por Miguel Ángel Durán (@midudev). Puedes saber más del proyecto en su Twitter o Twitch.'
    },
    {
      question: '¿Cómo puedo apoyar este proyecto?',
      answer:
        'Compartiéndolo en las redes sociales. También puedes apoyar a Miguel Ángel Durán en su Patreon o suscribiéndote a su canal de Twitch.'
    }
  ]
]

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
          {faqs.map((column, columnIndex) => (
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
