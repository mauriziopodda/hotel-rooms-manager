import moment from 'moment'

export const enumerateDaysBetweenDates = (
  startDate: string,
  endDate: string
) => {
  var dates = []

  var currDate = moment(startDate).startOf('day')
  var lastDate = moment(endDate).startOf('day')

  while (currDate.diff(lastDate) < 0) {
    dates.push(currDate.format('YYYY-MM-DD'))
    currDate.add(1, 'days')
  }

  return dates
}
