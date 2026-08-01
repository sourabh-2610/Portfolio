import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiArrowRight } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { SectionHeading, fadeUp } from './animations'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack online store with cart, payments, and admin dashboard. Built for performance and scalability with real-time inventory tracking.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    accent: '#f59e0b',
    size: 'large',   // featured card
    year: '2024',
    category: 'Full-Stack',
    live: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Real-time collaborative task board with drag-and-drop, notifications, and team workspaces.',
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
    title: 'Weather Dashboard',
    description:
      'Beautiful weather app with location search, 7-day forecasts, and animated data visualizations.',
    tags: ['React', 'OpenWeather API', 'Chart.js'],
    accent: '#06b6d4',
    size: 'medium',
    year: '2023',
    category: 'Data Viz',
    live: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Portfolio CMS',
    description:
      'Headless CMS for developers to manage portfolio content with a clean admin interface.',
    tags: ['Python', 'Django', 'React', 'Docker'],
    accent: '#10b981',
    size: 'medium',
    year: '2023',
    category: 'Dev Tools',
    live: '#',
    github: '#',
  },
]

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      className={`pj-card pj-card--${project.size}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      custom={index * 0.08}
      variants={fadeUp}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ '--accent': project.accent }}
    >
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
      <div className="pj-card__category">{project.category}</div>

      {/* Main content */}
      <div className="pj-card__body">
        <h3 className="pj-card__title">{project.title}</h3>
        <p className="pj-card__desc">{project.description}</p>

        {/* Tags */}
        <div className="pj-card__tags">
          {project.tags.map(t => (
            <span key={t} className="pj-card__tag">{t}</span>
          ))}
        </div>
      </div>

      {/* Footer — year + links */}
      <div className="pj-card__footer">
        <span className="pj-card__year">{project.year}</span>
        <div className="pj-card__links">
          <motion.a
            href={project.github}
            aria-label="GitHub"
            className="pj-link"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href={project.live}
            aria-label="Live demo"
            className="pj-link pj-link--accent"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiExternalLink />
          </motion.a>
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

      {/* "View project" reveal */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="pj-card__reveal"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
          >
            View Project <HiArrowRight />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading
          label="Projects"
          title="Selected work"
          description="A curated set of projects that reflect my craft."
        />

        {/* Bento grid */}
        <div className="pj-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
