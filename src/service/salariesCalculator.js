export const calculateSalariesByGenderAndExperience = ({ averageSalaries }) => {
  const { gender, genderAndExperience } = averageSalaries

  const experienceDictionary = {
    trainee: 'Trainee',
    junior: 'Junior',
    senior: 'Senior'
  }

  return Object.entries({ all: gender, ...genderAndExperience }).map(([key, gender]) => {
    const experienceKey = experienceDictionary[key] ?? 'Todos'

    return {
      Experiencia: experienceKey,
      Hombre: Math.round(gender.man),
      Mujer: Math.round(gender.woman)
    }
  })
}
