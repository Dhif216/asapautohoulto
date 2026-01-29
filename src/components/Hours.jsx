import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Hours.css'

const hoursByDay = [
  { key: 'Monday', time: '8:00 AM - 4:30 PM' },
  { key: 'Tuesday', time: '8:00 AM - 4:30 PM' },
  { key: 'Wednesday', time: '8:00 AM - 4:30 PM' },
  { key: 'Thursday', time: '8:00 AM - 4:30 PM' },
  { key: 'Friday', time: '8:00 AM - 4:30 PM' },
  { key: 'Saturday', time: 'Closed' },
  { key: 'Sunday', time: 'Closed' }
]

export default function Hours() {
  const { ref, isVisible } = useScrollAnimation()
  const { t } = useContext(LanguageContext)

  return (
    <section ref={ref} id="hours" className={`hours ${isVisible ? 'fade-in-visible' : ''}`}>
      <div className="container">
        <h2>{t.hours.title}</h2>
        <div className="hours-content">
          <div className="hours-list">
            {hoursByDay.map((hour, index) => (
              <div key={index} className="hour-item">
                <span className="day">{t.hours.days[hour.key]}</span>
                <span className={`time ${hour.time === 'Closed' ? 'closed' : ''}`}>
                  {hour.time}
                </span>
              </div>
            ))}
          </div>
          <div className="address-info">
            <h3>{t.hours.visitUs}</h3>
            <p className="address">{t.hours.address}</p>
            <h3>{t.hours.callUs}</h3>
            <p className="phone">
              <a href="tel:0404608554">040 460 8554</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
