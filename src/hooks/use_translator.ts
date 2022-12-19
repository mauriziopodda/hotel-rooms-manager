import { localeAtom } from '../atoms/locale'
import { translationsAtom } from '../atoms/translations'
import { useAtom } from 'jotai'
import { useEffect, useMemo } from 'react'

import type { LocalesType } from '../manager.config'

const useTranslator = () => {
  const [locale, setLocale] = useAtom(localeAtom)
  const [translations, setTranslations] = useAtom(translationsAtom)

  const translationsMemo = useMemo(() => translations, [translations])

  const setupLocale = (locale: LocalesType) => {
    localStorage.setItem('locale', locale)
    setLocale(locale)
  }

  useEffect(() => {
    // eslint-disable-next-line padding-line-between-statements
    ;(async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { managerTranslations } = await import(
          `../locales/translations/${locale}/index`
        )

        setTranslations(managerTranslations)
      } catch {
        console.log('Error occured using translations')
      }
    })()
  }, [locale, setTranslations])

  return {
    locale,
    setLocale: setupLocale,
    translations: translationsMemo,
  }
}

export default useTranslator
