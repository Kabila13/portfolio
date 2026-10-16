


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Destination from './components/Destination.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <Navbar />
      <Hero />
      <Destination />
    </div>
  </StrictMode>
)
