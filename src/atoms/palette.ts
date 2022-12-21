import { palette } from '../components/styled/common'
import { managerConfig } from '../manager.config'
import { atom } from 'jotai'

import type {
  ThemePaletteType,
  ColorPaletteType,
} from '../components/styled/common'
import type { DisplayModeType } from '../manager.config'

const displayMode =
  (localStorage.getItem('displayMode') as DisplayModeType) ??
  managerConfig.defaultDisplayType

export const paletteAtom = atom<ColorPaletteType>(
  palette[displayMode as keyof ThemePaletteType]
)
