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
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducer from './auth/auth';
const middlewares = [reduxThunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
