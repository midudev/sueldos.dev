export const formatNumberToEur = (number) =>
  `${Intl.NumberFormat('es').format(Math.round(number)).toString()} €`

export const getEstimatedPercentage = (firstNumber, secondNumber) => {
  const ratio = (firstNumber / secondNumber).toFixed(2)

  return ratio > 1
    ? ((ratio - 1) * 100).toFixed(0)
    : (ratio * 100).toFixed(0)
}
