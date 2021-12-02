// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({
//   reducer: {
//     login,
//   },
// });

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import login from './Auth/actions';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(login, composedEnhancer);

//console.log(store.getState());

export default store;

//
