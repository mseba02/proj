import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import roTranslations from './i18n/ro.json'
import enTranslations from './i18n/en.json'

const resources = {
  en: { translation: enTranslations },
  ro: { translation: roTranslations },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'ro',

  interpolation: {
    escapeValue: true,
  },
})

export default i18n
