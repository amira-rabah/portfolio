import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import enDict from './transFiles/en/Translation.json'
import frDict from './transFiles/fr/Translation.json'

i18n
.use(initReactI18next)
.use(Backend)
.use(LanguageDetector)
.init({
    lng: "en",
    fallbackLng: "en",
    debug: true, // to see the errors
    interpolation : {
        escapeValue : false,
    },
    resources:{
        en:{
            translation : enDict
        },
        fr:{
            translation : frDict
        }
    }
})