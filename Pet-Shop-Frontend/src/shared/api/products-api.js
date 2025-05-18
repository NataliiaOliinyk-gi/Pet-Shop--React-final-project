import { backendInstance } from './backendInstance';

import requestDecorator from './requestDecorator';

export const getProductByIdApi = requestDecorator(async (id) => {
    const { data } = await backendInstance.get(`/products/${id}`);
    return data;
});

export const getProductsAllApi = requestDecorator(async (params = {}) => {
    const { data } = await backendInstance.get("/products/all", {
        params: {
            ...params,
            limit: params.limit ?? 50,
        },
    });
    return data;
});