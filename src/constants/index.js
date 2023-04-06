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
      question: '¿Cuándo se activarán los paises de Latinoamérica?',
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