import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://api-studio.ebankit.local'
});

export const apiMirage = axios.create({
    baseURL: 'http://localhost:8080/api'
});