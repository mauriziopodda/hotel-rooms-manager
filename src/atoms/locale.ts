import { atom } from 'jotai'
import { LocalesType, managerConfig } from '../manager.config'

export const localeAtom = atom<LocalesType>(
  (localStorage.getItem('locale') as LocalesType) ?? managerConfig.defaultLocale
)
