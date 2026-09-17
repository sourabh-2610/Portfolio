import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiTailwindcss,
  SiNextdotjs,
  SiFastapi,
  SiThreedotjs,
} from 'react-icons/si'
import { FaBrain, FaServer, FaCode, FaTools, FaLayerGroup } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import { SectionHeading } from './animations'
import { useSound } from './SoundManager'

const CATEGORIES = [
  { id: 'all', label: 'All Stacks', icon: FaLayerGroup },
  { id: 'ai', label: 'AI & ML', icon: FaBrain },
  { id: 'frontend', label: 'Frontend & 3D', icon: FaCode },
  { id: 'backend', label: 'Backend & Data', icon: FaServer },
  { id: 'devops', label: 'DevOps & Tools', icon: FaTools },
]

const skills = [
  { name: 'Python', icon: SiPython, color: '#3776AB', category: 'ai', desc: 'LangChain, LLMs & Automation' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688', category: 'ai', desc: 'Asynchronous Streaming APIs' },
  { name: 'React', icon: SiReact, color: '#61DAFB', category: 'frontend', desc: 'Hooks, State & Modern UI' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', category: 'frontend', desc: 'SSR, App Router & Optimization' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'frontend', desc: 'Type-Safe Architecture' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'frontend', desc: 'ES6+, Async & DOM' },
  { name: 'Three.js', icon: SiThreedotjs, color: '#00F0FF', category: 'frontend', desc: '3D WebGL Shaders & Canvas' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'backend', desc: 'Express & Event-Driven APIs' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'backend', desc: 'Relational Schemas & SQL' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'backend', desc: 'Document Models & Aggregations' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'devops', desc: 'Containerization & Compose' },
  { name: 'Git', icon: SiGit, color: '#F05032', category: 'devops', desc: 'Version Control & Workflows' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', category: 'frontend', desc: 'Responsive Design Systems' },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')
  const { theme } = useTheme()
  const { playClick } = useSound()

  const filteredSkills = skills.filter((s) =>
    activeCategory === 'all' ? true : s.category === activeCategory
  )

  const handleCategoryChange = (catId) => {
    playClick()
    setActiveCategory(catId)
  }

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeading
          label="Toolkit & Expertise"
          title="Technologies I Engineer With"
          description="A production-tested stack spanning intelligent AI models, resilient backends, and fluid frontends."
        />

        {/* Interactive Category Filter Pills */}
        <div className="skills-filter-bar">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon
            const isSelected = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                className={`skill-filter-btn ${isSelected ? 'is-active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                <Icon className="skill-filter-icon" />
                <span>{cat.label}</span>
                {isSelected && (
                  <motion.div
                    className="skill-filter-glow"
                    layoutId="activeFilterGlow"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Dynamic Animated Grid */}
        <motion.div className="skills__grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="skill-card skill-card--enhanced"
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="skill-card__icon-wrap">
                  <skill.icon
                    style={{
                      color:
                        skill.name === 'Next.js'
                          ? theme === 'dark'
                            ? '#ffffff'
                            : '#000000'
                          : skill.color,
                    }}
                    className="skill-card__icon"
                  />
                </div>
                <div className="skill-card__info">
                  <span className="skill-card__name">{skill.name}</span>
                  <span className="skill-card__desc">{skill.desc}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
