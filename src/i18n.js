import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ta from "./locales/ta.json";

// Get saved language from localStorage or default to 'en'
const savedLanguage = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ta: { translation: ta }
  },
  lng: savedLanguage, // Use saved language instead of hardcoded 'en'
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;