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
} from 'react-icons/si'
import { useTheme } from '../context/ThemeContext'
import { SectionHeading } from './animations'

const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps & Tools']

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend', level: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', category: 'Frontend', level: 'Framework' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Frontend', level: 'Language' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Frontend', level: 'Language' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend', level: 'Styling' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend', level: 'Runtime' },
  { name: 'Python', icon: SiPython, color: '#3776AB', category: 'Backend', level: 'Language' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database', level: 'NoSQL' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'Database', level: 'Relational' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'DevOps & Tools', level: 'Containers' },
  { name: 'Git', icon: SiGit, color: '#F05032', category: 'DevOps & Tools', level: 'Version Control' },
]

export default function Skills() {
  const { theme } = useTheme()
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory)

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeading
          label="Skills & Expertise"
          title="Technologies I work with"
          description="A curated toolkit built through production projects, open source, and continuous learning."
        />

        {/* Interactive Category Filter Pills */}
        <div className="skills__filters">
          {categories.map(cat => {
            const count = cat === 'All' ? skills.length : skills.filter(s => s.category === cat).length
            const isActive = activeCategory === cat

            return (
              <button
                key={cat}
                type="button"
                className={`skills__filter-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat} ({count})
              </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="skills__grid"
          layout
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const isHovered = hoveredSkill === skill.name
              const iconColor = skill.name === 'Next.js'
                ? (theme === 'dark' ? '#ffffff' : '#000000')
                : skill.color

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.85, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="skill-card"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    borderColor: `${skill.color}99`,
                    boxShadow: `0 0 32px -4px ${skill.color}45, 0 16px 32px rgba(0, 0, 0, 0.45)`,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Dynamic brand ambient spotlight on hover */}
                  <div
                    className="skill-card__glow"
                    style={{
                      background: `radial-gradient(circle at 50% 25%, ${skill.color}24 0%, transparent 75%)`,
                    }}
                  />

                  {/* Icon with branded glow */}
                  <div
                    className="skill-card__icon-wrapper"
                    style={{
                      borderColor: isHovered ? `${skill.color}55` : undefined,
                      boxShadow: isHovered ? `0 0 20px ${skill.color}35` : undefined,
                    }}
                  >
                    <skill.icon
                      style={{
                        color: iconColor,
                        filter: isHovered
                          ? `drop-shadow(0 0 14px ${skill.color})`
                          : `drop-shadow(0 0 6px ${skill.color}40)`,
                      }}
                      className="skill-card__icon"
                    />
                  </div>

                  <span className="skill-card__name">{skill.name}</span>
                  <span className="skill-card__badge">{skill.level}</span>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
