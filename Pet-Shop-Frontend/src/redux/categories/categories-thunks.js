import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCategoriesAllApi } from "../../shared/api/categories-api";

export const fetchCategoriesAll = createAsyncThunk(
    "categories/fetch",
    async (_, { rejectWithValue }) => {
        const { data, error } = await getCategoriesAllApi();
        if (data) return data.data;
        return rejectWithValue(error?.response?.data?.message || error?.message);
    }
)