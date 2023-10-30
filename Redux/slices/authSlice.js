import { createSlice } from "@reduxjs/toolkit";
import { register, login } from '../services/authServices'
import AsyncStorage from "@react-native-async-storage/async-storage";

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
                console.log("fullfilled");
                state.isLoding = false
                state.successMessage = action.payload.message
            })
            .addCase(register.rejected, (state, action) => {
                console.log("rejected");
                state.isLoding = false
                state.errorMessage = action.payload
            })

            // Login
            .addCase(login.pending, (state) => {
                state.isLoding = true
            })
            .addCase(login.fulfilled, async(state, action) => {
                state.isLoding = false
                state.currentUser = action.payload.user
                console.log(action.payload.token);
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoding = false
                state.errorMessage = action.payload
            })
    }
})

export { register, login }
export const { reset, logout} = authSlice.actions
export default authSlice.reducer