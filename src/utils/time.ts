import { format, startOfDay, addHours, addMonths } from 'date-fns'

export const addHoursToUTC = (date: Date) => {
  return addHours(date, 12)
}

export const formatDate = (date: Date, formatString: string) => {
  const dateUTC = addHoursToUTC(date)
  const dateStartOfDay = startOfDay(dateUTC)

  return format(dateStartOfDay, formatString)
}

export const formatSubmissionDate = (date: Date, formatString: string) => {
  const oneMonthBefore = addMonths(date, -1)

  return formatDate(oneMonthBefore, formatString)
}
