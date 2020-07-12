import axios from "axios"
const ajax = axios.create({
  baseURL: "/api",
  timeout: "20000",
})
ajax.interceptors.request.use((config) => {
  return config
})



ajax.interceptors.response.use((res) => {
  return res.data
},
  error => {
    console.log('err' + error)
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)