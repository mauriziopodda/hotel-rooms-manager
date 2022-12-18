import { commonStyles, palette, styled } from './common'

/** HEADERS */

export const H2 = styled('h2', {
  ...commonStyles,
  fontSize: 24,
  color: palette.primary,
})

export const H3 = styled('h3', {
  ...commonStyles,
  fontSize: 18,
  color: palette.primary,
})

/** PARAGRAPH & OTHER */

export const P = styled('div', {
  ...commonStyles,
  color: '#000',
  marginBottom: 16,
})
