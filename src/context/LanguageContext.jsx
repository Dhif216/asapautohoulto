import { createContext, useState } from 'react'
import { translations } from './translations'

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fi')

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fi' : 'en')
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
