import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  us: {
    translation: translationEN,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

function getCurrentLanguage(): string {
  return i18n.language;
}

function changeLanguage(language: string) {
  return i18n.changeLanguage(language);
}

function onLanguageChanged(callback: (language: string) => void) {
  return i18n.on('languageChanged', callback);
}

export { getCurrentLanguage, changeLanguage, onLanguageChanged };
