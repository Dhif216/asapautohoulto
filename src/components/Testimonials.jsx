import { useContext, useState, useRef, useEffect } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Testimonials.css'

export default function Testimonials() {
  const { t } = useContext(LanguageContext)
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [expandedReview, setExpandedReview] = useState(null)
  const [visibleCards, setVisibleCards] = useState({})
  const cardsRef = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = entry.target.dataset.cardIndex
            setVisibleCards((prev) => ({
              ...prev,
              [cardIndex]: true,
            }))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    Object.values(cardsRef.current).forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const renderStars = (rating) => {
    return '⭐'.repeat(rating)
  }

  // Customer reviews from Google Reviews
  const googleReviews = [
    {
      name: 'Christina Friedrich',
      role: '9 months ago',
      rating: 5,
      text: 'I had my MB GLC serviced at ASAP because of a reasonable offer. During the service it turned out that the brake pads and possibly the brake discs also needed to be replaced. This was done a couple of weeks later. The price was in line with the offer and a replacement car was arranged right away even though I hadn\'t booked one. Best of all - free of charge. The service was friendly and customer-oriented and the staff had a sense of humor 😁'
    },
    {
      name: 'Saara Rammahi',
      role: '9 months ago',
      rating: 5,
      text: 'Erittäin ammattitaitoinen ja luotettava autohuolto! Vianhaku ja korjaus sujuivat nopeasti ja tehokkaasti, mikä ei onnistunut kahdessa muussa autokorjaamossa. Asiakaspalvelu oli erinomaista, ja mekaanikko antoi hyviä suosituksia auton kunnossapitoa varten. Suosittelen lämpimästi kaikille, jotka etsivät osaavaa ja asiakaslähtöistä korjaamoa!'
    },
    {
      name: 'Outi Schön',
      role: 'a month ago',
      rating: 5,
      text: 'Fast service and friendly service. Thank you😊'
    }
  ]

  const isLongText = (text) => text.length > 150

  const getDisplayText = (text, index) => {
    if (isLongText(text) && expandedReview !== index) {
      return text.substring(0, 150) + '...'
    }
    return text
  }

  const toggleExpand = (index) => {
    setExpandedReview(expandedReview === index ? null : index)
  }

  return (
    <section ref={sectionRef} className={`testimonials ${sectionVisible ? 'fade-in-visible' : ''}`}>
      <div className="container">
        <h2>{t.testimonials.title}</h2>
        <div className="testimonials-subtitle">Real customer reviews from Google</div>
        <div className="testimonials-grid">
          {googleReviews.map((item, index) => (
            <div
              key={index}
              className="testimonial-card"
              ref={(el) => (cardsRef.current[index] = el)}
              data-card-index={index}
            >
              <div className="testimonial-author-top">
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </div>
              
              <div className={`stars-container ${visibleCards[index] ? 'animate' : ''}`}>
                {[0, 1, 2, 3, 4].map((starIndex) => (
                  <span key={starIndex} className="star" style={{ '--star-delay': `${starIndex * 0.1}s` }}>⭐</span>
                ))}
              </div>
              
              <p className="testimonial-text">"{getDisplayText(item.text, index)}"</p>
              
              {isLongText(item.text) && (
                <button 
                  className="read-more-btn"
                  onClick={() => toggleExpand(index)}
                >
                  {expandedReview === index ? 'Näytä vähemmän' : 'Lue lisää'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
