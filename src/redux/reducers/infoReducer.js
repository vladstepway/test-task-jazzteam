import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    login: null
}

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setInfo: (state, action) => ({
            ...state,
            info: action.payload
        })
        // setAuthUser: (state, action) => ({
        //     ...state,
        //     login: action.payload,
        //     isAuthenticated: true
        // }),
        // setLogout: (state) => ({
        //     ...state,
        //     isAuthenticated: false,
        //     login: null
        // })
    }
})
export const {setInfo} = infoSlice.actions;
export default infoSlice.reducer;
