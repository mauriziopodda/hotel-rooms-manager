import React, { FC } from 'react'
import useTranslator from './hooks/useTranslator'
import { LanguageSwitcher } from './components/language_switcher'
import { H2, P } from './components/styled/typography'
import useRooms from './hooks/useRooms'
import { PeriodSelector } from './components/period_selector'

export type ManagerPropsType = {}

const Manager: FC<ManagerPropsType> = () => {
  const { translations: t } = useTranslator()
  const { rooms } = useRooms(/*{ floor: 1 }*/)
  return (
    <>
      <LanguageSwitcher />
      <H2>{t.applicationTitle}</H2>
      <P>{t.welcomeText}</P>
      <PeriodSelector />
      {rooms.map((room) => (
        <div key={room.id}>
          {t.floor}: {room.floor} {t.roomNumber}: {room.number}
        </div>
      ))}
    </>
  )
}

export default Manager
