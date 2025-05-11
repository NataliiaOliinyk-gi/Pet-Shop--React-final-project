import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from './categories/categories-slice';

const store = configureStore({
    reducer: {
        categories: categoriesReducer
    }
});

export default store;