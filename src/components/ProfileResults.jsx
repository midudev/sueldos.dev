import { IconUsersGroup } from '@tabler/icons-react'
import { Grid, Card, Title, DonutChart, Legend } from '@tremor/react'
import { SalariesSectionTitle } from './SalariesSectionTitle'
import { generateExperience, generateGender, generateModality, generateStudies } from '@/service/generators'

export function ProfileResults ({ count }) {
  return (
    <>
      <SalariesSectionTitle id='salaries-users' icon={<IconUsersGroup />} title='Perfil encuestados' />
      <Grid numColsSm={2} numColsLg={4} className='gap-6'>
        <Card className='max-w-lg card-dark'>
          <Title className='text-center dark:text-slate-100'>
            Por género
          </Title>
          <DonutChart
            variant='pie'
            className='mt-6'
            data={generateGender(count)}
            category='count'
            index='name'
            colors={['purple', 'blue', 'pink']}
          />
          <Legend
            className='justify-center mt-3 text-center'
            categories={['Hombre', 'Mujer', 'Sin definir']}
            colors={['purple', 'blue', 'pink']}
          />
        </Card>
        <Card className='max-w-lg card-dark'>
          <Title className='text-center dark:text-slate-100'>
            Por experiencia
          </Title>
          <DonutChart
            variant='pie'
            className='mt-6'
            data={generateExperience(count)}
            category='count'
            index='name'
            colors={['purple', 'blue', 'pink']}
          />
          <Legend
            className='justify-center mt-3 text-center'
            categories={['Trainee', 'Junior', 'Senior']}
            colors={['purple', 'blue', 'pink']}
          />
        </Card>
        <Card className='max-w-lg card-dark'>
          <Title className='text-center dark:text-slate-100'>
            Modalidad
          </Title>
          <DonutChart
            variant='pie'
            className='mt-6'
            data={generateModality(count)}
            category='count'
            index='name'
            colors={['purple', 'blue', 'pink', 'indigo']}
          />
          <Legend
            className='justify-center mt-3 text-center'
            categories={['100% Remoto', 'Casi remoto', 'Híbrido', 'Oficina']}
            colors={['purple', 'blue', 'pink', 'indigo']}
          />
        </Card>
        <Card className='max-w-lg card-dark'>
          <Title className='text-center dark:text-slate-100'>
            Estudios
          </Title>
          <DonutChart
            variant='pie'
            className='mt-6'
            data={generateStudies(count)}
            category='count'
            index='name'
            colors={['purple', 'blue', 'pink']}
          />
          <Legend
            className='justify-center mt-3 text-center'
            categories={['Autodidacta', 'Universidad o Grado', 'Bootcamp']}
            colors={['purple', 'blue', 'pink']}
          />
        </Card>
      </Grid>
    </>
  )
}
