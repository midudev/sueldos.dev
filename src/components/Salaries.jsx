import { Card, Title, Text, Grid, Col, BadgeDelta, Flex } from '@tremor/react'
import { Container } from '@/components/Container'
import { BarChartComponent } from './BarChart'
import { Filters } from './Filters'
import { SpainFlag } from './Flags'
import { Happiness } from './Happiness'
import { SalariesByExperience } from './SalariesByExperience'
import { ProfileResults } from './ProfileResults'
import { SalariesTabs } from './SalariesTabs'
import { SalariesSectionTitle } from './SalariesSectionTitle'
import { IconCash } from '@tabler/icons-react'
import { formatNumberToEur } from '@/utils/formatters'

const calculateSalariesByGenderAndExperience = ({ averageSalaries }) => {
  const { gender, genderAndExperience } = averageSalaries

  const experienceDictionary = {
    trainee: 'Trainee',
    junior: 'Junior',
    senior: 'Senior'
  }

  return Object.entries({ all: gender, ...genderAndExperience }).map(([key, gender]) => {
    const experienceKey = experienceDictionary[key] ?? 'Todos'

    return {
      Experiencia: experienceKey,
      Hombre: Math.round(gender.man),
      Mujer: Math.round(gender.woman)
    }
  })
}

export function Salaries ({ averageSalaries, count }) {
  return (
    <section
      id='sueldos'
      aria-label='Features for simplifying everyday business tasks'
      className='pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32'
    >
      <Container>
        <header className='mb-8'>
          <h2 className='flex items-center justify-center max-w-4xl mx-auto text-3xl font-medium tracking-tight font-display text-slate-900 dark:text-slate-50 sm:text-5xl gap-x-2'>
            Salarios en España <SpainFlag />
          </h2>
          <small className='block text-center opacity-80'>Basado en un total de {count.total} sueldos anónimos</small>
        </header>

        <SalariesTabs />

        <SalariesSectionTitle id='salaries-general' icon={<IconCash />} title='Resultados generales' />

        <Grid numColsLg={6} className='gap-6 mt-6 mb-6'>
          <Col numColSpanLg={4}>
            <BarChartComponent
              data={calculateSalariesByGenderAndExperience({ averageSalaries })}
              title='Salario medio por género y experiencia'
              subtitle=''
            />
          </Col>

          <Col numColSpanLg={2}>
            <div className='flex flex-col h-full space-y-6'>
              <Card className='flex-1 card-dark'>
                <div className='flex flex-col items-center justify-center h-full'>
                  <Title className='text-center dark:text-slate-100'>Sueldo medio anual</Title>
                  <Text className='text-6xl font-bold text-center text-green-900 dark:text-green-500'>{formatNumberToEur(averageSalaries.total)}</Text>
                  <Flex justifyContent='center' className='mt-4 space-x-2'>
                    <BadgeDelta deltaType='moderateIncrease' />
                    <Text className='font-semibold text-green-700 dark:text-green-500'>+7200€</Text>
                    <Text className='truncate dark:text-slate-200'> que el sueldo medio del país</Text>
                  </Flex>
                </div>
              </Card>
              <Card className='flex flex-col card-dark'>
                <Happiness />
              </Card>
            </div>
          </Col>
        </Grid>

        <SalariesByExperience averageSalaries={averageSalaries} />

        <ProfileResults count={count} />

        <Filters />
      </Container>
    </section>
  )
}
