import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { ToastProvider } from './context/ToastContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SplashCursor from './components/SplashCursor'
import ParticleBackground from './components/ParticleBackground'
import Loader from './components/Loader'
import Toast from './components/Toast'
import AIAssistant from './components/AIAssistant'
import CommandPalette from './components/CommandPalette'
import ProjectModal from './components/ProjectModal'
import ResumeModal from './components/ResumeModal'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isCmdOpen, setIsCmdOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  // Listen for Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsCmdOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <ThemeProvider>
      <ToastProvider>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} name="SD" />}
        <ParticleBackground shape="logo" autoMorph={true} morphInterval={5000} interactiveMouse={true} />
        <SplashCursor
          RAINBOW_MODE={false}
          COLOR="#8b5cf6"
          SIM_RESOLUTION={128}
          DYE_RESOLUTION={1440}
          DENSITY_DISSIPATION={4.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          SHADING
          TRANSPARENT
          OPACITY={0.35}
        />

        <Toast />

        <Navbar onOpenCmd={() => setIsCmdOpen(true)} />

        <main>
          <Hero onOpenAI={() => {
            // Trigger AI widget
            const trigger = document.querySelector('.ai-trigger')
            if (trigger) trigger.click()
          }} />
          <About onOpenResume={() => setIsResumeOpen(true)} />
          <Skills />
          <Projects onSelectProject={(proj) => setSelectedProject(proj)} />
          <Contact />
        </main>

        <Footer />

        {/* Standout Interactive Overlays */}
        <AIAssistant onOpenResume={() => setIsResumeOpen(true)} />
        <CommandPalette
          isOpen={isCmdOpen}
          onClose={() => setIsCmdOpen(false)}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenAI={() => {
            const trigger = document.querySelector('.ai-trigger')
            if (trigger) trigger.click()
          }}
        />
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </ToastProvider>
    </ThemeProvider>
  )
}
