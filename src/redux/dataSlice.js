import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchData } from '../api'

const initialState ={
    data:[],
    loading: false,
    error: null,
    isDataFetched:false,
}

export const fetchDataAsync = createAsyncThunk('data/fetchData', async() => {
    const response = await fetchData();
    return response;
})

const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
        setClearData:(state)=>{
            state.data = [],
            state.isDataFetched = false
        }
    },
    extraReducers:(builder) =>{
        builder
        .addCase(fetchDataAsync.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }) // loading - pending
        .addCase(fetchDataAsync.fulfilled, (state, action) =>{
            state.loading = false;
            state.data = action.payload;
            state.isDataFetched = true
        }) // success - fulfilled
        .addCase(fetchDataAsync.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message
        }) // error - rejected
 
    }
})

export const { setClearData } = dataSlice.actions;

export default dataSlice.reducer;