import { postInstance } from './backendInstance';

import requestDecorator from './requestDecorator';

export const orderSend = requestDecorator(async (newOrder) => {
    const { data } = await postInstance.post("/order/send", newOrder);
    return data;
});