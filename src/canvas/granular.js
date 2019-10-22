import { tween } from 'popmotion'
const { random, PI, cos, sin } = Math,
  PI2 = PI * 2,
  pool = [],
  colors = [0x0781f0, 0x84bae8, 0x47c6d6, 0x81d7e2],
  { renderer, stage, ticker, screen, view } = new PIXI.Application({
    antialias: true,
    backgroundColor: 0xd9e6f3
  }),
  zone = screen.clone()

zone.pad(500)
document.body.appendChild(view)

const dots = []

function render(s) {
  const text = new PIXI.Text(s, {
    fill: 0x639bff,
    fontSize: 72
  }),
    { width, height } = text,
    pixels = renderer.extract.pixels(text),
    delta = 4

  for (let x = 0; x <= width; x += delta) {
    for (let y = 0; y <= height; y += delta) {
      if (!pixels[(x + y * width) * 4]) continue
      const dot = pool.pop() || create()
      dots.push(dot)
      stage.addChild(dot)

      tween({
        from: { x: dot.x, y: dot.y },
        to: { x, y },
        duration: 1e3
      }).start({
        update: v => dot.position.copyFrom(v)
      })
    }
  }
}

const list = ['Hello', 'World', '你好', '世界']
let i = 0
setInterval(() => {
  while (dots.length) pool.push(dots.pop())
  i === list.length ? (i = 0) : 0
  render(list[i++])
}, 4e3)

//throw(1)

for (let i = 0; i < 300; i++) {
  const dot = create()
  pool.push(dot)
  stage.addChild(dot)
}

function create() {
  const dot = new PIXI.Graphics()
    .beginFill(0xffffff)
    .drawCircle(0, 0, 2)
    .endFill()

  dot.tint = colors[(random() * colors.length) | 0]
  dot.position.set(screen.width * random(), screen.height * random())

  dot.info = {
    speed: 1 + random(),
    direction: random() * PI2,
    turnSpeed: (random() - 0.5) * 0.01
  }

  return dot
}

ticker.add(() => {
  for (const dot of pool) {
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
