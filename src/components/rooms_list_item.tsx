import React, { FC } from 'react'
import { RoomType } from '../atoms/rooms'
import useReservation from '../hooks/useReservation'
import useTranslator from '../hooks/useTranslator'

type RoomsListItemType = {
  room: RoomType
}
export const RoomsListItem: FC<RoomsListItemType> = ({ room }) => {
  const { translations: t } = useTranslator()
  const { reservationStatus } = useReservation({
    roomId: room.id,
  })
  return (
    <div>
      {t.floor}: {room.floor} {t.roomNumber}: {room.number} {t.cleaned}:
      {room.cleaned ? 'y' : 'n'} {room.area}m<sup>2</sup> {t.available}:{' '}
      {reservationStatus}
    </div>
  )
}
