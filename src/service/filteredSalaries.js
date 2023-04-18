export async function getFilteredSalaries (selectedExperience, selectedModality, selectedGender, selectedStudy) {
  try {
    const result = await fetch(`/api/filtered-salary?country=es&experience=${selectedExperience}&modality=${selectedModality}&gender=${selectedGender}&studies=${selectedStudy}`)
    if (result.ok) {
      const data = result.json()
      return data
    } else {
      throw new Error('Error al obtener los datos')
    }
  } catch (error) {
    console.error(error)
    return null
  }
}
