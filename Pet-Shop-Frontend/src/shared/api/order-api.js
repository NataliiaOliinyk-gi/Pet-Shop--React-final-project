import { postInstance } from './backendInstance';

import requestDecorator from './requestDecorator';

export const orderSendApi = requestDecorator(async (payload) => {
    const { data } = await postInstance.post("/order/send", payload);
    return data;
});