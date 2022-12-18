import { createStitches } from '@stitches/react'

type ColorsPaletteType = {
  primary: string
  primaryLight: string
  primaryDark: string
  room: {
    isSuiteBorder: string
  }
  availablity: {
    available: string
    partiallyAvailable: string
    unavailable: string
    unknown: string
  }
}

export const { styled } = createStitches({
  media: {
    sm: '(max-width: 640px)',
    md: '(max-width: 768px)',
    l: '(max-width: 1024px)',
  },
})

export const palette: ColorsPaletteType = {
  primary: '#00CCCC',
  primaryLight: '#e6f9fa',
  primaryDark: '#00b3b3',
  room: {
    isSuiteBorder: '#dab238',
  },
  availablity: {
    available: '#6eff5e',
    partiallyAvailable: '#FFBF00',
    unavailable: '#ff2942',
    unknown: '#EAEAEA',
  },
}

export const commonStyles = {
  fontFamily: 'Poppins',
  fontSize: 16,
  fontWeight: 200,
}
