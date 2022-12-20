import { paletteAtom } from './atoms/palette'
import { DisplayModeSwitcher } from './components/display_type_switcher'
import { LanguageSwitcher } from './components/language_switcher'
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
// TODO: improve type of translations

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
      <DisplayModeSwitcher />
      <Typography element="H2">{t.applicationTitle}</Typography>
      <Typography element="P">{t.welcomeText}</Typography>
      <PeriodSelector />
      <RoomsList />
    </Application>
  )
}

export default Manager
