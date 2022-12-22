import useTranslator from '../hooks/use_translator'
import { DisplayModeSwitcher } from './display_type_switcher'
import { LanguageSwitcher } from './language_switcher'
import { Navigator } from './navigator'
import { Typography } from './styled/typography'
import React from 'react'
import { Outlet } from 'react-router-dom'

import type { FC } from 'react'

export const Layout: FC = () => {
  const { translations: t } = useTranslator()

  return (
    <>
      <LanguageSwitcher />
      <DisplayModeSwitcher />
      <Typography element="H2">{t.applicationTitle}</Typography>
      <Typography element="P">{t.welcomeText}</Typography>
      <Navigator itemsSize={60} triggerSize={40} />
      <Outlet />
    </>
  )
}
