import { paletteAtom } from './atoms/palette'
import { DisplayModeSwitcher } from './components/display_type_switcher'
import { LanguageSwitcher } from './components/language_switcher'
import { Navigator } from './components/navigator'
import { PeriodSelector } from './components/period_selector'
import { RoomsList } from './components/rooms_list'
import { styled } from './components/styled/common'
import { Typography } from './components/styled/typography'
import useTranslator from './hooks/use_translator'
import { useAtomValue } from 'jotai'
import React, { useMemo } from 'react'

import type { FC } from 'react'

// TODO: add comments for everything
// TODO: improve translations
// TODO: add navigation
// TODO: move all the icons
// TODO: put some threejs stuff
// TODO: put some map/floor statistics

const Manager: FC = () => {
  const { translations: t } = useTranslator()

  const palette = useAtomValue(paletteAtom)

  const Application = useMemo(
    () =>
      styled('div', {
        padding: 30,
        backgroundColor: palette.body.backgroundColor,
        '@sm': {
          padding: 15,
        },
      }),
    [palette.body.backgroundColor]
  )

  return (
    <Application>
      <LanguageSwitcher />
      <Navigator itemsSize={60} triggerSize={40} />
      <DisplayModeSwitcher />
      <Typography element="H2">{t.applicationTitle}</Typography>
      <Typography element="P">{t.welcomeText}</Typography>
      <PeriodSelector />
      <RoomsList />
    </Application>
  )
}

export default Manager
