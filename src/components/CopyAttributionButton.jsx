import { useCopiedText } from '@/hooks/useCopiedText'

import { IconCopy, IconCheck } from '@tabler/icons-react'
import { Button } from '@/components/Button'

export function CopyAttributionButton () {
  const {copied, handleCopyAttribution}  = useCopiedText()

  return (
    <Button onClick={handleCopyAttribution} className='flex gap-2 items-center justify-center my-6 md:mx-auto self-center text-sm'>
      <span>
        Datos extraídos de <span className='underline'>sueldos.dev</span>
      </span>
      {copied ? <IconCheck /> : <IconCopy />}
    </Button>
  )
}
