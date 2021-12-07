import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './auth';
import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducer from '../App2/main/reducer'


//redux toolkit
 export const store2 = configureStore({
   //"".reducer e uma funcao do reducer
  reducer: {Auth: AuthSlice.reducer }
});

//Nativo + middleware
export const store =  applyMiddleware(thunk,multi,promise)(createStore)(reducer);

//Nativo
//export const store3 =  createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__());
export const store3 =  createStore(reducer);
/*
export const store4 = applyMiddleware(multi)(configureStore({
  //"".reducer e uma funcao do reducer
 reducer: {Auth: AuthSlice.reducer }
}));
*/