import { useState, useEffect, useContext, createContext } from 'react'

const STORAGE_KEY = 'sueldosdev-theme'
const MATCH_MEDIA = '(prefers-color-scheme: dark)'
const IS_SERVER = typeof window === 'undefined'

const ThemeContext = createContext()

export default function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState(() => {
    if (IS_SERVER) return 'light'

    const storedTheme = window.localStorage.getItem(STORAGE_KEY)
    const prefersDarkTheme = window.matchMedia(MATCH_MEDIA).matches
    const themePreference = prefersDarkTheme ? 'dark' : 'light'
    return storedTheme !== null
      ? storedTheme
      : themePreference
  })

  const toggleTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    const mediaQueryList = window.matchMedia(MATCH_MEDIA)

    const handleMediaChange = (mediaQueryEvent) => {
      setTheme(mediaQueryEvent.matches ? 'dark' : 'light')
    }

    mediaQueryList.addEventListener('change', handleMediaChange)

    return () => mediaQueryList.removeEventListener('change', handleMediaChange)
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme)
    document.documentElement.classList.add(theme)
    document.documentElement.classList.remove(
      theme === 'light' ? 'dark' : 'light'
    )
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme () {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
