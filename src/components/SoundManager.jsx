import { createContext, useContext, useState, useRef, useEffect } from 'react'

const SoundContext = createContext(null)

export function SoundProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = useState(false)
  const audioCtxRef = useRef(null)

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx()
      }
    }
    if (audioCtxRef.current?.state === 'suspended') {
      audioCtxRef.current.resume()
    }
  }

  const toggleSound = () => {
    setSoundEnabled((prev) => {
      const next = !prev
      if (next) {
        initAudio()
        setTimeout(() => playBlip(), 50)
      }
      return next
    })
  }

  const playClick = () => {
    if (!soundEnabled) return
    try {
      initAudio()
      const ctx = audioCtxRef.current
      if (!ctx) return

      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(800, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.04)

      gain.gain.setValueAtTime(0.08, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start()
      osc.stop(ctx.currentTime + 0.04)
    } catch (e) {
      // Ignore audio failure
    }
  }

  const playBlip = () => {
    if (!soundEnabled) return
    try {
      initAudio()
      const ctx = audioCtxRef.current
      if (!ctx) return

      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(987.77, ctx.currentTime) // B5
      osc.frequency.exponentialRampToValueAtTime(1318.51, ctx.currentTime + 0.06) // E6

      gain.gain.setValueAtTime(0.09, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start()
      osc.stop(ctx.currentTime + 0.06)
    } catch (e) {}
  }

  const playSuccess = () => {
    if (!soundEnabled) return
    try {
      initAudio()
      const ctx = audioCtxRef.current
      if (!ctx) return

      const now = ctx.currentTime
      ;[523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()

        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, now + i * 0.05)

        gain.gain.setValueAtTime(0.07, now + i * 0.05)
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.12)

        osc.connect(gain)
        gain.connect(ctx.destination)

        osc.start(now + i * 0.05)
        osc.stop(now + i * 0.05 + 0.12)
      })
    } catch (e) {}
  }

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playClick, playBlip, playSuccess }}>
      {children}
    </SoundContext.Provider>
  )
}

export function useSound() {
  const ctx = useContext(SoundContext)
  if (!ctx) {
    return {
      soundEnabled: false,
      toggleSound: () => {},
      playClick: () => {},
      playBlip: () => {},
      playSuccess: () => {},
    }
  }
  return ctx
}
