import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Supported 3D particle formations
 */
export const SHAPES = ['portal', 'logo', 'torus', 'constellation', 'tree']

// ---------------------------------------------------------------------------
// 1. Soft Radial Glow Bloom Texture Generator (Canvas in-memory)
// ---------------------------------------------------------------------------
function createGlowTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 128
  const ctx = canvas.getContext('2d')

  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
  gradient.addColorStop(0.18, 'rgba(90, 242, 255, 1)')
  gradient.addColorStop(0.46, 'rgba(67, 97, 238, 0.8)')
  gradient.addColorStop(0.75, 'rgba(181, 23, 158, 0.3)')
  gradient.addColorStop(1, 'rgba(181, 23, 158, 0)')

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 128, 128)

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

// ---------------------------------------------------------------------------
// 2. Procedural 3D Coordinate Generators for Formations
// ---------------------------------------------------------------------------
function generatePositionsForShape(shape, count) {
  const positions = new Float32Array(count * 3)

  switch (shape) {
    case 'tree':
      generateNeuralTree(positions, count)
      break
    case 'torus':
      generateQuantumTorus(positions, count)
      break
    case 'constellation':
      generateConstellation(positions, count)
      break
    case 'portal':
      generatePortalVortex(positions, count)
      break
    case 'logo':
      generateSigilLogo(positions, count)
      break
    default:
      generateSigilLogo(positions, count)
  }

  return positions
}

// Branching Organic Neural Tree
function generateNeuralTree(positions, count) {
  let idx = 0
  const trunkCount = Math.floor(count * 0.22)
  const branchCount = Math.floor(count * 0.38)

  for (let i = 0; i < trunkCount; i++) {
    const t = i / trunkCount
    const y = -2.2 + t * 2.0
    const radius = (1 - t * 0.6) * 0.35 + Math.sin(y * 4) * 0.05
    const angle = Math.random() * Math.PI * 2
    const r = radius * (0.4 + 0.6 * Math.random())
    positions[idx++] = Math.cos(angle) * r
    positions[idx++] = y + (Math.random() - 0.5) * 0.05
    positions[idx++] = Math.sin(angle) * r
  }

  const numBranches = 8
  const ptsPerBranch = Math.floor(branchCount / numBranches)
  for (let b = 0; b < numBranches; b++) {
    const bAngle = (b / numBranches) * Math.PI * 2 + (Math.random() - 0.5) * 0.3
    const elevation = 0.3 + Math.random() * 0.5

    for (let p = 0; p < ptsPerBranch; p++) {
      if (idx >= (trunkCount + branchCount) * 3) break
      const progress = p / ptsPerBranch
      const dist = progress * 1.9
      const curY = -0.2 + progress * elevation * 2.2 + Math.sin(progress * 5) * 0.15
      const spread = progress * 0.25

      positions[idx++] = Math.cos(bAngle) * dist + (Math.random() - 0.5) * spread
      positions[idx++] = curY + (Math.random() - 0.5) * spread
      positions[idx++] = Math.sin(bAngle) * dist + (Math.random() - 0.5) * spread
    }
  }

  while (idx < count * 3) {
    const u = Math.random() * Math.PI * 2
    const v = Math.random() * Math.PI
    const spreadR = 1.4 + Math.random() * 1.2
    positions[idx++] = spreadR * Math.sin(v) * Math.cos(u) * 1.2
    positions[idx++] = 1.2 + spreadR * Math.cos(v) * 0.85 + (Math.random() - 0.5) * 0.3
    positions[idx++] = spreadR * Math.sin(v) * Math.sin(u) * 1.2
  }
}

