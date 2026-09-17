import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
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

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <ThemeProvider>
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
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
