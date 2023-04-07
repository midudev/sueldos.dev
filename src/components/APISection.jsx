import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark as theme } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'

const features = [
  {
    title: '/api/get-country-data',
    description:
      'Consigue todos los datos sobre sueldos de un país',
    code: `fetch('https://sueldos.dev/api/get-country-data?country=es')
      .then(res => res.json())
      .then(data => console.log(data))
              
    data = {
      "content": {
        "averageSalaries": {
          "total": 32760.097333333335,
          "gender": {
            "man": 33184.455604075694,
            "woman": 28282.533333333333,
            "noGender": 25133.333333333332
          },
          "experience": {
            "trainee": 0,
            "junior": 0,
            "senior": 0
          },
          "modality": {
            "remote": 0,
            "office": 0,
            "hybrid": 0,
            "mostlyRemote": 0
          },
          "genderAndExperience": {
            "trainee": {
              "man": 19178.029411764706,
              "woman": 19226.666666666668,
              "noGender": null
            },
            "junior": {
              "man": 28438.018633540374,
              "woman": 28283.870967741936,
              "noGender": 31000
            },
            "senior": {
              "man": 44427.83269961977,
              "woman": 37982.28571428572,
              "noGender": 22200
            }
          }
        },
        "count": {
          "total": 750,
          "gender": {
            "man": 687,
            "woman": 60,
            "noGender": 3
          },
          "modality": {
            "remote": 392,
            "office": 89,
            "hybrid": 135,
            "mostlyRemote": 132,
            "undefined": null
          },
          "experience": {
            "junior": 354,
            "senior": 279,
            "trainee": 117
          },
          "studies": {
            "bootcamp": 66,
            "formal": 548,
            "self": 97,
            "undefined": null
          },
          "genderAndExperience": {
            "junior": {
              "man": 322,
              "woman": 31,
              "noGender": 1
            },
            "senior": {
              "man": 263,
              "woman": 14,
              "noGender": 2
            },
            "trainee": {
              "man": 102,
              "woman": 15,
              "noGender": 0
            }
          }
        }
      }
    }`
  },
  {
    title: '/api/filtered-salary',
    description:
      'Consigue el sueldo medio anual de un país filtrando por género, experiencia y modalidad de trabajo',
    code: `fetch('https://sueldos.dev/api/filtered-salary?country=es')
  .then(res => res.json())
  .then(data => console.log(data))
          
data = {
  "content": {
    "averageSalaries": {
      "total": 32760.097333333335,
      "gender": {
        "man": 33184.455604075694,
        "woman": 28282.533333333333,
        "noGender": 25133.333333333332
      },
      "experience": {
        "trainee": 0,
        "junior": 0,
        "senior": 0
      },
      "modality": {
        "remote": 0,
        "office": 0,
        "hybrid": 0,
        "mostlyRemote": 0
      },
      "genderAndExperience": {
        "trainee": {
          "man": 19178.029411764706,
          "woman": 19226.666666666668,
          "noGender": null
        },
        "junior": {
          "man": 28438.018633540374,
          "woman": 28283.870967741936,
          "noGender": 31000
        },
        "senior": {
          "man": 44427.83269961977,
          "woman": 37982.28571428572,
          "noGender": 22200
        }
      }
    },
    "count": {
      "total": 750,
      "gender": {
        "man": 687,
        "woman": 60,
        "noGender": 3
      },
      "modality": {
        "remote": 392,
        "office": 89,
        "hybrid": 135,
        "mostlyRemote": 132,
        "undefined": null
      },
      "experience": {
        "junior": 354,
        "senior": 279,
        "trainee": 117
      },
      "studies": {
        "bootcamp": 66,
        "formal": 548,
        "self": 97,
        "undefined": null
      },
      "genderAndExperience": {
        "junior": {
          "man": 322,
          "woman": 31,
          "noGender": 1
        },
        "senior": {
          "man": 263,
          "woman": 14,
          "noGender": 2
        },
        "trainee": {
          "man": 102,
          "woman": 15,
          "noGender": 0
        }
      }
    }
  }
}`
  }
]

export function APISection () {
  const [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange ({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id='api'
      aria-label='Features for running your books'
      className='relative pt-20 overflow-hidden bg-blue-600 pb-28 sm:py-32'
    >
      <Image
        className='absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]'
        src={backgroundImage}
        alt=''
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className='relative'>
        <div className='max-w-2xl md:mx-auto md:text-center xl:max-w-none'>
          <h2 className='text-3xl tracking-tight text-white font-display sm:text-4xl md:text-5xl'>
            Documentación de la API
          </h2>
          <p className='mt-6 text-lg tracking-tight text-blue-100'>
            Usa los datos de sueldos.dev sin límite.<br />Debes <span className='border-b '>añadir un enlace a sueldos.dev en tu sitio web al usar la API.</span>
          </p>
        </div>
        <Tab.Group
          as='div'
          className='grid items-center grid-cols-1 pt-10 mt-16 gap-y-2 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0'
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className='flex pb-4 -mx-4 overflow-x-auto sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5'>
                <Tab.List className='relative z-10 flex px-4 gap-x-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal'>
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6 font-mono',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
                      )}
                    >
                      <Tab>
                        <h3
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white'
                          )}
                        >
                          <span className='absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none' />
                          {feature.title}
                        </h3>
                      </Tab>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className='lg:col-span-7'>
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className='relative sm:px-6 lg:hidden'>
                      <div className='absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl' />
                      <p className='relative max-w-2xl mx-auto text-base text-white sm:text-center'>
                        {feature.description}
                      </p>
                    </div>
                    <div className='mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]'>
                      <div className='editor w-full overflow-scroll h-96 [&>pre]:p-4!'>
                        <SyntaxHighlighter
                          language='javascript'
                          style={theme}
                        >{feature.code}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
