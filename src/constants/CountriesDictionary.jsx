import { ArgentinaFlag, ColombiaFlag, MexicoFlag, SpainFlag, ChileFlag } from '@/components/Flags'

export const LIST_OF_CONTRIES = [
  'España', 'Colombia', 'Mexico', 'Argentina', 'Chile'
]

export const SELECTED_COUNTRIES_STATS = {
  España: {
    name: 'España',
    flag: <SpainFlag />
  },
  Colombia: {
    name: 'Colombia',
    flag: <ColombiaFlag />
  },
  Mexico: {
    name: 'Mexico',
    flag: <MexicoFlag />
  },
  Argentina: {
    name: 'Argentina',
    flag: <ArgentinaFlag />
  },
  Chile: {
    name: 'Chile',
    flag: <ChileFlag />
  }
}
