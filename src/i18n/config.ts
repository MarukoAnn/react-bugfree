import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// 导入配置文件
import translate_zh from './zh.json'
import translate_en from './en.json'

const resources = {
  en: {
    translation: translate_en,
  },
  zh: {
    translation: translate_zh,
  },
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'zh',
  lng: 'zh',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
