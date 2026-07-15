import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiHome, HiUser, HiLightningBolt, HiCode, HiMail } from 'react-icons/hi'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#home',     label: 'Home',     Icon: HiHome },
  { href: '#about',    label: 'About',    Icon: HiUser },
  { href: '#skills',   label: 'Skills',   Icon: HiLightningBolt },
  { href: '#projects', label: 'Projects', Icon: HiCode },
  { href: '#contact',  label: 'Contact',  Icon: HiMail },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ─── Top Navbar ─── */}
      <motion.header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="navbar__inner container">

          {/* Logo */}
          <motion.a
            href="#home"
            className="navbar__logo"
            onClick={(e) => { e.preventDefault(); handleClick('#home') }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SD<span className="navbar__logo-dot">.</span>
          </motion.a>

          {/* ── Pinterest-style animated nav links ── */}
          <ul className="navbar__links" role="list">
            {links.map((link, i) => {
              const id = link.href.slice(1)
              const isActive = active === id
              return (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                >
                  <button
                    className={`nav-item ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleClick(link.href)}
                    aria-label={link.label}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {/* Spring-animated floating bubble */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          className="nav-item__bubble"
                          layoutId="nav-bubble"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 480, damping: 30 }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Icon — lifts up when active */}
                    <motion.span
                      className="nav-item__icon"
                      animate={isActive
                        ? { y: -5, scale: 1.22, color: 'var(--accent)' }
                        : { y: 0,  scale: 1,    color: 'var(--text-dim)' }
                      }
                      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                    >
                      <link.Icon />
                    </motion.span>

                    {/* Label — fades in below icon when active */}
                    <motion.span
                      className="nav-item__label"
                      animate={isActive
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 3 }
                      }
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                    </motion.span>
                  </button>
                </motion.li>
              )
            })}
          </ul>

          {/* Desktop actions */}
          <div className="navbar__actions">
            <ThemeToggle />
            <motion.a
              href="#contact"
              className="btn btn--primary navbar__cta"
              onClick={(e) => { e.preventDefault(); handleClick('#contact') }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(99, 102, 241, 0.4)' }}
              whileTap={{ scale: 0.97 }}
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile top bar — only theme toggle */}
          <div className="navbar__mobile-actions">
            <ThemeToggle />
          </div>
        </nav>
      </motion.header>

      {/* ─── Mobile Bottom Navigation Bar ─── */}
      <motion.nav
        className="bottom-nav"
        aria-label="Mobile navigation"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {links.map((link) => {
          const id = link.href.slice(1)
          const isActive = active === id
          return (
            <button
              key={link.href}
              className={`bottom-nav__item ${isActive ? 'is-active' : ''}`}
              onClick={() => handleClick(link.href)}
              aria-label={link.label}
              aria-current={isActive ? 'page' : undefined}
            >
              {/* Floating bubble */}
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    className="bottom-nav__bubble"
                    layoutId="bottom-bubble"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 32 }}
                  />
                )}
              </AnimatePresence>

              {/* Icon lifts up */}
              <motion.span
                className="bottom-nav__icon"
                animate={isActive ? { y: -6, scale: 1.2 } : { y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 480, damping: 28 }}
              >
                <link.Icon />
              </motion.span>

              {/* Label fades in */}
              <motion.span
                className="bottom-nav__label"
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.span>
            </button>
          )
        })}
      </motion.nav>
    </>
  )
}
