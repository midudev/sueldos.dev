const initialProps = {
  locale: 'es-ES',
  maximumFractionDigits: 0
  // currency: 'EUR'
}

export function useNumberFormat (props = initialProps) {
  const numberFormat = new Intl.NumberFormat(props.locale, {
    maximumFractionDigits: props.maximumFractionDigits,
    ...(props.currency && {
      style: 'currency',
      currency: props.currency
    })
  })
  const formatNumber = (value) => numberFormat.format(value)

  return {
    formatNumber
  }
}
