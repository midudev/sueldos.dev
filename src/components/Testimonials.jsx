import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import { QuoteIcon } from '@/components/Icons'

const testimonials = [
  [
    {
      content:
        'TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.',
      author: {
        name: 'Sheryl Berge',
        role: 'CEO at Lynch LLC',
        image: avatarImage1
      }
    },
    {
      content:
        'I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.',
      author: {
        name: 'Amy Hahn',
        role: 'Director at Velocity Industries',
        image: avatarImage4
      }
    }
  ],
  [
    {
      content:
        'The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.',
      author: {
        name: 'Leland Kiehn',
        role: 'Founder of Kiehn and Sons',
        image: avatarImage5
      }
    },
    {
      content:
        'There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.',
      author: {
        name: 'Erin Powlowski',
        role: 'COO at Armstrong Inc',
        image: avatarImage2
      }
    }
  ],
  [
    {
      content:
        'I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.',
      author: {
        name: 'Peter Renolds',
        role: 'Founder of West Inc',
        image: avatarImage3
      }
    },
    {
      content:
        'This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.',
      author: {
        name: 'Amy Hahn',
        role: 'Director at Velocity Industries',
        image: avatarImage4
      }
    }
  ]
]

export function Testimonials () {
  return (
    <section
      id='testimonials'
      aria-label='What our customers are saying'
      className='py-20 bg-slate-50 sm:py-32'
    >
      <Container>
        <div className='max-w-2xl mx-auto md:text-center'>
          <h2 className='text-3xl tracking-tight font-display text-slate-900 sm:text-4xl'>
            Lo que dicen de nosotros
          </h2>
          <p className='mt-4 text-lg tracking-tight text-slate-700'>
            La comunidad de desarrollo y programación opina sobre esta iniciativa
          </p>
        </div>
        <ul
          role='list'
          className='grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-16 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3'
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role='list' className='flex flex-col gap-y-6 sm:gap-y-8'>
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className='relative p-6 bg-white shadow-xl rounded-2xl shadow-slate-900/10'>
                      <QuoteIcon className='absolute top-6 left-6 fill-slate-100' />
                      <blockquote className='relative'>
                        <p className='text-lg tracking-tight text-slate-900'>
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className='relative flex items-center justify-between pt-6 mt-6 border-t border-slate-100'>
                        <div>
                          <div className='text-base font-display text-slate-900'>
                            {testimonial.author.name}
                          </div>
                          <div className='mt-1 text-sm text-slate-500'>
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className='overflow-hidden rounded-full bg-slate-50'>
                          <Image
                            className='object-cover h-14 w-14'
                            src={testimonial.author.image}
                            alt=''
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
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
