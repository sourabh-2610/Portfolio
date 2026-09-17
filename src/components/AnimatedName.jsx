import React, { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

const GLYPHS = '0123456789ABCDEF!@#$%&*<>~✦'

function InteractiveWord({ word, className = '', isAccent = false }) {
  const [displayLetters, setDisplayLetters] = useState(word.split(''))
  const [sparks, setSparks] = useState([])
  const activeIntervals = useRef({})

  // Trigger cyber scramble animation on a letter
  const handleScramble = useCallback((idx) => {
    if (activeIntervals.current[idx]) {
      clearInterval(activeIntervals.current[idx])
    }

    let count = 0
    const maxTicks = 7
    activeIntervals.current[idx] = setInterval(() => {
      count++
      if (count >= maxTicks) {
        clearInterval(activeIntervals.current[idx])
        delete activeIntervals.current[idx]
        setDisplayLetters(prev => {
          const next = [...prev]
          next[idx] = word[idx]
          return next
        })
      } else {
        setDisplayLetters(prev => {
          const next = [...prev]
          next[idx] = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          return next
        })
      }
    }, 32)
  }, [word])

  // Spawn luminous spark particles around hovered letter
  const handleSpawnSparks = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newSparks = Array.from({ length: 4 }).map((_, i) => ({
      id: Math.random() + Date.now(),
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 16,
      dx: (Math.random() - 0.5) * 45,
      dy: -15 - Math.random() * 35,
      size: Math.random() * 4 + 2,
      color: isAccent
        ? (i % 2 === 0 ? '#00f0ff' : '#38bdf8')
        : (i % 2 === 0 ? '#ffffff' : '#818cf8'),
    }))

    setSparks(prev => [...prev.slice(-16), ...newSparks])

    setTimeout(() => {
      setSparks(prev => prev.filter(s => !newSparks.some(ns => ns.id === s.id)))
    }, 700)
  }, [isAccent])

  return (
    <span className={`interactive-word ${className}`}>
      {/* Floating Sparks Container */}
      <span className="interactive-word__sparks" aria-hidden="true">
        {sparks.map(s => (
          <motion.span
            key={s.id}
            className="spark-particle"
            style={{
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
              backgroundColor: s.color,
              boxShadow: `0 0 10px ${s.color}, 0 0 20px ${s.color}`,
            }}
            initial={{ opacity: 1, scale: 1 }}
            animate={{
              x: s.dx,
              y: s.dy,
              opacity: 0,
              scale: 0.2,
            }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          />
        ))}
      </span>

      {/* Individual Interactive Letters */}
      {displayLetters.map((char, i) => {
        const tilt = (i % 2 === 0 ? 1 : -1) * (5 + (i % 3) * 2)
        return (
          <motion.span
            key={i}
            className={`interactive-char ${isAccent ? 'interactive-char--accent' : 'interactive-char--first'}`}
            onMouseEnter={(e) => {
              handleScramble(i)
              handleSpawnSparks(e)
            }}
            whileHover={{
              y: -8,
              scale: 1.15,
              rotate: tilt,
              filter: isAccent
                ? 'drop-shadow(0 0 25px rgba(0, 240, 255, 1)) drop-shadow(0 0 45px rgba(56, 189, 248, 0.9))'
                : 'drop-shadow(0 0 25px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 40px rgba(99, 102, 241, 0.7))',
              transition: {
                type: 'spring',
                stiffness: 500,
                damping: 14,
                mass: 0.5,
              },
            }}
            whileTap={{ scale: 0.95 }}
          >
            {char}
          </motion.span>
        )
      })}
    </span>
  )
}

export default function AnimatedName({ firstName = 'Sourabh', lastName = 'Dhulrao' }) {
  return (
    <motion.h1
      className="hero__name"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <InteractiveWord
        word={firstName}
        className="hero__word-first"
        isAccent={false}
      />
      <InteractiveWord
        word={lastName}
        className="hero__word-accent"
        isAccent={true}
      />
    </motion.h1>
  )
}
