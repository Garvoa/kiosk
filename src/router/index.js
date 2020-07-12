import Router from "vue-router"
import Vue from "vue"
Vue.use(Router)
import routes from "./routes"
export default new Router({

  scrollBehavior: () => ({ y: 0 }),
  routes,
})