import { useAtom } from 'jotai'
import { useEffect, useMemo } from 'react'
import { roomsAtom, RoomType } from '../atoms/rooms'
import { getRooms } from '../services/rooms'
import genericSearch from '../utilities/generic_search'

export type RoomFiltersType = Partial<
  Pick<RoomType, 'id' | 'floor' | 'number' | 'cleaned'>
>

const useRooms = (filters?: RoomFiltersType) => {
  const [rooms, setRooms] = useAtom(roomsAtom)

  const roomsMemo = useMemo(() => rooms, [rooms])

  useEffect(() => {
    ;(async () => {
      try {
        const rooms = await getRooms()
        setRooms(rooms.filter((room) => genericSearch(room, filters)))
      } catch (err) {
        console.log('Error occured when fetching books')
      }
    })()
  }, [])

  return {
    rooms: roomsMemo,
    setRooms,
  }
}

export default useRooms
