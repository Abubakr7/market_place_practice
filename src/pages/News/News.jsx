import React from "react";
import "./News.css";

import { useTranslation } from "react-i18next";

const News = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
  
  return (
    <div>

    </div>
  );
};

export default News;
