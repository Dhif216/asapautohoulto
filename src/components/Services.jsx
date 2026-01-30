import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { FaWrench, FaCogs, FaWind, FaCode } from 'react-icons/fa'
import breakIcon from '../break.svg'
import engineIcon from '../engine.png'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Services.css'

const serviceIcons = [<FaWrench />, null, null, <FaCogs />, <FaWind />, <FaCode />]

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
              <div className="service-icon">
                {index === 1 ? <img src={breakIcon} alt="Brakes" className="svg-icon" /> : index === 2 ? <img src={engineIcon} alt="Engine" className="svg-icon" /> : serviceIcons[index]}
              </div>
              <h3>{service.name}</h3>
              <p dangerouslySetInnerHTML={{ __html: service.desc }}></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
