import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiSearch,
  HiHome,
  HiUser,
  HiLightningBolt,
  HiCode,
  HiMail,
  HiDocumentText,
  HiClipboardCopy,
  HiMoon,
  HiSun,
  HiSparkles,
} from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'
import { useToast } from '../context/ToastContext'

export default function CommandPalette({ isOpen, onClose, onOpenResume, onOpenAI }) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { theme, toggleTheme } = useTheme()
  const { addToast } = useToast()
  const inputRef = useRef(null)

  const commands = [
    {
      id: 'nav-home',
      group: 'Navigation',
      label: 'Go to Home',
      icon: HiHome,
      action: () => {
        document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })
        onClose()
      },
    },
    {
      id: 'nav-about',
      group: 'Navigation',
      label: 'Go to About Me',
      icon: HiUser,
      action: () => {
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
        onClose()
      },
    },
    {
      id: 'nav-skills',
      group: 'Navigation',
      label: 'Go to Skills & Toolkit',
      icon: HiLightningBolt,
      action: () => {
        document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })
        onClose()
      },
    },
    {
      id: 'nav-projects',
      group: 'Navigation',
      label: 'Go to Selected Projects',
      icon: HiCode,
      action: () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
        onClose()
      },
    },
    {
      id: 'nav-contact',
      group: 'Navigation',
      label: 'Go to Contact Form',
      icon: HiMail,
      action: () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
        onClose()
      },
    },
    {
      id: 'act-copy-email',
      group: 'Actions',
      label: 'Copy Email to Clipboard',
      icon: HiClipboardCopy,
      action: () => {
        navigator.clipboard?.writeText('sourabh.dhulrao@email.com')
        addToast('Email copied to clipboard!', 'success')
        onClose()
      },
    },
    {
      id: 'act-theme',
      group: 'Actions',
      label: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      icon: theme === 'dark' ? HiSun : HiMoon,
      action: () => {
        toggleTheme()
        addToast(`Switched to ${theme === 'dark' ? 'Light' : 'Dark'} mode`, 'info')
        onClose()
      },
    },
    {
      id: 'act-resume',
      group: 'Actions',
      label: 'View Resume & Credentials',
      icon: HiDocumentText,
      action: () => {
        onClose()
        if (onOpenResume) onOpenResume()
      },
    },
    {
      id: 'act-ai',
      group: 'Actions',
      label: 'Chat with Sourabh AI Assistant',
      icon: HiSparkles,
      action: () => {
        onClose()
        if (onOpenAI) onOpenAI()
      },
    },
  ]

  const filteredCommands = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase()) ||
    c.group.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose()
        } else if (e.key === 'ArrowDown') {
          e.preventDefault()
          setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1))
        } else if (e.key === 'ArrowUp') {
          e.preventDefault()
          setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1))
        } else if (e.key === 'Enter') {
          e.preventDefault()
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action()
          }
        }
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, selectedIndex, filteredCommands, onClose])

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        if (isOpen) onClose()
        else {
          // Open triggered by parent state
        }
      }
    }
    window.addEventListener('keydown', handleGlobalKeyDown)
    return () => window.removeEventListener('keydown', handleGlobalKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="cmd-backdrop" onClick={onClose}>
          <motion.div
            className="cmd-dialog"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -20 }}
            transition={{ type: 'spring', stiffness: 450, damping: 30 }}
          >
            <div className="cmd-search-bar">
              <HiSearch className="cmd-search-icon" />
              <input
                ref={inputRef}
                type="text"
                className="cmd-input"
                placeholder="Type a command or search sections..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <span className="cmd-esc-badge">ESC</span>
            </div>

            <div className="cmd-results">
              {filteredCommands.length === 0 ? (
                <div className="cmd-empty">No commands found matching "{query}"</div>
              ) : (
                filteredCommands.map((cmd, i) => {
                  const Icon = cmd.icon
                  const isSelected = i === selectedIndex
                  return (
                    <button
                      key={cmd.id}
                      type="button"
                      className={`cmd-item ${isSelected ? 'cmd-item--selected' : ''}`}
                      onClick={cmd.action}
                      onMouseEnter={() => setSelectedIndex(i)}
                    >
                      <span className="cmd-item__icon">
                        <Icon />
                      </span>
                      <span className="cmd-item__label">{cmd.label}</span>
                      <span className="cmd-item__group">{cmd.group}</span>
                      {isSelected && <span className="cmd-item__enter">↵</span>}
                    </button>
                  )
                })
              )}
            </div>

            <div className="cmd-footer">
              <span>Navigation: <kbd>↑</kbd> <kbd>↓</kbd></span>
              <span>Select: <kbd>↵</kbd></span>
              <span>Close: <kbd>ESC</kbd></span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
