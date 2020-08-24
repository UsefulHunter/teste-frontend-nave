import axios from "axios"
const token =
  typeof window !== undefined ? null : window.localStorage.getItem("token")

axios.defaults.headers.common["Authorization"] = "Bearer " + token

const api = axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1/",
})

export default api
