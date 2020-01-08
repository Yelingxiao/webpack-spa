/* eslint-disable camelcase */
var drawing = document.getElementById('canvas') // 获取canvas元素
drawing.width = '500' // 设置画布大小
drawing.height = '500'
if (drawing.getContext) { // 获取绘图上下文
  var content = drawing.getContext('2d')
  var radian = 0 // 设置初始弧度
  var radian_add = Math.PI / 180 // 设置弧度增量
  content.beginPath() // 开始绘图
  content.translate(250, 250) // 设置绘图原点
  content.moveTo(getX(radian), getY(radian)) // 移动绘图游标至原点
  while (radian <= (Math.PI * 2)) { // 每增加一次弧度，绘制一条线
    radian += radian_add
    X = getX(radian)
    Y = getY(radian)
    content.lineTo(X, Y)
  }
  content.strokeStyle = 'red' // 设置描边样式
  content.stroke() // 对路径描边
}
function getX (t) { // 获取心型线的X坐标
  return 15 * (16 * Math.pow(Math.sin(t), 3))
}

function getY (t) { // 获取心型线的Y坐标
  return -15 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))
}
