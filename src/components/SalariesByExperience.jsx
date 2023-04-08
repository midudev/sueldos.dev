import { Card, Metric, Text, BarList, Flex, Grid } from '@tremor/react'
import { formatNumberToEur } from '@/utils/formatters'
import { DATA_SALARIES_BY_EXPERIENCE } from '@/constants'

export function SalariesByExperience ({ averageSalaries }) {
  return (
    <>
      <h2 className='text-lg font-medium text-gray-700'>Sueldos por modalidad de trabajo y experiencia</h2>
      <Grid id='salaries-general' numColsSm={2} numColsLg={3} className='gap-6 mt-6'>
        {DATA_SALARIES_BY_EXPERIENCE.map((item) => (
          <Card key={item.category}>

            <header className='flex justify-between'>
              <div className='flex items-center justify-center font-semibold gap-x-2'>
                {item.icon}
                {item.category}
              </div>

              <div
                className='flex flex-col items-center justify-center'
              >
                <Metric>{formatNumberToEur(averageSalaries.modality[item.field])}</Metric>
                <Text>media sueldo anual</Text>
              </div>

            </header>

            <Flex className='mt-6'>
              <Text>Experiencia</Text>
              <Text className='text-right'>Sueldo</Text>
            </Flex>
            <BarList
              data={[
                { name: 'Trainee', value: averageSalaries.modalityAndExperience.trainee[item.field] },
                { name: 'Junior', value: averageSalaries.modalityAndExperience.junior[item.field] },
                { name: 'Senior', value: averageSalaries.modalityAndExperience.senior[item.field] }
              ]}
              valueFormatter={formatNumberToEur}
              className='mt-2'
            />
          </Card>
        ))}
      </Grid>
    </>
  )
}
