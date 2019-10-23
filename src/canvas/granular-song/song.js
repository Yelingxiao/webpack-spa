function parseLyric(text) {
  //先按行分割
  const lyric = text.split('\n')
  //新建一个数组存放最后结果
  let lrc = []
  const _l = lyric.length
  for (let i = 0; i < _l; i++) {
    //正则匹配播放时间返回一个数组
    const time = lyric[i].match(/[(\d+\d+\d)?\)]/g)
    let txt = lyric[i].match(/](.*)/)

    // 过滤掉空行等非歌词正文部分
    if (txt) {
      txt = txt[1]
      let min = Number(time[0] + time[1])
      let sec = Number(time[2] + time[3])
      let ms = Number(time[4] + time[5])
      // //换算时间，保留两位小数
      time = (min * 60 + sec) * 1e3 + ms * 10
      
      //把时间和对应的歌词保存到数组
      lrc.push({
        time,
        txt
      })
    }
  }
  // //重新按时间排序
  lrc.sort((a, b) => a.time - b.time)
  return lrc
}

const text = `
  [00:02.03]十年
  [00:04.77]演唱：陈奕迅
  [00:06.18]
  [00:15.42]如果那两个字没有颤抖
  [00:19.68]我不会发现 我难受
  [00:23.09]怎么说出口
  [00:26.58]也不过是分手
  [00:31.18]如果对于明天没有要求
  [00:35.24]牵牵手就像旅游
  [00:38.30]成千上万个门口
  [00:42.22]总有一个人要先走
  [00:47.81]怀抱既然不能逗留
  [00:51.23]何不在离开的时候
  [00:54.11]一边享受 一边泪流
  [01:01.34]十年之前
  [01:03.35]我不认识你 你不属于我
  [01:07.01]我们还是一样
  [01:09.54]陪在一个陌生人左右
  [01:13.48]走过渐渐熟悉的街头
  [01:16.81]十年之后
  [01:18.82]我们是朋友 还可以问候
  [01:22.54]只是那种温柔
  [01:25.08]再也找不到拥抱的理由
  [01:28.89]情人最后难免沦为朋友
  [01:35.50]
  [01:57.73]怀抱既然不能逗留
  [02:00.87]何不在离开的时候
  [02:03.81]一边享受 一边泪流
  [02:11.03]十年之前
  [02:12.91]我不认识你 你不属于我
  [02:16.73]我们还是一样
  [02:19.30]陪在一个陌生人左右
  [02:23.08]走过渐渐熟悉的街头
  [02:26.39]十年之后
  [02:28.50]我们是朋友 还可以问候
  [02:32.13]只是那种温柔
  [02:34.67]再也找不到拥抱的理由
  [02:38.51]情人最后难免沦为朋友
  [02:48.59]直到和你做了多年朋友
  [02:52.80]才明白我的眼泪
  [02:55.65]不是为你而流
  [02:59.46]也为别人而流
  [03:03.39]`

export default parseLyric(text)