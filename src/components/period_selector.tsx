import React from 'react'
import moment from 'moment'
import usePeriod from '../hooks/usePeriod'

export const PeriodSelector = () => {
  const { datesFormat, period } = usePeriod()

  const showSingleDate =
    moment(period.start).format('YYYYMMDD') ===
    moment(period.end).format('YYYYMMDD')

  return (
    <div>
      {showSingleDate
        ? `${moment(period.start).format(datesFormat)}`
        : `${moment(period.start).format(datesFormat)} - ${moment(
            period.end
          ).format(datesFormat)}`}
    </div>
  )
}
