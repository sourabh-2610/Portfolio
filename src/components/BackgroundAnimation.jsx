/**
 * BackgroundAnimation.jsx
 *
 * ── HOW TO REMOVE ──────────────────────────────────────────────
 * 1. Delete this file
 * 2. In App.jsx, remove:
 *      import BackgroundAnimation from './components/BackgroundAnimation'
 *      <BackgroundAnimation />
 * ───────────────────────────────────────────────────────────────
 *
 * "Cosmic Aurora" — canvas animation with:
 *   • Flowing aurora ribbon waves (indigo / violet / cyan)
 *   • Drifting glowing orbs that pulse
 *   • Rare "energy pulse" rings that ripple outward
 *   • Subtle floating star-dust particles
 */

import { useEffect, useRef } from 'react'

/* ── Helpers ── */
const rand = (min, max) => Math.random() * (max - min) + min
const randInt = (min, max) => Math.floor(rand(min, max))
const TAU = Math.PI * 2

/* ── Palette (indigo / violet / cyan accent) ── */
const COLORS = ['#6366f1', '#8b5cf6', '#a78bfa', '#06b6d4', '#818cf8', '#c084fc']

/* ── Config ── */
const N_PARTICLES  = 90   // floating dust
const N_ORBS       = 6    // glowing orbs
const N_AURORA     = 4    // aurora ribbon layers
const PULSE_EVERY  = 220  // frames between energy pulses

/* ───────────────────────────────────────────────────── */

function makeParticle(w, h) {
  return {
    x: rand(0, w), y: rand(0, h),
    r: rand(0.5, 2.2),
    vx: rand(-0.18, 0.18),
    vy: rand(-0.4, -0.1),
    alpha: rand(0.15, 0.65),
    color: COLORS[randInt(0, COLORS.length)],
    phase: rand(0, TAU),
  }
}

function makeOrb(w, h) {
  const color = COLORS[randInt(0, COLORS.length)]
  return {
    x: rand(w * 0.1, w * 0.9),
    y: rand(h * 0.1, h * 0.9),
    r: rand(60, 160),
    vx: rand(-0.12, 0.12),
    vy: rand(-0.08, 0.08),
    color,
    pulse: 0,
    pulseDir: 1,
    alpha: rand(0.04, 0.11),
  }
}

function makeAurora(w, h, index) {
  const colors = [
    ['#6366f1', '#8b5cf6'],
    ['#06b6d4', '#6366f1'],
    ['#a78bfa', '#ec4899'],
    ['#818cf8', '#06b6d4'],
  ]
  return {
    yBase: rand(0.1, 0.5) * h,
    amplitude: rand(0.04, 0.1) * h,
    freq: rand(0.0015, 0.004),
    speed: rand(0.0004, 0.001) * (index % 2 === 0 ? 1 : -1),
    thickness: rand(0.08, 0.18) * h,
    colors: colors[index % colors.length],
    alpha: rand(0.04, 0.09),
    phase: rand(0, TAU),
  }
}

function makePulse(x, y) {
  return { x, y, r: 0, maxR: rand(200, 420), alpha: 0.55, color: COLORS[randInt(0, COLORS.length)] }
}

/* ───────────────────────────────────────────────────── */

