import { getBannerList } from "../../api"

const state = {
  bannerList: []
}
const mutations = {
  UPDATA_BANNERLIST(state, data) {
    state.bannerList = data
  }
}
const actions = {
  async reqBannerList({ commit }) {
    const result = await getBannerList()
    if (result.code === 200) {
      commit('UPDATA_BANNERLIST', result.data)
    }
  }
}
const getters = {}


export default {
  state,
  mutations,
  actions,
  getters,
}