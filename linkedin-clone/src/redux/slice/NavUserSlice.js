import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AiOutlineConsoleSql } from "react-icons/ai";

const initialState = {
    navUser : {},
}

const url = "https://striveschool-api.herokuapp.com/api/profile/me";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzYjVkOTMxYTczZjAwMTlkNWM5MTgiLCJpYXQiOjE3MDYyNzYzMTQsImV4cCI6MTcwNzQ4NTkxNH0.KaRRQEwzr1JwwU1TYeMLikwhHjTtF5j6_SHdTC4eOsI"

export const fetchNavUser = createAsyncThunk("navUser/fetch", async () => {
    console.log("sono l'Uomo Focaccina")
    const response = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${key}`
        }
    }
    );
    console.log(response.data)
   return response.data 
})

const myProfileSlice = createSlice({
    name: 'myProfile',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchNavUser.pending, (state) => {
          state.loading = 'loading';
        })
        .addCase(fetchNavUser.fulfilled, (state, action) => {
          state.loading = 'succeeded';
          state.navUser = action.payload;
        })
        .addCase(fetchNavUser.rejected, (state, action) => {
          state.loading = 'failed';
          state.error = action.error.message;
        });
    }
  })

const { reducer } = myProfileSlice;
export default reducer