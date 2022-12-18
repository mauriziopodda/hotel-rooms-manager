import React, { FC } from 'react'
import { commonStyles, palette, styled } from './styled/common'

type FloorDividerPropsType = {
  children: React.ReactNode
}

export const FloorContainer = styled('div', {
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
})

export const Floor: FC<FloorDividerPropsType> = ({ children }) => {
  return <FloorContainer>{children}</FloorContainer>
}
