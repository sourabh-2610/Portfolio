/**
 * BackgroundAnimation.jsx — "Living Mesh"
 *
 * A constellation of glowing amber nodes connected by luminous threads,
 * overlaid with large soft gradient orbs — all pure CSS + React.
 * No canvas z-index issues. mix-blend-mode: screen.
 *
 * ── HOW TO REMOVE ──────────────────────────────────────────────
 * 1. Delete this file
 * 2. In App.jsx remove the import and <BackgroundAnimation />
 * 3. In index.css delete the ".bg-glow" section
 * ───────────────────────────────────────────────────────────────
 */

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const TAU = Math.PI * 2
const rand = (a, b) => Math.random() * (b - a) + a

/* ── Node mesh config ── */
const NODE_COUNT     = 45
const CONNECT_DIST   = 180
const MOUSE_RADIUS   = 220

/* ── Warm amber palette ── */
const COLORS = ['#f59e0b', '#fbbf24', '#d97706', '#fcd34d', '#f59e0b']

function makeNode(w, h) {
  return {
    x: rand(0, w),
    y: rand(0, h),
    vx: rand(-0.3, 0.3),
    vy: rand(-0.3, 0.3),
    r: rand(1.5, 3),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    alpha: rand(0.3, 0.8),
    pulsePhase: rand(0, TAU),
    pulseSpeed: rand(0.01, 0.03),
  }
}

/* ── Interactive Canvas Mesh ── */
function MeshCanvas() {
  const ref = useRef(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let raf, w, h, nodes, frame = 0

    function init() {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      nodes = Array.from({ length: NODE_COUNT }, () => makeNode(w, h))
    }

    function tick() {
      frame++
      ctx.clearRect(0, 0, w, h)
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      // update nodes
      nodes.forEach(n => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1

        // mouse repulsion
        const dx = n.x - mx, dy = n.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.8
          n.x += (dx / dist) * force
          n.y += (dy / dist) * force
        }
      })

      // draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.15
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(245, 158, 11, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // draw nodes
      nodes.forEach(n => {
        const pulse = 0.5 + 0.5 * Math.sin(frame * n.pulseSpeed + n.pulsePhase)
        const a = n.alpha * pulse

        // glow
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * 3, 0, TAU)
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 3)
        grad.addColorStop(0, n.color + Math.round(a * 80).toString(16).padStart(2, '0'))
        grad.addColorStop(1, n.color + '00')
        ctx.fillStyle = grad
        ctx.fill()

        // core
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, TAU)
        ctx.fillStyle = `rgba(255, 255, 255, ${a * 0.9})`
        ctx.fill()
      })

      raf = requestAnimationFrame(tick)
    }

    const onMouse = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY } }
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 } }

    init()
    tick()

    window.addEventListener('mousemove', onMouse)
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('resize', () => { init(); frame = 0 })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('resize', () => { init(); frame = 0 })
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
      }}
    />
  )
}

/* ── Combined: CSS Orbs + Canvas Mesh ── */
export default function BackgroundAnimation() {
  return (
    <div
      className="bg-glow"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        overflow: 'hidden',
        pointerEvents: 'none',
        mixBlendMode: 'screen',
      }}
    >
      {/* CSS gradient orbs */}
      <div className="bg-glow__orb bg-glow__orb--1" />
      <div className="bg-glow__orb bg-glow__orb--2" />
      <div className="bg-glow__orb bg-glow__orb--3" />
      <div className="bg-glow__orb bg-glow__orb--4" />
      <div className="bg-glow__orb bg-glow__orb--5" />
      <div className="bg-glow__orb bg-glow__orb--6" />

      {/* Interactive mesh canvas */}
      <MeshCanvas />

      {/* Subtle noise grain overlay for premium texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  )
}
