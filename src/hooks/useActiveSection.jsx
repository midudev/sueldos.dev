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

  return { activeSection }
}
