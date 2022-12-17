import { atom } from 'jotai'
import { managerConfig, ManagerConfigType } from '../manager.config'

export const managerConfigAtom = atom<ManagerConfigType>(managerConfig)
