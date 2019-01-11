<template>
  <section>
    <i class="ball" v-for="ball in balls" :style="{top: `${ball.y}px`, left: `${ball.x}px`}" :key='ball.id'></i>
  </section>
</template>

<script>
export default {
  name: "myTest",
  data() {
    return {
      balls: [
    	  {x: 100, y: 100, speed: 3, rotation: .44},
        {x: 300, y: 260, speed: 0, rotation: 0}
      ]
    }
  },
  computed: {
  	distance() {
      const [a, b] = this.balls
    	return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)
    }
  },
  methods: {
  	collide() {
      let speed = this.balls[0].speed
      let angle = Math.atan2(this.balls[1].y - this.balls[0].y, this.balls[1].x - this.balls[0].x)
      let rotation = Math.PI / 2 + angle
      let v1 = speed * Math.sin(this.balls[0].rotation - angle)
      let v2 = speed * Math.cos(this.balls[0].rotation - angle)
      this.balls[0].rotation = rotation
      this.balls[1].rotation = angle
      this.balls[0].speed = v1
      this.balls[1].speed = v2
    },
    
  	update() {
    	const balls = this.balls
      balls.forEach(ball => {
      	ball.x += Math.cos(ball.rotation) * ball.speed
        ball.y += Math.sin(ball.rotation) * ball.speed
      })
      
      this.distance < 80 && this.collide()          	
      requestAnimationFrame(this.update)
    }
  },
  
  mounted() {
  	this.update()
  }
};
</script>
<style lang="less" scoped>
  html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.app {
  position: relative;
}

.ball {
  @size: 5rem;
  width: @size;
  height: @size;
  border-radius: @size / 2;
  display: block;
  background-color: #fc3;
  transform: translate(-50%, -50%);
  position: absolute;
}
</style>
