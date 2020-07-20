import { getMenupageInfo } from "../../api"

const state = {
  menupageList: [],
  attrButeDetailsList: []

}
const mutations = {
  UPDATE_MENUPAGE_INFO(state, menupageList) {
    state.menupageList = menupageList
  },
  UPDATE_ATTRBUTEDETALSLIST(state, data) {
    state.attrButeDetailsList.push(data)
  },
  DELETEATTRBUTEDETALSITEM(state, AttriButeItem) {
    state.attrButeDetailsList = state.attrButeDetailsList.filter(
      item => item.id !== AttriButeItem.id
    )
  },
  DELETEATTRBUTEDETALSLIST(state) {
    state.attrButeDetailsList = []
  },
  MODIFYATTRBUTEDETALSITEM(state, AttriButeItem) {

    state.attrButeDetailsList = state.attrButeDetailsList.map((item) => {
      if (item.id === AttriButeItem.id) {
        item = AttriButeItem
      }
      return item
    })

  }

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

    // return state.menupageList ? state.menupageList
  },
  totalPrice(state) {
    return state.attrButeDetailsList.reduce((p, c) => {
      p += c.totalAmount
      return p
    }, 0)
  }
}


export default {
  state,
  mutations,
  actions,
  getters,
}