import { useAtom } from 'jotai'
import { useMemo } from 'react'
import { datesFormatAtom } from '../atoms/date_format'
import { periodAtom, PeriodType } from '../atoms/period'
import { RoomType } from '../atoms/rooms'
import { DateFormatsType } from '../manager.config'

type RoomFiltersType = Partial<Pick<RoomType, 'floor' | 'number' | 'cleaned'>>

const usePeriod = () => {
  const [period, setPeriod] = useAtom(periodAtom)
  const [datesFormat, setDatesFormat] = useAtom(datesFormatAtom)

  const periodMemo = useMemo(() => period, [period])

  const handleSetPeriod = (period: PeriodType) => {
    setPeriod(period)
    sessionStorage.setItem('period', JSON.stringify(period))
  }

  const handleSetDatesFormat = (dateFormat: DateFormatsType) => {
    setDatesFormat(dateFormat)
    localStorage.setItem('datesFormat', dateFormat)
  }

  return {
    datesFormat,
    period: periodMemo,
    setDatesFormat: handleSetDatesFormat,
    setPeriod: handleSetPeriod,
  }
}

export default usePeriod
