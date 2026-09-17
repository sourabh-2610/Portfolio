import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiArrowRight, HiSparkles } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { SectionHeading, fadeUp } from './animations'

export const projectsData = [
  {
    id: 5,
    title: 'AI Conversational Agent',
    description:
      'Multi-turn intelligent conversational assistant powered by LangChain, FastAPI, and vector embeddings. Features streaming tokens, context retention, and prompt orchestration.',
    tags: ['Python', 'FastAPI', 'LangChain', 'React', 'Vector DB'],
    accent: '#a855f7',
    size: 'large',   // featured card
    year: '2024',
    category: 'AI / ML',
    live: '#',
    github: '#',
  },
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Full-stack digital store with real-time inventory management, Stripe payment processing, and comprehensive administrative analytics dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    accent: '#f59e0b',
    size: 'medium',
    year: '2024',
    category: 'Full-Stack',
    live: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Collaborative Task Workspace',
    description:
      'Real-time team collaboration board featuring drag-and-drop workflow lanes, Socket.io instant sync, and workspace permissions.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
    accent: '#e11d48',
    size: 'medium',
    year: '2024',
    category: 'SaaS',
    live: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Dynamic Weather Analytics',
    description:
      'Interactive atmospheric intelligence dashboard with geo-search, dynamic 7-day projections, and canvas charts.',
    tags: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind'],
    accent: '#06b6d4',
    size: 'medium',
    year: '2023',
    category: 'Data Viz',
    live: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Developer Portfolio Engine',
    description:
      'Containerized headless content architecture designed for high throughput, automated SEO indexing, and developer customization.',
    tags: ['Python', 'Django', 'React', 'Docker'],
    accent: '#10b981',
    size: 'medium',
    year: '2023',
    category: 'Dev Tools',
    live: '#',
    github: '#',
  },
]

function ProjectCard({ project, index, onSelect }) {
  const [hovered, setHovered] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Calculate subtle 3D tilt
    const rotateX = ((y - centerY) / centerY) * -6
    const rotateY = ((x - centerX) / centerX) * 6

    setTilt({ x: rotateX, y: rotateY })
    setSpotlight({ x, y, opacity: 1 })
  }

  const handleMouseLeave = () => {
    setHovered(false)
    setTilt({ x: 0, y: 0 })
    setSpotlight((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <motion.article
      ref={cardRef}
      className={`pj-card pj-card--${project.size} pj-card--3d`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      custom={index * 0.08}
      variants={fadeUp}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={() => onSelect(project)}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        transformPerspective: 1000,
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      style={{
        '--accent': project.accent,
        cursor: 'pointer',
      }}
    >
      {/* Specular Spotlight Effect */}
      <div
        className="pj-card__spotlight"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(550px circle at ${spotlight.x}px ${spotlight.y}px, rgba(255, 255, 255, 0.08), transparent 50%)`,
        }}
      />

      {/* Top accent bar */}
      <motion.div
        className="pj-card__bar"
        animate={{ scaleX: hovered ? 1 : 0.28, opacity: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Index number */}
      <span className="pj-card__index">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Category pill */}
      <div className="pj-card__category">
        {project.category === 'AI / ML' && <HiSparkles className="inline-icon" />}
        {project.category}
      </div>

      {/* Main content */}
      <div className="pj-card__body">
        <h3 className="pj-card__title">{project.title}</h3>
        <p className="pj-card__desc">{project.description}</p>

        {/* Tags */}
        <div className="pj-card__tags">
          {project.tags.map((t) => (
            <span key={t} className="pj-card__tag">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer — year + links */}
      <div className="pj-card__footer">
        <span className="pj-card__year">{project.year}</span>
        <div className="pj-card__links" onClick={(e) => e.stopPropagation()}>
          {project.github && project.github !== '#' && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="pj-link"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
          )}
          {project.live && project.live !== '#' && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="pj-link pj-link--accent"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiExternalLink />
            </motion.a>
          )}
        </div>
      </div>

      {/* Hover glow overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="pj-card__glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* "View case study" reveal */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="pj-card__reveal"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
          >
            Deep Dive Case Study <HiArrowRight />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export default function Projects({ onSelectProject }) {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading
          label="Projects"
          title="Selected work"
          description="Click any project for deep-dive architectural insights and live demonstrations."
        />

        {/* Bento grid */}
        <div className="pj-grid">
          {projectsData.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
