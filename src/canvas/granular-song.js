import { tween } from 'popmotion'
const { random, PI, cos, sin } = Math
const PI2 = PI * 2
const pool = []
const colors = [0x0781f0, 0x84bae8, 0x47c6d6, 0x81d7e2]
const app = new PIXI.Application({
  width: window.screen.availWidth,
  height:window.screen.availHeight,
  antialias: true,
  backgroundColor: 0xd9e6f3
})
const { renderer, stage, ticker, screen, view, Shader } = app

// 背景颜色渐变
// PIXI.Shader.from('0x97ABFF', '0x123597')

document.body.appendChild(view)
// 禁止页面橡皮筋效果
document.addEventListener('touchmove', (e) => {
  e.preventDefault()
}, false)