import { categoriesInstance } from './backendInstance';

import requestDecorator from './requestDecorator';

export const getCategoriesAllApi = requestDecorator(async () => {
    const { data } = await categoriesInstance.get("/all");
    return data;
});

export const getCategorieById = requestDecorator(async (id) => {
    const { data } = await categoriesInstance.get(`/${id}`);
    return data;
});