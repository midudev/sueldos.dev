import {
  Title,
  Text,
  CategoryBar
} from '@tremor/react'
import { data } from '@/constants/dataAndFeatures'

export function Happiness () {
  return (
    <>
      <Title className='text-center dark:text-slate-100'>{data.title}</Title>
      <Text className='text-center dark:text-slate-200'>Más es mejor</Text>
      <CategoryBar
        categoryPercentageValues={data.subCategoryPercentageValues}
        percentageValue={data.metric}
        colors={data.subCategroyColors}
        className='mt-4 dark:text-slate-100'
      />
    </>
  )
}
