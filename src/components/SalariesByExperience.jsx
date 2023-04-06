import { IconBeach } from '@tabler/icons-react'
import { Card, Metric, Text, BarList, Flex, Grid } from '@tremor/react'

const website = [
  { name: 'Trainee', value: 1230 },
  { name: 'Junior', value: 751 },
  { name: 'Senior', value: 471 }
]

const shop = [
  { name: 'Trainee', value: 453 },
  { name: 'Junior', value: 351 },
  { name: 'Senior', value: 271 }
]

const app = [
  { name: 'Trainee', value: 789 },
  { name: 'Junior', value: 676 },
  { name: 'Senior', value: 564 }
]

const data = [
  {
    category: '100% Remoto',
    stat: '10,234 €',
    data: website,
    icon: <IconBeach stroke={1} />
  },
  {
    category: 'Híbrido',
    stat: '12,543 €',
    data: shop,
    icon: <IconBeach stroke={1} />
  },
  {
    category: 'Oficina',
    stat: '2,543',
    data: app,
    icon: <IconBeach stroke={1} />
  }
]

const dataFormatter = (number) =>
  Intl.NumberFormat('es').format(number).toString()

export function SalariesByExperience ({ averageSalaries }) {
  return (
    <Grid id='salaries-general' numColsSm={2} numColsLg={3} className='gap-6 mt-6'>
      {data.map((item) => (
        <Card key={item.category}>

          <Flex alignItems='center' justifyContent='start'>
            {item.icon}
            {item.category}
          </Flex>
          <Flex
            justifyContent='start'
            alignItems='baseline'
            className='space-x-2'
          >
            <Metric>{item.stat}</Metric>
            <Text>media sueldo anual</Text>
          </Flex>
          <Flex className='mt-6'>
            <Text>Experiencia</Text>
            <Text className='text-right'>Sueldo</Text>
          </Flex>
          <BarList
            data={item.data}
            valueFormatter={dataFormatter}
            className='mt-2'
          />
        </Card>
      ))}
    </Grid>
  )
}
