import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './auth/reducer';

const store = configureStore({
    reducer: {
    login: loginReducer, 
} })

export default store;