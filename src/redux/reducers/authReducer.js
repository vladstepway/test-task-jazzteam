import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    isAuthenticated: false,
    login: null
}

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
        })
    }
})
export const {setAuthUser, setLogout} = authSlice.actions;
export default authSlice.reducer;
