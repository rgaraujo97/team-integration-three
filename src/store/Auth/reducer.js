import * as Types from './actionsType';

const initialState = {
    user: {},
    isLoading:true,
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case Types.LOADING_REQUEST:
            return {
                ...state,
                isLoading: true
            }
            
         case Types.LOADING_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                isLoading: false
            }
         case Types.LOADING_FAILD:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}
    