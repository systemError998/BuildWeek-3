import {configureStore} from '@reduxjs/toolkit'
import SidebarSliceReducer from './slice/SidebarSlice'
import NavUserSliceReducer from './slice/NavUserSlice'
import JobSearchSliceReducer from './slice/JobSearchSlice'
import JobsSliceReducer from './slice/JobsSlice'
import HomepageSliceReducer from './slice/HomepageSlice'

export const store = configureStore({
    reducer : {
        sidebar: SidebarSliceReducer,
        navUser: NavUserSliceReducer,
        jobSearch: JobSearchSliceReducer,
        jobs: JobsSliceReducer,
        homepageUser: HomepageSliceReducer
    }
})