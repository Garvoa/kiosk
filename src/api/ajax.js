import axios from "axios"
import store from "../store"
const ajax = axios.create({
  baseURL: "http://192.168.5.3:8080",
  timeout: "20000",
})
ajax.interceptors.request.use((config) => {


  store.commit('switchLoading', true)
  return config
})



ajax.interceptors.response.use((res) => {
  store.commit('switchLoading', false)
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

export default ajax