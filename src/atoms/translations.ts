import { atom } from 'jotai'

export type TranslationsConfigType = {
  amenities: string
  applicationTitle: string
  available: string
  cleaned: string
  floor: string
  rangeDivider: string
  room: string
  roomNumber: string
  unavailable: string
  welcomeText: string
}

export const translationsAtom = atom<TranslationsConfigType>(
  {} as TranslationsConfigType
)
