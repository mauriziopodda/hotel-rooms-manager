import { useAtom } from 'jotai'
import { useEffect, useMemo } from 'react'
import { localeAtom } from '../atoms/locale'
import { translationsAtom } from '../atoms/translations'
import { LocalesType } from '../manager.config'

const useTranslator = () => {
  const [locale, setLocale] = useAtom(localeAtom)
  const [translations, setTranslations] = useAtom(translationsAtom)

  const translationsMemo = useMemo(() => translations, [translations])

  const setupLocale = (locale: LocalesType) => {
    localStorage.setItem('locale', locale)
    setLocale(locale)
  }

  useEffect(() => {
    ;(async () => {
      try {
        const { managerTranslations } = await import(
          `../locales/translations/${locale}/index`
        )
        setTranslations(managerTranslations)
      } catch (err) {
        console.log('Error occured using translations')
      }
    })()
  }, [locale])

  return {
    locale,
    setLocale: setupLocale,
    translations: translationsMemo,
  }
}

export default useTranslator
