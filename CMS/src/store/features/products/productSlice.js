import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";

const initialState = {
    products: [],
    error: null,
    loading: false

}

export const addPrdct = createAsyncThunk('p-list/add', async (data, thunkAPI) => {
    try {
        return await productService.newProducts(data)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})


export const productSlice = createSlice({
    name: 'ProductList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
            .addCase(addPrdct.pending, (state) => {
                state.loading = true
            })
            .addCase(addPrdct.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.products = [...state.products, action.payload]
            }) 

            .addCase(addPrdct.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            }) 
    }

})

export default productSlice.reducer