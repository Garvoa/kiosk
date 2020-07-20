import { getMenumodInfo } from "../../api"

const state = {
  attrButeList: [],
  // attrButeDetails: [],
  isAdd: true
}
const mutations = {
  UPDATE_MENUMOND_ONFO(state, data) {
    state.attrButeList = data
  },
  // GETATTRBUTEDETAILSLIST(state, data) {
  //   state.attrButeList=  state.attrButeList.map((item)=>{
  //     return 
  //   })
  // }
  // ADD_ATTRBUTE_NUMBER(state, attrAbj) {

  //   state.attrButeDetails.push(attrAbj)
  // }
}
const actions = {
  reqMenumodInfo({ commit }, data) {
    return getMenumodInfo(data)

  }
}
const getters = {

}


export default {
  state,
  mutations,
  actions,
  getters,
}