import { LanguageSwitcher } from './components/language_switcher'
import { PeriodSelector } from './components/period_selector'
import { RoomsList } from './components/rooms_list'
import { styled } from './components/styled/common'
import { H2, P } from './components/styled/typography'
import useTranslator from './hooks/use_translator'
import React from 'react'

import type { FC } from 'react'

// TODO: add comments for everything
// TODO: configure ts

const Application = styled('div', {
  padding: 30,

  '@sm': {
    padding: 5,
  },
})

const Manager: FC = () => {
  const { translations: t } = useTranslator()

  return (
    <Application>
      <LanguageSwitcher />
      <H2>{t.applicationTitle}</H2>
      <P>{t.welcomeText}</P>
      <PeriodSelector />
      <RoomsList />
    </Application>
  )
}

export default Manager
