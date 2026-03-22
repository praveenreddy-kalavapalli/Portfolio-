import { useEffect, useRef } from 'react'

export default function CircuitBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let W
    let H
    let mx = 0
    let my = 0
    let animId
    let dots = []
    let lines = []
    let pulses = []
    let ripples = []
    let fDots = []
    let letters = []
    let digits = []
    let chips = []

    const CYAN = '0,245,255'
    const TEAL = '0,201,167'
    const GREEN = '57,255,20'
    const PURPLE = '176,68,255'
    const COLS = [CYAN, TEAL, GREEN, PURPLE]
    const STEP = 48
    const LETTERS_SRC = 'PRAVEEN'.split('')

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    function buildChips(cols, rows, ox, oy) {
      chips = []
      const count = Math.max(10, Math.floor((W * H) / 115000))

      for (let i = 0; i < count; i++) {
        const chipCols = 2 + Math.floor(Math.random() * 2)
        const chipRows = 1 + Math.floor(Math.random() * 2)
        const c = 1 + Math.floor(Math.random() * Math.max(2, cols - chipCols - 2))
        const r = 1 + Math.floor(Math.random() * Math.max(2, rows - chipRows - 2))

        chips.push({
          x: ox + c * STEP - 8,
          y: oy + r * STEP - 8,
          w: chipCols * STEP * 0.94,
          h: chipRows * STEP * 0.88,
          alpha: 0.08 + Math.random() * 0.09,
        })
      }
    }

    function build() {
      dots = []
      lines = []
      pulses = []

      const cols = Math.round(W / STEP) + 1
      const rows = Math.round(H / STEP) + 1
      const ox = (W - (cols - 1) * STEP) / 2
      const oy = (H - (rows - 1) * STEP) / 2

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({
            x: ox + c * STEP,
            y: oy + r * STEP,
            lit: Math.random() < 0.76,
            bri: Math.random(),
            spd: 0.4 + Math.random() * 0.8,
          })
        }
      }

      const idx = (r, c) => r * cols + c

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const d = dots[idx(r, c)]
          if (!d.lit) continue

          if (c + 1 < cols && dots[idx(r, c + 1)]?.lit && Math.random() < 0.88) {
            lines.push({
              x1: d.x,
              y1: d.y,
              x2: dots[idx(r, c + 1)].x,
              y2: dots[idx(r, c + 1)].y,
              rgb: Math.random() < 0.7 ? CYAN : TEAL,
              a: 0.12 + Math.random() * 0.15,
            })
          }

          if (r + 1 < rows && dots[idx(r + 1, c)]?.lit && Math.random() < 0.88) {
            lines.push({
              x1: d.x,
              y1: d.y,
              x2: dots[idx(r + 1, c)].x,
              y2: dots[idx(r + 1, c)].y,
              rgb: Math.random() < 0.7 ? CYAN : TEAL,
              a: 0.12 + Math.random() * 0.15,
            })
          }
        }
      }

      buildChips(cols, rows, ox, oy)

      for (let i = 0; i < 72; i++) spawnPulse()
    }

    function buildFloatDots() {
      fDots = []
      const count = Math.floor(W * H / 5200)

      for (let i = 0; i < count; i++) {
        fDots.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: 1.8 + Math.random() * 2.4,
          a: 0.48 + Math.random() * 0.42,
        })
      }
    }

    function buildDigits() {
      digits = []
      const count = Math.floor(W * H / 6800)

      for (let i = 0; i < count; i++) {
        digits.push({
          x: Math.random() * W,
          y: Math.random() * H,
          char: Math.random() > 0.5 ? '1' : '0',
          size: 10 + Math.random() * 10,
          alpha: 0.12 + Math.random() * 0.24,
          rgb: COLS[Math.floor(Math.random() * 3)],
        })
      }
    }

    function spawnPulse() {
      if (!lines.length) return

      const ln = lines[Math.floor(Math.random() * lines.length)]
      const rev = Math.random() < 0.5

      pulses.push({
        x: rev ? ln.x2 : ln.x1,
        y: rev ? ln.y2 : ln.y1,
        tx: rev ? ln.x1 : ln.x2,
        ty: rev ? ln.y1 : ln.y2,
        rgb: COLS[Math.floor(Math.random() * COLS.length)],
        spd: 0.012 + Math.random() * 0.025,
        size: 2 + Math.random() * 2.5,
        trail: [],
        prog: 0,
      })
    }

    function buildShards(ch, size) {
      const off = document.createElement('canvas')
      off.width = size
      off.height = size
      const oc = off.getContext('2d')
      oc.fillStyle = '#fff'
      oc.font = `bold ${size * 0.9}px monospace`
      oc.textAlign = 'center'
      oc.textBaseline = 'middle'
      oc.fillText(ch, size / 2, size / 2)
      const data = oc.getImageData(0, 0, size, size).data
      const shards = []

      for (let py = 0; py < size; py += 3) {
        for (let px = 0; px < size; px += 3) {
          if (data[(py * size + px) * 4 + 3] > 80) {
            shards.push({
              ox: px - size / 2,
              oy: py - size / 2,
              vx: (Math.random() - 0.5) * 3,
              vy: (Math.random() - 0.5) * 3 + 0.5,
              r: 1 + Math.random(),
            })
          }
        }
      }

      return shards
    }

    function spawnLetter() {
      const ch = LETTERS_SRC[Math.floor(Math.random() * LETTERS_SRC.length)]
      const size = 16 + Math.floor(Math.random() * 22)

      letters.push({
        ch,
        size,
        x: 40 + Math.random() * (W - 80),
        y: 40 + Math.random() * (H - 80),
        shards: buildShards(ch, size),
        phase: 0,
        alpha: 0,
        timer: 0,
        holdTime: 0.8 + Math.random() * 1.2,
        fadeIn: 0.4 + Math.random() * 0.4,
        col: COLS[Math.floor(Math.random() * COLS.length)],
      })
    }

    function handleClick(event) {
      ripples.push({ x: event.clientX, y: event.clientY, r: 0, a: 0.7, spd: 2.5, maxR: 22 })
      for (let i = 0; i < 8; i++) spawnPulse()
    }

    function handleMouseMove(event) {
      mx = event.clientX
      my = event.clientY
    }

    function handleResize() {
      resize()
      build()
      buildFloatDots()
      buildDigits()
    }

    let t = 0
    function draw() {
      animId = requestAnimationFrame(draw)
      t += 0.016

      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#070d17'
      ctx.fillRect(0, 0, W, H)

      const connectDist = 190
      for (const fd of fDots) {
        fd.x += fd.vx
        fd.y += fd.vy
        if (fd.x < 0) fd.x = W
        if (fd.x > W) fd.x = 0
        if (fd.y < 0) fd.y = H
        if (fd.y > H) fd.y = 0
      }

      for (let i = 0; i < fDots.length; i++) {
        for (let j = i + 1; j < fDots.length; j++) {
          const dx = fDots[i].x - fDots[j].x
          const dy = fDots[i].y - fDots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectDist) {
            ctx.beginPath()
            ctx.moveTo(fDots[i].x, fDots[i].y)
            ctx.lineTo(fDots[j].x, fDots[j].y)
            ctx.strokeStyle = `rgba(0,200,230,${(1 - dist / connectDist) * 0.42})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      for (const fd of fDots) {
        ctx.beginPath()
        ctx.arc(fd.x, fd.y, fd.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,220,255,${fd.a})`
        ctx.shadowColor = '#00dcff'
        ctx.shadowBlur = 10
        ctx.fill()
        ctx.shadowBlur = 0
      }

      for (const chip of chips) {
        ctx.fillStyle = `rgba(18, 160, 108, ${chip.alpha})`
        ctx.strokeStyle = `rgba(18, 160, 108, ${chip.alpha + 0.06})`
        ctx.lineWidth = 1
        ctx.fillRect(chip.x, chip.y, chip.w, chip.h)
        ctx.strokeRect(chip.x, chip.y, chip.w, chip.h)

        for (let i = 1; i <= 4; i++) {
          const px = chip.x + (chip.w / 5) * i
          ctx.beginPath()
          ctx.moveTo(px, chip.y)
          ctx.lineTo(px, chip.y - 14)
          ctx.moveTo(px, chip.y + chip.h)
          ctx.lineTo(px, chip.y + chip.h + 14)
          ctx.strokeStyle = `rgba(18, 160, 108, ${chip.alpha + 0.04})`
          ctx.stroke()
        }
      }

      for (const ln of lines) {
        ctx.beginPath()
        ctx.moveTo(ln.x1, ln.y1)
        ctx.lineTo(ln.x2, ln.y2)
        ctx.strokeStyle = `rgba(${ln.rgb},${ln.a})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      for (const ln of lines) {
        const cx = (ln.x1 + ln.x2) / 2
        const cy = (ln.y1 + ln.y2) / 2
        const d = Math.hypot(cx - mx, cy - my)

        if (d < 120) {
          ctx.beginPath()
          ctx.moveTo(ln.x1, ln.y1)
          ctx.lineTo(ln.x2, ln.y2)
          ctx.strokeStyle = `rgba(0,245,255,${(1 - d / 120) * 0.35})`
          ctx.lineWidth = 2
          ctx.shadowColor = '#00f5ff'
          ctx.shadowBlur = 8
          ctx.stroke()
          ctx.shadowBlur = 0
        }
      }

      for (const d of dots) {
        if (!d.lit) continue
        d.bri = 0.5 + 0.5 * Math.sin(t * d.spd + d.x * 0.04 + d.y * 0.03)
        const md = Math.hypot(d.x - mx, d.y - my)
        const boost = md < 90 ? (1 - md / 90) * 0.5 : 0

        ctx.beginPath()
        ctx.arc(d.x, d.y, 2.15, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,245,255,${0.16 + d.bri * 0.55 + boost})`
        if (d.bri > 0.82 || boost > 0.25) {
          ctx.shadowColor = '#00f5ff'
          ctx.shadowBlur = 10
        }
        ctx.fill()
        ctx.shadowBlur = 0
      }

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]
        p.prog += p.spd
        p.trail.push({ x: p.x, y: p.y })
        if (p.trail.length > 18) p.trail.shift()
        p.x += (p.tx - p.x) * p.spd * 2.2
        p.y += (p.ty - p.y) * p.spd * 2.2

        for (let j = 0; j < p.trail.length; j++) {
          const ratio = j / p.trail.length
          ctx.beginPath()
          ctx.arc(p.trail[j].x, p.trail[j].y, p.size * ratio * 0.55, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${p.rgb},${ratio * 0.7})`
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.rgb},1)`
        ctx.shadowColor = `rgb(${p.rgb})`
        ctx.shadowBlur = 20
        ctx.fill()
        ctx.shadowBlur = 0

        if (p.prog >= 1) {
          pulses.splice(i, 1)
          if (Math.random() < 0.94) spawnPulse()
        }
      }

      while (pulses.length < 72) spawnPulse()

      for (const digit of digits) {
        ctx.fillStyle = `rgba(${digit.rgb},${digit.alpha})`
        ctx.font = `${digit.size}px monospace`
        ctx.fillText(digit.char, digit.x, digit.y)
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i]
        if (r.r < r.maxR) r.r += r.spd
        r.a -= 0.04
        if (r.a <= 0) {
          ripples.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(0,245,255,${r.a})`
        ctx.lineWidth = 1.2
        ctx.shadowColor = '#00f5ff'
        ctx.shadowBlur = 6
        ctx.stroke()
        ctx.shadowBlur = 0
      }

      if (Math.random() < 0.012 && letters.length < 8) spawnLetter()

      for (let i = letters.length - 1; i >= 0; i--) {
        const letter = letters[i]
        letter.timer += 0.016

        if (letter.phase === 0) {
          letter.alpha = Math.min(1, letter.timer / letter.fadeIn)
          if (letter.timer >= letter.fadeIn) {
            letter.phase = 1
            letter.timer = 0
          }
        } else if (letter.phase === 1) {
          letter.alpha = 1
          if (letter.timer >= letter.holdTime) {
            letter.phase = 2
            letter.timer = 0
          }
        } else {
          letter.alpha -= 0.018
          if (letter.alpha <= 0) {
            letters.splice(i, 1)
            continue
          }
        }

        const dissolveT = letter.phase === 2 ? Math.min(1, letter.timer / 1.2) : 0
        for (const shard of letter.shards) {
          const sx = letter.x + shard.ox + (letter.phase === 2 ? shard.vx * dissolveT * 18 : 0)
          const sy = letter.y + shard.oy + (letter.phase === 2 ? shard.vy * dissolveT * 18 : 0)
          const sa = letter.alpha * (letter.phase === 2 ? 1 - dissolveT * dissolveT : 1)
          if (sa <= 0) continue

          ctx.beginPath()
          ctx.arc(sx, sy, shard.r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${letter.col},${sa * 0.55})`
          ctx.fill()
        }
      }

      const vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.1, W / 2, H / 2, H * 0.95)
      vig.addColorStop(0, 'rgba(0,0,0,0)')
      vig.addColorStop(1, 'rgba(5,8,18,0.82)')
      ctx.fillStyle = vig
      ctx.fillRect(0, 0, W, H)
    }

    resize()
    build()
    buildFloatDots()
    buildDigits()
    draw()

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleClick)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        display: 'block',
        background: '#0a0f1a',
      }}
    />
  )
}
