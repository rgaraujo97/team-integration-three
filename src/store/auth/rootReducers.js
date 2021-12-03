/**
 * ROOT-REDUCER: uses a single root reducer 
 * function that accepts the current state 
 * (and an action) as input and returns a new state
  */
 import {combineReducers} from 'redux';
 import login from './auth.js';
 
    const rootReducer = combineReducers({
        login: login,
    })
 
 export default rootReducer;
