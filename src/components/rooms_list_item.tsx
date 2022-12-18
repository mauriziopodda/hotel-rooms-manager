import React, { FC } from 'react'
import { RoomType } from '../atoms/rooms'
import useTranslator from '../hooks/useTranslator'
import { palette, styled } from './styled/common'

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

  variants: {
    isSuite: {
      true: {
        border: `1px solid ${palette.room.isSuiteBorder}`,

        '&:hover': {
          backgroundColor: palette.room.isSuiteBorder,
          color: '#fff',
        },

        '&::after': {
          position: 'absolute',
          content: '\u2B50',
          left: 48,
          top: -5,
          width: 14,
          height: 14,
          textAlign: 'center',
          fontSize: 14,
          lineHeight: '14px',
        },
      },
    },
  },
})

const RoomAvailabilityIcon = styled('div', {
  display: 'flex',
  position: 'absolute',
  borderRadius: '50%',
  left: 45,
  top: 35,
  height: 7,
  width: 7,

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
  return (
    <RoomNumberIcon isSuite={room.isSuite}>
      <div className="room-label">{t.room}</div>
      <div className="room-number">{room.number}</div>
      <RoomAvailabilityIcon
        availability={room.reservationStatus ?? 'unknown'}
      />
    </RoomNumberIcon>
  )
}
