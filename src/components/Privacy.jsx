import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Privacy.css'

export default function Privacy() {
  const { t, language } = useContext(LanguageContext)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} id="privacy" className={`privacy ${isVisible ? 'fade-in-visible' : ''}`}>
      <div className="container">
        <h2>{language === 'fi' ? 'Tietosuojakäytäntö & GDPR' : 'Privacy Policy & GDPR'}</h2>
        
        <div className="privacy-content">
          {language === 'fi' ? (
            <>
              <h3>Tietosuoja</h3>
              <p>
                ASAP Autohuolto kunnioittaa asiakkaiden yksityisyyttä. Tämä tietosuojakäytäntö kuvaa, 
                kuinka käsittelemme asiakkaiden tietoja.
              </p>

              <h3>Tietojenkerääminen</h3>
              <p>
                ASAP Autohuolto ei kerää automaattisesti henkilötietoja verkkosivustollaan. 
                Sivustolla ei ole:
              </p>
              <ul>
                <li>Evästeitä (cookies)</li>
                <li>Analytiikkatyökaluja, jotka seuraavat käyttäjää</li>
                <li>Kontaktilomakkeita, joissa pyydetään henkilötietoja</li>
                <li>Mainonnan tai markkinoinnin seurantaa</li>
              </ul>

              <h3>GDPR-yhteensopivuus</h3>
              <p>
                Koska emme kerää henkilötietoja verkkosivustolla, GDPR-säännökset eivät 
                edellytä lisäyhteensopivuustoimenpiteitä. Asiakkaat voivat käyttää verkkosivustoamme 
                ilman huolta henkilötietojensa käsittelystä.
              </p>

              <h3>Yhteystiedot</h3>
              <p>
                Jos sinulla on kysymyksiä tietosuojasta, ota meihin yhteyttä sähköpostitse 
                tai puhelimitse:
              </p>
              <p>
                <strong>Sähköposti:</strong> info@asapautohuolto.fi<br />
                <strong>Puhelin:</strong> 040 460 8554
              </p>
            </>
          ) : (
            <>
              <h3>Privacy Policy</h3>
              <p>
                ASAP Autohuolto respects customer privacy. This privacy policy describes 
                how we handle customer information.
              </p>

              <h3>Data Collection</h3>
              <p>
                ASAP Autohuolto does not automatically collect personal information on our website. 
                Our site does not include:
              </p>
              <ul>
                <li>Cookies</li>
                <li>Analytics tools that track users</li>
                <li>Contact forms that request personal information</li>
                <li>Advertising or marketing tracking</li>
              </ul>

              <h3>GDPR Compliance</h3>
              <p>
                Since we do not collect personal information on our website, GDPR regulations 
                do not require additional compliance measures. You can use our website without 
                concerns about the processing of your personal data.
              </p>

              <h3>Contact Us</h3>
              <p>
                If you have any questions about privacy, please contact us by email 
                or phone:
              </p>
              <p>
                <strong>Email:</strong> info@asapautohuolto.fi<br />
                <strong>Phone:</strong> 040 460 8554
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
