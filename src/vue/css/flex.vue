<template>
  <ul class="g-nav">
    <li>导航A</li>
    <li>导航B</li>
    <li>导航C</li>
    <li class="g-login">导航D</li>
    <li>登陆</li>
  </ul>
</template>
<script>
export default {
  name: "flex"
};
</script>
<style lang="less" scoped>
.g-nav {
    height: 100px;
    display: flex;
    // padding: 0 50px;
    margin-bottom: 100px;
    box-sizing: border-box;
    background: #037d65;
}

li {
    width: 100px;
    line-height: 100px;
    font-size: 18px;
    color: #fff;
    // margin-left: auto;
}

.g-login {
    margin-left: auto;
}
</style>