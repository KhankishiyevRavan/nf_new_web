import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/nf_new_web/assets/i18n/{{ns}}/{{lng}}.json",
    },
    fallbackLng: ["az"],
    fallbacklng: "az",
    lng: "az",
    debug: false,
    ns: [
      "header",
      "cover",
      "educationSteps",
      "news",
      "modal",
      "subscribe",
      "contact",
      "countries",
      "universityDetail",
      "about",
      "blogDetail"
    ],
    interpolation: {
      espaceValue: false,
      formatSeparator: ",",
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
