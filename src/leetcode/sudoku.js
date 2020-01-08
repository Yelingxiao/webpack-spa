/**
 * 数独算法
 */

class Sudoku {
  constructor ({
    display = false,
    sudokuMap = []
  }) {
    // 是否展示算法过程
    this.display = display
    // 原始数独数组
    this.sudokuMap = sudokuMap
    // 回溯数组
    this.stacks = []
    // 是否已经解答完成
    this.resolved = false
    // 所有的循环次数统计
    this.allTimes = 0
    this.dataMap = new Map()
    console.time('init:time')
    this.init()
    console.timeEnd('init:time')
    this.testRuleTimes = {
      ok: 0,
      fail: 0
    }
    this.currentOrder = 0
  }

  /**
   * 初始化确定每个可填写的格子可以的填入的数值，做成一个MAP
   */
  init () {
    const exsitTimes = {}
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.allTimes++
        const node = this.sudokuMap[i][j]
        if (node === 0) {
          this.testMayFill(i, j)
        } else {
          // 记录每个数字出现的次数
          exsitTimes[node] ? exsitTimes[node]++ : exsitTimes[node] = 1
        }
      }
    }
  }
}
