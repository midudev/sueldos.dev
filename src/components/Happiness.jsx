import {
  Title,
  Card,
  Text,
  CategoryBar
} from '@tremor/react'

const data = {
  title: 'Felicidad por su salario',
  metric: 65,
  subCategoryPercentageValues: [20, 20, 20, 20, 20],
  subCategroyColors: ['red', 'orange', 'yellow', 'lime', 'green'],
  subCategoryTitles: []
}

export function Happiness () {
  return (
    <>
      <Title className='text-center'>{data.title}</Title>
      <Text className='text-center'>Más es mejor</Text>
      <CategoryBar
        categoryPercentageValues={data.subCategoryPercentageValues}
        percentageValue={data.metric}
        colors={data.subCategroyColors}
        className='mt-4'
      />
    </>
  )
}
