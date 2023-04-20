import { IconBuildingSkyscraper, IconSquareHalf, IconBeach } from '@tabler/icons-react'
import { Card, Metric, Text, BarList, Flex, Grid } from '@tremor/react'
import { formatNumberToEur } from '@/utils/formatters'

const data = [
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

export function SalariesByExperience ({ averageSalaries }) {
  return (
    <>
      <h2 className='text-lg font-medium opacity-60 dark:opacity-90'>Sueldos por modalidad de trabajo y experiencia</h2>
      <Grid id='salaries-general' numColsSm={2} numColsLg={3} className='gap-6 mt-6'>
        {data.map((item) => (
          <Card key={item.category} className="card-dark">

            <header className='flex justify-between'>
              <div className='flex items-center justify-center font-semibold gap-x-2'>
                {item.icon}
                {item.category}
              </div>

              <div
                className='flex flex-col items-center justify-center'
              >
                <Metric className='dark:text-slate-100'>{formatNumberToEur(averageSalaries.modality[item.field])}</Metric>
                <Text className='dark:text-slate-200'>media sueldo anual</Text>
              </div>

            </header>

            <Flex className='mt-6'>
              <Text className='dark:text-slate-100'>Experiencia</Text>
              <Text className='text-right dark:text-slate-100'>Sueldo</Text>
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
