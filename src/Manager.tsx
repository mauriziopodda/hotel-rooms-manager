import React, { FC } from 'react'
import useTranslator from './hooks/useTranslator'
import { LanguageSwitcher } from './components/language_switcher'
import { H2, P } from './components/styled/typography'
import { PeriodSelector } from './components/period_selector'
import { RoomsList } from './components/rooms_list'

export type ManagerPropsType = {}

const Manager: FC<ManagerPropsType> = () => {
  const { translations: t } = useTranslator()

  return (
    <>
      <LanguageSwitcher />
      <H2>{t.applicationTitle}</H2>
      <P>{t.welcomeText}</P>
      <PeriodSelector />
      <RoomsList />
    </>
  )
}

export default Manager
