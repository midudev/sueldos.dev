import { Card, Title, Text, Grid, Col, BadgeDelta, Flex, Dropdown, DropdownItem } from '@tremor/react'
import { useState, useEffect } from 'react'
import { Container } from '@/components/Container'
import { BarChartComponent } from './BarChart'
import { Filters } from './Filters'
import { Happiness } from './Happiness'
import { SalariesByExperience } from './SalariesByExperience'
import { ProfileResults } from './ProfileResults'
import { SalariesTabs } from './SalariesTabs'
import { SalariesSectionTitle } from './SalariesSectionTitle'
import { IconCash } from '@tabler/icons-react'
import { formatNumberToEur, getEstimatedPercentage } from '@/utils/formatters'
import { averageSalaryOn2022 } from '@/constants/dataAndFeatures'
import { calculateSalariesByGenderAndExperience } from '../service/salariesCalculator'
import { getGeolocation } from '@/service/geolocation'
import { SELECTED_COUNTRIES_STATS, LIST_OF_CONTRIES } from '@/constants/CountriesDictionary'

const useUserCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [cleanValue, setCleanValue] = useState('')

  const handleCountrySelect = (country) => {
    setSelectedCountry(country)
    setCleanValue('')
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    const savedGeolocalization = window.localStorage.getItem('country')
    savedGeolocalization ? setSelectedCountry(savedGeolocalization) : getGeolocation()
  }, [])

  const showingCountryName = selectedCountry
    ? SELECTED_COUNTRIES_STATS[selectedCountry].name
    : SELECTED_COUNTRIES_STATS.España.name

  const showingCountryFlag = selectedCountry
    ? SELECTED_COUNTRIES_STATS[selectedCountry].flag
    : SELECTED_COUNTRIES_STATS.España.flag
}

export function Salaries ({ averageSalaries, count }) {
  return (
    <section
      id='sueldos'
      aria-label='Features for simplifying everyday business tasks'
      className='pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32'
    >
      <Container>
        <header className='mb-8'>
          <h2 className='flex items-center justify-center max-w-4xl mx-auto text-3xl font-medium tracking-tight font-display text-slate-900 sm:text-5xl gap-x-2'>
            Salarios en {showingCountryName} {showingCountryFlag}
            <Dropdown
              className='w-10 relative z-20'
              placeholder='Elige un país'
              onValueChange={(value) => handleCountrySelect(value)}
              value={cleanValue}
            >
              {
                LIST_OF_CONTRIES.map(country => (
                  <DropdownItem
                    key={country}
                    value={country}
                    text={country}
                  />

                ))
              }
            </Dropdown>
          </h2>
          <small className='block text-center opacity-80'>Basado en un total de {count.total} sueldos anónimos</small>
        </header>

        <SalariesTabs />

        <SalariesSectionTitle id='salaries-general' icon={<IconCash />} title='Resultados generales' />

        <Grid numColsLg={6} className='gap-6 mt-6 mb-6'>
          <Col numColSpanLg={4}>
            <BarChartComponent
              data={calculateSalariesByGenderAndExperience({ averageSalaries })}
              title='Salario medio por género y experiencia'
              subtitle=''
            />
          </Col>

          <Col numColSpanLg={2}>
            <div className='flex flex-col h-full space-y-6'>
              <Card className='flex-1'>
                <div className='flex flex-col items-center justify-center h-full'>
                  <Title className='text-center'>Sueldo medio anual</Title>
                  <Text className='text-6xl font-bold text-center text-green-900'>{formatNumberToEur(averageSalaries.total)}</Text>
                  <Flex justifyContent='center' className='mt-4 space-x-2'>
                    <BadgeDelta deltaType='moderateIncrease' />
                    <Text className='font-semibold text-green-700'>
                      +{formatNumberToEur(averageSalaries.total - averageSalaryOn2022)} ({getEstimatedPercentage(averageSalaries.total, averageSalaryOn2022)}%)
                    </Text>
                    <Text className='truncate'> que el sueldo medio del país</Text>
                  </Flex>
                </div>
              </Card>
              <Card className='flex flex-col'>
                <Happiness />
              </Card>
            </div>
          </Col>
        </Grid>

        <SalariesByExperience averageSalaries={averageSalaries} />

        <ProfileResults count={count} />

        <Filters />
      </Container>
    </section>
  )
}
