import { z } from 'zod'

const availableLocales = z.union([z.literal('en-US'), z.literal('it-IT')])
export type LocalesType = z.infer<typeof availableLocales>

const possibleDateFormats = z.union([
  z.literal('DD/MM/YYYY'),
  z.literal('ddd DD, MMM YYYY'),
])
export type DateFormatsType = z.infer<typeof possibleDateFormats>

const managerConfigurationValidator = z.object({
  defaultLocale: availableLocales,
  defaultDateFormat: possibleDateFormats,
  partiallyAvailableLimit: z.number().min(0),
  preferredDateFormat: z.array(
    z.object({
      locale: availableLocales,
      preferredDateFormat: possibleDateFormats,
    })
  ),
})
export type ManagerConfigType = z.infer<typeof managerConfigurationValidator>

export type preferredDatesFormats = {
  locale: LocalesType
  preferredDateFormat: DateFormatsType
}

export const managerConfig: ManagerConfigType = {
  defaultLocale: 'en-US',
  defaultDateFormat: 'ddd DD, MMM YYYY',
  partiallyAvailableLimit: 3,
  preferredDateFormat: [
    { locale: 'en-US', preferredDateFormat: 'ddd DD, MMM YYYY' },
    { locale: 'it-IT', preferredDateFormat: 'DD/MM/YYYY' },
  ],
}