// Quantum Accelerator Torus
function generateQuantumTorus(positions, count) {
  let idx = 0
  const majorR = 2.0
  const minorR = 0.65
  const mainTorus = Math.floor(count * 0.70)

  for (let i = 0; i < mainTorus; i++) {
    const u = Math.random() * Math.PI * 2
    const v = Math.random() * Math.PI * 2
    const r = minorR * (0.3 + 0.7 * Math.sqrt(Math.random()))

    const x = (majorR + r * Math.cos(v)) * Math.cos(u)
    const y = r * Math.sin(v) + Math.sin(u * 3) * 0.2
    const z = (majorR + r * Math.cos(v)) * Math.sin(u)

    positions[idx++] = x * 0.85 - y * 0.3
    positions[idx++] = y * 0.85 + x * 0.3
    positions[idx++] = z
  }

  while (idx < count * 3) {
    const angle = Math.random() * Math.PI * 2
    const orbitR = 2.7 + (Math.random() - 0.5) * 0.4
    positions[idx++] = Math.cos(angle) * orbitR
    positions[idx++] = Math.sin(angle * 2) * 0.6
    positions[idx++] = Math.sin(angle) * orbitR
  }
}

// Orbiting Celestial Constellation
function generateConstellation(positions, count) {
  let idx = 0
  const hubs = [
    [-1.8,  1.1,  0.5],
    [ 1.8,  1.2, -0.4],
    [-1.2, -0.5,  1.3],
    [ 1.3, -0.6, -1.2],
    [ 0.0,  1.9,  0.0],
    [-1.9, -1.0, -0.6],
    [ 1.7, -1.1,  0.7],
    [ 0.0, -1.8,  0.0],
  ]

  const ptsPerHub = Math.floor((count * 0.55) / hubs.length)
  for (const hub of hubs) {
    for (let i = 0; i < ptsPerHub; i++) {
      if (idx >= count * 0.55 * 3) break
      const r = Math.pow(Math.random(), 2) * 0.45
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      positions[idx++] = hub[0] + r * Math.sin(phi) * Math.cos(theta)
      positions[idx++] = hub[1] + r * Math.sin(phi) * Math.sin(theta)
      positions[idx++] = hub[2] + r * Math.cos(phi)
    }
  }

  const filaments = [
    [0, 1], [0, 4], [1, 4], [0, 2], [1, 3], [2, 7], [3, 7], [2, 5], [3, 6], [5, 7], [6, 7],
  ]
  const ptsPerFilament = Math.floor((count * 0.3) / filaments.length)
  for (const [hA, hB] of filaments) {
    const A = hubs[hA]
    const B = hubs[hB]
    for (let i = 0; i < ptsPerFilament; i++) {
      if (idx >= count * 0.85 * 3) break
      const t = i / ptsPerFilament
      const jitter = (Math.random() - 0.5) * 0.12
      positions[idx++] = A[0] + (B[0] - A[0]) * t + jitter
      positions[idx++] = A[1] + (B[1] - A[1]) * t + jitter
      positions[idx++] = A[2] + (B[2] - A[2]) * t + jitter
    }
  }

  while (idx < count * 3) {
    const u = Math.random() * Math.PI * 2
    const v = Math.acos(Math.random() * 2 - 1)
    const r = 1.0 + Math.random() * 2.2
    positions[idx++] = r * Math.sin(v) * Math.cos(u)
    positions[idx++] = r * Math.sin(v) * Math.sin(u)
    positions[idx++] = r * Math.cos(v)
  }
}

// Converging Singularity Vortex / Portal Funnel
function generatePortalVortex(positions, count) {
  let idx = 0
  for (let i = 0; i < count; i++) {
    const yNorm = i / count
    const y = -2.2 + yNorm * 4.4
    const waist = 0.35
    const r = waist + Math.pow(y * 0.55, 2) + Math.random() * 0.25
    const angle = y * 4.8 + (Math.PI * 2 * (i % 6) / 6) + (Math.random() - 0.5) * 0.2

    positions[idx++] = Math.cos(angle) * r
    positions[idx++] = y
    positions[idx++] = Math.sin(angle) * r
  }
}

