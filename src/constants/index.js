import { useId } from 'react'

import { FriendsIcon, ManIcon, NoGenderIcon, WomanIcon } from './Icons'
import { IconBeach, IconHome, IconSchool, IconBuildingSkyscraper, IconSquareHalf, IconAntennaBars5, IconAntennaBars3, IconUserCode, IconAward, IconDirections, IconRocket } from '@tabler/icons-react'

import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'

import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

export const API_FEATURES_LIST = [
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

export const FAQs = [
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
        'El código está disponible en el GitHub de (@midudev), anímate a colaborar.'
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

export const BUTTON_BASE_STYLES = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none'
}

export const BUTTON_VARIANTE_STYLES = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white'
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-700 ring-slate-300 hover:text-slate-900 hover:ring-slate-600 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white'
  }
}

export const FORM_CLASSES = 'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm'

export const DATA_HAPPINESS = {
  title: 'Felicidad por su salario',
  metric: 65,
  subCategoryPercentageValues: [20, 20, 20, 20, 20],
  subCategroyColors: ['red', 'orange', 'yellow', 'lime', 'green'],
  subCategoryTitles: []
}

export const PRIMARY_FEATURES = [
  {
    title: 'Payroll',
    description:
      "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
    image: screenshotPayroll
  },
  {
    title: 'Claim expenses',
    description:
      "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
    image: screenshotExpenses
  },
  {
    title: 'VAT handling',
    description:
      "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
    image: screenshotVatReturns
  },
  {
    title: 'Reporting',
    description:
      'Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.',
    image: screenshotReporting
  }
]

export const EXPERINCE_DICTIONARY = {
  trainee: 'Trainee',
  junior: 'Junior',
  senior: 'Senior'
}

export const EXPERIENCE_FILTERS = [
  {
    value: 'all',
    text: 'Cualquier experiencia',
    icon: () => <IconUserCode stroke={1} />
  },
  {
    value: 'trainee',
    text: 'Trainee',
    icon: () => <IconSchool stroke={1} />
  },
  {
    value: 'junior',
    text: 'Junior',
    icon: () => <IconAntennaBars3 stroke={1} />
  },
  {
    value: 'senior',
    text: 'Senior',
    icon: () => <IconAntennaBars5 stroke={1} />
  }
]

export const MODALITY_FILTERS = [
  {
    value: 'all',
    text: 'Cualquier modalidad',
    icon: () => <IconUserCode stroke={1} />
  },
  {
    value: 'remote',
    text: 'Remoto',
    icon: () => <IconBeach stroke={1} />
  },
  {
    value: 'mostlyRemote',
    text: 'Casi remoto',
    icon: () => <IconHome stroke={1} />
  },
  {
    value: 'hybrid',
    text: 'Híbrido',
    icon: () => <IconSquareHalf stroke={1} />
  },
  {
    value: 'office',
    text: 'Oficina',
    icon: () => <IconBuildingSkyscraper stroke={1} />
  }
]

export const GENDERS_FILTERS = [
  {
    value: 'all',
    text: 'Cualquier género',
    icon: () => <FriendsIcon />
  },
  {
    value: 'man',
    text: 'Hombre',
    icon: () => <ManIcon />
  },
  {
    value: 'woman',
    text: 'Mujer',
    icon: () => <WomanIcon />
  },
  {
    value: 'noGender',
    text: 'Sin definir',
    icon: () => <NoGenderIcon />
  }
]

export const STUDIES_FILTERS = [
  {
    value: 'all',
    text: 'Cualquier estudio',
    icon: () => <IconUserCode stroke={1} />
  },
  {
    value: 'self',
    text: 'Autodidacta',
    icon: () => <IconDirections stroke={1} />
  },
  {
    value: 'formal',
    text: 'Universidad o Grado',
    icon: () => <IconAward stroke={1} />
  },
  {
    value: 'bootcamp',
    text: 'Bootcamp',
    icon: () => <IconRocket stroke={1} />
  }
]

export const DATA_SALARIES_BY_EXPERIENCE = [
  {
    category: 'Oficina',
    field: 'office',
    icon: <IconBuildingSkyscraper stroke={1} />
  },
  {
    category: 'Híbrido',
    field: 'hybrid',
    icon: <IconSquareHalf stroke={1} />
  },
  {
    category: '100% Remoto',
    field: 'remote',
    icon: <IconBeach stroke={1} />
  }
]

export const SECTION_IDS_SALARIES_TABS = ['salaries-general', 'salaries-users', 'salaries-filter']

export const SECONDARY_FEATURES = [
  {
    name: 'Reporting',
    summary: 'Stay on top of things with always up-to-date reporting features.',
    description:
      'We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.',
    image: screenshotProfitLoss,
    icon: function ReportingIcon () {
      const id = useId()
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1='11.5'
              y1={18}
              x2={36}
              y2='15.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='.194' stopColor='#fff' />
              <stop offset={1} stopColor='#6692F1' />
            </linearGradient>
          </defs>
          <path
            d='m30 15-4 5-4-11-4 18-4-11-4 7-4-5'
            stroke={`url(#${id})`}
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </>
      )
    }
  },
  {
    name: 'Inventory',
    summary:
      'Never lose track of what’s in stock with accurate inventory tracking.',
    description:
      'We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.',
    image: screenshotInventory,
    icon: function InventoryIcon () {
      return (
        <>
          <path
            opacity='.5'
            d='M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z'
            fill='#fff'
          />
          <path
            opacity='.3'
            d='M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z'
            fill='#fff'
          />
          <path
            d='M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z'
            fill='#fff'
          />
        </>
      )
    }
  },
  {
    name: 'Contacts',
    summary:
      'Organize all of your contacts, service providers, and invoices in one place.',
    description:
      'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
    image: screenshotContacts,
    icon: function ContactsIcon () {
      return (
        <>
          <path
            opacity='.5'
            d='M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z'
            fill='#fff'
          />
          <path
            d='M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z'
            fill='#fff'
          />
        </>
      )
    }
  }
]

export const TESTIMONIALS = [
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

export const ATTRIBUTION_TEXT = 'Datos extraídos de <a href="https://sueldos.dev/">sueldos.dev</a>'
