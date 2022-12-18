import { useAtom, useAtomValue } from 'jotai'
import { useEffect, useMemo } from 'react'
import { periodAtom } from '../atoms/period'
import { roomsAtom, RoomType } from '../atoms/rooms'
import { getRooms } from '../services/rooms'
import genericSearch from '../utilities/generic_search'
import genericSort from '../utilities/generic_sort'
import useReservation, {
  calculateOccupacyDates,
  calculateReservationStatus,
  RoomReservationStatusType,
} from './useReservation'

export type RoomFiltersType = Partial<
  Pick<RoomType, 'id' | 'floor' | 'number' | 'cleaned'>
>

const useRooms = (options?: {
  filters?: RoomFiltersType
  reservationStatus?: RoomReservationStatusType
}) => {
  const [rooms, setRooms] = useAtom(roomsAtom)
  const period = useAtomValue(periodAtom)
  const roomsMemo = useMemo(() => rooms, [rooms])

  const floors = useMemo(
    () => Array.from(new Set(rooms.map((room) => room.floor))),
    [rooms]
  )

  useEffect(() => {
    ;(async () => {
      try {
        const rooms = await getRooms()
        setRooms(
          rooms
            .filter((room) => {
              const occupancy: string[] = calculateOccupacyDates(room)
              const roomReservationStatus: RoomReservationStatusType =
                calculateReservationStatus(period, occupancy)
              room.reservationStatus = roomReservationStatus
              return (options?.reservationStatus &&
                roomReservationStatus === options?.reservationStatus) ||
                !options?.reservationStatus
                ? room
                : false
            })
            .filter((room) => genericSearch(room, options?.filters))
            .sort((a, b) => genericSort(a, b, 'floor'))
        )
      } catch (err) {
        console.log('Error occured when fetching rooms')
      }
    })()
  }, [])

  return {
    floors,
    rooms: roomsMemo,
    setRooms,
  }
}

export default useRooms
