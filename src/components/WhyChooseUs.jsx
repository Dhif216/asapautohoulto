import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { FaWrench, FaRocket, FaCertificate, FaAward } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './WhyChooseUs.css'

export default function WhyChooseUs() {
  const { t } = useContext(LanguageContext)
  const { ref, isVisible } = useScrollAnimation()
  const benefitIcons = [<FaWrench />, <FaRocket />, <FaCertificate />, <FaAward />]

  return (
    <section ref={ref} className={`why-choose-us ${isVisible ? 'fade-in-visible' : ''}`}>
      <div className="why-choose-us-bg-shapes">
        <div className="blur-shape shape-1"></div>
        <div className="blur-shape shape-2"></div>
        <div className="blur-shape shape-3"></div>
        <div className="blur-shape shape-4"></div>
      </div>
      <div className="why-choose-us-content">
        <div className="why-choose-us-image">
          <img src="https://images.unsplash.com/photo-1563826773-1e2b4b2cde42?q=80&w=802&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Why Choose Us" />
        </div>
        <div className="why-choose-us-text">
          <div className="section-header">
            <h2>{t.whyChooseUs.title}</h2>
            <p className="subtitle">{t.whyChooseUs.subtitle}</p>
          </div>

          <div className="benefits-list">
            {t.whyChooseUs.benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">
                  {benefitIcons[index]}
                </div>
                <div className="benefit-text">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="stats-grid">
          {t.whyChooseUs.stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
