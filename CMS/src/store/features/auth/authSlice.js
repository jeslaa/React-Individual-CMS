import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authServ from './authService'

const initialState = {
    user: null,
    error: null
}


export const loginWithUser = createAsyncThunk('auth/login', async (formUserData, thunkAPI) => {
    try {
        return await authServ.login(formUserData.email, formUserData.password)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

          .addCase(loginWithUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.error = null
          })
          .addCase(loginWithUser.rejected, (state, action) => {
            state.error = action.payload
          })
    }

})

export default authSlice.reducer