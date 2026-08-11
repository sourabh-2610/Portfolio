/**
 * BackgroundAnimation.jsx  —  "Ember & Smoke" edition
 *
 * ── HOW TO REMOVE ──────────────────────────────────────────────
 * 1. Delete this file
 * 2. In App.jsx remove the import line and <BackgroundAnimation />
 * ───────────────────────────────────────────────────────────────
 *
 * Colour palette: warm amber / deep rose / charcoal smoke
 * — feels hand-crafted, editorial, nothing "AI blue"
 *
 * Layers (all on one canvas):
 *   1. Slow-rolling smoke wisps (dark grey, almost invisible)
 *   2. Ember orbs — warm amber / rose blobs that breathe
 *   3. Fine cinder sparks — tiny motes drifting upward
 *   4. Rare "heat shimmer" pulse ring from an ember
 */

import { useEffect, useRef } from 'react'

const TAU   = Math.PI * 2
const rand  = (a, b) => Math.random() * (b - a) + a
const rInt  = (a, b) => Math.floor(rand(a, b))

/* ── Warm, organic palette — amber / rose / smoke ── */
const EMBER_COLORS  = ['#f59e0b', '#d97706', '#ef4444', '#e11d48', '#fb923c']
const SMOKE_COLORS  = ['#292524', '#1c1917', '#27272a']

const CFG = {
  sparks   : 70,
  orbs     : 5,
  wisps    : 3,
  pulseEvery: 260,   // frames between heat pulses
}

/* ── Factory fns ── */
function makeSpark(w, h) {
  return {
    x: rand(0, w), y: rand(h * 0.3, h),
    r: rand(0.4, 1.8),
    vx: rand(-0.15, 0.15),
    vy: rand(-0.6, -0.15),
    alpha: rand(0.2, 0.7),
    color: EMBER_COLORS[rInt(0, EMBER_COLORS.length)],
    phase: rand(0, TAU),
  }
}

function makeOrb(w, h) {
  const color = EMBER_COLORS[rInt(0, EMBER_COLORS.length)]
  return {
    x: rand(w * 0.08, w * 0.92),
    y: rand(h * 0.1,  h * 0.9),
    r: rand(70, 200),
    vx: rand(-0.07, 0.07),
    vy: rand(-0.05, 0.05),
    color,
    beat: rand(0, TAU),
    beatSpd: rand(0.006, 0.014),
    alpha: rand(0.045, 0.10),
  }
}

function makeWisp(w, h, index) {
  const yZones = [0.12, 0.42, 0.72]
  return {
    yBase: h * (yZones[index % yZones.length] + rand(-0.06, 0.06)),
    amp  : rand(0.05, 0.12) * h,
    freq : rand(0.0012, 0.003),
    speed: rand(0.0003, 0.0007) * (index % 2 ? 1 : -1),
    thick: rand(0.10, 0.20) * h,
    color: SMOKE_COLORS[index % SMOKE_COLORS.length],
    alpha: rand(0.018, 0.038),
    phase: rand(0, TAU),
  }
}

function makePulse(x, y) {
  return {
    x, y,
    r    : 0,
    maxR : rand(160, 360),
    alpha: 0.45,
    color: EMBER_COLORS[rInt(0, EMBER_COLORS.length)],
  }
}

/* ───────────────────────────────────────────────── */

