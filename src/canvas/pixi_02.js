const app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb, view: document.querySelector('canvas') })

const container = new PIXI.Container()
app.stage.addChild(container)
const texture = PIXI.Texture.fromImage(require('../../images/bunny.png'))

for (let i = 0; i < 30; i++) {
  const bunny = new PIXI.Sprite(texture)
  bunny.anchor.set(0.5)
  bunny.x = (i % 5) * 40
  bunny.y = ~~(i / 5) * 40
  container.addChild(bunny)
}
container.x = (app.screen.width - container.width) / 2
container.y = (app.screen.height - container.height) / 2

container.pivot.x = container.width / 2
container.pivot.y = container.height / 2

app.ticker.add(function (delta) {
  // rotate the container!
  // use delta to create frame-independent transform
  container.rotation += 0.01 * delta
})
