import { useState, useEffect } from 'react'

export const useCopyToClipboard = (textToCopy) => {
  const [copied, setCopied] = useState(false)
  console.log(textToCopy)

  useEffect(() => {
    if (!copied) return

    const timeoutId = setTimeout(() => setCopied(false), 2500)

    return () => clearTimeout(timeoutId)
  }, [copied])

  const handleCopyAttribution = () => {
    navigator.clipboard.writeText(textToCopy).then(() => setCopied(true))
  }

  return { handleCopyAttribution, copied }
}
