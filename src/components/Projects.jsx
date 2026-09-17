import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiArrowRight, HiSparkles, HiLightningBolt } from 'react-icons/hi'
import { FaGithub, FaRobot, FaShoppingCart, FaColumns, FaCloudSun, FaLayerGroup } from 'react-icons/fa'
import { SectionHeading, fadeUp } from './animations'

export const projectsData = [
  {
    id: 5,
    title: 'AI Conversational Agent',
    description:
      'Multi-turn intelligent conversational assistant powered by LangChain, FastAPI, and vector embeddings. Features streaming tokens, context retention, and prompt orchestration.',
    tags: ['Python', 'FastAPI', 'LangChain', 'React', 'Vector DB'],
    accent: '#a855f7',
    size: 'large',
    year: '2024',
    category: 'AI / ML',
    live: '#',
    github: '#',
    mockupType: 'ai-chat',
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
    mockupType: 'ecommerce',
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
    mockupType: 'kanban',
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
    mockupType: 'weather',
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
    mockupType: 'cms',
  },
]

function ProjectMockupVisual({ type, accent }) {
  if (type === 'ai-chat') {
    return (
      <div className="card-mockup mockup--chat">
        <div className="mockup-header">
          <div className="mockup-header-left">
            <FaRobot style={{ color: accent }} />
            <span>Agent v3.1</span>
          </div>
          <span className="mockup-badge">Streaming 148 tok/s</span>
        </div>
        <div className="mockup-chat-body">
          <div className="mockup-msg mockup-msg--user">
            <span>Analyze vector similarity for user query...</span>
          </div>
          <div className="mockup-msg mockup-msg--ai">
            <span className="ai-icon-mini">⚡</span>
            <span>Retrieved 3 chunks (cos-sim: 0.94). Output stream initialized with zero dropped frames.</span>
          </div>
        </div>
        <div className="mockup-chat-footer">
          <div className="mockup-wave">
            <span /><span /><span /><span /><span />
          </div>
          <span className="mockup-tag-mini">Llama 3.1 70B</span>
        </div>
      </div>
    )
  }

  if (type === 'ecommerce') {
    return (
      <div className="card-mockup mockup--ecom">
        <div className="mockup-header">
          <div className="mockup-header-left">
            <FaShoppingCart style={{ color: accent }} />
            <span>Store Dashboard</span>
          </div>
          <span className="mockup-badge text-green">+18.4% Revenue</span>
        </div>
        <div className="mockup-metric-strip">
          <div className="metric-box">
            <span className="metric-val">$14,290</span>
            <span className="metric-lbl">Monthly Volume</span>
          </div>
          <svg className="sparkline" viewBox="0 0 100 30" preserveAspectRatio="none">
            <path
              d="M0,25 Q20,10 40,18 T70,5 T100,12"
              fill="none"
              stroke={accent}
              strokeWidth="2.5"
            />
          </svg>
        </div>
        <div className="mockup-footer-pills">
          <span className="pill-status">● Real-time Inventory</span>
          <span className="pill-status">Stripe Verified</span>
        </div>
      </div>
    )
  }

  if (type === 'kanban') {
    return (
      <div className="card-mockup mockup--kanban">
        <div className="mockup-header">
          <div className="mockup-header-left">
            <FaColumns style={{ color: accent }} />
            <span>Live Workspace</span>
          </div>
          <span className="mockup-badge">4 Members Online</span>
        </div>
        <div className="kanban-columns">
          <div className="kanban-col">
            <span className="col-title">In Progress (2)</span>
            <div className="kanban-item" style={{ borderLeftColor: accent }}>
              <span>Deploy LLM Gateway</span>
            </div>
            <div className="kanban-item">
              <span>WebSocket Sync</span>
            </div>
          </div>
          <div className="kanban-col">
            <span className="col-title">Done (8)</span>
            <div className="kanban-item is-done">
              <span>Auth Pipeline</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'weather') {
    return (
      <div className="card-mockup mockup--weather">
        <div className="mockup-header">
          <div className="mockup-header-left">
            <FaCloudSun style={{ color: accent }} />
            <span>Atmospheric Sensor</span>
          </div>
          <span className="mockup-badge">Global Geo API</span>
        </div>
        <div className="weather-preview-stat">
          <span className="temp-big">22°C</span>
          <span className="weather-cond">Partly Cloudy • Low Latency</span>
        </div>
        <div className="weather-curve-wrap">
          <svg className="weather-curve" viewBox="0 0 120 25" preserveAspectRatio="none">
            <path
              d="M0,18 Q30,5 60,12 T120,8"
              fill="none"
              stroke={accent}
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    )
  }

  return (
    <div className="card-mockup mockup--cms">
      <div className="mockup-header">
        <div className="mockup-header-left">
          <FaLayerGroup style={{ color: accent }} />
          <span>Headless API</span>
        </div>
        <span className="mockup-badge">Dockerized</span>
      </div>
      <div className="cms-code-preview">
        <code>GET /v1/posts/featured &#8594; 200 OK (14ms)</code>
      </div>
    </div>
  )
}

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

    const rotateX = ((y - centerY) / centerY) * -5
    const rotateY = ((x - centerX) / centerX) * 5

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
      className={`pj-card pj-card--${project.size} pj-card--3d pj-card--rich`}
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
          background: `radial-gradient(550px circle at ${spotlight.x}px ${spotlight.y}px, rgba(255, 255, 255, 0.09), transparent 50%)`,
        }}
      />

      {/* Top accent bar */}
      <motion.div
        className="pj-card__bar"
        animate={{ scaleX: hovered ? 1 : 0.28, opacity: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Top Header Row */}
      <div className="pj-card__top">
        <span className="pj-card__index">{String(index + 1).padStart(2, '0')}</span>
        <div className="pj-card__category">
          {project.category === 'AI / ML' && <HiSparkles className="inline-icon" />}
          {project.category}
        </div>
      </div>

      {/* Rich Interactive UI Visual Mockup */}
      <div className="pj-card__visual-wrap">
        <ProjectMockupVisual type={project.mockupType} accent={project.accent} />
      </div>

      {/* Main Content */}
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

      {/* Footer */}
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

      {/* "Inspect Case Study" Reveal */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="pj-card__reveal"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
          >
            Deep Dive Architecture <HiArrowRight />
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
          title="Engineered with Precision"
          description="Interactive visual previews of selected AI systems and full-stack platforms."
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
