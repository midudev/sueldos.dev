import { useState, useEffect } from 'react'
import { getFilteredSalaries } from '@/service/filteredSalaries'

export const useFilters = () => {
  const [selectedExperience, setSelectedExperience] = useState('all')
  const [selectedModality, setSelectedModality] = useState('all')
  const [selectedGender, setSelectedGender] = useState('all')
  const [selectedStudy, setSelectedStudy] = useState('all')

  const [result, setResult] = useState(null)

  const handleGenderSelect = (gender) => setSelectedGender(gender)
  const handleExperienceSelect = (experience) => setSelectedExperience(experience)
  const handleModalitySelect = (modality) => setSelectedModality(modality)
  const handleStudySelect = (studies) => setSelectedStudy(studies)

  useEffect(() => {
    getFilteredSalaries(selectedExperience, selectedModality, selectedGender, selectedStudy)
      .then(res => setResult(res.result))
      .catch(() => setResult(null))
  }, [selectedExperience, selectedModality, selectedGender, selectedStudy])

  return {
    result,
    selectedGender,
    selectedModality,
    selectedStudy,
    selectedExperience,
    handleExperienceSelect,
    handleGenderSelect,
    handleModalitySelect,
    handleStudySelect
  }
}
