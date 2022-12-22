import { createStitches } from '@stitches/react'

import type { CSS as StitchesCSS } from '@stitches/react'

export type ColorPaletteType = {
  availablity: {
    available: string
    partiallyAvailable: string
    unavailable: string
    unknown: string
  }
  black: string
  body: { backgroundColor: string }
  calendar: {
    navigation: {
      disabled: {
        backgroundColor: string
        color: string
      }
    }
    selectRange: {
      backgroundColor: string
    }
    tile: {
      now: {
        backgroundColor: string
        color: string
      }
    }
  }
  primary: string
  primaryDark: string
  primaryHighLight: string
  primaryLight: string
  room: {
    isSuiteBorder: string
    isSuiteStar: string
  }
  text: {
    color: string
  }
  white: string
}
export type ThemePaletteType = {
  dark: ColorPaletteType
  light: ColorPaletteType
}

type AllowedDistanceUnits =
  | '%'
  | 'ch'
  | 'pt'
  | 'px'
  | 'rem'
  | 'vh'
  | 'vmax'
  | 'vmin'
  | 'vw'

type DistanceType = `${number}${AllowedDistanceUnits}`

const stitchesCSSUtils = {
  icon: (url: string) => ({
    '-webkit-mask-image': `url(${url})`,
    '-webkit-mask-position': 'center',
    '-webkit-mask-repeat': 'no-repeat',
    maskImage: `url(${url})`,
    maskPosition: 'center',
    maskRepeat: 'no-repeat',
  }),

  iconSize: (size: DistanceType) => ({
    '-webkit-mask-size': size,
    height: size,
    maskSize: size,
    width: size,
  }),

  iconPosition: (position: 'center') => ({
    '-webkit-mask-position': position,
    maskPosition: position,
  }),

  iconColor: (color: StitchesCSS['color']) => ({
    backgroundColor: color as string,
  }),

  iconRepeat: (repeat: 'no-repeat' | 'repeat') => ({
    '-webkit-mask-repeat': repeat,
    maskRepeat: repeat,
  }),
}

export const { styled } = createStitches({
  media: {
    sm: '(max-width: 640px)',
    md: '(max-width: 768px)',
    l: '(max-width: 1024px)',
  },
  utils: stitchesCSSUtils,
})

export const palette: ThemePaletteType = {
  light: {
    availablity: {
      available: '#6eff5e',
      partiallyAvailable: '#FFBF00',
      unavailable: '#ff2942',
      unknown: '#EAEAEA',
    },
    black: '#000',
    body: { backgroundColor: '#fff' },
    calendar: {
      navigation: {
        disabled: {
          color: '#cccccc',
          backgroundColor: '#e6f9fa',
        },
      },
      selectRange: {
        backgroundColor: '#cbfafd',
      },
      tile: {
        now: {
          backgroundColor: '#cbfafd',
          color: '#000',
        },
      },
    },
    primary: '#00CCCC',
    primaryHighLight: '#a4e6e6',
    primaryLight: '#e6f9fa',
    primaryDark: '#00b3b3',
    room: {
      isSuiteBorder: '#ffd863',
      isSuiteStar: '#f5b801',
    },
    text: { color: '#000' },
    white: '#fff',
  },
  dark: {
    availablity: {
      available: '#6eff5e',
      partiallyAvailable: '#FFBF00',
      unavailable: '#ff2942',
      unknown: '#606366',
    },
    black: '#000',
    body: { backgroundColor: '#222426' },
    calendar: {
      navigation: {
        disabled: {
          color: '#606366',
          backgroundColor: '#313336',
        },
      },
      selectRange: {
        backgroundColor: '#cbfafd',
      },
      tile: {
        now: {
          backgroundColor: '#606366',
          color: '#000',
        },
      },
    },
    primary: '#00CCCC',
    primaryHighLight: '#a4e6e6',
    primaryLight: '#313336',
    primaryDark: '#00b3b3',
    room: {
      isSuiteBorder: '#ffd863',
      isSuiteStar: '#f5b801',
    },
    text: { color: '#fff' },
    white: '#fff',
  },
}

export const commonStyles = {
  fontFamily: 'Poppins',
  fontSize: 16,
  fontWeight: 200,
}
