import '../../styles/base.less'
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
// 描边三角形
ctx.beginPath();
ctx.moveTo(125,125);
ctx.lineTo(125,45);
ctx.lineTo(45,125);
ctx.closePath();
ctx.stroke();