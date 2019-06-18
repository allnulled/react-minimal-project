import i18n from "i18next";
import translations from "resource/i18n/app/main/example.json";
import { initReactI18next } from "react-i18next";

var preferredLanguage = "en";
const lang = (localStorage.i18nextPreferredLanguage || navigator.language || navigator.userLanguage || "").toLowerCase();
if (lang.startsWith("es")) {
	preferredLanguage = "es";
} else if (lang.startsWith("ca")) {
	preferredLanguage = "ca";
} else {
	preferredLanguage = "en";
}

i18n.use(initReactI18next).init({
	resources: translations,
	lng: preferredLanguage,
	fallbackLng: "en",
	keySeparator: false,
	nsSeparator: false,
	interpolation: {
		escapeValue: false
	}
});

export const UserLanguageISO = preferredLanguage;