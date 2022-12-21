import { z } from 'zod'

const availableLocales = z.union([z.literal('en-US'), z.literal('it-IT')])

export type LocalesType = z.infer<typeof availableLocales>

const possibleDateFormats = z.union([
  z.literal('dd/MM/yyyy'),
  z.literal('MM/dd/yyyy'),
])

export type DateFormatsType = z.infer<typeof possibleDateFormats>

const availableDisplayModesType = z.union([
  z.literal('light'),
  z.literal('dark'),
])

export type DisplayModeType = z.infer<typeof availableDisplayModesType>

const managerConfigurationValidator = z.object({
  defaultLocale: availableLocales,
  defaultDateFormat: possibleDateFormats,
  defaultDisplayType: availableDisplayModesType,
  partiallyAvailableLimit: z.number().min(0),
  preferredDateFormat: z.array(
    z.object({
      locale: availableLocales,
      preferredDateFormat: possibleDateFormats,
    })
  ),
})

export type ManagerConfigType = z.infer<typeof managerConfigurationValidator>

export type PreferredDatesFormats = {
  locale: LocalesType
  preferredDateFormat: DateFormatsType
}

export const managerConfig: ManagerConfigType = {
  defaultLocale: 'en-US',
  defaultDateFormat: 'MM/dd/yyyy',
  defaultDisplayType: 'light',
  partiallyAvailableLimit: 3,
  preferredDateFormat: [
    { locale: 'en-US', preferredDateFormat: 'MM/dd/yyyy' },
    { locale: 'it-IT', preferredDateFormat: 'dd/MM/yyyy' },
  ],
}
