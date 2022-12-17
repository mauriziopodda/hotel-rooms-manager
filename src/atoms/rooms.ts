import { atom } from 'jotai'
import { z } from 'zod'

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
}

export const roomsAtom = atom<RoomType[]>([] as RoomType[])
