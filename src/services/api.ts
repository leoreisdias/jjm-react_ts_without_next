import axios from 'axios'

const api = axios.create({
    baseURL: 'https://jjm-website.herokuapp.com/',
})

export default api;