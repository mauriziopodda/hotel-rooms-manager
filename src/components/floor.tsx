import { paletteAtom } from '../atoms/palette'
import { commonStyles, styled } from './styled/common'
import { useAtomValue } from 'jotai'
import React, { useMemo } from 'react'

import type { FC } from 'react'

type FloorDividerPropsType = {
  children: React.ReactNode
}

export const Floor: FC<FloorDividerPropsType> = ({ children }) => {
  const palette = useAtomValue(paletteAtom)

  const FloorContainer = useMemo(
    () =>
      styled('div', {
        ...commonStyles,
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: palette.primaryLight,
        borderRadius: 8,
        padding: 10,
        marginTop: 16,

        '@sm': {
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 20,
          paddingLeft: 20,
          paddingRight: 20,
        },
      }),
    [palette.primaryLight]
  )

  return <FloorContainer>{children}</FloorContainer>
}
