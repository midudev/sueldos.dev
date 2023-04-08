import {
  IconAntennaBars3, IconRocket, IconAward,
  IconDirections, IconUserCode, IconSchool,
  IconAntennaBars5, IconBeach, IconHome,
  IconSquareHalf, IconBuildingSkyscraper
} from '@tabler/icons-react'

import { FriendsIcon, ManIcon, NoGenderIcon, WomanIcon } from './Icons'

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

const STUDIES = [
  {
    value: 'all',
    text: 'Cualquier estudio',
    icon: () => <IconUserCode stroke={1} />
  },
  {
    value: 'self',
    text: 'Autodidacta',
    icon: () => <IconDirections stroke={1} />
  },
  {
    value: 'formal',
    text: 'Universidad o Grado',
    icon: () => <IconAward stroke={1} />
  },
  {
    value: 'bootcamp',
    text: 'Bootcamp',
    icon: () => <IconRocket stroke={1} />
  }
]

export { EXPERIENCE, MODALITY, GENDERS, STUDIES }
