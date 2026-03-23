import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="flex border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
          i18n.language === "en"
            ? "bg-green-600 text-white"
            : "bg-white text-gray-600 hover:bg-gray-50"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("ta")}
        className={`px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
          i18n.language === "ta"
            ? "bg-green-600 text-white"
            : "bg-white text-gray-600 hover:bg-gray-50"
        }`}
      >
        தமிழ்
      </button>
    </div>
  );
};

export default LanguageSwitcher;