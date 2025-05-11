import { createSlice } from "@reduxjs/toolkit";

import { fetchCategoriesAll } from "./categories-thunks";
import { pending, rejected } from "../../shared/lib/redux";

const initialState = {
    categories: [],
    loading: null,
    error: null,
    success: false,
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoriesAll.pending, pending)
            .addCase(fetchCategoriesAll.rejected, rejected)
            .addCase(fetchCategoriesAll.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.categories = payload;
            })
    }
});

export default categoriesSlice.reducer;