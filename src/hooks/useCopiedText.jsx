import { useEffect, useState } from "react"

const ATTRIBUTION_TEXT = 'Datos extraídos de <a href="https://sueldos.dev/">sueldos.dev</a>'

export function useCopiedText() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return

    const timeoutId = setTimeout(() => setCopied(false), 2500)

    return () => clearTimeout(timeoutId)
  }, [copied])

  const handleCopyAttribution = () => {
    navigator.clipboard.writeText(ATTRIBUTION_TEXT).then(() => setCopied(true))
  }

  return {
    copied,
    handleCopyAttribution
  }
}
