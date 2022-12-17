import { useAtom } from 'jotai'
import { useEffect, useMemo } from 'react'
import { localeAtom } from '../atoms/locale'
import { translationsAtom } from '../atoms/translations'

const useTranslator = () => {
  const [locale, setLocale] = useAtom(localeAtom)
  const [translations, setTranslations] = useAtom(translationsAtom)

  const translationsMemo = useMemo(() => translations, [translations])

  useEffect(() => {
    ;(async () => {
      try {
        const { managerTranslations } = await import(
          `../locales/translations/${locale}/index`
        )
        setTranslations(managerTranslations)
      } catch (err) {
        console.log('Error occured when fetching books')
      }
    })()
  }, [locale])

  return {
    locale,
    setLocale,
    translations: translationsMemo,
  }
}

export default useTranslator
