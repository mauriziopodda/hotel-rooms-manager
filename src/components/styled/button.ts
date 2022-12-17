import { styled } from '@stitches/react'
import { commonStyles } from './common'

export const Button = styled('button', {
  ...commonStyles,
  border: 'none',
  backgroundColor: '#00CCCC',
  borderRadius: 3,
  color: '#FFF',
  cursor: 'pointer',
  padding: '8px 32px',

  '&:hover': {
    backgroundColor: '#00b3b3',
  },

  '& + &': {
    marginLeft: 5,
  },
})
