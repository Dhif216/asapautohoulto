import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Footer.css'

export default function Footer() {
  const { t } = useContext(LanguageContext)
  const { ref, isVisible } = useScrollAnimation()
  const currentYear = new Date().getFullYear()

  return (
    <footer ref={ref} className={`footer ${isVisible ? 'fade-in-visible' : ''}`}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ASAP Autohuolto</h3>
            <p>{t.footer.description}</p>
          </div>
          <div className="footer-section">
            <h4>{t.footer.quickLinks}</h4>
            <ul>
              <li><a href="#services">{t.header.services}</a></li>
              <li><a href="#hours">{t.header.hours}</a></li>
              <li><a href="#contact">{t.header.contact}</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t.footer.contactInfo}</h4>
            <p>{t.hours.address}</p>
            <p><a href="tel:0404608554">040 460 8554</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} ASAP Autohuolto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
