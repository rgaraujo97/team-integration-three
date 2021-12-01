import * as Types from './actionsType';

const initialState = {
    logStatus: "IDLE",
    error: {},
    isLoggedIn:false,
}
/**function requestLogin(){
 * return function (dispatch){
 * dispatch({
 * type: Types.LOGIN_REQUEST,
 * })}} */

export const requestLogin = ({ user, password }) => (dispatch) => {

    dispatch({type: Types.LOGIN_REQUEST});

    fetch("/api/auth/login", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user, password })
    }).then(async resp => {

        const response = await resp.json();
        
        if (!resp.ok) {
            dispatch({ type: Types.LOAGIN_FAILED, data: response });
        } else {
            window.localStorage.setItem("token", response.bearer_token);
        }
    });
}

 const login = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOGIN_REQUEST:
            return {
                logStatus: "pending",
                isLoggedIn:false,
                error: {},
            }
            
         case Types.LOGIN_SUCCESS:
            return {
                logStatus: "success",
                isLoggedIn:true,
                error:{}
            }
         case Types.LOAGIN_FAILED:
            return {
                logStatus: "failed",
                 isLoggedIn:false,
                error: action.data.error,
            }
        default:
            return state;
    }
}
    
export default login;