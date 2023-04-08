import { useEffect, useState } from 'react'
import { IconCopy, IconCheck } from '@tabler/icons-react'
import { Button } from '@/components/Button'
import { ATTRIBUTION_TEXT } from '@/constants'

export function CopyAttributionButton () {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return

    const timeoutId = setTimeout(() => setCopied(false), 2500)

    return () => clearTimeout(timeoutId)
  }, [copied])

  const handleCopyAttribution = () => {
    navigator.clipboard.writeText(ATTRIBUTION_TEXT).then(() => setCopied(true))
  }

  return (
    <Button onClick={handleCopyAttribution} className='flex gap-2 items-center justify-center my-6 md:mx-auto self-center text-sm'>
      <span>
        Datos extraídos de <span className='underline'>sueldos.dev</span>
      </span>
      {copied ? <IconCheck /> : <IconCopy />}
    </Button>
  )
}
