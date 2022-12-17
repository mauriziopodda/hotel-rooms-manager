import { useAtomValue } from 'jotai'
import { periodAtom } from '../atoms/period'
import { roomsAtom, RoomType } from '../atoms/rooms'
import { enumerateDaysBetweenDates } from '../utilities/dates'

export type RoomReservationStatus = 'available' | 'unavailable' | 'unknown'

const useReservation = (options: { roomId: RoomType['id'] }) => {
  const period = useAtomValue(periodAtom)
  const rooms = useAtomValue(roomsAtom)
  const selectedRoom = rooms.find((room) => room.id === options.roomId)

  const occupancy: string[] = []
  selectedRoom?.occupancy?.map((occupacyPeriods) => {
    const datesInBetween = enumerateDaysBetweenDates(
      occupacyPeriods.start,
      occupacyPeriods.end
    )
    datesInBetween.map((date) => occupancy.push(date))
  })

  const datesInPeriod = enumerateDaysBetweenDates(period.start, period.end)

  const reservationStatus: RoomReservationStatus =
    datesInPeriod && datesInPeriod.length > 0 && occupancy
      ? datesInPeriod.some((date) => occupancy.includes(date))
        ? 'unavailable'
        : 'available'
      : 'unknown'

  return {
    occupancy,
    reservationStatus,
    selectedRoom,
  }
}

export default useReservation
