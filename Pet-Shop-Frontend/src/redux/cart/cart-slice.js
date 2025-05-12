import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (store, { payload }) => {
            const countToAdd = payload.count ?? 1; // якщо payload.count немає — буде 1

            const product = store.find((item) => item.id === payload.id);
            if (product) {
                product.count += countToAdd;
            } else {
                store.push({ ...payload, count: countToAdd });
            }
        },

        increaseCountInCart: (store, { payload }) => {
            const product = store.find((item) => item.id === payload);
            product.count += 1;
        },

        decreaseCountInCart: (store, { payload }) => {
            const index = store.findIndex((item) => item.id === payload);
            store[index].count -= 1;
            if (!store[index].count) {
                store.splice(index, 1);
            }
        },

        deleteFromCart: (store, { payload }) =>
            store.filter((item) => item.id !== payload),

        clearCart: () => [],
    }
});

export const {
    addToCart,
    increaseCountInCart,
    decreaseCountInCart,
    deleteFromCart,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;