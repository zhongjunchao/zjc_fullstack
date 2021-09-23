<template>
  <div class="img-verify">
    <canvas ref="verify" v-bind:width="width" :height="height" @click="handleDraw"></canvas>
  </div>
</template>

<script>
import { reactive, ref, toRefs, onMounted } from 'vue'
export default {
  setup() {
    const verify = ref(null)
    const state = reactive({
      width: 120,
      height: 40,
      pool: 'ABCDEFGHIGKLMNOPQRSTUVWXYZ1234567890',
      imgCode: ''
    })

    // 绘制图片
    const draw = () => {
      // 拿到画布
      const ctx = verify.value.getContext('2d')
      // 填充背景色
      ctx.fillStyle = randomColor(180, 230)
      // 填充的位置
      ctx.fillRect(0, 0, state.width, state.height)
      // 定义内容
      let imgCode = ''
      // 随机生成字符串
      for (let i = 0; i < 4; i++) {
        const text = state.pool[randomNum(0, state.pool.length)]
        imgCode += text
        // 随机字体大小
        const fontSize = randomNum(18, 40)
        // 字体随机旋转角度
        const deg = randomNum(-30, 30)
        ctx.font = fontSize +  'px Simhei'
        ctx.textBaseline = 'top'
        ctx.fillStyle = randomColor(80, 150)
        ctx.save() // 保存，入栈
        ctx.translate(30 * i + 15, 15)
        ctx.rotate((deg * Math.PI) / 180)
        // 文字绘制到画布上
        ctx.fillText(text, -10, -15)
        ctx.restore() // 恢复原来的值，出栈
      }
      // 随机生成5条干扰线条
      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        ctx.moveTo(randomNum(0, state.width), randomNum(0, state.height))
        ctx.lineTo(randomNum(0, state.width), randomNum(0, state.height))
        ctx.strokeStyle = randomColor(180, 230)
        ctx.closePath()
        ctx.stroke()
      }
      // 随机产生40个干扰的小点
      for (let i = 0; i < 40; i++) {
        ctx.beginPath()
        ctx.arc(randomNum(0, state.width), randomNum(0, state.height), 1, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fillStyle = randomColor(150, 200)
        ctx.fill()
      }
      return imgCode
    }

    onMounted(() => {
      state.imgCode = draw()
    })
    // 随机数
    const randomNum = (min, max) => {
      return parseInt(Math.random() * (max - min) + min)
    }
    // 生成随即色
    const randomColor = (min, max) => {
      const r = randomNum(min, max)
      const g = randomNum(min, max)
      const b = randomNum(min, max)
      return `rgb(${r}, ${g}, ${b})`
    }

    const handleDraw = () => {
      state.imgCode = draw()
    }

    return {
      ...toRefs(state),
      verify,
      handleDraw
    }
  }
}
</script>

<style>

</style>