import React from "react";
import { useTranslation } from "react-i18next";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationES from "./locales/es/translation.json";
import LanguageSwitcher from "./LanguageSwitcher";

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  es: {
    translation: translationES,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const LangApp = () => {
  const { t } = useTranslation();

  return (
    <div>
      <LanguageSwitcher />
      {/* <h2>{t("weather_forcast_for")}</h2>
      <p>{t("current_temperature")}</p>
      <p>{t("feels_like")}</p>
      <p>{t("humidity")}</p> */}
    </div>
  );
};

export default LangApp;
