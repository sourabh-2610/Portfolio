/**
 * BackgroundAnimation.jsx  —  "Firefly Constellation" edition
 *
 * ── HOW TO REMOVE ──────────────────────────────────────────────
 * 1. Delete this file
 * 2. In App.jsx remove the import and <BackgroundAnimation />
 * ───────────────────────────────────────────────────────────────
 *
 * Layers:
 *   1. Deep nebula clouds — slow morphing fog patches
 *   2. Firefly particles — drifting with random wobble
 *   3. Constellation lines — luminous threads connect nearby fireflies
 *   4. Shooting stars — rare bright streaks across the canvas
 *   5. Breathing pulse ring — single slow pulse from center
 *
 * Palette: emerald / warm gold / soft white
 */

import { useEffect, useRef } from 'react'

const TAU  = Math.PI * 2
const rand = (a, b) => Math.random() * (b - a) + a
const rInt = (a, b) => Math.floor(rand(a, b))

/* ── Emerald + Gold + Warm White ── */
const FIREFLY_COLORS = ['#10b981', '#34d399', '#d4a574', '#fbbf24', '#6ee7b7', '#f5deb3']
const NEBULA_COLORS  = ['#0f291f', '#1a1209', '#0d1f17', '#141412']
const STAR_COLORS    = ['#34d399', '#fbbf24', '#d4a574']

const CFG = {
  fireflies    : 100,
  nebulaBlobs  : 5,
  connectDist  : 130,   // px — max distance to draw constellation line
  shootInterval: 320,   // frames between shooting stars
}

/* ── Firefly ── */
function makeFirefly(w, h) {
  return {
    x: rand(0, w), y: rand(0, h),
    r: rand(1, 2.6),
    vx: rand(-0.25, 0.25),
    vy: rand(-0.25, 0.25),
    wobbleX: rand(0.3, 1.2),
    wobbleY: rand(0.3, 1.2),
    wobblePhase: rand(0, TAU),
    alpha: rand(0.25, 0.8),
    color: FIREFLY_COLORS[rInt(0, FIREFLY_COLORS.length)],
    phase: rand(0, TAU),
    pulseSpeed: rand(0.015, 0.04),
  }
}

/* ── Nebula cloud blob ── */
function makeNebula(w, h) {
  return {
    x: rand(w * 0.05, w * 0.95),
    y: rand(h * 0.05, h * 0.95),
    r: rand(180, 420),
    vx: rand(-0.04, 0.04),
    vy: rand(-0.03, 0.03),
    color: NEBULA_COLORS[rInt(0, NEBULA_COLORS.length)],
    alpha: rand(0.15, 0.35),
    breathPhase: rand(0, TAU),
    breathSpeed: rand(0.003, 0.008),
  }
}

/* ── Shooting star ── */
function makeShootingStar(w, h) {
  const angle = rand(-0.6, -0.15) // mostly downward-right
  const speed = rand(10, 22)
  return {
    x: rand(-100, w * 0.7),
    y: rand(-50, h * 0.3),
    vx: Math.cos(angle) * speed,
    vy: -Math.sin(angle) * speed, // negated because canvas Y is flipped
    len: rand(80, 200),
    alpha: 1,
    color: STAR_COLORS[rInt(0, STAR_COLORS.length)],
    life: 0,
    maxLife: rand(30, 55),
  }
}

/* ───────────────────────────────────────────── */

