import React, { FC } from 'react'
import { RoomType } from '../atoms/rooms'
import useRooms from '../hooks/useRooms'
import useTranslator from '../hooks/useTranslator'
import { Floor } from './floor'
import { RoomsListItem } from './rooms_list_item'
import { H3 } from './styled/typography'
type RoomsListPropsType = {
  floor?: RoomType['number'] | null
}

export const RoomsList: FC<RoomsListPropsType> = ({ floor }) => {
  const { rooms, floors } = useRooms(floor ? { floor: floor } : undefined)
  const { translations: t } = useTranslator()
  return (
    <>
      {floors.map((floor) => {
        return (
          <Floor key={floor}>
            <H3>
              {floor}° {t.floor}
            </H3>
            {rooms
              .filter((room) => room.floor === floor)
              .map((room) => (
                <RoomsListItem key={room.id} room={room} />
              ))}
          </Floor>
        )
      })}
    </>
  )
}
