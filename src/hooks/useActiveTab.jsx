import { useEffect, useState } from 'react'

export function useActiveTab (activeSection) {
  const [activeTab, setActiveTab] = useState('salaries-general')

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

  return { activeTab, handleNavigation }
}
