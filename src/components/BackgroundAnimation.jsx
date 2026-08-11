/**
 * BackgroundAnimation.jsx — "Midnight Luxe"
 *
 * Combines ReactBits Particles (WebGL 3D particle field)
 * with CSS gradient orbs for a premium layered effect.
 *
 * ── HOW TO REMOVE ──────────────────────────────────────────────
 * 1. Delete this file
 * 2. In App.jsx remove the import and <BackgroundAnimation />
 * 3. In index.css delete the ".bg-glow" section
 * ───────────────────────────────────────────────────────────────
 */

import Particles from './Particles'

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
      {/* CSS gradient orbs — soft ambient glow */}
      <div className="bg-glow__orb bg-glow__orb--1" />
      <div className="bg-glow__orb bg-glow__orb--2" />
      <div className="bg-glow__orb bg-glow__orb--3" />
      <div className="bg-glow__orb bg-glow__orb--4" />
      <div className="bg-glow__orb bg-glow__orb--5" />
      <div className="bg-glow__orb bg-glow__orb--6" />

      {/* ReactBits Particles — WebGL 3D particle field */}
      <Particles
        particleCount={250}
        particleSpread={12}
        speed={0.08}
        particleColors={['#e8a87c', '#f0c4a8', '#c88a6a', '#94a3b8', '#f5f0eb']}
        particleBaseSize={80}
        sizeRandomness={0.8}
        cameraDistance={22}
      />

      {/* Subtle noise grain overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  )
}
