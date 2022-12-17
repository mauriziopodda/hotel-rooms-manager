import { atom } from 'jotai'
import { DateFormatsType, managerConfig } from '../manager.config'

export type PeriodType = { start: string; end: string }

const sessionDatesFormat = localStorage.getItem('datesFormat')

export const datesFormatAtom = atom<DateFormatsType>(
  sessionDatesFormat !== null
    ? (sessionDatesFormat as DateFormatsType)
    : managerConfig.defaultDateFormat
)