export default function BackgroundAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let raf, frame = 0
    let w, h

    /* state */
    let particles, orbs, auroras, pulses

    function init() {
      w = canvas.width  = window.innerWidth
      h = canvas.height = window.innerHeight
      particles = Array.from({ length: N_PARTICLES }, () => makeParticle(w, h))
      orbs      = Array.from({ length: N_ORBS },      () => makeOrb(w, h))
      auroras   = Array.from({ length: N_AURORA },    (_, i) => makeAurora(w, h, i))
      pulses    = []
    }

    /* ── Draw aurora ribbons ── */
    function drawAuroras(t) {
      auroras.forEach(a => {
        ctx.save()
        ctx.beginPath()

        /* top wave */
        ctx.moveTo(0, a.yBase + Math.sin(a.phase + t * a.speed) * a.amplitude)
        for (let x = 0; x <= w; x += 6) {
          const wave =
            Math.sin(x * a.freq + a.phase + t * a.speed) * a.amplitude +
            Math.sin(x * a.freq * 2.1 + t * a.speed * 1.6 + 1) * a.amplitude * 0.35
          ctx.lineTo(x, a.yBase + wave)
        }

        /* bottom — thicker band downward */
        for (let x = w; x >= 0; x -= 6) {
          const wave =
            Math.sin(x * a.freq + a.phase + t * a.speed) * a.amplitude +
            Math.sin(x * a.freq * 2.1 + t * a.speed * 1.6 + 1) * a.amplitude * 0.35
          ctx.lineTo(x, a.yBase + wave + a.thickness)
        }

        ctx.closePath()

        const grad = ctx.createLinearGradient(0, 0, w, 0)
        grad.addColorStop(0,    a.colors[0] + '00')
        grad.addColorStop(0.25, a.colors[0] + Math.round(a.alpha * 255).toString(16).padStart(2, '0'))
        grad.addColorStop(0.5,  a.colors[1] + Math.round(a.alpha * 1.4 * 255).toString(16).padStart(2, '0'))
        grad.addColorStop(0.75, a.colors[0] + Math.round(a.alpha * 255).toString(16).padStart(2, '0'))
        grad.addColorStop(1,    a.colors[1] + '00')

        ctx.fillStyle = grad
        ctx.fill()
        ctx.restore()
      })
    }

    /* ── Draw glowing orbs ── */
    function drawOrbs(t) {
      orbs.forEach(orb => {
        /* drift */
        orb.x += orb.vx
        orb.y += orb.vy
        if (orb.x < -orb.r * 2) orb.x = w + orb.r
        if (orb.x > w + orb.r * 2) orb.x = -orb.r
        if (orb.y < -orb.r * 2) orb.y = h + orb.r
        if (orb.y > h + orb.r * 2) orb.y = -orb.r

        /* pulse radius */
        orb.pulse += 0.012 * orb.pulseDir
        if (orb.pulse > 1 || orb.pulse < 0) orb.pulseDir *= -1
        const rNow = orb.r * (0.88 + 0.12 * orb.pulse)

        ctx.save()
        const g = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, rNow)
        g.addColorStop(0,   orb.color + Math.round(orb.alpha * 2.5 * 255).toString(16).padStart(2, '0'))
        g.addColorStop(0.5, orb.color + Math.round(orb.alpha * 1.2 * 255).toString(16).padStart(2, '0'))
        g.addColorStop(1,   orb.color + '00')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, rNow, 0, TAU)
        ctx.fill()
        ctx.restore()
      })
    }

    /* ── Draw floating particles ── */
    function drawParticles(t) {
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.y < -6)   { p.y = h + 6; p.x = rand(0, w) }
        if (p.x < -6)   p.x = w + 6
        if (p.x > w + 6) p.x = -6

        const flicker = p.alpha * (0.6 + 0.4 * Math.sin(t * 0.04 + p.phase))

        ctx.save()
        ctx.globalAlpha = flicker
        ctx.shadowBlur  = 8
        ctx.shadowColor = p.color
        ctx.fillStyle   = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, TAU)
        ctx.fill()
        ctx.restore()
      })
    }

    /* ── Draw energy pulse rings ── */
    function drawPulses() {
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]
        p.r    += 3.5
        p.alpha -= 0.006
        if (p.alpha <= 0) { pulses.splice(i, 1); continue }

        const lineW = Math.max(0.5, 2.5 * (1 - p.r / p.maxR))

        ctx.save()
        ctx.globalAlpha   = p.alpha
        ctx.strokeStyle   = p.color
        ctx.lineWidth     = lineW
        ctx.shadowBlur    = 18
        ctx.shadowColor   = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, TAU)
        ctx.stroke()

        /* inner ring */
        if (p.r > 30) {
          ctx.globalAlpha = p.alpha * 0.4
          ctx.lineWidth   = lineW * 0.5
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r - 22, 0, TAU)
          ctx.stroke()
        }
        ctx.restore()
      }
    }

    /* ── Main loop ── */
    function tick() {
      frame++
      ctx.clearRect(0, 0, w, h)

      drawAuroras(frame)
      drawOrbs(frame)
      drawParticles(frame)
      drawPulses()

      /* spawn new pulse occasionally */
      if (frame % PULSE_EVERY === 0) {
        const orb = orbs[randInt(0, orbs.length)]
        pulses.push(makePulse(orb.x, orb.y))
      }

      raf = requestAnimationFrame(tick)
    }

    init()
    tick()

    const onResize = () => {
      init()
      frame = 0
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 1,
      }}
    />
  )
}
