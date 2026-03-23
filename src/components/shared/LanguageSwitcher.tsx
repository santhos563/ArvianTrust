import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="flex border border-[#1F6F5E]/20 rounded-lg overflow-hidden bg-white">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-4 py-1.5 text-sm font-medium transition-all duration-200 ${i18n.language === "en"
            ? "bg-[#1F6F5E] text-white"
            : "bg-white text-[#4A5A58] hover:bg-[#E6F2EF]"
          }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("ta")}
        className={`px-4 py-1.5 text-sm font-medium transition-all duration-200 ${i18n.language === "ta"
            ? "bg-[#1F6F5E] text-white"
            : "bg-white text-[#4A5A58] hover:bg-[#E6F2EF]"
          }`}
      >
        தமிழ்
      </button>
    </div>
  );
};

export default LanguageSwitcher;