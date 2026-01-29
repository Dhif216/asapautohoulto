import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { FaWrench, FaWheelchair, FaCog, FaBolt, FaWind, FaCar } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Services.css'

const serviceIcons = [<FaWrench />, <FaWheelchair />, <FaCog />, <FaBolt />, <FaWind />, <FaCar />]

export default function Services() {
  const { t } = useContext(LanguageContext)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} id="services" className={`services ${isVisible ? 'fade-in-visible' : ''}`}>
      <div className="container">
        <h2>{t.services.title}</h2>
        <div className="services-grid">
          {t.services.items.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{serviceIcons[index]}</div>
              <h3>{service.name}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
