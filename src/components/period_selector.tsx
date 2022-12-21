import { localeAtom } from '../atoms/locale'
import { paletteAtom } from '../atoms/palette'
import usePeriod from '../hooks/use_period'
import useTranslator from '../hooks/use_translator'
import { commonStyles, styled } from './styled/common'
import '../css/Calendar.css'
import '../css/DateRangePicker.css'
// @ts-expect-error no export
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle'
import { useAtomValue } from 'jotai'
import moment from 'moment'
import React, { useMemo, useState } from 'react'

export const PeriodSelector = () => {
  const { datesFormat, period, setPeriod } = usePeriod()
  const palette = useAtomValue(paletteAtom)
  const locale = useAtomValue(localeAtom)
  const { translations: t } = useTranslator()

  const [dateRange, setDateRange] = useState<Array<Date | null>>([
    moment(period.start).toDate() ?? null,
    moment(period.end).toDate() ?? null,
  ])

  const [startDate, endDate] = dateRange

  const handleOnChange = (update: Array<Date | null>) => {
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

  const DateRangeInput = useMemo(
    () =>
      styled(DateRangePicker, {
        ...commonStyles,
        border: 'none',
        cursor: 'pointer',
        '-webkit-user-select': 'none' /* Safari */,
        '-ms-user-select': 'none' /* IE 10 and IE 11 */,
        userSelect: 'none' /* Standard syntax */,
        backgroundColor: palette.primaryLight,
        borderRadius: 5,
        color: palette.primary,
        fontWeight: 400,

        // calendar picker classes customization
        '& .react-calendar': {
          border: `1px solid ${palette.primary}`,
        },
        '& .react-calendar, .react-calendar__navigation button:enabled:hover, .react-calendar__navigation button:enabled:focus':
          {
            backgroundColor: palette.primaryLight,
          },
        '& .react-calendar__tile--active': {
          backgroundColor: palette.primaryHighLight,
        },

        '& .react-calendar__month-view__days__day--weekend, .react-daterange-picker__inputGroup__input':
          {
            color: palette.primary,
            outline: 'none',
            textAlign: 'center',
          },
        '& .react-calendar__navigation button': {
          color: palette.text.color,
        },
        '& .react-calendar__navigation__arrow:disabled': {
          color: palette.calendar.navigation.disabled.color,
        },
        '& .react-calendar__navigation button:disabled': {
          backgroundColor: palette.calendar.navigation.disabled.backgroundColor,
        },
        '.react-calendar__tile--now': {
          backgroundColor: palette.calendar.tile.now.backgroundColor,
          color: palette.calendar.tile.now.color,
        },
        '.react-calendar--selectRange .react-calendar__tile--hover': {
          backgroundColor: palette.calendar.selectRange.backgroundColor,
        },
      }),
    [
      palette.calendar.navigation.disabled.backgroundColor,
      palette.calendar.navigation.disabled.color,
      palette.calendar.selectRange.backgroundColor,
      palette.calendar.tile.now.backgroundColor,
      palette.calendar.tile.now.color,
      palette.primary,
      palette.primaryHighLight,
      palette.primaryLight,
      palette.text.color,
    ]
  )

  return (
    <DateRangeInput
      required
      calendarIcon={false}
      clearIcon={false}
      closeCalendar={false}
      endDate={endDate}
      format={datesFormat}
      locale={locale}
      minDate={new Date()}
      minDetail="year"
      rangeDivider={t.rangeDivider}
      startDate={startDate}
      value={dateRange}
      onChange={handleOnChange}
    />
  )
}
