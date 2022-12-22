import BuildingIcon from '../assets/images/building.svg'
import RoomsListIcon from '../assets/images/rooms-list.svg'
import { paletteAtom } from '../atoms/palette'
import { styled } from './styled/common'
import { useAtomValue } from 'jotai'
import React, { useMemo, useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

import type { FC } from 'react'

type NavigatorPropsType = {
  itemsOffset?: number
  itemsSize?: number
  triggerSize?: number
}

type DotPropsType = {
  color: string
  icon?: string
  onClick?: () => void
  size: number
  type?: 'navigator-menu-icon-dot' | 'navigator-menu-item'
}
type DotsPropsType = Omit<DotPropsType, 'onClick'> & { amount: number }

const Dot: FC<DotPropsType> = ({ color, icon, onClick, size, type }) => {
  const palette = useAtomValue(paletteAtom)

  const DotElement = useMemo(
    () =>
      icon
        ? styled('div', {
            width: `${size}px`,
            height: `${size}px`,
            margin: '2px 0',
            content: '',
            border: `1px solid ${palette.primary}`,
            backgroundColor: color,
            borderRadius: '50%',

            '&::after': {
              content: '',
              position: 'absolute',
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: 'white',
              maskImage: `url(${icon})`,
              maskSize: `${size / 2}px`,
              '-webkit-mask-position': 'center',
              '-webkit-mask-repeat': 'no-repeat',
            },
          })
        : styled('div', {
            width: `${size}px`,
            height: `${size}px`,
            margin: '2px 0',
            content: '',
            backgroundColor: color,
            borderRadius: '50%',
          }),
    [color, icon, palette.primary, size]
  )

  return (
    <DotElement
      className={type === 'navigator-menu-icon-dot' ? type : undefined}
      onClick={onClick}
    />
  )
}

const Dots: FC<DotsPropsType> = ({ amount, color, size, type }) => {
  const dotsArray: Array<Omit<DotPropsType, 'onClick' | 'type'>> = []

  for (let index = 0; index < amount; index++) {
    dotsArray.push({ color, size })
  }

  return (
    <>
      {dotsArray.map((dot, index) => (
        <Dot
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          color={dot.color}
          size={dot.size}
          type={type}
        />
      ))}
    </>
  )
}

export const Navigator: FC<NavigatorPropsType> = ({
  itemsOffset = 5,
  itemsSize = 30,
  triggerSize = 30,
}) => {
  const palette = useAtomValue(paletteAtom)

  const minMenuSize = triggerSize < 30 ? 30 : triggerSize

  const menuTriggerReference = useRef(null)

  const NavigatorContainer = useMemo(
    () =>
      styled('div', {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        top: 20,
        cursor: 'pointer',
        zIndex: 1,
        width: `${itemsSize}px`,
      }),
    [itemsSize]
  )

  const MenuItemsContainer = useMemo(
    () =>
      styled('div', {
        display: 'none',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: `${itemsOffset}px`,

        variants: {
          isOpen: {
            true: {
              display: 'flex',
            },
          },
        },
      }),
    [itemsOffset]
  )

  const NavigatorTrigger = useMemo(
    () =>
      styled('div', {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1px solid ${palette.primary}`,
        borderRadius: '50%',
        width: `${minMenuSize}px`,
        height: `${minMenuSize}px`,
        cursor: 'pointer',

        '&:hover': {
          backgroundColor: palette.primary,

          '& div.navigator-menu-icon-dot': {
            backgroundColor: palette.white,
          },
        },
      }),
    [minMenuSize, palette.primary, palette.white]
  )

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useOnClickOutside(menuTriggerReference, () => {
    setIsMenuOpen(!isMenuOpen)
  })

  return (
    <NavigatorContainer ref={menuTriggerReference}>
      <NavigatorTrigger
        onClick={() => {
          setIsMenuOpen(!isMenuOpen)
        }}
      >
        <Dots
          amount={3}
          color={palette.primary}
          size={7}
          type="navigator-menu-icon-dot"
        />
      </NavigatorTrigger>
      <MenuItemsContainer isOpen={isMenuOpen}>
        <Dot
          color={palette.primary}
          icon={RoomsListIcon}
          size={itemsSize}
          onClick={() => {
            console.log('TEST 1')
          }}
        />
        <Dot
          color={palette.primary}
          icon={BuildingIcon}
          size={itemsSize}
          onClick={() => {
            console.log('TEST 2')
          }}
        />
      </MenuItemsContainer>
    </NavigatorContainer>
  )
}
