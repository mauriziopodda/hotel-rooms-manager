import { atom } from 'jotai'
import { DateFormatsType } from '../manager.config'

export type PeriodType = { start: Date; end: Date }

const sessionPeriod = sessionStorage.getItem('period')

export const periodAtom = atom<PeriodType>(
  sessionPeriod !== null
    ? (JSON.parse(sessionPeriod) as PeriodType)
    : {
        start: new Date(),
        end: new Date(),
      }
)
