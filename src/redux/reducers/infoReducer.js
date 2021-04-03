import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getInfoData} from "../../api/axios";

const initialState = {
    people: null,
    headers: null,
    isLoading: true,
    sortOrder: 'asc',
    sortField: 'id',
    selectedRows: []
}

export const getInfo = createAsyncThunk('info/getInfo', getInfoData)

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setInfo: (state, action) => ({
            ...state,
            people: action.payload.people,
            sortOrder: action.payload.sortOrder,
            sortField: action.payload.sortField
        }),
        setIsLoading: ((state, action) => ({
            ...state,
            isLoading: action.payload
        })),
        setSelectedRows: (state, action) => ({
            ...state,
            selectedRows: [...action.payload]
        })

    },
    extraReducers: (builder) => {
        builder
            .addCase(getInfo.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getInfo.fulfilled, (state, action) => {
                state.people = [...action.payload.people];//TODO NEEDS TO BE SORTED
                // state.people = [...action.payload.people];
                state.headers = [...action.payload.headers];
                state.isLoading = false;
            })
    }
})
export const {setInfo, setIsLoading, setSelectedRows} = infoSlice.actions;
export default infoSlice.reducer;
