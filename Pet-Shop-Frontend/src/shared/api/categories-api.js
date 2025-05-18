import { backendInstance } from './backendInstance';

import requestDecorator from './requestDecorator';

export const getCategoriesAllApi = requestDecorator(async () => {
    const { data } = await backendInstance.get("/categories/all");
    return data;
});

export const getCategorieByIdApi = requestDecorator(async (id, query = {}) => {
    console.log("query:", query);

    const { data } = await backendInstance.get(`/categories/${id}`, {
        params: query,
    });
    return data;
});