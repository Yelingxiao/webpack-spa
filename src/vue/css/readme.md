// https://juejin.im/post/5ce60afde51d455ca04361b1#heading-12


- 块格式化上下文中margin-top 和 margin-bottom 的值如果是 auto，则他们的值都为 0
- flex 格式化上下文中，在通过 justify-content 和 align-self 进行对齐之前，任何正处于空闲的空间都会分配到该方向的自动 margin 中去
- 单个方向上的自动 margin 也非常有用，它的计算值为该方向上的剩余空间

- 使用了自动 margin 的 flex 子项目，它们父元素设置的 justify-content 已经它们本身的 align-self 将不再生效