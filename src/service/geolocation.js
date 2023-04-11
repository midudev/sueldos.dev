// Using Geolocation Web API to get user coordinates and country
export const getGeolocation = () => {
  if (typeof window === 'undefined') return

  const onSuccess = async (position) => {
    const { latitude, longitude } = position.coords
    const country = await getCountry(latitude, longitude) ?? ''
    window.localStorage.setItem('country', country)
    return country
  }

  return window.navigator.geolocation.getCurrentPosition(onSuccess)
}

// Using OpenStreet API to get country by user coordinates
async function getCountry (latitude, longitude) {
  try {
    const result = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
    if (result.ok) {
      const data = await result.json()
      const country = data.address.country
      return country
    } else {
      throw new Error('Error al obtener los datos')
    }
  } catch (error) {
    console.error(error)
    return null
  }
}
