import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ThinkingSection from './sections/ThinkingSection'
import ExperienceSection from './sections/ExperienceSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import CertificationsSection from './sections/CertificationsSection'
import EducationSection from './sections/EducationSection'
import ContactSection from './sections/ContactSection'
import Footer from './sections/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading ? (
          <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <div className="loader-mark" />
            <p>Initializing Portfolio Experience</p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="page-shell">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ThinkingSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App


