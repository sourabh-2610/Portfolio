/**
 * BackgroundAnimation.jsx  —  "Gradient Glow"
 *
 * NO canvas. Just large blurred gradient divs animated with CSS.
 * This is how Stripe, Linear, and Vercel do their backgrounds.
 * Uses mix-blend-mode: screen so colors glow through content.
 *
 * ── HOW TO REMOVE ──────────────────────────────────────────────
 * 1. Delete this file
 * 2. In App.jsx remove the import and <BackgroundAnimation />
 * 3. In index.css delete the ".bg-glow" section
 * ───────────────────────────────────────────────────────────────
 */

export default function BackgroundAnimation() {
  return (
    <div className="bg-glow" aria-hidden="true">
      <div className="bg-glow__orb bg-glow__orb--1" />
      <div className="bg-glow__orb bg-glow__orb--2" />
      <div className="bg-glow__orb bg-glow__orb--3" />
      <div className="bg-glow__orb bg-glow__orb--4" />
      <div className="bg-glow__orb bg-glow__orb--5" />
      <div className="bg-glow__orb bg-glow__orb--6" />
    </div>
  )
}
