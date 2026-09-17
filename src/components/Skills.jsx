import { motion } from 'framer-motion'
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
import { SectionHeading, staggerContainer, scaleIn } from './animations'

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
]

export default function Skills() {
  const { theme } = useTheme()

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeading
          label="Skills"
          title="Technologies I work with"
          description="A toolkit built through hands-on projects and continuous learning."
        />

        <motion.div
          className="skills__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={scaleIn}
              custom={i * 0.05}
              whileHover={{
                y: -8,
              }}
              transition={{ duration: 0.3 }}
            >
              <skill.icon
                style={{
                  color: skill.name === 'Next.js'
                    ? (theme === 'dark' ? '#ffffff' : '#000000')
                    : skill.color,
                }}
                className="skill-card__icon"
              />
              <span className="skill-card__name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
