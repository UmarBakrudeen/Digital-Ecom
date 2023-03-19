import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null
}

export const productFetch = createAsyncThunk

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
})

export default productSlice.reducer;