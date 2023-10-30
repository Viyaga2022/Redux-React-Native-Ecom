import { createSlice } from "@reduxjs/toolkit";
import { register, login, storeAuthToken, deleteAuthToken } from '../services/authServices'

const initialState = {
    currentUser: null,
    isLoding: false,
    successMessage: null,
    errorMessage: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoding = false
            state.successMessage = null
            state.errorMessage = null
        },
        logout: (state) => {
            deleteAuthToken()
            state.currentUser = null
            state.isLoding = false
            state.successMessage = null
            state.errorMessage = null
        },
    },
    extraReducers: (builder) => {
        builder
            // register
            .addCase(register.pending, (state) => {
                state.isLoding = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoding = false
                state.successMessage = action.payload.message
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoding = false
                state.errorMessage = action.payload
            })

            // Login
            .addCase(login.pending, (state) => {
                state.isLoding = true
            })
            .addCase(login.fulfilled, (state, action) => {
                console.log("Login fullfilled");
                storeAuthToken(action.payload.token)
                state.isLoding = false
                state.currentUser = action.payload.user
            })
            .addCase(login.rejected, (state, action) => {
                console.log("Login rejected");
                state.isLoding = false
                state.errorMessage = action.payload
            })
    }
})

export { register, login }
export const { reset, logout} = authSlice.actions
export default authSlice.reducer