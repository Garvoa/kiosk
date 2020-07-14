<template>
  <div class="swiper-container swiper-no-swiping">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="http://img4.imgtn.bdimg.com/it/u=2066513574,2920282611&fm=214&gp=0.jpg" alt />
      </div>
      <div class="swiper-slide">
        <img src="http://pic1.win4000.com/wallpaper/5/579f1161ee654.jpg" alt />
      </div>
      <div class="swiper-slide">
        <img src="http://img9.51tietu.net/pic/2019-091013/jlq4olwz5efjlq4olwz5ef.jpg" alt />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>-->

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>
 

<script>
import Swiper from 'swiper'
// import 'swiper/css/swiper.css'
export default {
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      this.swiperInit()
    })
  },
  methods: {
    swiperInit() {
      new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        },
        on: {
          touchMove: function(event) {
            //你的事件
          }
        }
        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // },

        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar'
        // }
      })
    }
  }
}
</script>
 
<style lang="less" >
.swiper-container {
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>