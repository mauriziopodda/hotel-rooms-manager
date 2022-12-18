import React, { FC } from 'react'
import { RoomType } from '../atoms/rooms'
import useTranslator from '../hooks/useTranslator'
import { palette, styled } from './styled/common'
import IconBedDouble from '../assets/images/bed-double.svg'
import IconBedDoublePlusSingle from '../assets/images/bed-double-plus-single.svg'
import IconBedTriple from '../assets/images/bed-triple.svg'
import IconBedTwin from '../assets/images/bed-twin.svg.svg'
import IconBedSingle from '../assets/images/bed-single.svg'
import IconStar from '../assets/images/star.svg'
type RoomsListItemType = {
  room: RoomType
}

const bedIconsCommonStyles = {
  position: 'absolute',
  content: '',
  backgroundColor: palette.primaryDark,
  maskRepeat: 'no-repeat',
  'mask-repeat': 'no-repeat',
  '-webkit-mask-repeat': 'no-repeat',
  top: 47,
  height: 18,
  width: '100%',
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
    roomSize: {
      double: {
        '&::before': {
          ...bedIconsCommonStyles,
          maskImage: `url(${IconBedDouble})`,
          maskSize: '18px 18px',
          left: 'calc(50% - 9px)',
        },
      },
      doublePlusSingle: {
        '&::before': {
          ...bedIconsCommonStyles,
          maskImage: `url(${IconBedDoublePlusSingle})`,
          maskSize: '28px 20px',
          left: 'calc(50% - 14px)',
          top: 45,
        },
      },
      triple: {
        '&::before': {
          ...bedIconsCommonStyles,
          maskImage: `url(${IconBedTriple})`,
          maskSize: '30px 23px',
          left: 'calc(50% - 15px)',
          top: 44,
        },
      },
      single: {
        '&::before': {
          ...bedIconsCommonStyles,
          maskImage: `url(${IconBedSingle})`,
          maskSize: '26px 20px',
          left: 'calc(50% - 12px)',
          top: 45,
        },
      },
      twin: {
        '&::before': {
          ...bedIconsCommonStyles,
          maskImage: `url(${IconBedTwin})`,
          maskSize: '20px 23px',
          left: 'calc(50% - 10px)',
          top: 44,
        },
      },
    },
    isSuite: {
      true: {
        border: `1px solid ${palette.room.isSuiteBorder}`,

        '&:hover': {
          backgroundColor: palette.room.isSuiteBorder,
          color: '#fff',
        },

        '&::after': {
          position: 'absolute',
          content: '',
          left: 48,
          top: -5,
          width: 14,
          height: 14,
          maskImage: `url(${IconStar})`,
          maskSize: '14px 14px',
          backgroundColor: palette.room.isSuiteStar,
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
    <RoomNumberIcon isSuite={room.isSuite} roomSize={room.size}>
      <div className="room-label">{t.room}</div>
      <div className="room-number">{room.number}</div>
      <RoomAvailabilityIcon
        availability={room.reservationStatus ?? 'unknown'}
      />
    </RoomNumberIcon>
  )
}
