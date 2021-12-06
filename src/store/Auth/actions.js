import * as Types from './actionsType';

const initialState = {
    logStatus: "IDLE",
    error: {},
    // isLoggedIn:false,
}

export const requestLogin = ({ user, password }) => async (dispatch) => {
  
    dispatch({ type: Types.LOGIN_REQUEST });//pending ocorre antes da chamada
   
    const response = await fetch(`/api/auth/login`, {
            method: "POST",
            body: JSON.stringify({ user, password })
        })
         const resp = await response.json();//converte uma funcao em um objecto
 
        if (!response.ok) {
            dispatch({ type: Types.LOAGIN_FAILED, data: resp });
            console.log(resp);
        } else {
            window.localStorage.setItem("token", response.bearer_token);
            dispatch({ type: Types.LOGIN_SUCCESS, data: resp });
    }
    
// dispatch({ type: Types.LOGIN_REQUEST });//pending ocorre antes da chamada
//    fetch("/api/auth/login", {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ user, password })
//     }).then(async resp => {

//         const response = await resp.json();
    
//         console.log(response);
//         if (!resp.ok) {
//             dispatch({ type: Types.LOAGIN_FAILED, data: response });
//         } else {
//             window.localStorage.setItem("token", response.bearer_token);
//         }
//     });
}

const login = (state = initialState, action) => {

    switch (action.type) {
        
        case Types.LOGIN_REQUEST:
            return {
                ...state,
                logStatus: "pending",
            }
           
         case Types.LOGIN_SUCCESS:
            return {
                 ...state,
                logStatus: "success",
                // isLoggedIn:true,
            }
        
        case Types.LOAGIN_FAILED:
            console.log(action.data);
            return {
                 ...state,
                logStatus: "failed",
                error: action.data,
            }
        
        default:
            return state;
    }
}
    
export default login;