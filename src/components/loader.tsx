import SpinnerIcon from '../assets/images/spinner.svg'
import { paletteAtom } from '../atoms/palette'
import { styled } from './styled/common'
import { useAtomValue } from 'jotai'
import React, { useMemo } from 'react'

import type { FC } from 'react'

type LoaderPropsType = {
  message?: string
  mode?: 'fullScreen' | 'local' | 'centered'
  size?: 'sm' | 'md' | 'lg'
}

export const Loader: FC<LoaderPropsType> = ({
  message,
  mode = 'local',
  size = 'sm',
}) => {
  const loaderSize = size === 'sm' ? 50 : size === 'md' ? 100 : 150
  const position = mode === 'local' ? 'relative' : 'absolute'
  const palette = useAtomValue(paletteAtom)
  const verticalMargin = mode === 'local' ? '0px' : '50%'

  const LoaderItem = useMemo(
    () =>
      styled('div', {
        position,
        display: 'flex',
        justifyContent: 'center',
        width: loaderSize,
        minWidth: mode === 'fullScreen' ? 'calc(100% - 30px)' : 300,
        minHeight: mode === 'fullScreen' ? '100%' : loaderSize / 2,
        margin:
          mode === 'fullScreen'
            ? '-30px'
            : mode === 'centered'
            ? `50% calc(${verticalMargin} - 190px)`
            : undefined,
        transform: mode === 'centered' ? 'translateY(-50%)' : undefined,
        padding: 20,
        borderRadius: mode === 'fullScreen' ? 0 : 5,
        backgroundColor: palette.loader.backgroundColor,
        zIndex: 9999,
        paddingTop: mode === 'fullScreen' ? '50%' : undefined,

        '&::before': {
          position: 'absolute',
          content: '',
          backgroundImage: `url(${SpinnerIcon})`,
          backgroundSize: `${loaderSize}px`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: loaderSize,
          height: loaderSize / 2,
        },

        '&::after': {
          display: message ? 'block' : 'none',
          position: mode === 'fullScreen' ? 'absolute' : 'relative',
          marginTop: loaderSize / 2,
          content: message,
          fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
          textAlign: 'center',
          fontWeight: 200,
          width: '80%',
        },
      }),
    [
      loaderSize,
      message,
      mode,
      palette.loader.backgroundColor,
      position,
      verticalMargin,
    ]
  )

  return <LoaderItem />
}
