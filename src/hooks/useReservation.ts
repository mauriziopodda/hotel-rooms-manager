import { useAtomValue } from 'jotai'
import moment from 'moment'
import { periodAtom } from '../atoms/period'
import { roomsAtom, RoomType } from '../atoms/rooms'
import { managerConfig } from '../manager.config'
import { enumerateDaysBetweenDates } from '../utilities/dates'

export type RoomReservationStatus =
  | 'available'
  | 'unavailable'
  | 'partiallyAvailable'
  | 'unknown'

const filterOccupancyByPeriod = (
  occupancy: string[],
  datesInPeriod: string[]
) =>
  occupancy.filter(
    (date) =>
      moment(date) >= moment(datesInPeriod[0]) &&
      moment(date) <= moment(datesInPeriod[datesInPeriod.length - 1])
  )

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

  const allDatesOfThePeriod = enumerateDaysBetweenDates(
    period.start,
    period.end
  )

  const occupancyInThePeriod = filterOccupancyByPeriod(
    occupancy,
    allDatesOfThePeriod
  )

  const reservationStatus: RoomReservationStatus =
    allDatesOfThePeriod && allDatesOfThePeriod.length > 0 && occupancy
      ? occupancyInThePeriod.some((date) => allDatesOfThePeriod.includes(date))
        ? occupancyInThePeriod.filter((date) =>
            allDatesOfThePeriod.includes(date)
          ).length === allDatesOfThePeriod.length
          ? 'unavailable'
          : 'partiallyAvailable'
        : 'available'
      : 'unknown'

  return {
    occupancy,
    occupancyInThePeriod,
    reservationStatus,
    selectedRoom,
  }
}

export default useReservation
