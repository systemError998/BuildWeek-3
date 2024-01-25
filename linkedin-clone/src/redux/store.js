import {configureStore} from '@reduxjs/toolkit'

import navbarScrollReducer from './slice/NavbarScrollSlice'

export const store = configureStore({
    reducer : {
        navbarScroll: navbarScrollReducer
    }
})