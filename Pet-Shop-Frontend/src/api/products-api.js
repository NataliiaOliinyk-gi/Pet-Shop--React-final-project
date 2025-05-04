import { productsInstance } from './backendInstance';

import requestDecorator from './requestDecorator';

export const getProductsAll = requestDecorator(async () => {
    const { data } = await productsInstance.get("/all");
    return data;
});

export const getProductById = requestDecorator(async (id) => {
    const { data } = await productsInstance.get(`/${id}`);
    return data;
});