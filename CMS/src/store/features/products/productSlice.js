import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    error: null,
    loading: false

}


export const productSlice = createSlice({
    name: 'ProductList',
    initialState,
    reducers: {},
    extraReducers: () => {}

})

export default productSlice.reducer