<template>
  <div class="swiper-container swiper-no-swiping">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
        <img v-lazy="item.fileUrl" alt />
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
import { mapState } from 'vuex'
// import 'swiper/css/swiper.css'
export default {
  props: { isRotation: Boolean },
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch('reqBannerList')
  },
  methods: {
    swiperInit() {
      new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
          delay: 4000,
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
  },
  watch: {
    bannerList: {
      handler() {
        this.$nextTick(() => {
          this.swiperInit()
        })
      },
      immediate: true
    }
  },
  computed: {
    ...mapState({ bannerList: state => state.outerLayer.bannerList })
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