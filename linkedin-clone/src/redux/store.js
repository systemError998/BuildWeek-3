import {configureStore} from '@reduxjs/toolkit';
import SidebarSliceReducer from './slice/SidebarSlice'
import navbarScrollReducer from './slice/NavbarScrollSlice'

export const store = configureStore({
    reducer : {
        navbarScroll: navbarScrollReducer,
        sidebar: SidebarSliceReducer
    }
})