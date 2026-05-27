export const formatMoney = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export const formatForCharts = (
  value: number,
  unit?: string,
  noUnit?: boolean,
  maximumFractionDigits = 2,
) => {
  if (unit === '%') {
    return `${value.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits,
      style: 'decimal',
    })}%`
  }

  const isMoney = unit === '$'
  const isRatio = unit === 'x'
  const prefix = isMoney ? '$' : ''

  const spacing = isRatio ? '' : ' '

  return `${prefix}${value.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits,
    notation: 'compact',
    unitDisplay: 'short',
    style: 'decimal',
  })}${noUnit || isMoney ? '' : `${spacing}${unit ?? ''}`}`
}
