export const formatNumberToEur = (number) =>
  `${Intl.NumberFormat('es').format(Math.round(number)).toString()} €`
