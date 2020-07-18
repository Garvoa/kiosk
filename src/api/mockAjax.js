import axios from "axios"
import store from "../store"
const mockAjax = axios.create({
  baseURL: '/mock',
  timeout: "20000",
})
mockAjax.interceptors.request.use((config) => {


  store.commit('switchLoading', true)
  return config
})



mockAjax.interceptors.response.use((res) => {
  store.commit('switchLoading', false)
  console.log(res.data)
  return res.data
},
  error => {
    store.commit('switchLoading', false)
    console.log('err' + error)
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default mockAjax