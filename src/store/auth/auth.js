import * as Types from './actionsType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    logStatus: "IDLE",
    error: null,
    isLoggedIn:false,
}
//ACTIONS TO DO A REQUEST TO AN API, WHERE USER CAN LOGIN INTO AN APP
export const requestReducer = createAsyncThunk(
    "auth/login", 
    async (data) => {
        const response = await fetch(`/api/auth/login`, {
            method: "POST",
            body: JSON.stringify(data)
        })
        const payload = await response.json();
        return {
            status: response.ok, payload,
    }
})

const handleLoginStatus = (state, {payload, status}) => {
    if(status) {
        window.localStorage.setItem("token", payload.bearer_token)
        return {
            ...state, 
        }
    }
    return {...state, error: payload}
}
//MY REDUCER - that is a function that return an action and the previous state of the application and returns the new state
 const login = ( state = initialState, action) => {
    switch (action.type) {
        
        case Types.LOGIN_REQUEST:
            return {
                logStatus: "pending",
                isLoggedIn:false,
                error: null,
            }
           
         case Types.LOGIN_SUCCESS:
            return {
                logStatus: "success",
                isLoggedIn:true,
                error:null,
            }
        
         case Types.LOAGIN_FAILED:
            return {
                logStatus: "failed",
                 isLoggedIn:false,
                error: action.data.error,
            }
        
        default:
            return state;
    }
}

export default login;

/**
 * ROOT-REDUCER: uses a single root reducer 
 * function that accepts the current state 
 * (and an action) as input and returns a new state
 * 
 * import {combineReducers} from 'redux';
 * import login from './auth.js';
 * 
 * const rootReducer = combinaReducers({
 * login: login,
 * })
 * 
 * export default rootReducer;
 */