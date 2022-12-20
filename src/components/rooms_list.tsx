import useRooms from '../hooks/use_rooms'
import useTranslator from '../hooks/use_translator'
import { Floor } from './floor'
import { RoomsListItem } from './rooms_list_item'
import { styled } from './styled/common'
import { Typography } from './styled/typography'
import React from 'react'

import type { RoomType } from '../atoms/rooms'
import type { RoomReservationStatusType } from '../hooks/use_rooms'
import type { FC } from 'react'

type RoomsListPropsType = {
  floor?: RoomType['number'] | null
  reservationStatus?: RoomReservationStatusType | null
}

const FloorName = styled('div', {
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
  flexWrap: 'wrap',

  '@sm': {
    justifyContent: 'center',
  },
})

export const RoomsList: FC<RoomsListPropsType> = ({
  floor,
  reservationStatus,
}) => {
  const { floors, rooms } = useRooms(
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
            <Typography element="H3">
              <FloorName>
                {floor}° {t.floor}
              </FloorName>
            </Typography>
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
