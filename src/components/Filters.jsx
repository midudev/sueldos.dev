import { useFilters } from '@/hooks/useFilters'
import { Card, Toggle, ToggleItem, Text } from '@tremor/react'
import { IconFilter } from '@tabler/icons-react'
import { EXPERIENCE, MODALITY, STUDIES, GENDERS } from '@/constants/filters'
import AnimatedNumbersContainer from './AnimatedNumbersContainer'

import { SalariesSectionTitle } from './SalariesSectionTitle'

export function Filters () {
  const {
    result, selectedStudy, selectedModality,
    selectedGender, selectedExperience, handleGenderSelect,
    handleExperienceSelect, handleModalitySelect, handleStudySelect
  } = useFilters()

  return (
    <section id='salaries-filter'>
      <SalariesSectionTitle icon={<IconFilter />} title='Filtrar salario' />
      <Card>
        <div className='flex justify-center flex-1'>
          <AnimatedNumbersContainer result={result} />
        </div>
        <div className='grid grid-cols-4 gap-4 pb-6 mt-8'>
          <div className='w-full'>
            <Text>Filtra por género</Text>
            <Toggle onValueChange={(value) => handleGenderSelect(value)} value={selectedGender} className='mt-2 flex-col w-full h-full'>
              {
                GENDERS.map(({ value, text, icon }) => (
                  <ToggleItem className='gap-x-2' key={value} value={value} text={text} icon={icon} />
                ))
              }
            </Toggle>
          </div>
          <div className='w-full'>
            <Text>Filtra por modalidad</Text>
            <Toggle onValueChange={(value) => handleModalitySelect(value)} value={selectedModality} className='mt-2 flex-col w-full h-full'>
              {
                MODALITY.map(({ value, text, icon }) => (
                  <ToggleItem className='gap-x-2' key={value} value={value} text={text} icon={icon} />
                ))
              }
            </Toggle>
          </div>
          <div className='w-full'>
            <Text>Filtra por experiencia</Text>
            <Toggle onValueChange={(value) => handleExperienceSelect(value)} value={selectedExperience} className='mt-2 flex-col w-full h-full'>
              {
                EXPERIENCE.map(({ value, text, icon }) => (
                  <ToggleItem className='gap-x-2' key={value} value={value} text={text} icon={icon} />
                ))
              }
            </Toggle>
          </div>

          <div className='w-full'>
            <Text>Filtra por estudios</Text>
            <Toggle onValueChange={(value) => handleStudySelect(value)} value={selectedStudy} className='mt-2 flex-col w-full h-full'>
              {
                STUDIES.map(({ value, text, icon }) => (
                  <ToggleItem className='gap-x-2' key={value} value={value} text={text} icon={icon} />
                ))
              }
            </Toggle>
          </div>
        </div>
      </Card>
    </section>
  )
}
