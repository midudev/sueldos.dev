import { useEffect, useRef, useState } from 'react'
import NumbersList from './NumbersList'
import { useNumberFormat } from '@/hooks/useFormatNumber'

export default function AnimatedNumbers ({ number, dynamicFont, locale = 'es-ES', currency, maximumFractionDigits = 0 }) {
  const numbersRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const { formatNumber } = useNumberFormat({ locale, currency, maximumFractionDigits })

  const numbers = formatNumber(number).split('')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const isIntersecting = entries.find((entry) => entry.isIntersecting)
      if (isIntersecting) {
        setLoaded(true)
        observer.unobserve(numbersRef.current)
      }
    })

    if (numbersRef.current) {
      observer.observe(numbersRef.current)
    }

    return () => {
      if (numbersRef.current) {
        observer.unobserve(numbersRef.current)
      }
    }
  }, [])

  return (
    <span ref={numbersRef}>
      {
        loaded && <NumbersList numbers={numbers} dynamicFont={dynamicFont} />
      }
    </span>
  )
}
