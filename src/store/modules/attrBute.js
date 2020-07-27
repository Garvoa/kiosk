import { getMenumodInfo } from "../../api"

const state = {
  attrButeList: [],

  isAdd: true
}
const mutations = {

  UPDATE_MENUMOND_ONFO(state, data) {
    state.attrButeList = data
  },
}
const actions = {
  reqMenumodInfo({ commit }, data) {
    return getMenumodInfo(data)

  }
}
const getters = {
  getModifiersList(state) {
    return state.attrButeList ? state.attrButeList.modifiers : []
  }
}


export default {
  state,
  mutations,
  actions,
  getters,
}