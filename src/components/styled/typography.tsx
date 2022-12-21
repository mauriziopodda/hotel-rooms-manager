import { paletteAtom } from '../../atoms/palette'
import { commonStyles, styled } from './common'
import { useAtomValue } from 'jotai'
import React, { useMemo } from 'react'

import type { FC } from 'react'

type TypographyPropsType = {
  children: React.ReactNode
  element?: 'H2' | 'H3' | 'P'
}

export const Typography: FC<TypographyPropsType> = ({
  children,
  element = 'P',
}) => {
  const palette = useAtomValue(paletteAtom)
  /** HEADERS */

  const H2 = useMemo(
    () =>
      styled('h2', {
        ...commonStyles,
        fontSize: 24,
        color: palette.primary,
      }),
    [palette.primary]
  )

  const H3 = useMemo(
    () =>
      styled('h3', {
        ...commonStyles,
        fontSize: 18,
        color: palette.primary,
      }),
    [palette.primary]
  )

  /** PARAGRAPH & OTHER */

  const P = useMemo(
    () =>
      styled('div', {
        ...commonStyles,
        color: palette.text.color,
        marginBottom: 16,
      }),
    [palette.text.color]
  )

  return (
    <>
      {element === 'H2' && <H2>{children}</H2>}
      {element === 'H3' && <H3>{children}</H3>}
      {element === 'P' && <P>{children}</P>}
    </>
  )
}
