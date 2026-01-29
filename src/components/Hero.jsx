import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { FaEnvelope, FaWhatsapp, FaGoogle } from 'react-icons/fa'
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
          <a href="mailto:info@asapservice.fi" className="contact-icon email" title="Email">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/358" className="contact-icon whatsapp" title="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://www.google.com" className="contact-icon google" title="Google">
            <FaGoogle />
          </a>
        </div>
      </div>

      {/* Contact Line with Icons */}
      <svg className={`contact-line ${isVisible ? 'animate-line' : ''}`} viewBox="0 0 1200 600" preserveAspectRatio="none">
        <path
          d="M 230 480 L 1100 480 L 1100 150"
          stroke="#0052cc"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="1200"
          strokeDashoffset="1200"
        />
      </svg>

      <div className="hero-overlay"></div>
    </section>
  )
}
