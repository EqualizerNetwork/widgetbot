import { Define, Load } from './helpers'
import BaseTranslation from './translations/fr'

// Import the translations from ./translations/
export const locales = Define(['fr'])

export type Locales = (typeof locales)[number]

export type Translation = typeof BaseTranslation

export const translations = Load(locales)
