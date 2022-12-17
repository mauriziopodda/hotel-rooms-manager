import React, { FC } from 'react'
import useTranslator from './hooks/useTranslator'
import { LanguageSwitcher } from './components/language_switcher'
import { H2, P } from './components/styled/typography'

export type ManagerPropsType = {}

const Manager: FC<ManagerPropsType> = () => {
  const { translations: t } = useTranslator()
  return (
    <>
      <H2>{t.applicationTitle}</H2>
      <P>{t.welcomeText}</P>
      <LanguageSwitcher />
    </>
  )
}

export default Manager
