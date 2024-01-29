import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { endpointJobs, apiKey } from '../../api'

const initialState = {
    jobs: [],
}

export const fetchJobs = createAsyncThunk("jobSearch/fetch", async (query) => {
    //console.log("sono l'Uomo Focaccina") <3
    const response = await axios.get(endpointJobs + `?search=${query}`, {
        headers: {
            'Authorization': apiKey
        }
    });
    console.log(response.data.data)
    return response.data.data
})

const jobsSlice = createSlice({
    name: 'jobs',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {

            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {

            });
    }
})

const { reducer } = jobsSlice;
export default reducer