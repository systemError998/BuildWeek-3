import {configureStore} from '@reduxjs/toolkit'
import SidebarSliceReducer from './slice/SidebarSlice'
import NavUserSliceReducer from './slice/NavUserSlice'

export const store = configureStore({
    reducer : {
        sidebar: SidebarSliceReducer,
        navUser: NavUserSliceReducer
    }
})