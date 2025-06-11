import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Footer />
    <ScrollToTop />
    <App />
  </React.StrictMode>,
)
