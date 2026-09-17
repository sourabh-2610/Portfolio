import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="modal-card"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', stiffness: 420, damping: 28 }}
          style={{ '--modal-accent': project.accent || 'var(--accent)' }}
        >
          {/* Header Bar */}
          <div className="modal-header">
            <div className="modal-tags">
              <span className="modal-category">{project.category}</span>
              <span className="modal-year">{project.year}</span>
            </div>
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close dialog"
            >
              <HiX />
            </button>
          </div>

          {/* Title & Description */}
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-description">{project.description}</p>

          {/* Deep-dive Architecture & Highlights */}
          <div className="modal-section">
            <h4 className="modal-section-title">Key Engineering Highlights</h4>
            <ul className="modal-features-list">
              {project.id === 5 && (
                <>
                  <li>Multi-turn conversation memory with vector embeddings & LangChain orchestrator.</li>
                  <li>FastAPI asynchronous streaming response handler for low time-to-first-token.</li>
                  <li>Custom prompt template engineering with dynamic system context injection.</li>
                </>
              )}
              {project.id === 1 && (
                <>
                  <li>Full checkout flow with Stripe webhooks and resilient order verification.</li>
                  <li>Admin dashboard with real-time stock notifications and revenue analytics.</li>
                  <li>Optimized MongoDB aggregation pipelines for instant catalog filtering.</li>
                </>
              )}
              {project.id === 2 && (
                <>
                  <li>Bidirectional WebSockets powered by Socket.io for instantaneous multi-user collaboration.</li>
                  <li>Fluid HTML5 drag-and-drop state updates with optimistic UI rollback.</li>
                  <li>PostgreSQL schema with role-based access control (RBAC).</li>
                </>
              )}
              {project.id === 3 && (
                <>
                  <li>Client-side geolocation reverse-geocoding and caching.</li>
                  <li>Dynamic interactive temperature charts rendered with Chart.js canvas.</li>
                  <li>Sub-second API response handling with fallback weather data providers.</li>
                </>
              )}
              {project.id === 4 && (
                <>
                  <li>Modular headless architecture with Django REST framework.</li>
                  <li>Containerized with Docker & Docker Compose for seamless local and cloud dev.</li>
                  <li>Clean Markdown editor with live preview and asset CDN integrations.</li>
                </>
              )}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div className="modal-section">
            <h4 className="modal-section-title">Technologies Used</h4>
            <div className="modal-tech-pills">
              {project.tags.map((tag) => (
                <span key={tag} className="modal-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="modal-actions">
            {project.live && project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                <HiExternalLink /> Live Demo
              </a>
            )}
            {project.github && project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                <FaGithub /> Source Code
              </a>
            )}
            <button
              type="button"
              className="btn btn--secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
