import { TabList, Tab } from '@tremor/react'
import { IconCash, IconUsersGroup, IconFilter } from '@tabler/icons-react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useActiveTab } from '@/hooks/useActiveTab'

export function SalariesTabs () {
  const sectionIds = ['salaries-general', 'salaries-users', 'salaries-filter']
  const { activeSection } = useActiveSection(sectionIds)
  const { activeTab, handleNavigation } = useActiveTab(activeSection)

  return (
    <TabList
      value={activeTab}
      onValueChange={(value) => handleNavigation(value)}
      className=' sticky top-0 z-50 justify-center mt-6 text-center bg-white'
    >
      <Tab value='salaries-general' text='Resultados generales' icon={IconCash} />
      <Tab value='salaries-users' text='Perfil encuestados' icon={IconUsersGroup} />
      <Tab value='salaries-filter' text='Filtrar resultados' icon={IconFilter} />
    </TabList>
  )
}
