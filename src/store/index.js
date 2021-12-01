// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({
//   reducer: {
//     login,
//   },
// });

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import login from './Auth/actions';

const store = createStore(login, applyMiddleware(thunk));

export default store;

//import { composeWithDevTools } from 'redux-devtools-extension';
//const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
