import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [hovered, setHovered] = useState(null)

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
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg className="navbar__goo-filter" aria-hidden="true" focusable="false">
          <filter id="gooey-nav-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </svg>
        <nav className="navbar__inner container">
          <motion.a
            href="#home"
            className="navbar__logo"
            onClick={(e) => { e.preventDefault(); handleClick('#home') }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SD<span className="navbar__logo-dot">.</span>
          </motion.a>

          <ul className="navbar__links">
            {links.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
              >
                <a
                  href={link.href}
                  className={active === link.href.slice(1) ? 'active' : ''}
                  onMouseEnter={() => setHovered(link.href.slice(1))}
                  onMouseLeave={() => setHovered(null)}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
                >
                  <span
                    className={`navbar__gooey ${hovered === link.href.slice(1) || (!hovered && active === link.href.slice(1)) ? 'is-visible' : ''}`}
                    aria-hidden="true"
                  >
                    <motion.span
                      className="navbar__gooey-pill"
                      layoutId="nav-gooey-pill"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                    <span className="navbar__gooey-dot navbar__gooey-dot--1" />
                    <span className="navbar__gooey-dot navbar__gooey-dot--2" />
                    <span className="navbar__gooey-dot navbar__gooey-dot--3" />
                    <span className="navbar__gooey-dot navbar__gooey-dot--4" />
                    <span className="navbar__gooey-dot navbar__gooey-dot--5" />
                  </span>
                  <span className="navbar__link-label">{link.label}</span>
                </a>
              </motion.li>
            ))}
          </ul>

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

          <div className="navbar__mobile-actions">
            <ThemeToggle />
            <button
              className="navbar__toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul>
              <li className="mobile-menu__theme">
                <span>Theme</span>
                <ThemeToggle />
              </li>
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
