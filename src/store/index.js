import { applyMiddleware, createStore } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const SUCCESS = 'success'
const IDLE = 'idle',
LOADING = 'pending',
ERROR = 'error'



const initialState = {
  status: IDLE,
  error : {},
}
export const loginActions = ({user,password}) => {
  
}
export const loginAction = ({user,password},dispatch) => { 
  
  fetch('/api/auth/login',{
    method: 'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({user, password}) 
  }).then( async (res) => {
    
    const response = await res.json();
    dispatch({type: 'LOGIN_REQUESTED', data: response})
    if(!res.ok){
      //  debugger
      dispatch({type: 'LOGIN_FAILED', data: response})
      
    }else{
      
      dispatch({type: 'LOGIN_SUCEEDED',data: response})
      window.localStorage.setItem("token",response.bearer_token)

    }
  })  
}


export default function Auth(state = initialState, action){
  
  
  switch(action.type){
    case 'LOGIN_REQUESTED':
      return {
        state:{
          status: LOADING,
          error: {}
        }  
      }
    case 'LOGIN_SUCEEDED':
      return {
        state :{
          status: SUCCESS,
          error: {}
        }
      }
    case 'LOGIN_FAILED':
      
      return {
        state :{
          status: ERROR,
          error: action.data
        }
        
      }
    default:
      return {
        state,        
      }

  }
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))


export const store = createStore(Auth, composedEnhancer);
// export const store = configureStore({
//   reducer: {},
// });
