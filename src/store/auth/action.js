import * as Types from './actionsType';
import login from './auth';

function loginUser(login) {
    return {
        type: Types.LOGIN_REQUEST,
        payload:login,
    }
}