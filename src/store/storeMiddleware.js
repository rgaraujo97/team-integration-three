import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import loginReducer from './auth/reducer';

const reducer = {
    login: loginReducer, 
}

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;