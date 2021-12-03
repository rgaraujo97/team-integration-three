// import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux';
// import login from './auth/auth';

// const store = configureStore ({
//   reducer: {
//     login,
//   },
// });

// export default store;

import { createStore, applyMiddleware } from "redux";
// import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import rootReducer from './auth/rootReducers';
const middlewares = [reduxThunk];
const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares))


const store = createStore(rootReducer, composedEnhancer);

export default store;
