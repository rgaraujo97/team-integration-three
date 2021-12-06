 import {combineReducers} from 'redux';
 import login from './actions';
 
    const rootReducer = combineReducers({
         login: login,
        // login: function (state, action) {
        //     return {
        //         error: login.error,
        //         status: login.logStatus,
        //     }   
        // }
    })

 export default rootReducer;