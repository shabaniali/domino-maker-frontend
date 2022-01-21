import axios from 'axios';
export const baseUrl = "http://hrkp.ir:9000";
export const APIService = axios.create({
    baseURL : baseUrl,
})
