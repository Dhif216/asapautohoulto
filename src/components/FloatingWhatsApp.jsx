import { useEffect, useState } from 'react'
import './FloatingWhatsApp.css'

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleScroll = () => {
      // Only show on desktop (width > 768px)
      if (window.innerWidth > 768) {
        setIsVisible(window.scrollY > 50)
      } else {
        setIsVisible(false)
      }
    }

    const handleResize = () => {
      const nowMobile = window.innerWidth <= 768
      setIsMobileView(nowMobile)
      
      // Reset visibility on resize
      if (nowMobile) {
        setIsVisible(false)
      } else {
        setIsVisible(window.scrollY > 50)
      }
    }

    // Set initial visibility
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Don't render on mobile at all
  if (isMobileView) {
    return null
  }

  return (
    <a
      href="https://wa.me/358404608554"
      target="_blank"
      rel="noopener noreferrer"
      className={`floating-whatsapp ${isVisible ? 'visible' : ''}`}
      title="WhatsApp"
    >
      <img src="/asapautohoulto/whatsuplogo.png" alt="WhatsApp" />
    </a>
  )
}
