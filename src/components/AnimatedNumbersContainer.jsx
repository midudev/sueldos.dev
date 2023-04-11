import dynamic from 'next/dynamic'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { IconCopy, IconCheck } from '@tabler/icons-react'
import { Button } from './Button'

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false
})

const AnimatedNumbersContainer = ({ result }) => {
  const { copied, handleCopy } = useCopyToClipboard(result?.salary)
  if (!result) return

  return (
    <div className='flex flex-col items-center'>
      <strong className='text-7xl md:text-8xl lg:text-9xl'>
        <span className='flex flex-col md:flex-row'>
          <div className='flex'><AnimatedNumbers locale='es-ES' includeComma animateToNumber={result.salary} />€</div>
        </span>
      </strong>
      <small className='flex mt-4 text-sm text-gray-500 gap-x-1'>Basado en <AnimatedNumbers locale='es-ES' includeComma animateToNumber={result.count} /> resultados</small>
      <div className='flex justify-center'>
        <Button
          onClick={handleCopy}
          variant='outline'
          className='items-center gap-x-2 self-center mt-3 md:mt-6 md:self-start'
        >
          Copiar salario {copied ? <IconCheck /> : <IconCopy />}
        </Button>
      </div>
    </div>
  )
}

export default AnimatedNumbersContainer
