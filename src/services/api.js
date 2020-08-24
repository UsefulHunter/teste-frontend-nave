import axios from "axios"

if (typeof window !== "undefined") {
  const token = window.localStorage.getItem("token")
}

axios.defaults.headers.common["Authorization"] = "Bearer " + token

const api = axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1/",
})

export default api
