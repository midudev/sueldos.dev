import { useEffect, useState } from 'react'
import { useNumberFormat } from '@/hooks/useFormatNumber'

import classes from './animated-numbers.module.css'

export default function AnimatedNumberCounter ({ number, locale = 'es-ES', currency, maximumFractionDigits = 0 }) {
  const { formatNumber } = useNumberFormat({ locale, currency, maximumFractionDigits })

  const [animatedNumber, setAnimatedNumber] = useState(formatNumber(0))

  useEffect(() => {
    const timeoutIds = []
    const maxDelay = 2000
    let delay = 250
    const step = (number * delay) / maxDelay
    for (let value = 0; value <= number + step; value += step) {
      const timeoutId = setTimeout(() => {
        setAnimatedNumber(formatNumber(value))
      }, delay)
      timeoutIds.push(timeoutId)
      delay++
    }
    return () => {
      timeoutIds.forEach(timeoutId => clearTimeout(timeoutId))
    }
  }, [number])

  return (
    <span className='flex flex-row relative overflow-hidden'>
      {
        animatedNumber
          .split('')
          .map((value, index) => {
            const isSpace = /\s/.test(value)
            if (isNaN(+value) || isSpace) return value

            return (
              <Number
                key={crypto.randomUUID()}
                value={+value}
                animationReverse={(+index % 2) === 0}
              />
            )
          })
      }
    </span>
  )
}

function Number ({ value, animationReverse }) {
  const nextValue = value + 1 > 9 ? 0 : value + 1
  const prevValue = value - 1 < 0 ? 9 : value - 1
  return (
    <span
      data-prev-number={prevValue}
      data-next-number={nextValue}
      className={`
        ${classes.number}
        ${animationReverse ? classes['number--reverse'] : ''}
      `}
    >
      {value}
    </span>
  )
}
