import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { endpointJobs, apiKey } from '../../api'

const initialState = {
    jobSearch: [],
}

export const fetchJobSearch = createAsyncThunk("jobSearch/fetch", async (query) => {
    //console.log("sono l'Uomo Focaccina")
    const response = await axios.get(endpointJobs + `?search=${query}`, {
        headers: {
            'Authorization': apiKey
        }
    });
    console.log(response.data.data)
    return response.data.data
})

const jobSearchSlice = createSlice({
    name: 'jobSearch',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobSearch.pending, (state) => {

            })
            .addCase(fetchJobSearch.fulfilled, (state, action) => {
                state.jobSearch = action.payload;
            })
            .addCase(fetchJobSearch.rejected, (state, action) => {

            });
    }
})

const { reducer } = jobSearchSlice;
export default reducer