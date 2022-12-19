import moment from 'moment'

export const enumerateDaysBetweenDates = (
  startDate: string,
  endDate: string
) => {
  const dates = []

  const currentDate = moment(startDate).startOf('day')
  const lastDate = moment(endDate).startOf('day')

  while (currentDate.diff(lastDate) < 0) {
    dates.push(currentDate.format('YYYY-MM-DD'))
    currentDate.add(1, 'days')
  }

  return dates
}
