const app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb,view:document.querySelector('canvas')});
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
var sprite = PIXI.Sprite.fromImage(require('../../images/bunny.png'));
sprite.anchor.set(0.5);
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;
sprite.interactive = true;
sprite.buttonMode = true;
sprite.on('pointerdown', onClick);
app.stage.addChild(sprite);
function onClick () {
    sprite.scale.x *= 1.25;
    sprite.scale.y *= 1.25;
}