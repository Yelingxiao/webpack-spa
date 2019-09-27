import SVG from 'svg.js'

const polygons = [
  [300, 300, 180, 140, 420, 140],
  [173, 193, 105, 388, 449, 349],
  [245, 147, 191, 260, 75, 257, 155, 364, 244, 343, 304, 451, 364, 333, 286, 265],
  [243, 142, 107, 493, 276, 396, 384, 503, 145, 245, 387, 281, 166, 381],
  [50, 0, 60, 40, 100, 50, 60, 60, 50, 100, 40, 60, 0, 50, 40, 40]
]
const points = []
const draw = SVG('svg').size(600, 600)

let index = 0

draw.polygon(polygons[index]).fill('#fc3')

document.addEventListener('pointerdown', ev => {
  if (ev.button !== 2) {
    draw
      .circle(8)
      .attr({ cx: ev.pageX, cy: ev.pageY })
      .stroke({ color: '#f3c', width: 2 })
      .fill('#fff')
    const inside = wind([ev.pageX, ev.pageY], polygons[index])
    draw
      .text(inside ? 'in' : 'out')
      .move(ev.pageX, ev.pageY)
      .stroke('#1a9f60')
    return
  }
  index === polygons.length - 1 ? index = 0 : index++
  draw.clear()
  draw.polygon(polygons[index]).fill('#fc3')
})

document.addEventListener('contextmenu', ev => ev.preventDefault())

/**
 * @param {Array<number>} point - 点坐标: [x, y]
 * @param {Array<number>} points - 多边形坐标点: [x1,y1, x2,y2, x3,y3...]
 */
function wind(point, points) {
  let wn = 0
  for (let i = 0; i < points.length; i += 2) {
    const p1 = [points[i], points[i + 1]]
    const p2 = [points[i + 2] || points[0], points[i + 3] || points[1]]
    if (point[1] >= p1[1]) {
      point[1] < p2[1] && isLeft(point, p1, p2) > 0 && wn++
    } else if (point[1] >= p2[1] && isLeft(point, p1, p2) < 0) wn--
    console.log(wn)
  }
  return wn
}
/**
 * @param {Array<number>} p - 点坐标: [x, y]
 * @param {Array<number>} p1 - 线段起点: [x, y]
 * @param {Array<number>} p2 - 线段终点: [x, y]
 * @return {number}
 * 0: p 在线段上
 * <0: p 在线段右侧
 * >0: p 在线段左侧
 */
function isLeft(p, p1, p2) {
  return (p2[0] - p1[0]) * (p[1] - p1[1]) - (p[0] - p1[0]) * (p2[1] - p1[1])
}