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


 export const store = configureStore({
   //"".reducer e uma funcao do reducer
  reducer: {Auth: AuthSlice.reducer }
});


export const store2 =  applyMiddleware(thunk,multi,promise)(createStore)(reducer);

export const store3 = createStore(reducer);