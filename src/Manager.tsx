import React, { FC } from 'react'
import { styled } from '@stitches/react'
import { useAtomValue } from 'jotai'
import { localeAtom } from './atoms/locale'
import useTranslator from './hooks/useTranslator'

const commonStyles = {
  fontFamily: 'Poppins',
  fontSize: 16,
  fontWeight: 200,
}

const Title = styled('h2', {
  ...commonStyles,
  fontSize: 24,
  color: '#00CCCC',
})

const P = styled('p', {
  ...commonStyles,
  color: '#000',
})

const Button = styled('button', {
  ...commonStyles,
  border: 'none',
  backgroundColor: '#00CCCC',
  borderRadius: 3,
  color: '#FFF',
  cursor: 'pointer',
  padding: '8px 32px',

  '&:hover': {
    backgroundColor: '#00b3b3',
  },

  '& + &': {
    marginLeft: 5,
  },
})

export type ManagerPropsType = {}

const Manager: FC<ManagerPropsType> = () => {
  const { translations, setLocale } = useTranslator()
  return (
    <>
      <Title>{translations.applicationTitle}</Title>
      <P>{translations.welcomeText}</P>
      <Button onClick={() => setLocale('it-IT')}>Italiano</Button>
      <Button onClick={() => setLocale('en-US')}>English</Button>
    </>
  )
}

export default Manager
