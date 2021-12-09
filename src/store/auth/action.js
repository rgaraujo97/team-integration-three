import * as Types from './actionsType';
import reducer from './reducer';

//ACTION CREATOR
function loginUser() {
    return {
        type: Types.LOGIN_REQUEST,
        payload: reducer,//login
    }
}

export default loginUser;

//store.dispatch(loginUser());