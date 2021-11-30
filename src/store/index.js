import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const SUCCESS = 'success',
LOADING = 'pending',
ERROR = 'error'

const initialState = {
  status: false,
  error: {}
}

export const authLogin = ({user, password}) => (dispatch)=>{
  dispatch({type: 'LOGIN_REQUESTED'})
  fetch('/api/auth/login',{
    method: 'POST',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({user, password}) 
}).then(async (res) => {
    const response = await res.json();

    if(!res.ok){
        dispatch({type: 'LOGIN_FAILED', data: response})
    }else{
        dispatch({type: 'LOGIN_SUCCESS', data: response})
        window.localStorage.setItem("token",response.bearer_token)
    }
})
}

const auth =(state= initialState, action) => {

  switch(action.type){

    case 'LOGIN_REQUESTED':
      return {
        status: LOADING,
        error: action.data
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



const composedEnchancer = composeWithDevTools(applyMiddleware(thunk))

export const store = createStore(auth, composedEnchancer);
