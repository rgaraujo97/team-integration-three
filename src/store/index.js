import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
//import {auth} from "./Auth/loginReducer"
// import logger from "redux-logger";

const initialState = {
  status: false,
  error: {}
}

const SUCCESS = 'success',
LOADING = 'pending',
ERROR = 'error'

const auth =(state= initialState, action) => {

  switch(action.type){

    case 'LOGIN_REQUESTED':
      return {
        status: LOADING,
      }

    case 'LOGIN_SUCCESS':
      return{
        status: SUCCESS,
      }

     case 'LOGIN_FAILED':
        return{
        status: ERROR,
        error:action.data  
      }

        default:
          return state;
  }
}

export const authLogin = (user, password) => (dispatch) => {
  dispatch({ type: "LOGIN_REQUESTED" });
  console.log(user, password)
  fetch("/api/auth/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user, password }),
  }).then(async (res) => {
    const response = await res.json();

    if (!res.ok) {
      dispatch({ type: "LOGIN_FAILED", data: response });
    } else {
      dispatch({ type: "LOGIN_SUCCESS", data: response });
      window.localStorage.setItem("token", response.bearer_token);
    }
  });
};

// const composedEnchancer = composeWithDevTools(applyMiddleware(thunk));

// export const store = createStore(auth, composedEnchancer);

export const store2 = createStore(auth, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());