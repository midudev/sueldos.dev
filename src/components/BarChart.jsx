import { formatNumberToEur } from '@/utils/formatters'
import { Card, BarChart, Title, Text } from '@tremor/react'

export function BarChartComponent ({ data, title, subtitle }) {
  return (
    <Card className='dark:bg-slate-900 dark:text-slate-50'>
      <Title className='dark:text-slate-100'>{title}</Title>
      <Text className='dark:text-slate-100'>{subtitle}</Text>
      <BarChart
        className='mt-4 h-80 dark:bg-slate-900 dark:text-slate-100'
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
