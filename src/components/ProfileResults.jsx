import { IconUsersGroup } from '@tabler/icons-react'
import { Grid, Card, Title, DonutChart, Legend } from '@tremor/react'
import { SalariesSectionTitle } from './SalariesSectionTitle'

const generateGender = count => {
  return [
    {
      name: 'Hombre',
      count: count.gender.man
    },
    {
      name: 'Mujer',
      count: count.gender.woman
    },
    {
      name: 'Sin definir',
      count: count.gender.noGender
    }
  ]
}

const generateExperience = count => {
  return [
    {
      name: 'Trainee',
      count: count.experience.trainee
    },
    {
      name: 'Junior',
      count: count.experience.junior
    },
    {
      name: 'Senior',
      count: count.experience.senior
    }
  ]
}

const generateModality = count => {
  return [
    {
      name: '100% Remoto',
      count: count.modality.remote
    },
    {
      name: 'Casi remoto',
      count: count.modality.mostlyRemote
    },
    {
      name: 'Híbrido',
      count: count.modality.hybrid
    },
    {
      name: 'Oficina',
      count: count.modality.office
    }
  ]
}

const generateStudies = count => {
  return [
    {
      name: 'Autodidacta',
      count: count.studies.self
    },
    {
      name: 'Universidad o Grado',
      count: count.studies.formal
    },
    {
      name: 'Bootcamp',
      count: count.studies.bootcamp
    }
  ]
}

export function ProfileResults ({ count }) {
  return (
    <>
      <SalariesSectionTitle id='salaries-users' icon={<IconUsersGroup />} title='Perfil encuestados' />
      <Grid numColsSm={2} numColsLg={4} className='gap-6'>
        <Card className='max-w-lg'>
          <Title className='text-center'>
            Por género
          </Title>
          <DonutChart
            variant='pie'
            className='mt-6'
            data={generateGender(count)}
            category='count'
            index='name'
            colors={['cyan', 'pink', 'amber']}
          />
          <Legend
            className='justify-center mt-3 text-center'
            categories={['Hombre', 'Mujer', 'Sin definir']}
            colors={['cyan', 'pink', 'amber']}
          />
        </Card>
        <Card className='max-w-lg'>
          <Title className='text-center'>
            Por experiencia
          </Title>
          <DonutChart
            variant='pie'
            className='mt-6'
            data={generateExperience(count)}
            category='count'
            index='name'
            colors={['yellow', 'indigo', 'black']}
          />
          <Legend
            className='justify-center mt-3 text-center'
            categories={['Trainee', 'Junior', 'Senior']}
            colors={['yellow', 'indigo', 'black']}
          />
        </Card>
        <Card className='max-w-lg'>
          <Title className='text-center'>
            Modalidad
          </Title>
          <DonutChart
            variant='pie'
            className='mt-6'
            data={generateModality(count)}
            category='count'
            index='name'
            colors={['sky', 'lime', 'orange', 'gray']}
          />
          <Legend
            className='justify-center mt-3 text-center'
            categories={['100% Remoto', 'Casi remoto', 'Híbrido', 'Oficina']}
            colors={['sky', 'lime', 'orange', 'gray']}
          />
        </Card>
        <Card className='max-w-lg'>
          <Title className='text-center'>
            Estudios
          </Title>
          <DonutChart
            variant='pie'
            className='mt-6'
            data={generateStudies(count)}
            category='count'
            index='name'
            colors={['pink', 'blue', 'teal']}
          />
          <Legend
            className='justify-center mt-3 text-center'
            categories={['Autodidacta', 'Universidad o Grado', 'Bootcamp']}
            colors={['pink', 'blue', 'teal']}
          />
        </Card>
      </Grid>
    </>
  )
}
