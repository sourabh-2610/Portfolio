import React, { useEffect, useState } from 'react'
import './Loader.css'

export const Loader = ({ onComplete, name = 'SD' }) => {
  const [lineIndex, setLineIndex] = useState(0) // 1 = WELCOME TO, 2 = SD's, 3 = PORTFOLIO, 4 = SUBTITLE
  const [counter, setCounter] = useState(1)
  const [isCurtainUp, setIsCurtainUp] = useState(false)

  useEffect(() => {
    // 1. Staggered typography line reveals
    const t1 = setTimeout(() => setLineIndex(1), 400) // "WELCOME TO"
    const t2 = setTimeout(() => setLineIndex(2), 1200) // "SD'S"
    const t3 = setTimeout(() => setLineIndex(3), 2000) // "PORTFOLIO"
    const t4 = setTimeout(() => setLineIndex(4), 2400) // "— LOADING EXPERIENCE —"

    // 2. Counter animation smoothly climbing from 01 to 100
    const startTime = Date.now()
    const duration = 3200 // 3.2 seconds total duration

    const counterInterval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing curve for realistic loading sensation
      const eased = Math.floor(1 + Math.pow(progress, 1.2) * 99)
      setCounter(eased)

      if (progress >= 1) {
        clearInterval(counterInterval)
        setCounter(100)

        // Trigger upward curtain lift
        setTimeout(() => {
          setIsCurtainUp(true)
          // Wait for the 950ms CSS slide animation before unmounting
          setTimeout(onComplete, 950)
        }, 350)
      }
    }, 35)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearInterval(counterInterval)
    }
  }, [onComplete])

  // Quick skip option
  const handleSkip = () => {
    setIsCurtainUp(true)
    setTimeout(onComplete, 900)
  }

  return (
    <div
      id="intro-loader-curtain"
      className={`fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-10 md:p-12 bg-[#0c0d12] text-neutral-100 select-none overflow-hidden transition-transform duration-[950ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isCurtainUp
          ? 'curtain-up -translate-y-full shadow-[0_30px_90px_rgba(0,0,0,0.9)]'
          : 'curtain-down translate-y-0'
      }`}
    >
      {/* Top Header Row: Skip Button */}
      <div className="loader-header flex items-center justify-end w-full">
        {/* Skip button */}
        <button
          onClick={handleSkip}
          className="loader-skip-btn text-[10px] font-mono tracking-[0.2em] text-neutral-500 hover:text-neutral-200 transition-colors uppercase cursor-pointer px-2 py-1"
        >
          SKIP
        </button>
      </div>

      {/* Center Hero: Staggered Editorial Typography */}
      <div className="loader-hero flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto my-auto">
        {/* Subtle Horizontal Accent Bar */}
        <div
          className={`loader-accent-line w-12 sm:w-14 h-[1px] bg-neutral-600/80 mb-6 sm:mb-8 transition-all duration-700 ${
            lineIndex >= 1
              ? 'loader-line-visible opacity-100 scale-100'
              : 'loader-line-hidden opacity-0 scale-50'
          }`}
        />

        {/* Serif Headline with Overflow Masks */}
        <div className="loader-headline space-y-1 sm:space-y-2 font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[0.14em] sm:tracking-[0.18em] text-[#FAFAFC] uppercase leading-[1.25]">
          {/* Line 1: WELCOME TO */}
          <div className="loader-line-mask overflow-hidden py-1">
            <div
              className={`loader-line-text transform transition-all duration-700 ease-out ${
                lineIndex >= 1
                  ? 'loader-line-visible translate-y-0 opacity-100'
                  : 'loader-line-hidden translate-y-8 opacity-0'
              }`}
            >
              WELCOME TO
            </div>
          </div>

          {/* Line 2: SD'S */}
          <div className="loader-line-mask overflow-hidden py-1">
            <div
              className={`loader-line-text transform transition-all duration-700 ease-out ${
                lineIndex >= 2
                  ? 'loader-line-visible translate-y-0 opacity-100'
                  : 'loader-line-hidden translate-y-8 opacity-0'
              }`}
            >
              {name}&apos;S
            </div>
          </div>

          {/* Line 3: PORTFOLIO */}
          <div className="loader-line-mask overflow-hidden py-1">
            <div
              className={`loader-line-text transform transition-all duration-700 ease-out ${
                lineIndex >= 3
                  ? 'loader-line-visible translate-y-0 opacity-100'
                  : 'loader-line-hidden translate-y-8 opacity-0'
              }`}
            >
              PORTFOLIO
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div
          className={`loader-subtitle mt-6 sm:mt-8 text-[11px] sm:text-xs font-mono tracking-[0.3em] sm:tracking-[0.36em] text-neutral-400/90 uppercase transition-all duration-700 ${
            lineIndex >= 4
              ? 'loader-line-visible opacity-100 translate-y-0'
              : 'loader-line-hidden opacity-0 translate-y-3'
          }`}
        >
          — LOADING EXPERIENCE —
        </div>
      </div>

      {/* Bottom Row: Monogram & Numeric Counter */}
      <div className="loader-footer relative flex items-center justify-between w-full">
        {/* Monogram Badge */}
        <div className="flex items-center gap-3">
          <div className="loader-monogram-badge w-8 h-8 rounded-full border border-neutral-700/80 flex items-center justify-center font-serif text-xs text-neutral-300">
            {name}
          </div>
        </div>

        {/* Center Counter (01 to 100) */}
        <div className="loader-counter absolute left-1/2 -translate-x-1/2 font-mono text-xs sm:text-sm tracking-[0.25em] text-neutral-400 tabular-nums font-light">
          {counter < 10 ? `0${counter}` : counter}
        </div>

        <div className="loader-footer-spacer w-8" />
      </div>
    </div>
  )
}

export default Loader
