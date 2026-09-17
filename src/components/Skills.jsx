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

const CATEGORIES = [
  { id: 'all', label: 'All Stacks', icon: FaLayerGroup },
  { id: 'ai', label: 'AI & ML', icon: FaBrain },
  { id: 'frontend', label: 'Frontend & 3D', icon: FaCode },
  { id: 'backend', label: 'Backend & Data', icon: FaServer },
  { id: 'devops', label: 'DevOps & Tools', icon: FaTools },
]

const skills = [
  {
    name: 'Python',
    icon: SiPython,
    color: '#38bdf8',
    category: 'ai',
    tag: 'Autonomous AI',
    badge: 'Core',
    desc: 'Autonomous Agents, LLM Fine-Tuning & Prompt Pipelines',
  },
  {
    name: 'FastAPI',
    icon: SiFastapi,
    color: '#00f0ff',
    category: 'ai',
    tag: 'Streaming APIs',
    badge: 'Expert',
    desc: 'High-throughput asynchronous REST & streaming webhooks',
  },
  {
    name: 'React',
    icon: SiReact,
    color: '#61DAFB',
    category: 'frontend',
    tag: 'UI Architecture',
    badge: 'Expert',
    desc: 'Reactive component hierarchies & high-performance state',
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: '#ffffff',
    category: 'frontend',
    tag: 'Full-Stack',
    badge: 'Advanced',
    desc: 'Server-side rendering, dynamic routing & SEO architecture',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#38bdf8',
    category: 'frontend',
    tag: 'Type Systems',
    badge: 'Expert',
    desc: 'Strict type contracts, scalable codebases & DX',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: '#F7DF1E',
    category: 'frontend',
    tag: 'Core Web',
    badge: 'Master',
    desc: 'Event loops, modern ECMAScript & async DOM control',
  },
  {
    name: 'Three.js',
    icon: SiThreedotjs,
    color: '#00f0ff',
    category: 'frontend',
    tag: 'WebGL 3D',
    badge: 'Creative',
    desc: '3D scene graphs, particle shaders & WebGL pipelines',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    color: '#4ade80',
    category: 'backend',
    tag: 'Event-Driven',
    badge: 'Advanced',
    desc: 'High-concurrency microservices & Express backends',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: '#818cf8',
    category: 'backend',
    tag: 'Relational DB',
    badge: 'Production',
    desc: 'Optimized complex relational schemas, indexes & ACID',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: '#4ade80',
    category: 'backend',
    tag: 'NoSQL Store',
    badge: 'Production',
    desc: 'Scalable document schema design & aggregation pipelines',
  },
  {
    name: 'Docker',
    icon: SiDocker,
    color: '#38bdf8',
    category: 'devops',
    tag: 'Containers',
    badge: 'DevOps',
    desc: 'Multi-stage containers, Docker Compose & environments',
  },
  {
    name: 'Git',
    icon: SiGit,
    color: '#fb923c',
    category: 'devops',
    tag: 'Version Control',
    badge: 'Core',
    desc: 'Branch management, semantic commits & collaborative flow',
  },
  {
    name: 'Tailwind',
    icon: SiTailwindcss,
    color: '#06b6d4',
    category: 'frontend',
    tag: 'Design Systems',
    badge: 'Styling',
    desc: 'Atomic utility systems, bespoke themes & responsive UX',
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')
  const { theme } = useTheme()

  const filteredSkills = skills.filter((s) =>
    activeCategory === 'all' ? true : s.category === activeCategory
  )

  const getCount = (catId) =>
    catId === 'all' ? skills.length : skills.filter((s) => s.category === catId).length

  return (
    <section id="skills" className="section skills">
      {/* Opaque Cyber Backdrop shielding the global 3D particle background */}
      <div className="skills__backdrop" aria-hidden="true">
        <div className="skills__grid-pattern" />
        <div className="skills__glow-orb skills__glow-orb--1" />
        <div className="skills__glow-orb skills__glow-orb--2" />
        <div className="skills__fade-top" />
        <div className="skills__fade-bottom" />
      </div>

      <div className="container skills__container">
        <SectionHeading
          label="Toolkit & Expertise"
          title="Technologies I Engineer With"
          description="A production-tested stack spanning intelligent AI models, resilient backends, and fluid frontends."
        />

        {/* Interactive Category Filter Pills */}
        <div className="skills-filter-wrapper">
          <div className="skills-filter-bar">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon
              const isSelected = activeCategory === cat.id
              const count = getCount(cat.id)
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`skill-filter-btn ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <Icon className="skill-filter-icon" />
                  <span>{cat.label}</span>
                  <span className="skill-filter-count">{count}</span>
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
        </div>

        {/* Dynamic Animated Cyber Grid */}
        <motion.div className="skills__grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const iconColor =
                skill.name === 'Next.js'
                  ? theme === 'dark'
                    ? '#ffffff'
                    : '#000000'
                  : skill.color

              return (
                <motion.div
                  key={skill.name}
                  className="skill-card skill-card--cyber"
                  layout
                  initial={{ opacity: 0, scale: 0.88, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.88, y: 15 }}
                  transition={{ duration: 0.28 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  style={{
                    '--skill-color': skill.color,
                    '--skill-glow': `${skill.color}33`,
                  }}
                >
                  {/* Cyber Corner Ticks */}
                  <div className="skill-card__corner skill-card__corner--tl" aria-hidden="true" />
                  <div className="skill-card__corner skill-card__corner--br" aria-hidden="true" />

                  {/* Ambient Backlight on Hover */}
                  <div className="skill-card__backlight" aria-hidden="true" />

                  <div className="skill-card__header">
                    <div className="skill-card__icon-wrap">
                      <skill.icon style={{ color: iconColor }} className="skill-card__icon" />
                    </div>
                    <span className="skill-card__badge">
                      <span className="skill-card__badge-dot" />
                      {skill.badge}
                    </span>
                  </div>

                  <div className="skill-card__body">
                    <h3 className="skill-card__name">{skill.name}</h3>
                    <p className="skill-card__desc">{skill.desc}</p>
                  </div>

                  <div className="skill-card__footer">
                    <span className="skill-card__tag">{skill.tag}</span>
                    <div className="skill-card__meter" aria-hidden="true">
                      <div className="skill-card__meter-fill" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
