import React, { FC } from 'react'
import { RoomType } from '../atoms/rooms'
import useRooms from '../hooks/useRooms'
import { RoomsListItem } from './rooms_list_item'

type RoomsListPropsType = {
  floor?: RoomType['number'] | null
}

export const RoomsList: FC<RoomsListPropsType> = ({ floor }) => {
  const { rooms } = useRooms(floor ? { floor: floor } : undefined)

  return (
    <>
      {rooms.map((room) => (
        <RoomsListItem key={room.id} room={room} />
      ))}
    </>
  )
}
