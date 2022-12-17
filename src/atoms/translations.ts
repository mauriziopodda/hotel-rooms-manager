import { atom } from 'jotai'

export type TranslationsConfigType = {
  applicationTitle: string
  welcomeText: string
}

export const translationsAtom = atom<TranslationsConfigType>(
  {} as TranslationsConfigType
)
