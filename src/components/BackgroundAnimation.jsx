/**
 * BackgroundAnimation.jsx  —  "Silk Flow Field"
 *
 * Uses mix-blend-mode: screen so particles glow ON TOP of all content.
 * No z-index issues, no transparent-background hacks.
 *
 * ── HOW TO REMOVE ──────────────────────────────────────────────
 * 1. Delete this file
 * 2. In App.jsx remove the import and <BackgroundAnimation />
 * ───────────────────────────────────────────────────────────────
 */

import { useEffect, useRef } from 'react'

const TAU  = Math.PI * 2
const rand = (a, b) => Math.random() * (b - a) + a

/* ── Simplex-ish 2D noise ── */
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
  const x0 = x - (i - t), y0 = y - (j - t)
  const i1 = x0 > y0 ? 1 : 0, j1 = x0 > y0 ? 0 : 1
  const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2
  const x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2
  const ii = i & 255, jj = j & 255
  const dot = (gi, dx, dy) => { const g = GRAD[gi % 8]; return g[0]*dx + g[1]*dy }
  let n0=0, n1=0, n2=0
  let t0 = 0.5 - x0*x0 - y0*y0
  if (t0>0) { t0*=t0; n0 = t0*t0*dot(PERM[ii+PERM[jj]], x0, y0) }
  let t1 = 0.5 - x1*x1 - y1*y1
  if (t1>0) { t1*=t1; n1 = t1*t1*dot(PERM[ii+i1+PERM[jj+j1]], x1, y1) }
  let t2 = 0.5 - x2*x2 - y2*y2
  if (t2>0) { t2*=t2; n2 = t2*t2*dot(PERM[ii+1+PERM[jj+1]], x2, y2) }
  return 70 * (n0 + n1 + n2)
}

/* ── Config ── */
const N           = 220
const TRAIL_LEN   = 32
const NOISE_SCALE = 0.002
const NOISE_SPEED = 0.00025
const FLOW_SPEED  = 1.8

/* ── Palette: emerald / gold / wheat ── */
const COLORS = [
  [16, 185, 129],   // emerald
  [52, 211, 153],   // light emerald
  [212, 165, 116],  // warm gold
  [251, 191, 36],   // amber
  [110, 231, 183],  // pale mint
  [245, 222, 179],  // wheat
]

function makeParticle(w, h) {
  const c = COLORS[Math.floor(Math.random() * COLORS.length)]
  return {
    x: rand(0, w), y: rand(0, h),
    trail: [],
    speed: rand(0.6, 1.5),
    color: c,
    alpha: rand(0.35, 0.9),
    life: rand(0, 500),
    maxLife: rand(350, 800),
  }
}

/* ───────────────────────────────────────────── */

export default function BackgroundAnimation() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx    = canvas.getContext('2d')
    let raf, frame = 0, w, h, particles

    function init() {
      w = canvas.width  = window.innerWidth
      h = canvas.height = window.innerHeight
      particles = Array.from({ length: N }, () => makeParticle(w, h))
    }

    function tick() {
      frame++
      const t = frame * NOISE_SPEED

      // fully clear — canvas is transparent, blend-mode: screen does the work
      ctx.clearRect(0, 0, w, h)

      particles.forEach(p => {
        p.life++

        // respawn
        if (p.life > p.maxLife || p.x < -30 || p.x > w+30 || p.y < -30 || p.y > h+30) {
          p.x = rand(0, w); p.y = rand(0, h)
          p.trail = []; p.life = 0; p.maxLife = rand(350, 800)
          return
        }

        // noise-driven direction
        const angle = noise2D(p.x * NOISE_SCALE, p.y * NOISE_SCALE + t) * TAU * 1.3
        p.x += Math.cos(angle) * FLOW_SPEED * p.speed
        p.y += Math.sin(angle) * FLOW_SPEED * p.speed

        // record trail
        p.trail.push({ x: p.x, y: p.y })
        if (p.trail.length > TRAIL_LEN) p.trail.shift()
        if (p.trail.length < 2) return

        // fade in / fade out
        const lr = p.life / p.maxLife
        const lifeFade = lr < 0.08 ? lr / 0.08 : lr > 0.82 ? (1-lr)/0.18 : 1

        ctx.save()
        ctx.lineCap  = 'round'
        ctx.lineJoin = 'round'

        // draw each segment
        for (let i = 1; i < p.trail.length; i++) {
          const segR = i / p.trail.length                 // 0=old, 1=new
          const a    = segR * p.alpha * lifeFade * 0.7    // alpha
          const lw   = segR * 2.4 + 0.2                   // line width

          ctx.beginPath()
          ctx.moveTo(p.trail[i-1].x, p.trail[i-1].y)
          ctx.lineTo(p.trail[i].x, p.trail[i].y)
          ctx.strokeStyle = `rgba(${p.color[0]},${p.color[1]},${p.color[2]},${a})`
          ctx.lineWidth = lw
          ctx.stroke()
        }

        // glowing head
        const ha = p.alpha * lifeFade
        ctx.shadowBlur  = 14
        ctx.shadowColor = `rgba(${p.color[0]},${p.color[1]},${p.color[2]},${ha*0.5})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2.2, 0, TAU)
        ctx.fillStyle = `rgba(${p.color[0]},${p.color[1]},${p.color[2]},${ha*0.8})`
        ctx.fill()

        // white-hot core
        ctx.shadowBlur = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1, 0, TAU)
        ctx.fillStyle = `rgba(255,255,255,${ha*0.6})`
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
        zIndex: 9998,
        mixBlendMode: 'screen',
      }}
    />
  )
}
