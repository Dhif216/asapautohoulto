import { useContext, useState } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FaTimes } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  const { t } = useContext(LanguageContext)
  const { ref, isVisible } = useScrollAnimation()
  const [showPrivacy, setShowPrivacy] = useState(false)
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
          <div className="footer-section footer-whatsapp">
            <a href="https://wa.me/358404608554" target="_blank" rel="noopener noreferrer" className="footer-whatsapp-icon" title="WhatsApp">
              <img src="/asapautohoulto/whatsuplogo.png" alt="WhatsApp" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} ASAP Autohuolto. All rights reserved.</p>
          <div className="footer-policies">
            <button onClick={() => setShowPrivacy(true)} className="policy-link">{t.footer.privacy}</button>
            <span>|</span>
            <button onClick={() => setShowPrivacy(true)} className="policy-link">{t.footer.gdpr}</button>
          </div>
        </div>

        {showPrivacy && (
          <div className="privacy-banner">
            <div className="privacy-banner-content">
              <button className="close-btn" onClick={() => setShowPrivacy(false)}>
                <FaTimes />
              </button>
              {t.language === 'fi' ? (
                <>
                  <h3>Tietosuojakäytäntö & GDPR</h3>
                  <p>
                    <strong>Tietojen kerääminen:</strong> ASAP Autohuolto ei kerää automaattisesti henkilötietoja verkkosivustolla. 
                    Verkkosivustolla ei ole evästeitä, analytiikkatyökaluja tai seurantaa.
                  </p>
                  <p>
                    <strong>Vapaaehtoinen yhteydenpito:</strong> Kun asiakas ottaa meihin yhteyttä WhatsAppin tai sähköpostin kautta, 
                    keräämme asiakkaan puhelinnumeron tai sähköpostiosoitteen yhteydenpitoa varten. Näitä tietoja käytetään 
                    vain pyydetyistä palveluista keskusteluun.
                  </p>
                  <p>
                    <strong>GDPR-yhteensopivuus:</strong> Keräämme tietoja vain, kun asiakas päättää olla yhteydessä. 
                    Asiakas voi milloin tahansa pyytää tietojensa poistamista ottamalla meihin yhteyttä.
                  </p>
                </>
              ) : (
                <>
                  <h3>Privacy Policy & GDPR</h3>
                  <p>
                    <strong>Data Collection:</strong> ASAP Autohuolto does not automatically collect personal information on our website. 
                    Our website does not have cookies, analytics tools, or tracking.
                  </p>
                  <p>
                    <strong>Voluntary Contact:</strong> When a customer contacts us via WhatsApp or email, 
                    we collect their phone number or email address for communication purposes. This information is used 
                    only to discuss the requested services.
                  </p>
                  <p>
                    <strong>GDPR Compliance:</strong> We collect information only when a customer chooses to contact us. 
                    Customers can request deletion of their data at any time by contacting us.
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </footer>
  )
}
