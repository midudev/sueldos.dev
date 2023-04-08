import dynamic from 'next/dynamic'

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false
})

const AnimatedNumbersContainer = ({ result }) => {
  if (!result) return

  return (
    <div className='flex flex-col items-center'>
      <strong className='text-7xl md:text-8xl lg:text-9xl'>
        <span className='flex'>
          <AnimatedNumbers locale='es-ES' includeComma animateToNumber={result.salary} />€
        </span>
      </strong>
      <small className='flex mt-4 text-sm text-gray-500 gap-x-1'>Basado en <AnimatedNumbers locale='es-ES' includeComma animateToNumber={result.count} /> resultados</small>
    </div>
  )
}

export default AnimatedNumbersContainer