export default function BackgroundAnimation() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx    = canvas.getContext('2d')
    let raf, frame = 0
    let w, h, fireflies, nebulas, shootingStars

    function init() {
      w = canvas.width  = window.innerWidth
      h = canvas.height = window.innerHeight
      fireflies     = Array.from({ length: CFG.fireflies }, () => makeFirefly(w, h))
      nebulas       = Array.from({ length: CFG.nebulaBlobs }, () => makeNebula(w, h))
      shootingStars = []
    }

    /* ── 1. Nebula clouds ── */
    function drawNebulas(t) {
      nebulas.forEach(n => {
        n.x += n.vx
        n.y += n.vy

        // wrap around
        if (n.x < -n.r) n.x = w + n.r
        if (n.x > w + n.r) n.x = -n.r
        if (n.y < -n.r) n.y = h + n.r
        if (n.y > h + n.r) n.y = -n.r

        n.breathPhase += n.breathSpeed
        const rNow = n.r * (0.9 + 0.1 * Math.sin(n.breathPhase))

        ctx.save()
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, rNow)
        g.addColorStop(0,   n.color + hexAlpha(n.alpha * 1.2))
        g.addColorStop(0.5, n.color + hexAlpha(n.alpha * 0.6))
        g.addColorStop(1,   n.color + '00')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(n.x, n.y, rNow, 0, TAU)
        ctx.fill()
        ctx.restore()
      })
    }

    /* ── 2. Fireflies ── */
    function updateFireflies(t) {
      fireflies.forEach(f => {
        f.wobblePhase += 0.012
        f.x += f.vx + Math.sin(f.wobblePhase * f.wobbleX + f.phase) * 0.3
        f.y += f.vy + Math.cos(f.wobblePhase * f.wobbleY + f.phase) * 0.3

        // wrap
        if (f.x < -10) f.x = w + 10
        if (f.x > w + 10) f.x = -10
        if (f.y < -10) f.y = h + 10
        if (f.y > h + 10) f.y = -10
      })
    }

    function drawFireflies(t) {
      fireflies.forEach(f => {
        const flicker = f.alpha * (0.5 + 0.5 * Math.sin(t * f.pulseSpeed + f.phase))

        ctx.save()
        ctx.globalAlpha = flicker

        // outer glow
        ctx.shadowBlur  = 16
        ctx.shadowColor = f.color

        ctx.fillStyle = f.color
        ctx.beginPath()
        ctx.arc(f.x, f.y, f.r, 0, TAU)
        ctx.fill()

        // bright core
        ctx.shadowBlur = 0
        ctx.globalAlpha = flicker * 1.3
        ctx.fillStyle = '#fff'
        ctx.beginPath()
        ctx.arc(f.x, f.y, f.r * 0.35, 0, TAU)
        ctx.fill()

        ctx.restore()
      })
    }

    /* ── 3. Constellation lines ── */
    function drawConstellations() {
      const maxDist = CFG.connectDist
      const maxDistSq = maxDist * maxDist

      for (let i = 0; i < fireflies.length; i++) {
        const a = fireflies[i]
        for (let j = i + 1; j < fireflies.length; j++) {
          const b = fireflies[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distSq = dx * dx + dy * dy

          if (distSq < maxDistSq) {
            const dist  = Math.sqrt(distSq)
            const alpha = (1 - dist / maxDist) * 0.15

            ctx.save()
            ctx.globalAlpha = alpha
            ctx.strokeStyle = a.color
            ctx.lineWidth   = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }
    }

    /* ── 4. Shooting stars ── */
    function drawShootingStars() {
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i]
        s.life++
        s.x += s.vx
        s.y += s.vy

        const progress = s.life / s.maxLife
        s.alpha = 1 - progress

        if (s.alpha <= 0) { shootingStars.splice(i, 1); continue }

        // trail
        const tailX = s.x - s.vx * (s.len / Math.hypot(s.vx, s.vy))
        const tailY = s.y - s.vy * (s.len / Math.hypot(s.vx, s.vy))

        ctx.save()
        const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY)
        grad.addColorStop(0, s.color + hexAlpha(s.alpha))
        grad.addColorStop(1, s.color + '00')

        ctx.strokeStyle = grad
        ctx.lineWidth   = 2
        ctx.shadowBlur  = 12
        ctx.shadowColor = s.color
        ctx.lineCap     = 'round'
        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(tailX, tailY)
        ctx.stroke()

        // bright head
        ctx.globalAlpha = s.alpha
        ctx.fillStyle   = '#fff'
        ctx.beginPath()
        ctx.arc(s.x, s.y, 2, 0, TAU)
        ctx.fill()

        ctx.restore()
      }
    }

    /* ── 5. Center breathing ring ── */
    function drawBreathRing(t) {
      const cx = w / 2
      const cy = h / 2
      const baseR = Math.min(w, h) * 0.28
      const r = baseR + Math.sin(t * 0.008) * baseR * 0.12
      const alpha = 0.025 + 0.015 * Math.sin(t * 0.006)

      ctx.save()
      ctx.globalAlpha = alpha
      ctx.strokeStyle = '#10b981'
      ctx.lineWidth   = 1.2
      ctx.shadowBlur  = 30
      ctx.shadowColor = '#10b981'
      ctx.beginPath()
      ctx.arc(cx, cy, r, 0, TAU)
      ctx.stroke()

      // second ring offset
      ctx.globalAlpha = alpha * 0.5
      ctx.lineWidth   = 0.6
      ctx.beginPath()
      ctx.arc(cx, cy, r * 1.15, 0, TAU)
      ctx.stroke()
      ctx.restore()
    }

    /* ── Helpers ── */
    function hexAlpha(a) {
      return Math.round(Math.max(0, Math.min(1, a)) * 255)
        .toString(16).padStart(2, '0')
    }

    /* ── Main loop ── */
    function tick() {
      frame++
      ctx.clearRect(0, 0, w, h)

      drawNebulas(frame)
      updateFireflies(frame)
      drawConstellations()
      drawFireflies(frame)
      drawShootingStars()
      drawBreathRing(frame)

      // spawn shooting star
      if (frame % CFG.shootInterval === 0) {
        shootingStars.push(makeShootingStar(w, h))
      }

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
        zIndex: -1,
      }}
    />
  )
}
