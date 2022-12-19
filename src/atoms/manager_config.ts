import { managerConfig } from '../manager.config'
import { atom } from 'jotai'

import type { ManagerConfigType } from '../manager.config'

export const managerConfigAtom = atom<ManagerConfigType>(managerConfig)
