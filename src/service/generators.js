export const generateGender = count => {
  return [
    {
      name: 'Hombre',
      count: count.gender.man
    },
    {
      name: 'Mujer',
      count: count.gender.woman
    },
    {
      name: 'Sin definir',
      count: count.gender.noGender
    }
  ]
}

export const generateExperience = count => {
  return [
    {
      name: 'Trainee',
      count: count.experience.trainee
    },
    {
      name: 'Junior',
      count: count.experience.junior
    },
    {
      name: 'Senior',
      count: count.experience.senior
    }
  ]
}

export const generateModality = count => {
  return [
    {
      name: '100% Remoto',
      count: count.modality.remote
    },
    {
      name: 'Casi remoto',
      count: count.modality.mostlyRemote
    },
    {
      name: 'Híbrido',
      count: count.modality.hybrid
    },
    {
      name: 'Oficina',
      count: count.modality.office
    }
  ]
}

export const generateStudies = count => {
  return [
    {
      name: 'Autodidacta',
      count: count.studies.self
    },
    {
      name: 'Universidad o Grado',
      count: count.studies.formal
    },
    {
      name: 'Bootcamp',
      count: count.studies.bootcamp
    }
  ]
}
