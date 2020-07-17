import { getMenupageInfo } from "../../api"

const state = {
  menupageList: [],

}
const mutations = {
  UPDATE_MENUPAGE_INFO(state, menupageList) {
    state.menupageList = menupageList
  },

}
const actions = {
  reqMenupageInfo({ commit }) {
    return getMenupageInfo()
    // if (result.code === 200) {
    //   commit('UPDATE_MENUPAGE_INFO', result.data)
    // }
  }
}
const getters = {
  menupageListRight(state) {
    const a = state.menupageList && state.menupageList.map((item) => {
      return item.pagedetails
    })
    return a
    console.log(a)
    // return state.menupageList ? state.menupageList
  }
}


export default {
  state,
  mutations,
  actions,
  getters,
}