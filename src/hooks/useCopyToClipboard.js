import { useState, useEffect } from 'react'

export const useCopyToClipboard = (textToCopy) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return

    const timeoutId = setTimeout(() => setCopied(false), 2500)

    return () => clearTimeout(timeoutId)
  }, [copied])

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => setCopied(true))
  }

  return { handleCopy, copied }
}
