import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getCredentials} from "../../api/axios";


const initialState = {
    isAuthenticated: false,
    login: null,
    authErrors: null
}

export const checkUserAuth = createAsyncThunk('auth/checkAuth', getCredentials);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUser: (state, action) => ({
            ...state,
            login: action.payload,
            isAuthenticated: true
        }),
        setLogout: (state) => ({
            ...state,
            isAuthenticated: false,
            login: null
        }),
        setErrors: (state, action) => ({
            ...state,
            authErrors: action.payload
        })
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkUserAuth.fulfilled, (state, action) => {
                state.login = action.payload.login;
                state.isAuthenticated = true;
            })
            .addCase(checkUserAuth.rejected, (state, action) => {
                state.authErrors = action.payload;
            })
    }
})
export const {setAuthUser, setLogout, setErrors} = authSlice.actions;
export default authSlice.reducer;
