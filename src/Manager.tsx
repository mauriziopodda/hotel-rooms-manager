import React, { FC } from 'react'
import { styled } from '@stitches/react'
import { useAtomValue } from 'jotai'
import { localeAtom } from './atoms/locale'
import useTranslator from './hooks/useTranslator'
import { LanguageSwitcher } from './components/language_switcher'
import { commonStyles } from './components/styled/common'

const Title = styled('h2', {
  ...commonStyles,
  fontSize: 24,
  color: '#00CCCC',
})

const P = styled('p', {
  ...commonStyles,
  color: '#000',
})

export type ManagerPropsType = {}

const Manager: FC<ManagerPropsType> = () => {
  const { translations } = useTranslator()
  return (
    <>
      <Title>{translations.applicationTitle}</Title>
      <P>{translations.welcomeText}</P>
      <LanguageSwitcher />
    </>
  )
}

export default Manager
