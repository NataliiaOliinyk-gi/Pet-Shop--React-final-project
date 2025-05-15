import { backendInstance } from './backendInstance';

import requestDecorator from './requestDecorator';

export const getProductById = requestDecorator(async (id) => {
    const { data } = await backendInstance.get(`/products/${id}`);
    return data;
});

export const getProductsAll = requestDecorator(async () => {
    const { data } = await backendInstance.get("/products/all");
    return data;
});