import axios from "axios";

const categoriesInstance = axios.create({
    baseURL: "http://localhost:3333/categories"
});

const productsInstance = axios.create({
    baseURL: "http://localhost:3333/products"
});

const orderInstance = axios.create({
    baseURL: "http://localhost:3333/order"
});

export const getCategoriesAll = async () => {
    const { data } = await categoriesInstance.get("/all");
    return data
};

export const getCategorieById = async id => {
    const { data } = await categoriesInstance.get(`/${id}`);
    return data
};

export const getProductsAll = async () => {
    const { data } = await productsInstance.get("/all");
    return data
};

export const getProductById = async id => {
    const { data } = await productsInstance.get(`/${id}`);
    return data
};

export const orderSend = async newOrder => {
    const { data } = await orderInstance.post("/send", newOrder);
    return data
}

export const localUrl = "http://localhost:3333";
