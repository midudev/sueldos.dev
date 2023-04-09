import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { IconCopy, IconCheck } from '@tabler/icons-react'
import { Button } from '@/components/Button'
import { ATTRIBUTION_TEXT } from '@/constants'

export function CopyAttributionButton () {
  const { handleCopyAttribution, copied } = useCopyToClipboard(ATTRIBUTION_TEXT)

  return (
    <Button onClick={handleCopyAttribution} className='flex gap-2 items-center justify-center my-6 md:mx-auto self-center text-sm'>
      <span>
        Datos extraídos de <span className='underline'>sueldos.dev</span>
      </span>
      {copied ? <IconCheck /> : <IconCopy />}
    </Button>
  )
}
