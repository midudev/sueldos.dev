import { Card, Title, BarChart, Subtitle } from '@tremor/react'

const chartdata = [
  {
    name: 'México',
    votantes: 2488
  },
  {
    name: 'Argentina',
    votantes: 1445
  },
  {
    name: 'Chile',
    votantes: 243
  },
  {
    name: 'Peru',
    votantes: 543
  },
  {
    name: 'Ecuador',
    votantes: 343
  },
  {
    name: 'Panama',
    votantes: 743
  },
  {
    name: 'Costa Rica',
    votantes: 743
  },
  {
    name: 'Paraguay',
    votantes: 743
  },
  {
    name: 'Colombia',
    votantes: 743
  },
  {
    name: 'Venezuela',
    votantes: 743
  },
  {
    name: 'España',
    votantes: 743
  }
]

const dataFormatter = (number) => {
  return Intl.NumberFormat('us').format(number).toString()
}

export function GraphBasedOnCountry () {
  return (
    <Card>
      <Title>Paises mas populares</Title>
      <Subtitle>
        De que pais proviene la gente que vota.
      </Subtitle>
      <BarChart
        className='mt-6'
        data={chartdata}
        index='name'
        categories={['votantes']}
        colors={['blue']}
        valueFormatter={dataFormatter}
      />
    </Card>
  )
}
