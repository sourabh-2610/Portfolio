import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiDownload, HiClipboardCopy, HiMail, HiAcademicCap, HiBriefcase } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useToast } from '../context/ToastContext'

export default function ResumeModal({ isOpen, onClose }) {
  const { addToast } = useToast()

  if (!isOpen) return null

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('sourabh.dhulrao@email.com')
    addToast('Email copied to clipboard!', 'success')
  }

  const handleDownload = () => {
    // Check if resume file exists or trigger print/download
    addToast('Downloading resume...', 'info')
    const link = document.createElement('a')
    link.href = '#contact'
    link.setAttribute('download', 'Sourabh_Dhulrao_Resume.pdf')
    // Alternatively open print preview or contact
    window.print ? window.print() : null
  }

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="modal-card resume-modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', stiffness: 420, damping: 28 }}
        >
          {/* Header */}
          <div className="modal-header">
            <div>
              <h2 className="modal-title">Sourabh Dhulrao</h2>
              <p className="resume-subtitle">AI Engineer & Full-Stack Developer</p>
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

          <div className="resume-content">
            {/* Quick stats strip */}
            <div className="resume-stats-strip">
              <div className="resume-stat-item">
                <span className="resume-stat-val">3+</span>
                <span className="resume-stat-lbl">Years Exp</span>
              </div>
              <div className="resume-stat-item">
                <span className="resume-stat-val">20+</span>
                <span className="resume-stat-lbl">Projects</span>
              </div>
              <div className="resume-stat-item">
                <span className="resume-stat-val">15+</span>
                <span className="resume-stat-lbl">Tech Stacks</span>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="resume-section">
              <h4 className="resume-heading">
                <HiBriefcase className="resume-icon" /> Core Competencies
              </h4>
              <p className="resume-text">
                • <strong>Artificial Intelligence & LLMs</strong>: LangChain, OpenAI & Gemini APIs, Prompt Engineering, Retrieval-Augmented Generation (RAG), Vector Embeddings.<br />
                • <strong>Frontend Development</strong>: React.js, Next.js, JavaScript (ES6+), TypeScript, Framer Motion, Three.js, Responsive UI/UX.<br />
                • <strong>Backend & Databases</strong>: Python, FastAPI, Node.js, Express, MongoDB, PostgreSQL, RESTful APIs, WebSockets.<br />
                • <strong>Architecture & DevOps</strong>: Docker, Git, CI/CD pipelines, Performance Optimization, Cloud Deployments.
              </p>
            </div>

            {/* Highlights */}
            <div className="resume-section">
              <h4 className="resume-heading">
                <HiAcademicCap className="resume-icon" /> Key Accomplishments
              </h4>
              <ul className="resume-list">
                <li>Engineered scalable full-stack applications with sub-second response times and real-time state synchronization.</li>
                <li>Designed multi-turn conversational AI agents with persistent vector memory and contextual prompt orchestration.</li>
                <li>Built interactive 3D particle systems and fluid physics simulations using WebGL and Three.js.</li>
              </ul>
            </div>
          </div>

          {/* Actions */}
          <div className="modal-actions resume-actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={handleCopyEmail}
            >
              <HiClipboardCopy /> Copy Email
            </button>
            <a
              href="mailto:sourabh.dhulrao@email.com"
              className="btn btn--outline"
            >
              <HiMail /> Contact Directly
            </a>
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
