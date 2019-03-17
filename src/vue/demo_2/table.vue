<template>
<div>
  <div class="tr-table" v-for="(item, index) in nav" :key="index">
    <div class="table" v-for="(describe, index) in item" :key="index" :class="{border : !describe.border}">
      <div class="describe">{{ describe.id }}</div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      nav: [
        [{id: 0, border: true},
          {id: 1, border: true},
          {id: 2, border: true},
          {id: 3, border: true},
          {id: 4, border: true},
          {id: 5, border: true},
          {id: 6, border: true},
          {id: 7, border: false}],
        [{id: 0, border: true},
          {id: 1, border: true},
          {id: 2, border: true},
          {id: 3, border: false},
          {id: 4, border: true},
          {id: 5, border: true},
          {id: 6, border: true},
          {id: 7, border: false}],
        [{id: 0, border: true},
          {id: 1, border: false},
          {id: 2, border: true},
          {id: 3, border: true},
          {id: 4, border: true},
          {id: 5, border: true},
          {id: 6, border: true},
          {id: 7, border: false}],
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.table {
  width: 50px;
  height: 50px;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  display: inline-block;
  .describe {
    color: #000;
    width: 100%;
    text-align: center;
  }
  &.border {
    border-top: 0px;
  }
}
</style>
