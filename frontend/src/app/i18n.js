import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to CyberSakshar',
      login: 'Login',
      register: 'Register',
      dashboard: 'Dashboard',
      quiz: 'Quiz',
      simulations: 'Simulations',
      lessons: 'Lessons',
      complaints: 'Report Complaint',
      certificate: 'Certificate',
    },
  },
  hi: {
    translation: {
      welcome: 'साइबर साक्षर में आपका स्वागत है',
      login: 'लॉग इन करें',
      register: 'रजिस्टर करें',
      dashboard: 'डैशबोर्ड',
      quiz: 'प्रश्नोत्तरी',
      simulations: 'सिमुलेशन',
      lessons: 'पाठ',
      complaints: 'शिकायत दर्ज करें',
      certificate: 'प्रमाण पत्र',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
