import './App.css'
import './styles/scrollAnimations.css'
import { useEffect, useState } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Hours from './components/Hours'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

  useEffect(() => {
    // Disable automatic scroll restoration
    window.history.scrollRestoration = 'manual'
    // Always scroll to top on mount
    window.scrollTo(0, 0)

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app">
          <Header />
          <Hero />
          {isDesktop && <FloatingWhatsApp />}
          <WhyChooseUs />
          <Services />
          <Testimonials />
          <Hours />
          <Contact />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
