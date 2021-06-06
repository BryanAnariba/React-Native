import axios from 'axios';

export const apiConfig = axios.create({
    baseURL: 'https://reqres.in/api'
});