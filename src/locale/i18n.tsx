import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import EN from './en';
import ES from './es';
import PT from './pt';

const fallbackLng = ['es'];
const resources = {
  en: { ...EN },
  es: { ...ES },
  pt: { ...PT }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng,

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
