import axios from "axios";

const { VITE_API_URL } = import.meta.env

export const backendInstance = axios.create({
    baseURL: VITE_API_URL
});

export const localUrl = VITE_API_URL;