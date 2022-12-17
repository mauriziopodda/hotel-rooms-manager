import { atom } from 'jotai'

export type TranslationsConfigType = {
  applicationTitle: string
  welcomeText: string
  room: string
  roomNumber: string
  floor: string
  amenities: string
  cleaned: string
  available: string
  unavailable: string
}

export const translationsAtom = atom<TranslationsConfigType>(
  {} as TranslationsConfigType
)
