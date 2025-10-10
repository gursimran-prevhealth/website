// src/i18n.ts

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend) // Load translations from /public/locales
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    supportedLngs: ["en", "sv", "de"],
    fallbackLng: "en",
    defaultNS: "translation",

    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // e.g., /locales/en/translation.json
    },

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    detection: {
      order: [
        "localStorage",
        "queryString",
        "cookie",
        "sessionStorage",
        "navigator",
        "htmlTag",
      ],
      caches: ["localStorage", "cookie"], // optional: cache selected lang
    },
  });

export default i18n;
