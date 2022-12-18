import { styled } from '@stitches/react'
import React, { FC } from 'react'
import { RoomType } from '../atoms/rooms'
import { RoomReservationStatusType } from '../hooks/useReservation'
import useRooms from '../hooks/useRooms'
import useTranslator from '../hooks/useTranslator'
import { Floor } from './floor'
import { RoomsListItem } from './rooms_list_item'
import { H3 } from './styled/typography'

type RoomsListPropsType = {
  floor?: RoomType['number'] | null
  reservationStatus?: RoomReservationStatusType | null
}

const FloorName = styled(H3, {
  marginRight: 32,
  minWidth: 50,
  whiteSpace: 'nowrap',
  '-webkit-user-select': 'none' /* Safari */,
  '-ms-user-select': 'none' /* IE 10 and IE 11 */,
  userSelect: 'none' /* Standard syntax */,
})

const RoomsContainer = styled('div', {
  display: 'flex',
  position: 'relative',
  width: '100%',
  flexWrap: 'wrap',
})

export const RoomsList: FC<RoomsListPropsType> = ({
  floor,
  reservationStatus,
}) => {
  const { rooms, floors } = useRooms(
    floor || reservationStatus
      ? {
          filters: { floor: floor ?? undefined },
          reservationStatus: reservationStatus ?? undefined,
        }
      : undefined
  )
  const { translations: t } = useTranslator()
  return (
    <>
      {floors.map((floor) => {
        return (
          <Floor key={floor}>
            <FloorName>
              {floor}° {t.floor}
            </FloorName>
            <RoomsContainer>
              {rooms
                .filter((room) => room.floor === floor)
                .map((room) => (
                  <RoomsListItem key={room.id} room={room} />
                ))}
            </RoomsContainer>
          </Floor>
        )
      })}
    </>
  )
}
