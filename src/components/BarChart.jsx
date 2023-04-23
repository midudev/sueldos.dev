import { formatNumberToEur } from '@/utils/formatters'
import { Card, BarChart, Title, Text } from '@tremor/react'

export function BarChartComponent ({ data, title, subtitle }) {
  return (
    <Card className='dark:bg-slate-300'>
      <Title>{title}</Title>
      <Text>{subtitle}</Text>
      <BarChart
        className='mt-4 dark:bg-slate-300 h-80'
        data={data}
        index='Experiencia'
        categories={['Hombre', 'Mujer']}
        colors={['indigo', 'fuchsia']}
        stack={false}
        valueFormatter={formatNumberToEur}
      />
    </Card>
  )
}
