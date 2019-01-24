<template>
<div>
  <div class="card" :style="{backgroundColor: this.cardObj.color}" @click="actclick"> {{ this.cardObj.id }}</div>
</div>
</template>
<script>
export default {
  name: "card",
  props: {
    cardObj: Object
  },
  methods: {
    actclick() {
      this.$emit('actclick',this.cardObj.id);
    }
  }
}
</script>
<style lang="less" scoped>
.card {
  width: 120px;
  height: 300px;
  margin-left: 20px;
  margin-top: 40px;
  border: 1px solid #000;
  border-radius: 15px;
  float: left;
  color: #000;
  font-size: 60px;
  background-color: antiquewhite;
  float: left;
}
</style>


