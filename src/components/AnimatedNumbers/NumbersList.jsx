import { useEffect, useRef, useState } from 'react'
import ItemNumber from './ItemNumber'

export default function NumbersList ({ numbers, dynamicFont }) {
  const numbersRef = useRef(null)
  const [styles, setStyles] = useState({})

  const handleSetStyles = () => {
    const height = numbersRef.current?.firstChild?.firstChild.clientHeight
    if (height !== styles.height) {
      setStyles({
        height: numbersRef.current.firstChild.firstChild.clientHeight
      })
    }
  }

  useEffect(() => {
    handleSetStyles()
  }, [numbers])

  useEffect(() => {
    if (dynamicFont) {
      window.addEventListener('resize', handleSetStyles)
    }

    return () => {
      window.removeEventListener('reset', handleSetStyles)
    }
  }, [])

  return (
    <span ref={numbersRef} className='flex flex-row relative select-all' style={styles}>
      {
        numbers
          .map((value, index) => {
            const isNumber = /^[0-9]$/.test(value)
            if (!isNumber) return value

            return (
              <ItemNumber
                key={index}
                value={+value}
                height={styles?.height ?? 0}
              />
            )
          })
}
    </span>
  )
}
