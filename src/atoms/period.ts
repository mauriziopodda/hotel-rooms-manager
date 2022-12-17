import { atom } from 'jotai'
import moment from 'moment'

export type PeriodType = { start: string; end: string }

const sessionPeriod = sessionStorage.getItem('period')

export const periodAtom = atom<PeriodType>(
  sessionPeriod !== null
    ? (JSON.parse(sessionPeriod) as PeriodType)
    : {
        start: moment(new Date()).format('YYYY-MM-DD'),
        end: moment(new Date()).add(1, 'days').format('YYYY-MM-DD'),
      }
)
