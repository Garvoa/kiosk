import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import api from "./api"
import "swiper/css/swiper.css"
import router from "./router"
import Rotation from "./components/Rotation"
import moment from "moment"
// Vue.prototype.$api = api
Vue.prototype.$moment = moment
Vue.prototype.$moment.locale('zh-cn')
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.component('Rotation', { Rotation })
window.addEventListener('popstate', function (e) {

  router.isBack = true
}, false)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
