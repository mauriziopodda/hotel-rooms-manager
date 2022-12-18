import React, { FC } from 'react'
import useTranslator from './hooks/useTranslator'
import { LanguageSwitcher } from './components/language_switcher'
import { H2, P } from './components/styled/typography'
import { PeriodSelector } from './components/period_selector'
import { RoomsList } from './components/rooms_list'
import { styled } from './components/styled/common'

export type ManagerPropsType = {}

const Application = styled('div', {
  padding: 30,

  '@sm': {
    padding: 5,
  },
})

const Manager: FC<ManagerPropsType> = () => {
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
