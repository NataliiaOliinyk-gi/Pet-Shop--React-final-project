import { postInstance } from './backendInstance';

import requestDecorator from './requestDecorator';

export const saleSend = requestDecorator(async (saleData) => {
    const { data } = await postInstance.post("/sale/send", saleData);
    return data;
});