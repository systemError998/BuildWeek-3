import {configureStore} from '@reduxjs/toolkit'
import SidebarSliceReducer from './slice/SidebarSlice'
import NavUserSliceReducer from './slice/NavUserSlice'
import JobsSliceReducer from './slice/JobsSlice'

export const store = configureStore({
    reducer : {
        sidebar: SidebarSliceReducer,
        navUser: NavUserSliceReducer,
        jobs: JobsSliceReducer,
    }
})