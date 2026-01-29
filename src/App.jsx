import './App.css'
import './styles/scrollAnimations.css'
import { useEffect } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Hours from './components/Hours'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Disable automatic scroll restoration
    window.history.scrollRestoration = 'manual'
    // Always scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

  return (
    <LanguageProvider>
      <div className="app">
        <Header />
        <Hero />
        <WhyChooseUs />
        <Services />
        <Testimonials />
        <Hours />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
