import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { parse } from 'csv/sync'

const REMOTE_MODALITIES = {
  'Sí, 100% remoto': 'remote',
  'Tengo que ir a la oficina de forma regular': 'office',
  'Modalidad híbrida (más de 1 día a la semana o más de 4 al mes)': 'hybrid',
  'Algún día tengo que ir a la oficina (1 día a la semana o menos)': 'mostlyRemote'
}

const EXPERIENCE = {
  'Trainee (0-1 años)': 'trainee',
  'Junior (1-4 años)': 'junior',
  'Senior (+5 años)': 'senior'
}

const STUDIES = {
  Bootcamp: 'bootcamp',
  'Formación reglada o universitaria': 'formal',
  Autodidacta: 'self'
}

// const FILTERS = {
//   modality: 'remote',
//   experience: 'junior',
//   gender: 'man'
// }

const DATA_PATH = join(process.cwd(), './data')
const DATA_ES_FILE_PATH = join(DATA_PATH, 'es.csv')
const OUTPUT_ES_FILE_PATH = join(DATA_PATH, 'es.json')

const content = await readFile(DATA_ES_FILE_PATH)
console.log(content.toString())
const records = parse(content.toString(), { bom: true, columns: true })

const averageSalaries = {
  total: 0,
  gender: {
    man: 0,
    woman: 0,
    noGender: 0
  },
  modality: {
    remote: 0,
    office: 0,
    hybrid: 0,
    mostlyRemote: 0
  },
  experience: {
    trainee: 0,
    junior: 0,
    senior: 0
  },
  studies: {
    bootcamp: 0,
    formal: 0,
    self: 0
  },
  modalityAndExperience: {
    trainee: {
      remote: 0,
      office: 0,
      hybrid: 0,
      mostlyRemote: 0
    },
    junior: {
      remote: 0,
      office: 0,
      hybrid: 0,
      mostlyRemote: 0
    },
    senior: {
      remote: 0,
      office: 0,
      hybrid: 0,
      mostlyRemote: 0
    }
  },
  genderAndExperience: {
    trainee: {
      man: 0,
      woman: 0,
      noGender: 0
    },
    junior: {
      man: 0,
      woman: 0,
      noGender: 0
    },
    senior: {
      man: 0,
      woman: 0,
      noGender: 0
    }
  }
}

const count = {
  total: 0,
  gender: {
    man: 0,
    woman: 0,
    noGender: 0
  },
  modality: {
    remote: 0,
    office: 0,
    hybrid: 0,
    mostlyRemote: 0
  },
  experience: {
    trainee: 0,
    junior: 0,
    senior: 0
  },
  studies: {
    bootcamp: 0,
    formal: 0,
    self: 0
  },
  modalityAndExperience: {
    trainee: {
      remote: 0,
      office: 0,
      hybrid: 0,
      mostlyRemote: 0
    },
    junior: {
      remote: 0,
      office: 0,
      hybrid: 0,
      mostlyRemote: 0
    },
    senior: {
      remote: 0,
      office: 0,
      hybrid: 0,
      mostlyRemote: 0
    }
  },
  genderAndExperience: {
    junior: {
      man: 0,
      woman: 0,
      noGender: 0
    },
    senior: {
      man: 0,
      woman: 0,
      noGender: 0
    },
    trainee: {
      man: 0,
      woman: 0,
      noGender: 0
    }
  }
}

const averageHappy = {
  total: 0,
  gender: {
    woman: 0,
    man: 0,
    noGender: 0
  },
  experience: {
    junior: 0,
    senior: 0,
    trainee: 0
  },
  modality: {
    remote: 0,
    office: 0,
    hybrid: 0,
    mostlyRemote: 0
  }
}

records.forEach(record => {
  const {
    salary,
    experience,
    gender,
    happy,
    remote,
    studies
  } = record

  const $experience = EXPERIENCE[experience]
  const $modality = REMOTE_MODALITIES[remote]
  const $studies = STUDIES[studies]
  let $gender = 'noGender'

  console.log($modality)

  if (gender === 'Hombre') {
    $gender = 'man'
    count.gender.man++
    averageHappy.gender.man += +happy
    averageSalaries.gender.man += +salary
  } else if (gender === 'Mujer') {
    $gender = 'woman'
    count.gender.woman++
    averageHappy.gender.woman += +happy
    averageSalaries.gender.woman += +salary
  } else {
    count.gender.noGender++
    averageHappy.gender.noGender += +happy
    averageSalaries.gender.noGender += +salary
  }

  if (count.modality[$modality] == null) {
    console.log('Modality not found', remote)
  }

  if (count.experience[$experience] == null) {
    console.log('Experience not found', experience)
  }

  if (count.studies[$studies] == null) {
    console.log('Studies not found', studies)
  }

  count.experience[$experience]++
  count.modality[$modality]++
  count.studies[$studies]++
  count.total++
  count.genderAndExperience[$experience][$gender]++
  count.modalityAndExperience[$experience][$modality]++

  averageHappy.total += +happy
  averageSalaries.total += +salary
  averageSalaries.modality[$modality] += +salary
  averageSalaries.experience[$experience] += +salary
  averageSalaries.studies[$studies] += +salary
  averageSalaries.genderAndExperience[$experience][$gender] += +salary
  averageSalaries.modalityAndExperience[$experience][$modality] += +salary
})

// calculate average salaries using the expected division
averageSalaries.total = averageSalaries.total / records.length

function divideByCount (average, count) {
  Object.keys(average).forEach(key => {
    if (key === 'total') return

    if (typeof average[key] === 'object') {
      divideByCount(average[key], count[key])
    } else {
      average[key] = Math.round(average[key] / count[key])
    }
  })
}

divideByCount(averageSalaries, count)

await writeFile(OUTPUT_ES_FILE_PATH, JSON.stringify({ averageSalaries, count }, null, 2))

console.log(`Average salary: ${averageSalaries.total}`)

console.log('-- Count --')
console.log(`Man count: ${count.gender.man}`)
console.log(`Woman count: ${count.gender.woman}`)
console.log(`No Gender count: ${count.gender.noGender}`)

console.log(`Remote count: ${count.modality.remote}`)
console.log(`Office count: ${count.modality.office}`)
console.log(`Hybrid count: ${count.modality.hybrid}`)
console.log(`Mostly remote count: ${count.modality.mostlyRemote}`)

console.log(`Junior count: ${count.experience.junior}`)
console.log(`Senior count: ${count.experience.senior}`)
console.log(`Trainee count: ${count.experience.trainee}`)

console.log(`Bootcamp count: ${count.studies.bootcamp}`)
console.log(`Formal count: ${count.studies.formal}`)
console.log(`Self count: ${count.studies.self}`)

console.log('--- Average Salaries --- ')

console.log('-- Happiness --')
console.log(`Average happiness: ${averageHappy.total / records.length}`)
console.log(`Man: ${averageHappy.gender.man / count.gender.man}`)
console.log(`Woman: ${averageHappy.gender.woman / count.gender.woman}`)
console.log(`No Gender: ${averageHappy.gender.woman / count.gender.noGender}`)
