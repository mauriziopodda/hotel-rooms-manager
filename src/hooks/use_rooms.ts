import { periodAtom } from '../atoms/period'
import { roomsAtom } from '../atoms/rooms'
import { getRooms } from '../services/rooms'
import { enumerateDaysBetweenDates } from '../utilities/dates'
import genericSearch from '../utilities/generic_search'
import genericSort from '../utilities/generic_sort'
import { useAtom, useAtomValue } from 'jotai'
import moment from 'moment'
import { useEffect, useMemo } from 'react'

import type { PeriodType } from '../atoms/period'
import type { RoomType } from '../atoms/rooms'

export type RoomReservationStatusType =
  | 'available'
  | 'unavailable'
  | 'partiallyAvailable'
  | 'unknown'

export type RoomFiltersType = Partial<
  Pick<RoomType, 'id' | 'floor' | 'number' | 'cleaned'>
>

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
  room: RoomType
): RoomReservationStatusType => {
  const occupancy: string[] = calculateOccupacyDates(room)

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
  const occupancy = selectedRoom?.occupancy

  if (occupancy) {
    for (const occupacyPeriods of occupancy) {
      const datesInBetween = enumerateDaysBetweenDates(
        occupacyPeriods.start,
        occupacyPeriods.end
      )

      datesInBetween.map((date) => occupancyDates.push(date))
    }
  }

  return occupancyDates
}

const useRooms = (options?: {
  filters?: RoomFiltersType
  reservationStatus?: RoomReservationStatusType
}) => {
  const [rooms, setRooms] = useAtom(roomsAtom)
  const period = useAtomValue(periodAtom)
  const roomsMemo = useMemo(() => rooms, [rooms])

  const floors = useMemo(
    () => [...new Set(rooms.map((room) => room.floor))],
    [rooms]
  )

  useEffect(() => {
    // eslint-disable-next-line padding-line-between-statements
    ;(async () => {
      try {
        const rooms = await getRooms()

        setRooms(
          rooms
            .filter((room) => {
              room.reservationStatus = calculateReservationStatus(period, room)

              return (options?.reservationStatus &&
                room.reservationStatus === options?.reservationStatus) ||
                !options?.reservationStatus
                ? room
                : false
            })
            .filter((room) => genericSearch(room, options?.filters))
            .sort((a, b) => genericSort(a, b, 'floor'))
        )
      } catch {
        console.log('Error occured when fetching rooms')
      }
    })()
  }, [period, options?.filters, options?.reservationStatus, setRooms])

  return {
    floors,
    rooms: roomsMemo,
    setRooms,
  }
}

export default useRooms
