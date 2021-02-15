import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import { EN } from "./en/translations";
import { TR } from "./tr/translations";
 
i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   resources: {
    EN: {
       translation: EN
     },
     TR: {
       translation: TR
     }
   }
 });
 
i18n.changeLanguage("EN");

export { i18n };