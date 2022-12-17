type ColorsPaletteType = {
  primary: string
  primaryHover: string
  availablity: {
    available: string
    partiallyAvailable: string
    unavailable: string
    unknown: string
  }
}

export const palette: ColorsPaletteType = {
  primary: '#00CCCC',
  primaryHover: '#00b3b3',
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
