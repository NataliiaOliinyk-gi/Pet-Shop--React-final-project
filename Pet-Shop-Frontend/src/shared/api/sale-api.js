import { postInstance } from './backendInstance';

import requestDecorator from './requestDecorator';

export const saleSendApi = requestDecorator(async (payload) => {
    const { data } = await postInstance.post("/sale/send", payload);
    return data;
});