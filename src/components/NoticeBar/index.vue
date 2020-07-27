<template>
  <transition name="fade">
    <!--主要内容-->
    <div class="noticebar" :style="{backgroundColor:data.backround}">
      <div style="margin-left:5px"></div>
      <img
        v-if="data.icon"
        :style="{height:data.iconSize?data.iconSize:'100px',width:data.iconSize?data.iconSize:'100px'}"
        :src="data.icon"
        alt
      />
      <div style="margin-right:5px"></div>
      <div ref="back" class="back">
        <span
          ref="text"
          :style="{fontSize:data.size?data.size:'30px',color:data.color?data.color:'#f60'}"
          class="text"
        >{{ data.text?data.text:'通知内容' }}</span>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    options: {
      type: Object,
      default() {
        return {
          text: '默认'
        }
      }
    }
  },
  data() {
    return {
      speed: this.options.speed, // 速度（单位px/s）
      backWidth: '', // 父级宽度
      backHeight: '', // 父级高度
      wordLength: '', // 文本长度
      state: 1,
      firstAnimationTime: '', // 状态一动画效果
      secondAnimationTime: '', // 状态二动画效果
      data: this.options
    }
  },
  methods: {
    // 获取数据
    getData() {
      let style = document.styleSheets[0]
      let text = this.$refs.text
      let back = this.$refs.back
      this.backWidth = back.offsetWidth
      this.backHeight = back.offsetHeight
      text.style.lineHeight = this.backHeight + 'px'
      this.wordLength = text.offsetWidth
      this.ComputationTime() // 计算时间
      style.insertRule(
        `@keyframes firstAnimation {0%   {left:0px;}100%  {left:-${this.wordLength}px;}}`
      )
      style.insertRule(
        `@keyframes secondAnimation {0%   {left:${this.backWidth}px;}100%  {left:-${this.wordLength}px;}}`
      )
      setTimeout(res => {
        this.changeState()
      }, this.data.delay)
    },
    // 用速度计算时间（想要保持速度一样，2种状态时间不同需算出）
    ComputationTime() {
      this.firstAnimationTime = this.wordLength / this.speed
      this.secondAnimationTime = (this.wordLength + this.backWidth) / this.speed
    },
    // 根据状态切换动画
    changeState() {
      let text = this.$refs.text
      if (this.state == 1) {
        text.style.animation = `firstAnimation ${this.firstAnimationTime}s linear`
        this.state = 2
      } else {
        text.style.animation = `secondAnimation ${this.secondAnimationTime}s linear infinite`
      }
    },
    Listener() {
      let text = this.$refs.text
      console.log(text)
      text.addEventListener(
        'animationend',
        res => {
          this.changeState()
        },
        false
      )
    }
  },
  mounted() {
    this.Listener()
    setTimeout(res => {
      this.getData()
    }, 100)
  }
}
</script>
<style lang="less" scoped>
.noticebar {
  display: flex;
  align-items: center;
  top: 0px;
  right: 0px;
  left: 0px;

  width: 100%;
  background-color: #fff7cc;
  position: absolute;
  z-index: -1;
  height: 80px;
  .icon {
    img {
      height: 100%;
      width: 100%;
    }
  }
  .back {
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    position: relative;
    .text {
      position: absolute;
      display: inline-block;
      padding: 2px 0;
    }
  }
}
</style>