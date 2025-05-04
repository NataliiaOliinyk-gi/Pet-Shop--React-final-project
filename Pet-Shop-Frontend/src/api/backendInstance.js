import axios from "axios";

export const categoriesInstance = axios.create({
    baseURL: "http://localhost:3333/categories"
});

export const productsInstance = axios.create({
    baseURL: "http://localhost:3333/products"
});

export const postInstance = axios.create({
    baseURL: "http://localhost:3333"
});

export const localUrl = "http://localhost:3333";