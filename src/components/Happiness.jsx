import {
  Title,
  Text,
  CategoryBar
} from '@tremor/react'
import { data } from '@/constants/dataAndFeatures'

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
