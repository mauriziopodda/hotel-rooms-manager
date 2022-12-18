import { useAtomValue } from 'jotai'
import moment from 'moment'
import { PeriodType } from '../atoms/date_format'
import { periodAtom } from '../atoms/period'
import { roomsAtom, RoomType } from '../atoms/rooms'
import { managerConfig } from '../manager.config'
import { enumerateDaysBetweenDates } from '../utilities/dates'

export type RoomReservationStatusType =
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

export const calculateReservationStatus = (
  period: PeriodType,
  occupancy: string[]
): RoomReservationStatusType => {
  const allDatesOfThePeriod = enumerateDaysBetweenDates(
    period.start,
    period.end
  )

  const occupancyInThePeriod = filterOccupancyByPeriod(
    occupancy,
    allDatesOfThePeriod
  )

  return allDatesOfThePeriod && allDatesOfThePeriod.length > 0 && occupancy
    ? occupancyInThePeriod.some((date) => allDatesOfThePeriod.includes(date))
      ? occupancyInThePeriod.filter((date) =>
          allDatesOfThePeriod.includes(date)
        ).length === allDatesOfThePeriod.length
        ? 'unavailable'
        : 'partiallyAvailable'
      : 'available'
    : 'unknown'
}

export const calculateOccupacyDates = (selectedRoom: RoomType | undefined) => {
  const occupancyDates: string[] = []
  selectedRoom?.occupancy?.map((occupacyPeriods) => {
    const datesInBetween = enumerateDaysBetweenDates(
      occupacyPeriods.start,
      occupacyPeriods.end
    )
    datesInBetween.map((date) => occupancyDates.push(date))
  })
  return occupancyDates
}

const useReservation = (options: { roomId: RoomType['id'] }) => {
  const rooms = useAtomValue(roomsAtom)

  const selectedRoom = rooms.find((room) => room.id === options.roomId)
  const occupancy: string[] = calculateOccupacyDates(selectedRoom)

  return {
    occupancy,
    selectedRoom,
  }
}

export default useReservation
