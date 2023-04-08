import { useState, useEffect } from 'react'
import { Dropdown, DropdownItem, Card } from '@tremor/react'
import { IconFilter } from '@tabler/icons-react'
import dynamic from 'next/dynamic'
import { EXPERIENCE, MODALITY, STUDIES, GENDERS } from '@/constants/filters'

import { SalariesSectionTitle } from './SalariesSectionTitle'

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false
})

export function Filters () {
  const [selectedExperience, setSelectedExperience] = useState('all')
  const [selectedModality, setSelectedModality] = useState('all')
  const [selectedGender, setSelectedGender] = useState('all')
  const [selectedStudy, setSelectedStudy] = useState('all')

  const [result, setResult] = useState(null)

  useEffect(() => {
    fetch(`/api/filtered-salary?country=es&experience=${selectedExperience}&modality=${selectedModality}&gender=${selectedGender}&studies=${selectedStudy}`)
      .then(res => {
        if (res.ok) return res.json()
        throw new Error('Error al obtener los datos')
      })
      .then(res => setResult(res.result))
      .catch(() => setResult(null))
  }, [selectedExperience, selectedModality, selectedGender, selectedStudy])

  return (
    <section id='salaries-filter'>
      <SalariesSectionTitle icon={<IconFilter />} title='Filtrar salario' />
      <Card className='flex items-center justify-between flex-wrap'>
        <div className='flex flex-col flex-wrap items-start justify-start gap-2'>
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

          <div>
            <Dropdown
              className='w-56 mt-2'
              onValueChange={(value) => setSelectedStudy(value)}
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
          {
          result && (
            <div className='flex flex-col items-center'>
              <strong className='text-7xl md:text-8xl lg:text-9xl'>
                <span className='flex'>
                  <AnimatedNumbers locale='es-ES' includeComma animateToNumber={result.salary} />€
                </span>
              </strong>
              <small className='flex mt-4 text-sm text-gray-500 gap-x-1'>Basado en <AnimatedNumbers locale='es-ES' includeComma animateToNumber={result.count} /> resultados</small>
            </div>
          )
        }
        </div>

      </Card>

    </section>
  )
}
