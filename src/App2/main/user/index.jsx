import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './main/App'

import reducer from './reducer'


import promise from 'redux-promise'
import multi from 'redux-multi';
import thunk from 'redux-thunk'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
        && window.__REDUX_DEVTOOLS_EXTENSION__()
        

const store =  applyMiddleware(thunk,multi,promise)(createStore)(reducer, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))