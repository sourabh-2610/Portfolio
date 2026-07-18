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

/* Reusable NavButton — used in both desktop & mobile nav */
function NavButton({ link, isActive, onClick, layoutPrefix }) {
  return (
    <button
      className={`nav-btn ${isActive ? 'is-active' : ''}`}
      onClick={() => onClick(link.href)}
      aria-label={link.label}
      aria-current={isActive ? 'page' : undefined}
    >
      {/* White glow bar at top + cone of light — spring-slides between items */}
      <AnimatePresence>
        {isActive && (
          <motion.span
            className="nav-btn__light-wrap"
            layoutId={`${layoutPrefix}-light`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 420, damping: 34 }}
          >
            {/* The white LED bar */}
            <span className="nav-btn__bar" />
            {/* The cone of reflected light below the bar */}
            <span className="nav-btn__cone" />
          </motion.span>
        )}
      </AnimatePresence>

      {/* Icon */}
      <motion.span
        className="nav-btn__icon"
        animate={isActive ? { scale: 1.15 } : { scale: 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        <link.Icon />
      </motion.span>

      {/* Label */}
      <motion.span
        className="nav-btn__label"
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 3 }}
        transition={{ duration: 0.18 }}
      >
        {link.label}
      </motion.span>
    </button>
  )
}

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
      {/* ─── Desktop / Tablet Navbar ─── */}
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

          {/* Desktop nav links */}
          <ul className="navbar__links" role="list">
            {links.map((link, i) => {
              const id = link.href.slice(1)
              return (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                >
                  <NavButton
                    link={link}
                    isActive={active === id}
                    onClick={handleClick}
                    layoutPrefix="desk"
                  />
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
              whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(99,102,241,0.4)' }}
              whileTap={{ scale: 0.97 }}
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile — only theme toggle in top bar */}
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
          return (
            <NavButton
              key={link.href}
              link={link}
              isActive={active === id}
              onClick={handleClick}
              layoutPrefix="mob"
            />
          )
        })}
      </motion.nav>
    </>
  )
}
