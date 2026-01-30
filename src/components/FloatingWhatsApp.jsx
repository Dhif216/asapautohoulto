import { useEffect, useState } from 'react'
import './FloatingWhatsApp.css'

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show on all devices after scrolling 50px
      setIsVisible(window.scrollY > 50)
    }

    // Set initial visibility
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <a
      href="https://wa.me/358404608554"
      target="_blank"
      rel="noopener noreferrer"
      className={`floating-whatsapp ${isVisible ? 'visible' : ''}`}
      title="WhatsApp"
    >
      <span className="whatsapp-text">Varaa aika<br />WhatsAppin kautta</span>
      <img src="/asapautohoulto/whatsuplogo.png" alt="WhatsApp" />
    </a>
  )
}
