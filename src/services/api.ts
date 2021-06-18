import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://perfit-api.herokuapp.com/'
})