import { getThemedColor } from '@worldresources/wri-design-systems'

export const validateAchieved = (
  value: number,
  target: number,
  achievedIcon: React.ReactNode,
  notAchievedIcon: React.ReactNode,
  achievedLabel = 'Achieved',
  notAchievedLabel = 'Not Achieved',
) => {
  const isAchieved = value >= target

  return {
    label: isAchieved ? achievedLabel : notAchievedLabel,
    variant: (isAchieved ? 'success' : 'error') as
      | 'info-white'
      | 'info-grey'
      | 'success'
      | 'warning'
      | 'error',
    icon: isAchieved ? achievedIcon : notAchievedIcon,
  }
}

export const getColor = (idx: number): string => {
  const colors = [
    '#7485F7',
    '#18CD49',
    '#FFC506',
    '#E72828',
    '#C9C9C9',
    '#9333ea',
    '#db2777',
    '#0d9488',
    '#2563eb',
    '#ea580c',
    '#16a34a',
  ]

  const normalizedIdx = ((idx % colors.length) + colors.length) % colors.length
  return colors[normalizedIdx] ?? getThemedColor('primary', 900)
}

export const targetColor = getThemedColor('primary', 600)
export const defaultColor = getThemedColor('secondary', 500)
export const equityColor = '#18CD49'
export const debtColor = '#FFC506'
