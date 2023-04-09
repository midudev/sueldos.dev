const initialProps = {
  locale: 'es-ES',
  maximumFractionDigits: 0
  // currency: 'EUR'
}

export function useNumberFormat (props = initialProps) {
  const numberFormat = new Intl.NumberFormat(props.locale, { ...(props.currency && { style: 'currency', currency: props.currency }), maximumFractionDigits: props.maximumFractionDigits })
  const formatNumber = (value) => numberFormat.format(value)

  return {
    formatNumber
  }
}
