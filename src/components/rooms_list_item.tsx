import { styled } from '@stitches/react'
import React, { FC } from 'react'
import { RoomType } from '../atoms/rooms'
import useReservation from '../hooks/useReservation'
import useTranslator from '../hooks/useTranslator'
import { palette } from './styled/common'

type RoomsListItemType = {
  room: RoomType
}

const RoomNumberIcon = styled('div', {
  display: 'flex',
  position: 'relative',
  border: `1px solid ${palette.primary}`,
  borderRadius: 10,
  cursor: 'pointer',
  flexDirection: 'column',
  alignContent: 'center',
  color: palette.primary,
  fontWeight: 400,
  textTransform: 'capitalize',
  padding: '5px 10px',
  minWidth: 36,
  height: 36,
  maxHeight: 36,
  marginRight: 18,
  marginTop: 4,
  marginBottom: 4,
  '-webkit-user-select': 'none' /* Safari */,
  '-ms-user-select': 'none' /* IE 10 and IE 11 */,
  userSelect: 'none' /* Standard syntax */,

  '&:hover': {
    backgroundColor: palette.primary,
    color: '#fff',
  },

  '& > div.room-label': {
    textAlign: 'center',
    fontSize: 10,
    lineHeight: '14px',
  },

  '& > div.room-number': {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: '24px',
  },

  '& + &': {},
})

const RoomAvailabilityIcon = styled('div', {
  display: 'flex',
  position: 'absolute',
  borderRadius: '50%',
  left: 43,
  top: 33,
  height: 9,
  width: 9,

  variants: {
    availability: {
      available: {
        backgroundColor: palette.availablity.available,
      },
      partiallyAvailable: {
        backgroundColor: palette.availablity.partiallyAvailable,
      },
      unavailable: {
        backgroundColor: palette.availablity.unavailable,
      },
      unknown: {
        backgroundColor: palette.availablity.unknown,
      },
    },
  },
})

export const RoomsListItem: FC<RoomsListItemType> = ({ room }) => {
  const { translations: t } = useTranslator()
  const { reservationStatus } = useReservation({
    roomId: room.id,
  })
  return (
    <RoomNumberIcon>
      <div className="room-label">{t.room}</div>
      <div className="room-number">{room.number}</div>
      <RoomAvailabilityIcon availability={reservationStatus} />
    </RoomNumberIcon>
  )
}
