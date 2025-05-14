import { backendInstance } from './backendInstance';

import requestDecorator from './requestDecorator';

export const orderSendApi = requestDecorator(async (payload) => {
    const { data } = await backendInstance.post("/order/send", payload);
    return data;
});