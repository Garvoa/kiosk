import Vue from 'vue'
import Vuex from 'vuex'
import modules from "./modules"
Vue.use(Vuex)

const store = new Vuex.Store({
  modules,

  state: {
    lang: localStorage.lang || 'cn',
    isLoading: false,
    objFrames: { text: '', fn: () => { } }
  },
  mutations: {
    switchLoading(state, boolean) {
      state.isLoading = boolean
    },
    switchFrames(state, objFrames) {

      state.objFrames = objFrames
    }
    // switchLang(state, { lang, _self }) {

    //   state.lang = lang
    //   _self.$i18n.locale = lang
    //   localStorage.setItem('lang', lang)
    // }
  },
  actions: {}
})

export default store