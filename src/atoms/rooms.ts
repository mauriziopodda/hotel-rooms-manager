import { atom } from 'jotai'
import { z } from 'zod'

import type { RoomReservationStatusType } from '../hooks/use_rooms'
import type { PeriodType } from './period'

export const roomSizeTypes = z.union([
  z.literal('double'),
  z.literal('doublePlusSingle'),
  z.literal('triple'),
  z.literal('single'),
  z.literal('twin'),
])

export type RoomSizeType = z.infer<typeof roomSizeTypes>

export const availableAmenities = z.union([
  z.literal('frige'),
  z.literal('hair dryer'),
  z.literal('tv'),
])

export type AmenitiesType = z.infer<typeof availableAmenities>

export type RoomType = {
  id: string
  floor: number
  number: number
  cleaned: boolean
  area: number
  amenities: AmenitiesType[]
  isSuite: boolean
  occupancy: PeriodType[] | null
  reservationStatus: RoomReservationStatusType | null
  size: RoomSizeType
}

export const roomsAtom = atom<RoomType[]>([] as RoomType[])
