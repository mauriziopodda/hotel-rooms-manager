import React from 'react'
import useTranslator from '../hooks/useTranslator'
import { Button } from './styled/button'

export const LanguageSwitcher = () => {
  const { locale, setLocale } = useTranslator()
  return (
    <>
      {locale !== 'it-IT' && (
        <Button onClick={() => setLocale('it-IT')}>Versione Italiana</Button>
      )}
      {locale !== 'en-US' && (
        <Button onClick={() => setLocale('en-US')}>English Version</Button>
      )}
    </>
  )
}
