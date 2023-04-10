import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { IconCopy, IconCheck } from '@tabler/icons-react'
import { Button } from '@/components/Button'
import { ATTRIBUTION_TEXT } from '@/constants'

export function CopyAttributionButton () {
  const { handleCopy, copied } = useCopyToClipboard(ATTRIBUTION_TEXT)

  return (
    <Button onClick={handleCopy} className='flex gap-2 items-center justify-center my-6 md:mx-auto self-center text-sm'>
      <span>
        Datos extraídos de <span className='underline'>sueldos.dev</span>
      </span>
      {copied ? <IconCheck /> : <IconCopy />}
    </Button>
  )
}