export default function BackgroundAnimation() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx    = canvas.getContext('2d')
    let raf, frame = 0
    let w, h, sparks, orbs, wisps, pulses

    function init() {
      w = canvas.width  = window.innerWidth
      h = canvas.height = window.innerHeight
      sparks = Array.from({ length: CFG.sparks  }, () => makeSpark(w, h))
      orbs   = Array.from({ length: CFG.orbs    }, () => makeOrb(w, h))
      wisps  = Array.from({ length: CFG.wisps   }, (_, i) => makeWisp(w, h, i))
      pulses = []
    }

    /* ── Smoke wisps ── */
    function drawWisps(t) {
      wisps.forEach(wsp => {
        ctx.save()
        ctx.beginPath()
        ctx.moveTo(0, wsp.yBase)

        for (let x = 0; x <= w; x += 8) {
          const y = wsp.yBase
            + Math.sin(x * wsp.freq + wsp.phase + t * wsp.speed) * wsp.amp
            + Math.sin(x * wsp.freq * 1.9 + t * wsp.speed * 1.5) * wsp.amp * 0.4
          ctx.lineTo(x, y)
        }
        for (let x = w; x >= 0; x -= 8) {
          const y = wsp.yBase
            + Math.sin(x * wsp.freq + wsp.phase + t * wsp.speed) * wsp.amp
            + Math.sin(x * wsp.freq * 1.9 + t * wsp.speed * 1.5) * wsp.amp * 0.4
            + wsp.thick
          ctx.lineTo(x, y)
        }
        ctx.closePath()

        // vertical gradient — solid smoke band
        const g = ctx.createLinearGradient(0, wsp.yBase - wsp.amp, 0, wsp.yBase + wsp.thick + wsp.amp)
        g.addColorStop(0,    wsp.color + '00')
        g.addColorStop(0.35, wsp.color + Math.round(wsp.alpha * 255).toString(16).padStart(2,'0'))
        g.addColorStop(0.65, wsp.color + Math.round(wsp.alpha * 255).toString(16).padStart(2,'0'))
        g.addColorStop(1,    wsp.color + '00')

        ctx.fillStyle = g
        ctx.fill()
        ctx.restore()
      })
    }

    /* ── Ember orbs ── */
    function drawOrbs() {
      orbs.forEach(orb => {
        orb.x += orb.vx
        orb.y += orb.vy
        if (orb.x < -orb.r) orb.x = w + orb.r
        if (orb.x > w + orb.r) orb.x = -orb.r
        if (orb.y < -orb.r) orb.y = h + orb.r
        if (orb.y > h + orb.r) orb.y = -orb.r

        orb.beat += orb.beatSpd
        const rNow = orb.r * (0.9 + 0.1 * Math.sin(orb.beat))

        ctx.save()
        const g = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, rNow)
        const aHex = (v) => Math.round(v * 255).toString(16).padStart(2, '0')
        g.addColorStop(0,    orb.color + aHex(orb.alpha * 2.8))
        g.addColorStop(0.45, orb.color + aHex(orb.alpha * 1.3))
        g.addColorStop(1,    orb.color + '00')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, rNow, 0, TAU)
        ctx.fill()
        ctx.restore()
      })
    }

    /* ── Cinder sparks ── */
    function drawSparks(t) {
      sparks.forEach(sp => {
        sp.x += sp.vx
        sp.y += sp.vy
        if (sp.y < -8) { sp.y = h + 8; sp.x = rand(0, w) }
        if (sp.x < -8) sp.x = w + 8
        if (sp.x > w + 8) sp.x = -8

        const flicker = sp.alpha * (0.55 + 0.45 * Math.sin(t * 0.05 + sp.phase))
        ctx.save()
        ctx.globalAlpha = flicker
        ctx.shadowBlur  = 10
        ctx.shadowColor = sp.color
        ctx.fillStyle   = sp.color
        ctx.beginPath()
        ctx.arc(sp.x, sp.y, sp.r, 0, TAU)
        ctx.fill()
        ctx.restore()
      })
    }

    /* ── Heat pulse rings ── */
    function drawPulses() {
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]
        p.r    += 2.8
        p.alpha -= 0.005
        if (p.alpha <= 0) { pulses.splice(i, 1); continue }

        const t    = p.r / p.maxR          // 0→1
        const lw   = Math.max(0.4, 2 * (1 - t))
        const aHex = Math.round(p.alpha * 255).toString(16).padStart(2, '0')

        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.strokeStyle = p.color
        ctx.lineWidth   = lw
        ctx.shadowBlur  = 20
        ctx.shadowColor = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, TAU)
        ctx.stroke()

        if (p.r > 40) {
          ctx.globalAlpha = p.alpha * 0.35
          ctx.lineWidth   = lw * 0.5
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r - 18, 0, TAU)
          ctx.stroke()
        }
        ctx.restore()
      }
    }

    /* ── Main loop ── */
    function tick() {
      frame++
      ctx.clearRect(0, 0, w, h)

      drawWisps(frame)
      drawOrbs()
      drawSparks(frame)
      drawPulses()

      if (frame % CFG.pulseEvery === 0) {
        const orb = orbs[rInt(0, orbs.length)]
        pulses.push(makePulse(orb.x, orb.y))
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
        zIndex: -1,           // ← behind everything including body bg
      }}
    />
  )
}
