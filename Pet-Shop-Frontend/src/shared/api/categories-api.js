import { backendInstance } from './backendInstance';

import requestDecorator from './requestDecorator';

export const getCategoriesAllApi = requestDecorator(async () => {
    const { data } = await backendInstance.get("/categories/all");
    return data;
});

export const getCategorieById = requestDecorator(async (id) => {
    const { data } = await backendInstance.get(`/categories/${id}`);
    return data;
});