import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navbarVisibile: false
}

const navbarScrollSlice = createSlice({
    name: 'navbarScroll',
    initialState: initialState,
    reducers: {
        showNavbar: (state, action) => {
            console.log(action);
            return { ...state, isElementVisible: true }
        },
        hideNavbar : (state, action) => {
            console.log(action);
            return { ...state, isElementVisible: true }
        }
    }
})

const {reducer, actions} = navbarScrollSlice
export default reducer