import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.1.152:3333'
})

export default api;