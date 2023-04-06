import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { parse } from 'csv/sync'

const REMOTE_MODALITIES = {
  'Sí, 100% remoto': 'remote',
  'Tengo que ir a la oficina de forma regular': 'office',
  'Modalidad híbrida (más de 1 día a la semana o más de 4 al mes)': 'hybrid',
  'Algún día tengo que ir a la oficina (1 día a la semana o menos)': 'mostlyRemote'
}

const EXPERIENCE = {
  'Junior (1-4 años)': 'junior',
  'Senior (+5 años)': 'senior',
  'Trainee (0-1 años)': 'trainee'
}

const STUDIES = {
  Bootcamp: 'bootcamp',
  'Formación reglada o universitaria': 'formal',
  Autodidacta: 'self'
}

const GENDER = {
  Hombre: 'man',
  Mujer: 'woman',
  'Prefiero no decirlo': 'noGender'
}

function matchFilter (filterValue, recordValue) {
  console.log(filterValue)
  if (filterValue === undefined || filterValue === 'all') return true
  return filterValue === recordValue
}

export default async function handler (req, res) {
  const country = 'es' // eslint-disable-line
  const { gender, modality, experience, studies } = req.query

  const path = join(process.cwd(), './data/es.csv')
  const content = await readFile(path)
  const records = parse(content.toString(), { bom: true, columns: true })

  const result = {
    count: 0,
    salary: 0,
    happiness: 0
  }

  records.forEach(record => {
    const { happy } = record

    const $gender = GENDER[record.gender]
    const $experience = EXPERIENCE[record.experience]
    const $remote = REMOTE_MODALITIES[record.remote]
    const $study = STUDIES[record.study]

    // check if record matches filters
    if (
      matchFilter(gender, $gender) &&
      matchFilter(modality, $remote) &&
      matchFilter(experience, $experience) &&
      matchFilter(studies, $study)
    ) {
      result.count++
      result.salary += Number(record.salary)
      result.happiness += Number(happy)
    }
  })

  result.salary = Math.round(result.salary / result.count)
  result.happiness = Math.round(result.happiness / result.count * 100) / 100

  res.status(200).json({ result })
}
