import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Hero.css'

export default function Hero() {
  const { t } = useContext(LanguageContext)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className={`hero ${isVisible ? 'fade-in-visible' : ''}`}>
      <div className="hero-content">
        <h2>{t.hero.title}</h2>
        <p>{t.hero.subtitle}</p>
        <p className="tagline">{t.hero.tagline}</p>
        <button className="cta-button">{t.hero.cta}</button>
        
        {/* Social Icons Below Button */}
        <div className="contact-icons-container">
          <a href="mailto:info@asapautohuolto.fi" className="contact-icon email" title="Email">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/358" className="contact-icon whatsapp" title="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61575265730067&mibextid=wwXIfr&rdid=oKaGVJsovE6Fx3qI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GsYt6r68S%2F%3Fmibextid%3DwwXIfr" className="contact-icon facebook" title="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/asap_autohuolto?igsh=MTNuNnBtdzZhN210eQ%3D%3D&utm_source=qr" className="contact-icon instagram" title="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@asap.autohuolto" className="contact-icon tiktok" title="TikTok" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
        </div>
      </div>

      <div className="hero-overlay"></div>
    </section>
  )
}
