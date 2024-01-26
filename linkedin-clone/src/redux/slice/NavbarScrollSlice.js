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
            return { ...state, navbarVisibile: true }
        },
        hideNavbar : (state, action) => {
            console.log(action);
            return { ...state, navbarVisibile: false }
        }
    }
})

const {reducer, actions} = navbarScrollSlice
export const { showNavbar , hideNavbar } = actions
export default reducer