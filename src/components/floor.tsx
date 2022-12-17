import { styled } from '@stitches/react'
import React, { FC } from 'react'
import { commonStyles } from './styled/common'
import { H3 } from './styled/typography'

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
  backgroundColor: '#e6f9fa',
  borderRadius: 8,
  padding: 10,
  marginTop: 16,
})

export const Floor: FC<FloorDividerPropsType> = ({ children }) => {
  return <FloorContainer>{children}</FloorContainer>
}
