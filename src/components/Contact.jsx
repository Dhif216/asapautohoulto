import { useContext, useRef, useEffect, useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { LanguageContext } from '../context/LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Contact.css'

export default function Contact() {
  const { t } = useContext(LanguageContext)
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [visibleItems, setVisibleItems] = useState({})
  const itemsRef = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemIndex = entry.target.dataset.itemIndex
            setVisibleItems((prev) => ({
              ...prev,
              [itemIndex]: true,
            }))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    Object.values(itemsRef.current).forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  const contactItems = [
    { icon: FaWhatsapp, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/358404608554', index: 0 },
    { icon: FaPhone, label: t.contact.phone, value: '040 460 8554', href: 'tel:0404608554', index: 1 },
    { icon: FaMapMarkerAlt, label: t.contact.address, value: t.hours.address, index: 2 },
    { icon: FaEnvelope, label: t.contact.email, value: 'info@asapautohuolto.fi', href: 'mailto:info@asapautohuolto.fi', index: 3 },
  ]

  return (
    <section ref={sectionRef} id="contact" className={`contact ${sectionVisible ? 'fade-in-visible' : ''}`}>
      <div className="container">
        <h2>{t.contact.title}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>{t.contact.quickContact}</h3>
            <div className="info-items-grid">
              {contactItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={item.index}
                    className={`info-item ${visibleItems[item.index] ? 'animate' : ''}`}
                    ref={(el) => (itemsRef.current[item.index] = el)}
                    data-item-index={item.index}
                  >
                    <div className="icon-wrapper">
                      <IconComponent className="icon" />
                    </div>
                    <p className="label">{item.label}</p>
                    <p>
                      {item.href ? (
                        <a href={item.href}>{item.value}</a>
                      ) : (
                        item.value
                      )}
                    </p>
                  </div>
                )
              })}
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.48919378829!2d25.0518814!3d60.205735999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692092305d267d9%3A0x7bd28cea431cd2fb!2sASAP%20Autohuolto!5e0!3m2!1sen!2sfi!4v1769690534533!5m2!1sen!2sfi"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
