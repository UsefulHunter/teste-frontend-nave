import axios from "axios"

const token = localStorage.getItem("token")

axios.interceptors.request.use(
  config => {
    config.headers["Authorization"] = "Bearer" + token
    config.headers["Content-Type"] = "application/json"
    return config
  },
  error => {
    Promise.reject(error)
  }
)

const api = axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1/",
})

export default api
