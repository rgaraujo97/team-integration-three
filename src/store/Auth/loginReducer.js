const initialState = {
    status: false,
    error: {}
  }

  const SUCCESS = 'success',
LOADING = 'pending',
ERROR = 'error'

export const auth =(state= initialState, action) => {

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