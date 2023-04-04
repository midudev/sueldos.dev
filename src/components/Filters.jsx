import { useState, useEffect } from 'react'
import { Dropdown, DropdownItem, Card, Title } from '@tremor/react'
import { FriendsIcon, ManIcon, NoGenderIcon, WomanIcon } from './Icons'
import { IconBeach, IconHome, IconSchool, IconBuildingSkyscraper, IconSquareHalf, IconAntennaBars5, IconAntennaBars3, IconUserCode, IconFilter } from '@tabler/icons-react'

import { SalariesSectionTitle } from './SalariesSectionTitle'

const EXPERIENCE = [
  {
    value: 'all',
    text: 'Cualquier experiencia',
    icon: () => <IconUserCode stroke={1} />
  },
  {
    value: 'trainee',
    text: 'Trainee',
    icon: () => <IconSchool stroke={1} />
  },
  {
    value: 'junior',
    text: 'Junior',
    icon: () => <IconAntennaBars3 stroke={1} />
  },
  {
    value: 'senior',
    text: 'Senior',
    icon: () => <IconAntennaBars5 stroke={1} />
  }
]

const MODALITY = [
  {
    value: 'all',
    text: 'Cualquier modalidad',
    icon: () => <IconUserCode stroke={1} />
  },
  {
    value: 'remote',
    text: 'Remoto',
    icon: () => <IconBeach stroke={1} />
  },
  {
    value: 'mostlyRemote',
    text: 'Casi remoto',
    icon: () => <IconHome stroke={1} />
  },
  {
    value: 'hybrid',
    text: 'Híbrido',
    icon: () => <IconSquareHalf stroke={1} />
  },
  {
    value: 'office',
    text: 'Oficina',
    icon: () => <IconBuildingSkyscraper stroke={1} />
  }
]

const GENDERS = [
  {
    value: 'all',
    text: 'Cualquier género',
    icon: () => <FriendsIcon />
  },
  {
    value: 'man',
    text: 'Hombre',
    icon: () => <ManIcon />
  },
  {
    value: 'woman',
    text: 'Mujer',
    icon: () => <WomanIcon />
  },
  {
    value: 'noGender',
    text: 'Sin definir',
    icon: () => <NoGenderIcon />
  }
]

export function Filters () {
  const [selectedExperience, setSelectedExperience] = useState('all')
  const [selectedModality, setSelectedModality] = useState('all')
  const [selectedGender, setSelectedGender] = useState('all')

  useEffect(() => {
    fetch('/api/filtered-salary')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  })

  return (
    <section id='salaries-filter'>
      <SalariesSectionTitle icon={<IconFilter />} title='Filtrar salario' />
      <Card>
        <div className='flex flex-col flex-wrap items-start justify-start gap-2'>
          <Title>Filtra el salario por:</Title>
          <div>
            <Dropdown
              className='w-56 mt-2'
              onValueChange={(value) => setSelectedGender(value)}
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
              onValueChange={(value) => setSelectedExperience(value)}
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
              onValueChange={(value) => setSelectedModality(value)}
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
        </div>
      </Card>

    </section>
  )
}
