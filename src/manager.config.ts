import { z } from 'zod'

const availableLocales = z.union([z.literal('en-US'), z.literal('it-IT')])

const managerConfigurationValidator = z.object({
  defaultLocale: availableLocales,
})

export type ManagerConfigType = z.infer<typeof managerConfigurationValidator>
export type LocalesType = z.infer<typeof availableLocales>

export const managerConfig: ManagerConfigType = {
  defaultLocale: 'en-US',
}
