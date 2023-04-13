import { useEffect, useRef } from 'react'

const NUMBERS = new Array(10).fill('')

export default function ItemNumber ({ value, height }) {
  const numberRef = useRef(null)

  useEffect(() => {
    numberRef.current.scroll({ behavior: 'smooth', top: height * value })
  }, [value, height])

  return (
    <span
      ref={numberRef}
      className='flex flex-col relative overflow-hidden'
    >
      {NUMBERS.map((_, number) =>
        <span
          key={`number-${number}`}
          className={value !== number ? 'select-none' : 'select-text'}
        >
          {number}
        </span>
      )}
    </span>
  )
}
