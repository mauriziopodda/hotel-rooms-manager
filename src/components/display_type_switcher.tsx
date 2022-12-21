import { displayModeAtom } from '../atoms/display_mode'
import { paletteAtom } from '../atoms/palette'
import { palette as themePalette } from '../components/styled/common'
import { Button } from './styled/button'
import { useAtom, useSetAtom } from 'jotai'
import React from 'react'

import type { DisplayModeType } from '../manager.config'

export const DisplayModeSwitcher = () => {
  const [displayMode, setDisplayMode] = useAtom(displayModeAtom)
  const setPalette = useSetAtom(paletteAtom)

  const handleSwitchDisplayMode = (displayMode: DisplayModeType) => {
    localStorage.setItem('displayMode', displayMode)
    setDisplayMode(displayMode)
    setPalette(themePalette[displayMode])
  }

  return (
    <>
      {displayMode === 'light' && (
        <Button
          onClick={() => {
            handleSwitchDisplayMode('dark')
          }}
        >
          dark
        </Button>
      )}
      {displayMode === 'dark' && (
        <Button
          onClick={() => {
            handleSwitchDisplayMode('light')
          }}
        >
          light
        </Button>
      )}
    </>
  )
}
