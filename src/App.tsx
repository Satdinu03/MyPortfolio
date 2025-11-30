import { useState } from 'react'
import CelestialBackground from './components/CelestialBackground'
import HeaderResponsive from './components/HeaderResponsive'
import ScrollProgress from './components/ScrollProgress'
import CursorAccent from './components/CursorAccent'
import Hero from './components/Hero'
import About from './components/About'
import ExperienceTimeline from './components/ExperienceTimeline'
import ProjectGrid from './components/ProjectGrid'
import SkillsCloud from './components/SkillsCloud'
import EducationCard from './components/EducationCard'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className='dark'>
      <CelestialBackground />
      <div className="min-h-screen transition-colors duration-300 relative">
        <ScrollProgress />
        <CursorAccent />
        <HeaderResponsive />
        
        <main>
          <Hero />
          <About />
          <ExperienceTimeline />
          <ProjectGrid />
          <SkillsCloud />
          <EducationCard />
          <ContactForm />
        </main>
        
        <Footer />
      </div>
    </div>
  )
}

export default App