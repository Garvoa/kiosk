import { getMenumodInfo } from "../../api"

const state = {
  attrButeList: [],
  // attrButeDetails: []
}
const mutations = {
  UPDATE_MENUMOND_ONFO(state, data) {
    state.attrButeList = data
  },
  // ADD_ATTRBUTE_NUMBER(state, attrAbj) {

  //   state.attrButeDetails.push(attrAbj)
  // }
}
const actions = {
  async reqMenumodInfo({ commit }) {
    const result = await getMenumodInfo()
    if (result.code === 200) {
      commit('UPDATE_MENUMOND_ONFO', result.data)
    }
  }
}
const getters = {
  // getattrButeDetails(state) {
  //   return state.attrButeDetails
  // }
}


export default {
  state,
  mutations,
  actions,
  getters,
}