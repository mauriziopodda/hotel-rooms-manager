import { managerConfig } from '../manager.config'
import { atom } from 'jotai'

import type { DateFormatsType } from '../manager.config'

export type PeriodType = { start: string; end: string }

const sessionDatesFormat = localStorage.getItem('datesFormat')

export const datesFormatAtom = atom<DateFormatsType>(
  sessionDatesFormat !== null
    ? (sessionDatesFormat as DateFormatsType)
    : managerConfig.defaultDateFormat
)
