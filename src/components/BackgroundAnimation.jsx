/**
 * BackgroundAnimation.jsx  —  "Silk Flow Field"
 *
 * ── HOW TO REMOVE ──────────────────────────────────────────────
 * 1. Delete this file
 * 2. In App.jsx remove the import and <BackgroundAnimation />
 * ───────────────────────────────────────────────────────────────
 *
 * Uses a Simplex-noise flow field to guide particles along
 * invisible currents. Each particle leaves a fading trail,
 * creating organic silk-like ribbons of light.
 *
 * Palette: emerald / warm gold / soft white
 */

import { useEffect, useRef } from 'react'

const TAU  = Math.PI * 2
const rand = (a, b) => Math.random() * (b - a) + a

/* ── Simple 2D Simplex-ish noise (fast, good enough for flow fields) ── */
const PERM = new Uint8Array(512)
;(() => {
  const p = new Uint8Array(256)
  for (let i = 0; i < 256; i++) p[i] = i
  for (let i = 255; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [p[i], p[j]] = [p[j], p[i]]
  }
  for (let i = 0; i < 512; i++) PERM[i] = p[i & 255]
})()

const GRAD = [[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]]

function noise2D(x, y) {
  const F2 = 0.5 * (Math.sqrt(3) - 1)
  const G2 = (3 - Math.sqrt(3)) / 6
  const s = (x + y) * F2
  const i = Math.floor(x + s), j = Math.floor(y + s)
  const t = (i + j) * G2
  const X0 = i - t, Y0 = j - t
  const x0 = x - X0, y0 = y - Y0

  const i1 = x0 > y0 ? 1 : 0
  const j1 = x0 > y0 ? 0 : 1
  const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2
  const x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2

  const ii = i & 255, jj = j & 255

  const dot = (gi, dx, dy) => {
    const g = GRAD[gi % 8]
    return g[0] * dx + g[1] * dy
  }

  let n0 = 0, n1 = 0, n2 = 0
  let t0 = 0.5 - x0 * x0 - y0 * y0
  if (t0 > 0) { t0 *= t0; n0 = t0 * t0 * dot(PERM[ii + PERM[jj]], x0, y0) }

  let t1 = 0.5 - x1 * x1 - y1 * y1
  if (t1 > 0) { t1 *= t1; n1 = t1 * t1 * dot(PERM[ii + i1 + PERM[jj + j1]], x1, y1) }

  let t2 = 0.5 - x2 * x2 - y2 * y2
  if (t2 > 0) { t2 *= t2; n2 = t2 * t2 * dot(PERM[ii + 1 + PERM[jj + 1]], x2, y2) }

  return 70 * (n0 + n1 + n2) // range ~ [-1, 1]
}

/* ── Config ── */
const PARTICLE_COUNT = 280
const TRAIL_LENGTH   = 28     // how many positions each particle remembers
const NOISE_SCALE    = 0.0018
const NOISE_SPEED    = 0.0003
const FLOW_SPEED     = 1.6
const FADE_ALPHA     = 0.025  // how fast the canvas darkens (lower = longer trails)

/* ── Palette ── */
const COLORS = [
  { r: 16,  g: 185, b: 129 },  // emerald
  { r: 52,  g: 211, b: 153 },  // light emerald
  { r: 212, g: 165, b: 116 },  // warm gold
  { r: 251, g: 191, b: 36  },  // amber
  { r: 110, g: 231, b: 183 },  // pale emerald
  { r: 245, g: 222, b: 179 },  // wheat gold
]

function makeParticle(w, h) {
  const c = COLORS[Math.floor(Math.random() * COLORS.length)]
  return {
    x: rand(0, w),
    y: rand(0, h),
    trail: [],
    speed: rand(0.7, 1.4),
    color: c,
    alpha: rand(0.3, 0.85),
    life: rand(0, 600),  // stagger start
    maxLife: rand(400, 900),
  }
}

/* ───────────────────────────────────────────── */

export default function BackgroundAnimation() {
  const ref  = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx    = canvas.getContext('2d')
    let raf, frame = 0
    let w, h, particles, dpr

    function init() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width  = w * dpr
      canvas.height = h * dpr
      canvas.style.width  = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      particles = Array.from({ length: PARTICLE_COUNT }, () => makeParticle(w, h))

      // fill black once
      ctx.fillStyle = 'rgba(10, 15, 13, 1)'
      ctx.fillRect(0, 0, w, h)
    }

    function tick() {
      frame++
      const t = frame * NOISE_SPEED

      // semi-transparent overlay to create trail fade
      ctx.fillStyle = `rgba(10, 15, 13, ${FADE_ALPHA})`
      ctx.fillRect(0, 0, w, h)

      particles.forEach(p => {
        p.life++

        // respawn if dead
        if (p.life > p.maxLife || p.x < -20 || p.x > w + 20 || p.y < -20 || p.y > h + 20) {
          p.x = rand(0, w)
          p.y = rand(0, h)
          p.trail = []
          p.life = 0
          p.maxLife = rand(400, 900)
          return
        }

        // flow field angle from noise
        const angle = noise2D(p.x * NOISE_SCALE, p.y * NOISE_SCALE + t) * TAU * 1.2

        // move
        p.x += Math.cos(angle) * FLOW_SPEED * p.speed
        p.y += Math.sin(angle) * FLOW_SPEED * p.speed

        // store trail
        p.trail.push({ x: p.x, y: p.y })
        if (p.trail.length > TRAIL_LENGTH) p.trail.shift()

        // draw trail
        if (p.trail.length < 2) return

        // fade in/out based on life
        const lifeRatio = p.life / p.maxLife
        const lifeFade = lifeRatio < 0.1
          ? lifeRatio / 0.1
          : lifeRatio > 0.85
            ? (1 - lifeRatio) / 0.15
            : 1

        ctx.save()
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        // draw each trail segment with fading alpha
        for (let i = 1; i < p.trail.length; i++) {
          const segRatio = i / p.trail.length      // 0 = oldest, 1 = newest
          const segAlpha = segRatio * p.alpha * lifeFade
          const lineW    = segRatio * 2.2 + 0.3

          ctx.beginPath()
          ctx.moveTo(p.trail[i - 1].x, p.trail[i - 1].y)
          ctx.lineTo(p.trail[i].x, p.trail[i].y)

          ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${segAlpha})`
          ctx.lineWidth = lineW
          ctx.stroke()
        }

        // bright dot at head
        const headAlpha = p.alpha * lifeFade * 0.9
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, TAU)
        ctx.fillStyle = `rgba(255, 255, 255, ${headAlpha})`
        ctx.fill()

        // glow at head
        ctx.shadowBlur  = 12
        ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${headAlpha * 0.6})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2.5, 0, TAU)
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${headAlpha * 0.7})`
        ctx.fill()

        ctx.restore()
      })

      raf = requestAnimationFrame(tick)
    }

    init()
    tick()

    const onResize = () => { init(); frame = 0 }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width:  '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
