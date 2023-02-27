import '../assets/css/header.css';
import React, { useState} from "react";
// import { useTranslation } from "react-i18next";
import i18next from "i18next";


const languageMap = {
  fr: { label: "Français", dir: "ltr", active: false },
  en: { label: "English", dir: "ltr", active: true }
};

const LanguageSelect = () => {
  const selected = localStorage.getItem("i18nextLng") || "en";
  // const { t } = useTranslation();

  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleLanguageChange = (language) => {
    i18next.changeLanguage(language);
    setMenuAnchor(false);
  };


  return (
    <div className="language-dropdown">
      
      <button onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}>
        {languageMap[selected].label}
      </button>
      {menuAnchor && (
        <div className="language-dropdown-toggle">
          <ul>
            {Object.keys(languageMap).map((language) => (
              <li key={language}>
                <button
                  onClick={() => handleLanguageChange(language)}
                  className={`language-option ${
                    language === selected ? "active" : ""
                  }`}
                >
                  {languageMap[language].label}
                </button>
              </li>
            ))}
          </ul>
           
        </div>
        
      )}
    
      
    </div>
    
  );
};

export default LanguageSelect;