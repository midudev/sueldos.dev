import { DATA_HAPPINESS } from '@/constants'
import {
  Title,
  Text,
  CategoryBar
} from '@tremor/react'

export function Happiness () {
  return (
    <>
      <Title className='text-center'>{DATA_HAPPINESS.title}</Title>
      <Text className='text-center'>Más es mejor</Text>
      <CategoryBar
        categoryPercentageValues={DATA_HAPPINESS.subCategoryPercentageValues}
        percentageValue={DATA_HAPPINESS.metric}
        colors={DATA_HAPPINESS.subCategroyColors}
        className='mt-4'
      />
    </>
  )
}
