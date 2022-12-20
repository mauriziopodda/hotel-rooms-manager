import { createStitches } from '@stitches/react'

export type ColorPaletteType = {
  availablity: {
    available: string
    partiallyAvailable: string
    unavailable: string
    unknown: string
  }
  body: { backgroundColor: string }
  primary: string
  primaryDark: string
  primaryLight: string
  room: {
    isSuiteBorder: string
    isSuiteStar: string
  }
  text: {
    color: string
  }
}
export type ThemePaletteType = {
  dark: ColorPaletteType
  light: ColorPaletteType
}

export const { styled } = createStitches({
  media: {
    sm: '(max-width: 640px)',
    md: '(max-width: 768px)',
    l: '(max-width: 1024px)',
  },
})

export const palette: ThemePaletteType = {
  light: {
    availablity: {
      available: '#6eff5e',
      partiallyAvailable: '#FFBF00',
      unavailable: '#ff2942',
      unknown: '#EAEAEA',
    },
    body: { backgroundColor: '#fff' },
    primary: '#00CCCC',
    primaryLight: '#e6f9fa',
    primaryDark: '#00b3b3',
    room: {
      isSuiteBorder: '#ffd863',
      isSuiteStar: '#f5b801',
    },
    text: { color: '#000' },
  },
  dark: {
    availablity: {
      available: '#6eff5e',
      partiallyAvailable: '#FFBF00',
      unavailable: '#ff2942',
      unknown: '#606366',
    },
    body: { backgroundColor: '#222426' },
    primary: '#00CCCC',
    primaryLight: '#313336',
    primaryDark: '#00b3b3',
    room: {
      isSuiteBorder: '#ffd863',
      isSuiteStar: '#f5b801',
    },
    text: { color: '#fff' },
  },
}

export const commonStyles = {
  fontFamily: 'Poppins',
  fontSize: 16,
  fontWeight: 200,
}
