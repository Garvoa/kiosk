<template>
  <div class="appWrap">
    <!-- <transition :name="transitionName" mode="out-in"> -->
    <router-view class="Router"></router-view>
    <!-- </transition> -->
    <Loading v-show="isLoading" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getMenumodInfo } from './api'
export default {
  name: 'App',
  data() {
    return {
      keepAlive: '', //需要缓存的页面 例如首页
      transitionName: 'slide-right' //初始过渡动画方向
    }
  },
  watch: {
    $route(to, from) {
      // 切换动画
      // this.keepAlive = to.path.replace('/', '')
      let isBack = this.$router.isBack // 监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
      this.$router.isBack = false
    }
  },
  computed: {
    ...mapState({ isLoading: state => state.isLoading })
  },
  mounted() {}
}
</script>

<style lang="less">
.appWrap {
  width: 100%;
  height: 100%;
}
.Router {
  min-width: 1024px;
  transition: all 0.2888s ease;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  margin: 0 auto;

  // background-color: #87cefa;
  // overflow: hidden;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
</style>
