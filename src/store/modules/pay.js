import { getBannerList } from "../../api"

const state = {
  paydetail: {}
}
const mutations = {
  UPDATA_PAY_TYPE_LIST(state, data) {
    state.paydetail = data
  }
}
const actions = {

}
const getters = {}


export default {
  state,
  mutations,
  actions,
  getters,
}