import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.jsx'
import Profile from './Profile.jsx'
import Internships from './Internships.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Education from './Education.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Profile />
    <About />
    <Skills />
    <Internships />
    <Education />
    <Projects />
    <Contact />
    <Footer />
  </StrictMode>,

)

