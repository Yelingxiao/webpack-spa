import scholar from './song'
import { tween, transform } from 'popmotion'
const { random, PI, cos, sin } = Math
const PI2 = PI * 2
const { renderer, stage, ticker, screen, view, Shader } = new PIXI.Application({
  width: window.screen.availWidth,
  height:window.screen.availHeight,
  antialias: true,
  transparent: true
})

const zone = screen.clone()
zone.pad(50)

document.body.appendChild(view)
// 禁止页面橡皮筋效果
document.addEventListener('touchmove', e => e.preventDefault(), false)

class Granular {
  constructor(colors, song) {
    this.colors = colors
    this.song = song
    this.pool = []
    this.dots = []
    this.i = 0
  }

  init() {
    for (let i = 0; i < 300; i++) {
      const dot = this.create()
      this.pool.push(dot)
      stage.addChild(dot)
    }
    this.add()
    this.play()
  }

  create() {
    const dot = new PIXI.Graphics()
    .beginFill(0xffffff)
    .drawCircle(0, 0, 3)
    .endFill()
    dot.tint = this.colors[(random() * this.colors.length) | 0]
    dot.position.set(screen.width * random(), screen.height * random())
    dot.info = {
      speed: 1 + random(),
      direction: random() * PI2,
      turnSpeed: (random() - 0.5) * 0.01
    }
    return dot
  }

  add() {
    ticker.add(() => {
      for (const dot of this.pool) {
        const { info } = dot
        info.direction += info.turnSpeed
        info.direction %= PI2
        dot.x -= cos(info.direction) * info.speed
        dot.y -= sin(info.direction) * info.speed
        dot.x < zone.left
          ? (dot.x = zone.right)
          : dot.x > zone.right
            ? (dot.x = zone.left)
            : 0
          
        dot.y < zone.top
          ? (dot.y = zone.bottom)
          : dot.y > zone.bottom
            ? (dot.y = zone.top)
            : 0
      }
    })
  }

  render(s) {
    const text = new PIXI.Text(s, {
      fill: 0x639bff,
      fontSize: screen.width < 900 ? 48 : 72,
      fontFamily : 'Arial',
      align : 'center'
    })
    const { width, height } = text
    const pixels = renderer.extract.pixels(text)
    const delta = 4
    
    for (let x = 0; x <= width; x += delta) {
      for (let y = 0; y <= height; y += delta) {
        if (!pixels[(x + y * width) * 4]) continue
        const dot = this.pool.pop() || this.create()
        this.dots.push(dot)
        stage.addChild(dot)
        
        tween({
          from: { x: dot.x, y: dot.y },
          to: {
             x: x + (screen.width - text.width) / 2, 
             y: y + (screen.height - text.height) / 2
            },
          duration: 1e3
        }).start({
          update: v => dot.position.copyFrom(v)
        })
      }
    }
  }

  play() {
    this.i === this.song.length ? (i = 0) : 0
    const time = this.i ? +this.song[this.i].time - this.song[this.i - 1].time : this.song[this.i].time
    setTimeout(() => {
      while (this.dots.length) this.pool.push(this.dots.pop())
      this.render(this.song[this.i++].txt)
      this.play()
    }, time)
  }
}

const colors = [0x0781f0, 0x84bae8, 0x47c6d6, 0x81d7e2]
new Granular(colors, scholar).init()