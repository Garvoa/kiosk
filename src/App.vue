<template>
  <div>
    <transition :name="transitionName" mode="out-in">
      <keep-alive :include="keepAlive" exclude="categoryList">
        <router-view class="Router"></router-view>
      </keep-alive>
    </transition>
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
  mounted() {
    let params = {
      itemid: 1001,
      isselfmodifier: 0,
      familyid: 1
    }

    console.log(JSON.stringify(params))
    console.log(getMenumodInfo(params))
  }
}
</script>

<style lang="less">
.Router {
  min-width: 1024px;
  transition: all 0.2888s ease;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
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
