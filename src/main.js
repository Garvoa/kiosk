import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "swiper/css/swiper.css"
import router from "./router"
import Rotation from "./components/Rotation"
import moment from "moment"
import store from "./store"
import Loading from "./components/Loading"
import 'default-passive-events'
import StateFrames from "../src/components/StateFrames"
import VueLazyload from 'vue-lazyload'
import './mock'
Vue.prototype.$moment = moment
Vue.prototype.$moment.locale('zh-cn')
Vue.use(ElementUI)
Vue.config.productionTip = false
//懒加载
import loading from './img/20200722180118.gif'
Vue.use(VueLazyload, {
  loading
})
Vue.prototype.$bus = new Vue()

//全局组件
Vue.component('Loading', Loading)
Vue.component('Rotation', Rotation)
Vue.component('StateFrames', StateFrames)

// 设置全局方法
Vue.prototype.$switchFrames = function (objFrames) {
  store.commit('switchFrames', objFrames)
}
window.addEventListener('popstate', function (e) {
  router.isBack = true
}, false)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

