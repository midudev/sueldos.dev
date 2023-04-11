import { useState, useEffect } from 'react'
import { SELECTED_COUNTRIES_STATS } from '@/constants/dataAndFeatures'
import { getGeolocation } from '@/service/geolocation'

export const useUserCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [cleanValue, setCleanValue] = useState('')

  const handleCountrySelect = (country) => {
    setSelectedCountry(country)
    setCleanValue('')
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    const savedGeolocalization = window.localStorage.getItem('country')
    savedGeolocalization ? setSelectedCountry(savedGeolocalization) : getGeolocation()
  }, [])

  const showingCountryName = selectedCountry
    ? SELECTED_COUNTRIES_STATS[selectedCountry].name
    : SELECTED_COUNTRIES_STATS.España.name

  const showingCountryFlag = selectedCountry
    ? SELECTED_COUNTRIES_STATS[selectedCountry].flag
    : SELECTED_COUNTRIES_STATS.España.flag

  return { showingCountryFlag, showingCountryName, handleCountrySelect, cleanValue }
}
