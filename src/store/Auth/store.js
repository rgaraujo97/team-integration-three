import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import user from './reducer';

const rootReducer = combineReducers({
  user: user 
});

export const configureStore = () => {
    return createStore(
        rootReducer,
        compose(applyMiddleware())
  );
};
