import { backendInstance } from './backendInstance';

import requestDecorator from './requestDecorator';

export const saleSendApi = requestDecorator(async (payload) => {
    const { data } = await backendInstance.post("/sale/send", payload);
    return data;
});