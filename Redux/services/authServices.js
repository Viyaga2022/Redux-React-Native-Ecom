import {API_URL} from '@env'
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const BASE_URL = API_URL + '/user'

// Register Service
const register = createAsyncThunk(
    'auth/register',
    async (userData, thunkAPI) => {
        console.log(`${BASE_URL}/register`);
        try {
            const response = await axios.post(`${BASE_URL}/register`, userData)
            return response.data
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message)
                || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    })

// Login Service
const login = createAsyncThunk(
    'auth/login',
    async (loginData, thunkAPI) => {
        try {
            const response = await axios.post(`${BASE_URL}/login`, loginData)
            return response.data
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message)
                || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Get My Account 
const myAccount = createAsyncThunk(
    'auth/myAccount',
    async (token, thunkAPI) => {
        try {
            const response = await axios.get(`${BASE_URL}/my-account`)
            return response.data
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message)
                || error.message || error.toString()
            return message
        }
    }
)

export { register, login, myAccount }