import { combineReducers, createStore, applyMiddleware } from "redux";
import { AuthReducer } from "./AuthReducer";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(combineReducers({
    auth: AuthReducer
}), composeEnhancers)

export default store