import usePeriod from '../hooks/use_period'
import { commonStyles, palette, styled } from './styled/common'
import moment from 'moment'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const DateRangeInput = styled('input', {
  ...commonStyles,
  width: 220,
  border: 'none',
  cursor: 'pointer',
  '-webkit-user-select': 'none' /* Safari */,
  '-ms-user-select': 'none' /* IE 10 and IE 11 */,
  userSelect: 'none' /* Standard syntax */,
  backgroundColor: palette.primaryLight,
  borderRadius: 5,
  textAlign: 'center',
  padding: '10px 20px',
  color: palette.primary,
  fontWeight: 400,
})

export const PeriodSelector = () => {
  const { datesFormat, period, setPeriod } = usePeriod()

  const [dateRange, setDateRange] = useState<(Date | null)[]>([
    moment(period.start).toDate() ?? null,
    moment(period.end).toDate() ?? null,
  ])

  const [startDate, endDate] = dateRange

  const handleOnChange = (update: (Date | null)[]) => {
    if (update?.[0]) {
      const start = moment(update[0]).format('YYYY-MM-DD')

      const end =
        update[1] && update[1] > update[0]
          ? moment(update[1]).format('YYYY-MM-DD')
          : moment(update[0]).format('YYYY-MM-DD')

      setPeriod({
        start,
        end,
      })

      setDateRange(update)
    }
  }

  return (
    <div>
      <DatePicker
        selectsRange
        customInput={<DateRangeInput />}
        dateFormat={datesFormat}
        endDate={endDate}
        isClearable={false}
        minDate={new Date()}
        startDate={startDate}
        onChange={(v) => handleOnChange(v)}
      />
    </div>
  )
}
