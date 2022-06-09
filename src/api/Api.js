import axios from "axios";

const baseUrl = "http://solid.lol/";
// const mockApiBaseUrl = "https://625eaad13b039517f1fa0794.mockapi.io/";


const api = axios.create({
    baseURL: baseUrl
})

api.interceptors.request.use((config) =>{
    config.headers = {
        "token": JSON.parse(localStorage.getItem("auth"))?.token || ""
    }
    return config
})


const Api = {
    createPizza: (data) => api.post("add/pizza", data, {
        headers: {
            token: JSON.parse(localStorage.getItem("auth")).token
        }
    }),
    // TODO: remove after api confirm
    getAllPizzaMock:() => api.get("dodo"),
    getAllPizza: () => api.get("getall/pizza"),   
    deletePizza: (id) => api.delete("delete/pizza/" + id),
    auth: (data) => api.post("/admin", data)
}

export default Api;