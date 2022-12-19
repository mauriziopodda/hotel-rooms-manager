import { datesFormatAtom } from '../atoms/date_format'
import { periodAtom } from '../atoms/period'
import { useAtom } from 'jotai'
import { useMemo } from 'react'

import type { PeriodType } from '../atoms/period'
import type { DateFormatsType } from '../manager.config'

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
