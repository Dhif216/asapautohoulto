import { useContext, useState } from 'react'
import { FaBars, FaTimes, FaGlobe, FaMoon, FaSun } from 'react-icons/fa'
import { LanguageContext } from '../context/LanguageContext'
import { ThemeContext } from '../context/ThemeContext'
import './Header.css'

export default function Header() {
  const { t, language, toggleLanguage } = useContext(LanguageContext)
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img 
            src="https://lh3.googleusercontent.com/p/AF1QipMZUg2Dd3GiQd7ZvFWovbHgpZj3GCvN-f-KdGbS=w203-h192-k-no" 
            alt="ASAP Autohuolto Logo"
            className="logo-img"
          />
          <h1>ASAP Autohuolto</h1>
        </div>

        <div className="header-actions">
          <button className="lang-toggle-icon" onClick={toggleLanguage} title={language === 'en' ? 'Suomeksi' : 'In English'}>
            <FaGlobe />
            <span className="lang-code">{language === 'en' ? 'FI' : 'EN'}</span>
          </button>

          <button className="theme-toggle-icon" onClick={toggleTheme} title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
          
          <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>{t.header.services}</a>
          <a href="#hours" onClick={() => setMobileMenuOpen(false)}>{t.header.hours}</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.header.contact}</a>
        </nav>
      </div>
    </header>
  )
}
