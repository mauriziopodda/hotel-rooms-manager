import { useAtomValue } from 'jotai'
import React from 'react'
import { managerConfigAtom } from '../atoms/manager_config'
import usePeriod from '../hooks/usePeriod'
import useTranslator from '../hooks/useTranslator'
import { LocalesType } from '../manager.config'
import { Button } from './styled/button'

export const LanguageSwitcher = () => {
  const { locale, setLocale } = useTranslator()
  const { setDatesFormat } = usePeriod()
  const managerConfig = useAtomValue(managerConfigAtom)

  const handleSwitchLanguage = (locale: LocalesType) => {
    setLocale(locale)

    const languagePreferredDatesFormat = managerConfig.preferredDateFormat.find(
      (preferred) => preferred.locale === locale
    )?.preferredDateFormat

    setDatesFormat(
      languagePreferredDatesFormat ?? managerConfig.defaultDateFormat
    )
  }
  return (
    <>
      {locale !== 'it-IT' && (
        <Button onClick={() => handleSwitchLanguage('it-IT')}>Italiano</Button>
      )}
      {locale !== 'en-US' && (
        <Button onClick={() => handleSwitchLanguage('en-US')}>English</Button>
      )}
    </>
  )
}
