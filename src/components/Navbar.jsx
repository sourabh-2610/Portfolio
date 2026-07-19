import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    links.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1))
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <motion.header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="navbar__inner container">
          <motion.a
            href="#home"
            className="navbar__logo"
            onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SD<span className="navbar__logo-dot">.</span>
          </motion.a>

          <ul className="navbar__links" role="list">
            {links.map((link, i) => {
              const id    = link.href.slice(1)
              const on    = active === id
              return (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                >
                  <button
                    className={`nav-btn ${on ? 'is-active' : ''}`}
                    onClick={() => scrollTo(link.href)}
                  >
                    {/* dark pill bg */}
                    <motion.span
                      className="nav-btn__bg"
                      animate={{ opacity: on ? 1 : 0 }}
                      transition={{ duration: 0.25 }}
                    />
                    {/* white LED bar */}
                    <motion.span
                      className="nav-btn__bar"
                      animate={{ opacity: on ? 1 : 0, scaleX: on ? 1 : 0.3 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                    />
                    {/* light cone */}
                    <motion.span
                      className="nav-btn__cone"
                      animate={{ opacity: on ? 1 : 0 }}
                      transition={{ duration: 0.28 }}
                    />
                    {/* icon */}
                    <motion.span
                      className="nav-btn__icon"
                      animate={on ? { y: -2, scale: 1.15 } : { y: 0, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 440, damping: 26 }}
                    >
                      <link.Icon />
                    </motion.span>
                    {/* label */}
                    <motion.span
                      className="nav-btn__label"
                      animate={on ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
                      transition={{ duration: 0.18 }}
                    >
                      {link.label}
                    </motion.span>
                  </button>
                </motion.li>
              )
            })}
          </ul>

          <div className="navbar__actions">
            <ThemeToggle />
            <motion.a
              href="#contact"
              className="btn btn--primary navbar__cta"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(99,102,241,0.4)' }}
              whileTap={{ scale: 0.97 }}
            >
              Let's Talk
            </motion.a>
          </div>

          <div className="navbar__mobile-actions">
            <ThemeToggle />
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Bottom Bar ── */}
      <motion.nav
        className="bottom-nav"
        aria-label="Mobile navigation"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {links.map((link) => {
          const id = link.href.slice(1)
          const on = active === id
          return (
            <button
              key={link.href}
              className={`nav-btn bottom-nav__btn ${on ? 'is-active' : ''}`}
              onClick={() => scrollTo(link.href)}
            >
              <motion.span className="nav-btn__bg"   animate={{ opacity: on ? 1 : 0 }} transition={{ duration: 0.25 }} />
              <motion.span className="nav-btn__bar"  animate={{ opacity: on ? 1 : 0, scaleX: on ? 1 : 0.3 }} transition={{ type: 'spring', stiffness: 400, damping: 28 }} />
              <motion.span className="nav-btn__cone" animate={{ opacity: on ? 1 : 0 }} transition={{ duration: 0.28 }} />
              <motion.span className="nav-btn__icon" animate={on ? { y: -2, scale: 1.15 } : { y: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 440, damping: 26 }}>
                <link.Icon />
              </motion.span>
              <motion.span className="nav-btn__label" animate={on ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }} transition={{ duration: 0.18 }}>
                {link.label}
              </motion.span>
            </button>
          )
        })}
      </motion.nav>
    </>
  )
}
