import { useAtom } from 'jotai'
import { useEffect, useMemo } from 'react'
import { roomsAtom, RoomType } from '../atoms/rooms'
import { getRooms } from '../services/rooms'
import genericSearch from '../utilities/generic_search'
import genericSort from '../utilities/generic_sort'
import useReservation from './useReservation'

export type RoomFiltersType = Partial<
  Pick<RoomType, 'id' | 'floor' | 'number' | 'cleaned'>
>

const useRooms = (filters?: RoomFiltersType) => {
  const [rooms, setRooms] = useAtom(roomsAtom)

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
            .filter((room) => genericSearch(room, filters))
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
