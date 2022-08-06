import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ar from "./translations/translation_ar";
import ru from "./translations/translation_ru";
import en from "./translations/translation_en";

const resources = {
  ru: {
    translation: ru,
  },
  ar: {
    translation: ar,
  },
  en:{
    translation:en,
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
