import {
  Card,
  Flex,
  MarkerBar
} from '@tremor/react'

export function Sentiment ({ value }) {
  const percentageValue = 100 * value / 5
  return (
    <Card className='max-w-sm'>
      <Flex>
        <Text>Nada feliz</Text>
        <Text>Muy feliz</Text>
      </Flex>
      <MarkerBar percentageValue={percentageValue} color='fuchsia' className='mt-4' />
    </Card>
  )
}
