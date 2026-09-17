import { motion } from 'framer-motion'
import { HiArrowDown, HiOutlineMail, HiDocumentText } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import HeroConsole from './HeroConsole'

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <motion.div
          className="hero__orb hero__orb--1"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero__orb hero__orb--2"
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="hero__grid" />
      </div>

      <div className="container hero__split-container">
        {/* Left Column: Personal Introduction & CTAs */}
        <div className="hero__intro-col">
          {/* Availability Status Badge */}
          <motion.div
            className="hero__badge-wrap"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="hero__status-badge">
              <span className="hero__status-pulse" />
              <span className="hero__status-text">Available for AI & Full-Stack Roles</span>
            </div>
          </motion.div>

          <motion.p
            className="hero__greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="hero__name-word hero__name-first"
              whileHover={{
                y: -4,
                scale: 1.02,
                textShadow: '0 0 50px rgba(103, 232, 249, 0.8), 0 0 90px rgba(56, 189, 248, 0.5)',
                transition: { type: 'spring', stiffness: 400, damping: 20 },
              }}
            >
              Sourabh
            </motion.span>{' '}
            <motion.span
              className="hero__name-word hero__name-accent"
              whileHover={{
                y: -4,
                scale: 1.03,
                filter: 'drop-shadow(0 0 45px rgba(0, 240, 255, 1)) drop-shadow(0 0 80px rgba(56, 189, 248, 0.8))',
                transition: { type: 'spring', stiffness: 400, damping: 20 },
              }}
            >
              Dhulrao
            </motion.span>
          </motion.h1>

          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            AI Engineer & Full-Stack Developer crafting intelligent systems and memorable digital experiences.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            <motion.a
              href="#projects"
              className="btn btn--primary"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(99, 102, 241, 0.45)' }}
              whileTap={{ scale: 0.97 }}
            >
              View Selected Work
            </motion.a>

            <motion.a
              href="#contact"
              className="btn btn--outline"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.05, borderColor: 'var(--accent)' }}
              whileTap={{ scale: 0.97 }}
            >
              <HiOutlineMail /> Get In Touch
            </motion.a>

            {onOpenResume && (
              <motion.button
                type="button"
                className="btn btn--secondary-glass"
                onClick={onOpenResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <HiDocumentText /> Resume
              </motion.button>
            )}
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.1 }}
                whileHover={{ y: -4, color: 'var(--accent)' }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Interactive AI Lab Console */}
        <motion.div
          className="hero__console-col"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroConsole />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <HiArrowDown />
        </motion.span>
      </motion.a>
    </section>
  )
}
