import auth from './loginReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: auth
})

export default rootReducer;