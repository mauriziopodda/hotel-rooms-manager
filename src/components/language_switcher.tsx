import { managerConfigAtom } from '../atoms/manager_config'
import usePeriod from '../hooks/use_period'
import useTranslator from '../hooks/use_translator'
import { Button } from './styled/button'
import { useAtomValue } from 'jotai'
import React from 'react'

import type { LocalesType } from '../manager.config'

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
      {locale === 'it-IT' && (
        <Button
          onClick={() => {
            handleSwitchLanguage('en-US')
          }}
        >
          English
        </Button>
      )}
      {locale === 'en-US' && (
        <Button
          onClick={() => {
            handleSwitchLanguage('it-IT')
          }}
        >
          Italiano
        </Button>
      )}
    </>
  )
}
