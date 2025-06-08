import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
