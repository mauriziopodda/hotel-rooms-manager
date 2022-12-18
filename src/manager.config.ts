import { z } from 'zod'

const availableLocales = z.union([z.literal('en-US'), z.literal('it-IT')])
export type LocalesType = z.infer<typeof availableLocales>

const possibleDateFormats = z.union([
  z.literal('dd/MM/yyyy'),
  z.literal('MM/dd/yyyy'),
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
  defaultDateFormat: 'MM/dd/yyyy',
  partiallyAvailableLimit: 3,
  preferredDateFormat: [
    { locale: 'en-US', preferredDateFormat: 'MM/dd/yyyy' },
    { locale: 'it-IT', preferredDateFormat: 'dd/MM/yyyy' },
  ],
}
