<template>
  <div class="wrap">
    <div class="button" @click="addCard">添加组件</div>
    <p>当前点击的卡片ID为{{ this.actid }}, 上次点击的卡片ID为{{ this.lastCard }}, 俩次id之和为 {{ this.actid + this.lastCard }}</p>
    <card v-for="item in this.cards" :key="item.id" :cardObj="{ id: item.id, color: item.color }" @actclick="actClick"></card>
  </div>
</template>

<script>
import card from '../components/card';
export default {
  name: "demo_1",
  components: {
    card
  },
  data() {
    return {
      id: 0,
      cards: [],
      lastCard: null,
      actid: null
    }
  },
  methods: {
    addCard() {
      this.cards.push({
        id: this.id++,
        color: 'antiquewhite'
      })
    },
    actClick(id) {
      this.lastCard = this.actid;
      this.actid = id;
      this.cards.forEach(item => item.color = 'antiquewhite');
      this.lastCard !== null && (this.cards[this.lastCard].color = 'blue');
      this.cards[id].color = 'red';
    }
  }
};
</script>
<style lang="less" scoped>
@import '../../../styles/base.less';
.wrap {
  width: 80%;
  margin: auto;
}
.button {
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  margin: auto;
  width: 80px;
  height: 25px;
  background-color: #ccc;
  border-radius: 15px;
  text-align: center;
  line-height: 2
}
p {
  text-align: center;
  padding-top: 90px;
  font-weight: bold;
  font-size: 32px;
}
</style>


