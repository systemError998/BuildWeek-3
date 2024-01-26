import {configureStore} from '@reduxjs/toolkit'
import SidebarSliceReducer from './slice/SidebarSlice'

export const store = configureStore({
    reducer : {
        sidebar: SidebarSliceReducer
    }
})