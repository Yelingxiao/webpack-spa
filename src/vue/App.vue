<template>
  <div class='bannerr'>
    <my-test></my-test>
  </div>
</template>

<script>
import myTest from './components/myTest';

export default {
  name: "wrap",
  components: {
    myTest
  }
};
</script>
<style lang="less" scoped>
@import '../../styles/base.less';
body {
  height: 100vh;
  background-color: red;
}
</style>


