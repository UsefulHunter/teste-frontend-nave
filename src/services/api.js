import axios from "axios"

const token = window.localStorage.getItem("token")

/*axios.interceptors.request.use(
  config => {
    config.headers["Authorization"] = "Bearer " + token
    config.headers["Content-Type"] = "application/json"
    console.log("token", token)
    return config
  },
  error => {
    Promise.reject(error)
  }
)*/

axios.defaults.headers.common["Authorization"] = "Bearer " + token

const api = axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1/",
})

export default api
