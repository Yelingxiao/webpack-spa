// 尾递归
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}
console.time('尾调用')
factorial(10000, 1)
console.timeEnd('尾调用')

// 非尾递归
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.time('非尾调用')
factorial(10000)
console.timeEnd('非尾调用')