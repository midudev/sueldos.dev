import { TabList, Tab } from '@tremor/react'
import { IconCash, IconUsersGroup, IconFilter } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

export function useActiveSection (sectionIds, options) {
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      { ...options, threshold: 0, rootMargin: '0px 0px -100% 0px' }
    )

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (section) {
          observer.unobserve(section)
        }
      })
    }
  }, [sectionIds, options])

  return activeSection
}

export function SalariesTabs () {
  const [activeTab, setActiveTab] = useState('salaries-general')
  const sectionIds = ['salaries-general', 'salaries-users', 'salaries-filter']
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    if (activeSection) {
      setActiveTab(activeSection)
    }
  }, [activeSection])

  const handleNavigation = (hash) => {
    setActiveTab(hash)
    location.hash = hash
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
  }

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