// Monogram Sigil: "SD" (Sourabh Dhulrao)
function generateSigilLogo(positions, count) {
  let idx = 0
  const sPoints = Math.floor(count * 0.44)
  const dPoints = Math.floor(count * 0.44)

  // 1. Letter 'S'
  const sHalf = Math.floor(sPoints / 2)
  const xS = -0.75
  const yStop = 0.52
  const ySbot = -0.52
  const rSx = 0.46
  const rSy = 0.55
  const sweepAngle = 1.5 * Math.PI - 0.25 // ~4.462

  // Upper loop of 'S' (sweeping counterclockwise from top-right into center)
  for (let i = 0; i < sHalf; i++) {
    const u = i / sHalf
    const theta = 0.25 + u * sweepAngle
    const jitterX = (Math.random() - 0.5) * 0.08
    const jitterY = (Math.random() - 0.5) * 0.08
    const jitterZ = (Math.random() - 0.5) * 0.22
    positions[idx++] = xS + rSx * Math.cos(theta) + jitterX
    positions[idx++] = yStop + rSy * Math.sin(theta) + jitterY
    positions[idx++] = jitterZ
  }

  // Lower loop of 'S' (sweeping clockwise from center into bottom-left)
  const sSecondHalf = sPoints - sHalf
  for (let i = 0; i < sSecondHalf; i++) {
    const u = i / sSecondHalf
    const theta = 0.5 * Math.PI - u * sweepAngle
    const jitterX = (Math.random() - 0.5) * 0.08
    const jitterY = (Math.random() - 0.5) * 0.08
    const jitterZ = (Math.random() - 0.5) * 0.22
    positions[idx++] = xS + rSx * Math.cos(theta) + jitterX
    positions[idx++] = ySbot + rSy * Math.sin(theta) + jitterY
    positions[idx++] = jitterZ
  }

  // 2. Letter 'D' (seamless perimeter: spine -> top bar -> arc -> bottom bar)
  const xDSpine = 0.25
  const xDBarEnd = 0.60
  const rDx = 0.65
  const rDy = 1.07

  for (let i = 0; i < dPoints; i++) {
    const f = i / dPoints
    let x, y

    if (f < 0.38) {
      // Spine
      const u = f / 0.38
      x = xDSpine
      y = -rDy + u * (2 * rDy)
    } else if (f < 0.45) {
      // Top bar
      const u = (f - 0.38) / 0.07
      x = xDSpine + u * (xDBarEnd - xDSpine)
      y = rDy
    } else if (f < 0.93) {
      // Belly arc
      const u = (f - 0.45) / 0.48
      const theta = 0.5 * Math.PI - u * Math.PI
      x = xDBarEnd + rDx * Math.cos(theta)
      y = rDy * Math.sin(theta)
    } else {
      // Bottom bar
      const u = (f - 0.93) / 0.07
      x = xDBarEnd - u * (xDBarEnd - xDSpine)
      y = -rDy
    }

    const jitterX = (Math.random() - 0.5) * 0.08
    const jitterY = (Math.random() - 0.5) * 0.08
    const jitterZ = (Math.random() - 0.5) * 0.22
    positions[idx++] = x + jitterX
    positions[idx++] = y + jitterY
    positions[idx++] = jitterZ
  }

  // 3. Surrounding orbital halo ring
  while (idx < count * 3) {
    const angle = Math.random() * Math.PI * 2
    const r = 2.2 + (Math.random() - 0.5) * 0.25
    positions[idx++] = Math.cos(angle) * r
    positions[idx++] = Math.sin(angle) * r
    positions[idx++] = (Math.random() - 0.5) * 0.3
  }
}

