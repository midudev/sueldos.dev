import { useFilters } from '@/hooks/useFilters'
import { Dropdown, DropdownItem, Card } from '@tremor/react'
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
      <Card className='flex flex-wrap items-center justify-between dark:bg-slate-300'>
        <div className='flex flex-col flex-wrap items-start justify-start gap-2'>
          <div>
            <Dropdown
              className='w-56 mt-2'
              onValueChange={(value) => handleGenderSelect(value)}
              placeholder='Filtra por género'
              value={selectedGender}
            >
              {
              GENDERS.map(({ value, text, icon }) => (
                <DropdownItem className='gap-x-4' key={value} value={value} text={text} icon={icon} />
              ))
            }
            </Dropdown>
          </div>

          <div>
            <Dropdown
              className='w-56 mt-2'
              onValueChange={(value) => handleExperienceSelect(value)}
              placeholder='Filtra por experiencia'
              value={selectedExperience}
            >
              {
              EXPERIENCE.map(({ value, text, icon }) => (
                <DropdownItem className='gap-x-4' key={value} value={value} text={text} icon={icon} />
              ))
            }
            </Dropdown>
          </div>

          <div>
            <Dropdown
              className='w-56 mt-2'
              onValueChange={(value) => handleModalitySelect(value)}
              placeholder='Filtra por experiencia'
              value={selectedModality}
            >
              {
              MODALITY.map(({ value, text, icon }) => (
                <DropdownItem className='gap-x-4' key={value} value={value} text={text} icon={icon} />
              ))
            }
            </Dropdown>
          </div>

          <div>
            <Dropdown
              className='w-56 mt-2'
              onValueChange={(value) => handleStudySelect(value)}
              placeholder='Filtra por estudios'
              value={selectedStudy}
            >
              {
              STUDIES.map(({ value, text, icon }) => (
                <DropdownItem className='gap-x-4' key={value} value={value} text={text} icon={icon} />
              ))
            }
            </Dropdown>
          </div>
        </div>

        <div className='flex justify-center flex-1'>
          <AnimatedNumbersContainer result={result} />
        </div>

      </Card>

    </section>
  )
}
