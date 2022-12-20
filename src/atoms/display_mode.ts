import { managerConfig } from '../manager.config'
import { atom } from 'jotai'

import type { DisplayModeType } from '../manager.config'

export const displayModeAtom = atom<DisplayModeType>(
  (localStorage.getItem('displayMode') as DisplayModeType) ??
    managerConfig.defaultDisplayType
)