// ---------------------------------------------------------------------------
// 3. Main ParticleBackground Component
// ---------------------------------------------------------------------------
export default function ParticleBackground({
  shape = 'portal',
  interactiveMouse = true,
  autoMorph = true,
  morphInterval = 5000,
  className = '',
  style = {},
}) {
  const containerRef = useRef(null)
  const targetShapeRef = useRef(shape)
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, worldX: 0, worldY: 0 })

  useEffect(() => {
    targetShapeRef.current = shape
  }, [shape])

  // Optional automatic morphing through shapes
  useEffect(() => {
    if (!autoMorph) return
    let currentIdx = SHAPES.indexOf(targetShapeRef.current)
    if (currentIdx === -1) currentIdx = 0

    const timer = setInterval(() => {
      currentIdx = (currentIdx + 1) % SHAPES.length
      targetShapeRef.current = SHAPES[currentIdx]
    }, morphInterval)

    return () => clearInterval(timer)
  }, [autoMorph, morphInterval])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 3600 : 7200

    // A. Scene & Camera Setup
    const scene = new THREE.Scene()
    // Reduced fog so particles remain vibrant and crisp across the full screen
    scene.fog = new THREE.FogExp2(0x040711, 0.022)

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / (container.clientHeight || 1),
      0.1,
      100
    )
    camera.position.set(0, 0.2, 5.8)

    // B. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
      alpha: true,
    })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x040711, 0) // transparent clear so subtle radial gradient shines
    container.appendChild(renderer.domElement)

    // C. Cosmic Starfield
    const starCount = isMobile ? 600 : 1300
    const starGeo = new THREE.BufferGeometry()
    const starPos = new Float32Array(starCount * 3)
    const starColors = new Float32Array(starCount * 3)

    for (let i = 0; i < starCount; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 48
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 38
      starPos[i * 3 + 2] = -4 - Math.random() * 26

      const tint = Math.random()
      if (tint > 0.65) {
        starColors[i * 3] = 0.35
        starColors[i * 3 + 1] = 0.95
        starColors[i * 3 + 2] = 1.0
      } else if (tint > 0.35) {
        starColors[i * 3] = 0.55
        starColors[i * 3 + 1] = 0.6
        starColors[i * 3 + 2] = 1.0
      } else {
        starColors[i * 3] = 0.9
        starColors[i * 3 + 1] = 0.92
        starColors[i * 3 + 2] = 1.0
      }
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3))
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3))

    const starMat = new THREE.PointsMaterial({
      size: 0.07,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const starField = new THREE.Points(starGeo, starMat)
    scene.add(starField)

    // C2. Ambient Cosmic Floating Dust Field (covers full screen viewport)
    const dustCount = isMobile ? 250 : 600
    const dustGeo = new THREE.BufferGeometry()
    const dustPos = new Float32Array(dustCount * 3)
    const dustVel = []
    const dustColors = new Float32Array(dustCount * 3)

    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 34
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 26
      dustPos[i * 3 + 2] = -8 + Math.random() * 12
      dustVel.push({
        vx: (Math.random() - 0.5) * 0.003,
        vy: 0.002 + Math.random() * 0.004,
      })

      const isCyan = Math.random() > 0.4
      dustColors[i * 3] = isCyan ? 0.3 : 0.75
      dustColors[i * 3 + 1] = isCyan ? 0.92 : 0.45
      dustColors[i * 3 + 2] = 1.0
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3))
    dustGeo.setAttribute('color', new THREE.BufferAttribute(dustColors, 3))

    const glowTexture = createGlowTexture()
    const dustMat = new THREE.PointsMaterial({
      size: 0.08,
      map: glowTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const dustField = new THREE.Points(dustGeo, dustMat)
    scene.add(dustField)

    // D. Morphing 3D Particle Manifold
    const particleGeometry = new THREE.BufferGeometry()
    const currentPositions = new Float32Array(particleCount * 3)
    const targetPositions = new Float32Array(particleCount * 3)
    const originalPositions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    const initialCoords = generatePositionsForShape(targetShapeRef.current, particleCount)
    for (let i = 0; i < particleCount * 3; i++) {
      currentPositions[i] = initialCoords[i]
      targetPositions[i] = initialCoords[i]
      originalPositions[i] = initialCoords[i]
    }

    const colorCyan = new THREE.Color(0x4de8ff)
    const colorBlue = new THREE.Color(0x3e7bfa)
    const colorViolet = new THREE.Color(0x9b5cff)

    for (let i = 0; i < particleCount; i++) {
      const yNorm = (initialCoords[i * 3 + 1] + 2.5) / 5.0
      const col = new THREE.Color()

      if (yNorm < 0.45) {
        col.copy(colorCyan).lerp(colorBlue, yNorm / 0.45)
      } else {
        col.copy(colorBlue).lerp(colorViolet, (yNorm - 0.45) / 0.55)
      }

      const jitter = (Math.random() - 0.5) * 0.15
      colors[i * 3] = Math.min(1, Math.max(0, col.r + jitter))
      colors[i * 3 + 1] = Math.min(1, Math.max(0, col.g + jitter))
      colors[i * 3 + 2] = Math.min(1, Math.max(0, col.b + jitter))
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3))
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.115 : 0.105,
      map: glowTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const getBaseOffsetX = () => {
      const w = container.clientWidth || window.innerWidth
      if (w >= 1200) return 0.95
      if (w >= 992) return 0.65
      return 0
    }
    let currentOffsetX = getBaseOffsetX()

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial)
    particleSystem.position.x = currentOffsetX
    scene.add(particleSystem)

    // E. Liquid Light Concentric Ripple Pool
    const rippleCount = 6
    const rippleGroup = new THREE.Group()
    rippleGroup.position.set(currentOffsetX, -2.2, 0)
    rippleGroup.rotation.x = Math.PI / 2

    const rippleRings = []

    for (let r = 0; r < rippleCount; r++) {
      const ringSegments = 64
      const ringGeo = new THREE.BufferGeometry()
      const ringPositions = new Float32Array((ringSegments + 1) * 3)

      for (let s = 0; s <= ringSegments; s++) {
        const theta = (s / ringSegments) * Math.PI * 2
        ringPositions[s * 3] = Math.cos(theta)
        ringPositions[s * 3 + 1] = Math.sin(theta)
        ringPositions[s * 3 + 2] = 0
      }
      ringGeo.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3))

      const ringMat = new THREE.LineBasicMaterial({
        color: r % 2 === 0 ? 0x4de8ff : 0x3e7bfa,
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })

      const line = new THREE.LineLoop(ringGeo, ringMat)
      rippleRings.push({
        mesh: line,
        phase: r / rippleCount,
        baseSpeed: 0.18,
      })
      rippleGroup.add(line)
    }
    scene.add(rippleGroup)

    // F. Dynamic Target Update
    let previousShape = targetShapeRef.current
    const updateTargetPositions = (newShape) => {
      const newCoords = generatePositionsForShape(newShape, particleCount)
      for (let i = 0; i < particleCount * 3; i++) {
        targetPositions[i] = newCoords[i]
        originalPositions[i] = newCoords[i]
      }
    }

    // G. Mouse Listeners
    const handleMouseMove = (e) => {
      if (!interactiveMouse) return
      const rect = container.getBoundingClientRect()
      const width = rect.width || window.innerWidth
      const height = rect.height || window.innerHeight
      const x = ((e.clientX - rect.left) / width) * 2 - 1
      const y = -(((e.clientY - rect.top) / height) * 2 - 1)
      mouseRef.current.targetX = x
      mouseRef.current.targetY = y
      mouseRef.current.worldX = x * 3.2
      mouseRef.current.worldY = y * 2.2
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // H. Responsive Resizing
    const handleResize = () => {
      if (!container) return
      const width = container.clientWidth || window.innerWidth
      const height = container.clientHeight || window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      currentOffsetX = getBaseOffsetX()
      particleSystem.position.x = currentOffsetX
      rippleGroup.position.x = currentOffsetX
    }

    const resizeObserver = new ResizeObserver(() => handleResize())
    resizeObserver.observe(container)
    window.addEventListener('resize', handleResize)

    // I. Main Animation Loop
    let animationFrameId
    const clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      if (targetShapeRef.current !== previousShape) {
        previousShape = targetShapeRef.current
        updateTargetPositions(previousShape)
      }

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06

      const isLogo = targetShapeRef.current === 'logo'
      if (isLogo) {
        particleSystem.rotation.y = Math.sin(elapsedTime * 0.45) * 0.22 + mouseRef.current.x * 0.4
      } else {
        particleSystem.rotation.y = elapsedTime * 0.12 + mouseRef.current.x * 0.45
      }
      particleSystem.rotation.x = Math.sin(elapsedTime * 0.08) * 0.08 - mouseRef.current.y * 0.35
      particleSystem.position.y = Math.sin(elapsedTime * 0.6) * 0.08
      particleSystem.position.x = currentOffsetX

      starField.rotation.y = elapsedTime * 0.02 + mouseRef.current.x * 0.08
      starField.rotation.x = -mouseRef.current.y * 0.05

      // Drifting ambient cosmic dust animation
      dustField.rotation.y = elapsedTime * 0.015 + mouseRef.current.x * 0.04
      dustField.rotation.x = Math.sin(elapsedTime * 0.05) * 0.03

      const dPos = dustGeo.attributes.position.array
      for (let d = 0; d < dustCount; d++) {
        dPos[d * 3] += dustVel[d].vx
        dPos[d * 3 + 1] += dustVel[d].vy
        if (dPos[d * 3 + 1] > 14) dPos[d * 3 + 1] = -14
        if (dPos[d * 3] > 18) dPos[d * 3] = -18
        if (dPos[d * 3] < -18) dPos[d * 3] = 18
      }
      dustGeo.attributes.position.needsUpdate = true

      const positions = particleGeometry.attributes.position.array
      const mouseWorldX = mouseRef.current.worldX
      const mouseWorldY = mouseRef.current.worldY
      const repelRadiusSq = 1.4 * 1.4
      const relMouseX = mouseWorldX - currentOffsetX

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        const tx = targetPositions[i3]
        const ty = targetPositions[i3 + 1]
        const tz = targetPositions[i3 + 2]

        // Morph towards target
        const morphSpeed = 0.065
        positions[i3] += (tx - positions[i3]) * morphSpeed
        positions[i3 + 1] += (ty - positions[i3 + 1]) * morphSpeed
        positions[i3 + 2] += (tz - positions[i3 + 2]) * morphSpeed

        // Interactive mouse repulsion
        if (interactiveMouse) {
          const dx = positions[i3] - relMouseX
          const dy = positions[i3 + 1] - mouseWorldY
          const distSq = dx * dx + dy * dy

          if (distSq < repelRadiusSq && distSq > 0.001) {
            const dist = Math.sqrt(distSq)
            const force = (1.4 - dist) * 0.07
            positions[i3] += (dx / dist) * force
            positions[i3 + 1] += (dy / dist) * force
            positions[i3 + 2] += (Math.random() - 0.5) * 0.02
          }
        }
      }

      particleGeometry.attributes.position.needsUpdate = true

      // Concentric pool ripples expansion & fading
      for (let r = 0; r < rippleRings.length; r++) {
        const ripple = rippleRings[r]
        ripple.phase = (ripple.phase + ripple.baseSpeed * 0.015) % 1.0
        const scale = 0.4 + ripple.phase * 3.4
        ripple.mesh.scale.set(scale, scale, 1)

        const mat = ripple.mesh.material
        const opacityCurve = Math.sin(ripple.phase * Math.PI)
        mat.opacity = opacityCurve * 0.55
      }

      renderer.render(scene, camera)
    }

    animate()

    // J. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      resizeObserver.disconnect()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
      particleGeometry.dispose()
      particleMaterial.dispose()
      starGeo.dispose()
      starMat.dispose()
      dustGeo.dispose()
      dustMat.dispose()
      glowTexture.dispose()
      rippleRings.forEach(r => {
        r.mesh.geometry.dispose()
        r.mesh.material.dispose()
      })
    }
  }, [interactiveMouse])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`particle-bg-root ${className}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -1,
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 35%, #0c1538 0%, #050816 65%, #020308 100%)',
        ...style,
      }}
    />
  )
}
