import { configureStore } from "@reduxjs/toolkit";

import thunk from 'redux-thunk'
import userReducer from './userSlice'
import dataReducer from './dataSlice'

const store = configureStore({
    reducer:{
        user: userReducer,
        data: dataReducer,
    },
    middleware:[thunk]
})

export default store;



