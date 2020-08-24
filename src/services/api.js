import axios from "axios"
let token = ""
if (typeof window !== "undefined") {
  token = window.localStorage.getItem("token")
}

axios.defaults.headers.common["Authorization"] = "Bearer " + token

const api = axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1/",
})

export default api
