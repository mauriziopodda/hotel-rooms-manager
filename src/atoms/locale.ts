import { managerConfig } from '../manager.config'
import { atom } from 'jotai'

import type { LocalesType } from '../manager.config'

export const localeAtom = atom<LocalesType>(
  (localStorage.getItem('locale') as LocalesType) ?? managerConfig.defaultLocale
)
